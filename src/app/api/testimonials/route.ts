import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { testimonialSchema } from '@/lib/schemas';
import { checkRateLimit, getClientIp } from '@/lib/ratelimit';
import { notifyTeamOfTestimonial } from '@/lib/email';

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const { success } = await checkRateLimit(`testimonials:${ip}`);
  if (!success) {
    return NextResponse.json({ error: 'Too many requests. Please try again in a minute.' }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });

  const parsed = testimonialSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input', details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const testimonial = await prisma.testimonial.create({
      data: { ...parsed.data, status: 'pending' },
    });
    await notifyTeamOfTestimonial(testimonial);
    return NextResponse.json({ id: testimonial.id }, { status: 201 });
  } catch (err) {
    console.error('[api/testimonials POST]', err);
    return NextResponse.json(
      { error: 'Could not save your story right now — the database is not configured on this deployment.' },
      { status: 503 },
    );
  }
}

// GET /api/testimonials?status=approved — used by the customers page (and
// admin tooling) to list testimonials; defaults to only approved stories so
// pending submissions are never shown publicly until moderated.
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const status = searchParams.get('status') === 'all' ? undefined : (searchParams.get('status') ?? 'approved');

  try {
    const testimonials = await prisma.testimonial.findMany({
      where: status ? { status: status as 'pending' | 'approved' | 'rejected' } : undefined,
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    return NextResponse.json({ testimonials });
  } catch (err) {
    console.error('[api/testimonials GET]', err);
    return NextResponse.json({ error: 'Database is not configured on this deployment.', testimonials: [] }, { status: 503 });
  }
}
