import Stripe from 'stripe';

let client: Stripe | null = null;

export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not configured.');
  }
  if (!client) {
    client = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2025-02-24.acacia' });
  }
  return client;
}

// INR amounts in paise. Mirrors the reference nemora-pricing.html exactly —
// keep in sync if pricing copy ever changes there.
export const PLAN_PRICING = {
  spark: { name: 'Nemora Spark', monthly: 299900, annual: 224900 },
  pulse: { name: 'Nemora Pulse', monthly: 799900, annual: 599900 },
  apex: { name: 'Nemora Apex', monthly: 1899900, annual: 1424900 },
} as const;

export type PlanKey = keyof typeof PLAN_PRICING;
