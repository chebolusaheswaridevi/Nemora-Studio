import { NextResponse } from 'next/server';
import type Stripe from 'stripe';
import { getStripe, PLAN_PRICING } from '@/lib/stripe';
import { checkoutRequestSchema } from '@/lib/schemas';
import { checkRateLimit, getClientIp } from '@/lib/ratelimit';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

const PLAN_INTERVAL: Record<'monthly' | 'annual', Stripe.PriceCreateParams.Recurring.Interval> = {
  monthly: 'month',
  annual: 'year',
};

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const { success } = await checkRateLimit(`checkout:${ip}`);
  if (!success) return NextResponse.json({ error: 'Too many requests.' }, { status: 429 });

  const body = await req.json().catch(() => null);
  const parsed = checkoutRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input', details: parsed.error.flatten() }, { status: 400 });
  }
  const { plan, billing, email } = parsed.data;

  let stripe;
  try {
    stripe = getStripe();
  } catch {
    return NextResponse.json({ error: 'Billing is not configured on this deployment.' }, { status: 503 });
  }

  const pricing = PLAN_PRICING[plan];
  const amount = billing === 'annual' ? pricing.annual : pricing.monthly;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

  try {
    // One Checkout Session per plan/billing-interval combination, built from
    // inline price_data rather than pre-created Stripe Price objects — this
    // keeps the pricing table in one place (lib/stripe.ts) and needs no seed
    // step to stay in sync with the reference pricing copy.
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: { name: `${pricing.name} (${billing === 'annual' ? 'Annual' : 'Monthly'})` },
            unit_amount: amount,
            recurring: { interval: PLAN_INTERVAL[billing] },
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/contact?checkout=success&plan=${plan}`,
      cancel_url: `${siteUrl}/pricing?checkout=cancelled`,
      metadata: { plan, billing },
    });

    try {
      await prisma.lead.create({
        data: {
          email: email ?? 'unknown@checkout.pending',
          plan,
          billing,
          source: 'PRICING_PLAN',
          stripeSessionId: session.id,
        },
      });
    } catch (err) {
      // Non-fatal: the Stripe session is already live, so let the user
      // continue to checkout even if the database isn't configured — we
      // just won't have a Lead row to reconcile against in the webhook.
      console.error('[api/stripe/checkout] lead record failed', err);
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[api/stripe/checkout]', err);
    return NextResponse.json({ error: 'Could not start checkout. Please try again shortly.' }, { status: 502 });
  }
}
