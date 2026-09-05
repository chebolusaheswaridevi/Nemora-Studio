import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { leadSchema } from '@/lib/schemas';
import { checkRateLimit, getClientIp } from '@/lib/ratelimit';
import { confirmLeadToSubmitter, notifyTeamOfLead } from '@/lib/email';

const SOURCE_MAP: Record<string, 'HOMEPAGE_HERO' | 'CONTACT_FORM' | 'DEMO_PAGE' | 'PRICING_PLAN'> = {
  'homepage-hero': 'HOMEPAGE_HERO',
  'contact-form': 'CONTACT_FORM',
  'demo-page': 'DEMO_PAGE',
  'pricing-plan': 'PRICING_PLAN',
};

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const { success } = await checkRateLimit(`leads:${ip}`);
  if (!success) {
    return NextResponse.json({ error: 'Too many requests. Please try again in a minute.' }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });

  // Accept the client's friendly source string, map to the Prisma enum.
  const rawSource = typeof body.source === 'string' ? body.source : undefined;
  const parsed = leadSchema.safeParse({
    ...body,
    source: SOURCE_MAP[rawSource ?? ''] ?? body.source ?? 'CONTACT_FORM',
  });
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input', details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const lead = await prisma.lead.create({ data: parsed.data });
    await Promise.all([notifyTeamOfLead(lead), confirmLeadToSubmitter(lead.email, lead.name)]);
    return NextResponse.json({ id: lead.id }, { status: 201 });
  } catch (err) {
    console.error('[api/leads]', err);
    return NextResponse.json(
      { error: 'Could not save your details right now — the database is not configured on this deployment.' },
      { status: 503 },
    );
  }
}
