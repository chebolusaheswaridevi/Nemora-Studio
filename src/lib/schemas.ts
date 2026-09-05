import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().trim().min(1).max(200).optional(),
  email: z.string().trim().email().max(320),
  business: z.string().trim().max(200).optional(),
  industry: z.string().trim().max(100).optional(),
  channel: z.string().trim().max(100).optional(),
  message: z.string().trim().max(4000).optional(),
  plan: z.string().trim().max(50).optional(),
  billing: z.enum(['monthly', 'annual']).optional(),
  source: z.enum(['HOMEPAGE_HERO', 'CONTACT_FORM', 'DEMO_PAGE', 'PRICING_PLAN']).default('CONTACT_FORM'),
});
export type LeadInput = z.infer<typeof leadSchema>;

export const testimonialSchema = z.object({
  name: z.string().trim().min(1).max(200),
  business: z.string().trim().min(1).max(200),
  category: z.enum(['clinic', 'coach', 'ecom', 'service']),
  rating: z.number().int().min(1).max(5).default(5),
  result: z.string().trim().max(300).optional(),
  story: z.string().trim().min(1).max(4000),
});
export type TestimonialInput = z.infer<typeof testimonialSchema>;

export const checkoutRequestSchema = z.object({
  plan: z.enum(['spark', 'pulse', 'apex']),
  billing: z.enum(['monthly', 'annual']),
  email: z.string().trim().email().max(320).optional(),
});
