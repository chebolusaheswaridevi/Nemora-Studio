# Nemora — Marketing Site & Live Demo Platform

Next.js 14 (App Router, TypeScript) rebuild of the Nemora reference mockups
(`nemora-v5.html`, `nemora-platform.html`, `nemora-about.html`,
`nemora-customers.html`, `nemora-demo.html`, `nemora-pricing.html`) plus a
new Contact page, wired to a real Postgres database, Stripe billing, and a
zero-cost scripted Live Demo (chat + voice + WhatsApp/email panels) that
escalates to a real "Book a call" / WhatsApp CTA whenever a visitor asks
something outside the script.

## Quick start

```bash
npm install
cp .env.example .env      # fill in the values you have — see below
npx prisma db push        # creates tables in your Postgres database
npm run dev
```

The site runs at `http://localhost:3000` with **no environment variables set** —
every page renders and every form gracefully reports "not configured" instead
of crashing. Fill in `.env` incrementally to light up each integration.

## Environment variables

See `.env.example` for the full list with inline comments. Summary:

| Variable | Required for | Notes |
|---|---|---|
| `DATABASE_URL` | Lead/testimonial storage, Stripe records | Postgres connection string (Neon) |
| `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` | Pricing page checkout | Use Stripe **test mode** keys |
| `RESEND_API_KEY` | Email notifications | Without it, emails are logged to the server console instead |
| `UPSTASH_REDIS_REST_URL` / `_TOKEN` | Distributed rate limiting | Without it, an in-memory limiter is used (fine for local dev only) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Live Demo escalation CTA | Optional — adds a "Chat on WhatsApp" button; "Book a call" always works |
| `ENABLE_WHATSAPP_SEND` / `ENABLE_EMAIL_SEND` | — | Kept `false`; see "What's stubbed" below |

The Live Demo itself needs **no API key at all** — see "Live Demo" below.

## Architecture

- **Framework**: Next.js 14 App Router, TypeScript, `next/font` for Inter + JetBrains Mono.
- **Styling**: Design tokens (colors, radii, easing curves) live as CSS custom
  properties in `src/app/globals.css` and are mirrored into `tailwind.config.ts`.
  Because the reference mockups define 40+ page-specific `@keyframes` and a
  large amount of pixel-tuned CSS, each route's page-specific styles are
  ported **verbatim** from the reference `<style>` blocks into a scoped
  stylesheet (`src/app/<route>/<route>.scoped.css`, wrapped under a
  `.page-<route>` class) rather than hand-translated into Tailwind utilities.
  This was the deliberate fidelity/effort tradeoff for this rebuild: Tailwind
  utilities for structure and new pages (Contact), raw scoped CSS for the
  ported visual system. Shared chrome (nav, footer, modal, reveal system,
  ~15 keyframes used across multiple pages) lives once in `globals.css`.
- **Animation**: the reference mockups' hand-authored CSS keyframes are kept
  as CSS (not reimplemented in Framer Motion) since they're already tuned to
  the exact timing/easing of the source files. Framer Motion is available as
  a dependency for any new interaction work; it wasn't needed to match the
  reference 1:1. The shared `useReveal()` hook (`src/lib/useReveal.ts`) ports
  the mockups' `IntersectionObserver` scroll-reveal system as a reusable hook.
- **Database**: PostgreSQL via Prisma. **Neon** was chosen over Supabase
  purely because this project only needs a plain Postgres connection string —
  no need for Supabase's auth/storage/realtime layer, so the simpler
  serverless-Postgres provider was the smaller surface area.
- **Email**: Resend, with a console-log fallback when `RESEND_API_KEY` is unset.
- **Validation**: Zod schemas in `src/lib/schemas.ts`, shared by the API routes
  (client-side forms do a light check before submitting, but the API route is
  the source of truth).
- **Rate limiting**: `src/lib/ratelimit.ts` — Upstash `Ratelimit` when
  `UPSTASH_REDIS_REST_URL`/`_TOKEN` are set, otherwise an in-process
  sliding-window fallback. Applied to every public POST route.
- **Billing**: Stripe Checkout Sessions built from inline `price_data` (see
  `src/lib/stripe.ts` for the INR pricing table, kept in sync with the
  Pricing page copy) rather than pre-created Stripe Price objects — this
  avoids needing a seed step to keep Stripe in sync with the pricing table.
  A webhook (`src/app/api/stripe/webhook/route.ts`) records the resulting
  subscription against the `Lead` row created at checkout time.

## Live Demo: scripted answers, not a live LLM

The Live Demo originally called a live LLM (first OpenAI, briefly evaluated
against Groq/NVIDIA NIM as free alternatives). It was deliberately replaced
with a **scripted answer bank + escalation** model instead, because a public
marketing demo that depends on a paid, rate-limited third party breaks in
front of visitors the moment a key runs out of quota — which is exactly what
happened during this build. The tradeoff: the demo can't answer a genuinely
novel question, but it never shows an API error, needs no key, and costs
nothing to run.

- **Answer bank**: `src/lib/scriptedReplies.ts` — one hand-written, on-brand
  answer per starter question for each of the four industry personas
  (Orthocare Clinic, Subha Priya Coaching, Velvet Roots Botanicals, Studio
  Hues), matched either exactly (clicking a "SCENARIO" chip) or by keyword
  (free-typed input).
- **Escalation**: anything that doesn't match returns a channel-appropriate
  "let's get you a real answer" message plus a `<EscalationActions />`
  button row — "Book a call" (links to the real `/contact` page, always
  present) and "Chat on WhatsApp" (only rendered once a real number is set
  in `NEXT_PUBLIC_WHATSAPP_NUMBER` — no fictional number is fabricated).
- **Chat / Custom GPT / WhatsApp / Email panels** all route through
  `src/lib/chatClient.ts`'s `streamChat()`, which now resolves locally
  (scripted lookup + a simulated typewriter reveal) instead of calling a
  server API — so all four panels picked up scripting and escalation with
  no per-panel logic beyond rendering the `escalate` flag.
- **Voice panel** runs entirely client-side, no server round trip:
  - *Listening waveform*: real mic amplitude via a Web Audio `AnalyserNode`
    (unchanged from the original build).
  - *Speech-to-text*: the browser's native `SpeechRecognition` API (Chrome/
    Edge; Safari/Firefox support varies — the panel shows a clear message
    and points to the Chat tab when it's unavailable).
  - *Text-to-speech*: the browser's native `speechSynthesis` API. Its audio
    isn't exposed to the Web Audio API, so the waveform during playback is a
    **simulated** animation rather than real amplitude data — called out
    explicitly since the listening waveform above is genuinely live.

The now-unused live-LLM plumbing (`/api/chat`, `/api/voice/transcribe`,
`/api/voice/speak`, `src/lib/openai.ts`, the `openai` npm dependency) was
removed rather than left as dead code.

## What's real vs. stubbed

**Fully live** (once the relevant env vars are set):
- Lead capture (homepage hero, Contact page, Pricing plan CTAs) → validated,
  rate-limited, written to Postgres, triggers team + submitter emails.
- Testimonial submissions (homepage + Customers page "Share your story")
  → same pipeline, stored with `status: pending` for moderation.
- Pricing → Stripe Checkout (test mode) → webhook records the subscription.
- Live Demo Chat, Custom GPT, WhatsApp, and Email panels: real interactive
  logic (typing, matching, streaming reveal, escalation) — see "Live Demo:
  scripted answers, not a live LLM" above for why the answers themselves are
  a curated bank rather than a live model.
- Live Demo Voice panel: real mic capture, real browser speech recognition,
  and real browser text-to-speech — same scripted answer bank as the other
  panels.

**Intentionally stubbed** (per the build brief — no fake integrations with
fake credentials):
- WhatsApp actual message delivery: gated behind `ENABLE_WHATSAPP_SEND`
  (`false` by default). The integration point is commented in
  `src/components/demo/WhatsappPanel.tsx` — a production build would call
  Twilio's WhatsApp Business API there.
- Email actual delivery from the demo's "Send reply" button: gated behind
  `ENABLE_EMAIL_SEND` (`false` by default) in
  `src/components/demo/EmailPanel.tsx` — a production build would call the
  Gmail API there. (This is separate from the *lead-notification* emails via
  Resend, which are fully live.)
- Testimonial moderation UI: submissions land in the DB with `status:
  pending`; there's no admin approve/reject screen in this build — approve
  by updating the row directly (`status: 'approved'`) until one exists.

## Gaps resolved with a documented smallest-reasonable-decision

- **Nav structure**: the reference mockups' navs are inconsistent across
  pages (some have a mega-dropdown, some a flat link list, item sets differ).
  The shared `Nav` component (`src/components/Nav.tsx`) uses the richest
  version found (the homepage's "Product" mega-dropdown with Channels +
  Platform Capabilities) plus flat links for the other five routes. The
  footer's four columns (Product / Industries / Resources / Company) are
  ported verbatim from the homepage reference and reused everywhere.
- **Footer legal links** (Privacy/Terms/Security/Cookies) point to `#` —
  those pages aren't in the 7-route site map from the build brief, so no
  content exists to link to.
- **Home page's canvas neural-mesh hero effect** was intentionally *not*
  ported: the reference CSS sets `#hero-canvas { display: none }` on the
  live "photo hero" version — the canvas animation is dead code in the
  source file, so it's correctly absent here too.
- **Contact page** (not in the reference set) was designed fresh, matching
  the existing dark design system exactly: name / work email / business /
  industry / channel-of-interest / message, plus a direct "Contact Sales"
  mailto path.

## Project structure

```
src/
  app/
    layout.tsx, globals.css        — shared chrome, design tokens, reset
    page.tsx, home.scoped.css      — homepage
    platform/, about/, customers/, demo/, pricing/, contact/
    api/
      leads/, testimonials/        — Zod-validated, rate-limited CRUD
      stripe/checkout, stripe/webhook
  components/
    Nav.tsx, Footer.tsx, TestimonialModal.tsx, Counter.tsx, ...
    demo/                          — Live Demo panels, shared state hook, EscalationActions
  lib/
    prisma.ts, ratelimit.ts, email.ts, schemas.ts, stripe.ts
    scenarios.ts                   — per-industry business personas/starter questions
    scriptedReplies.ts             — the Live Demo's answer bank + escalation logic
    useReveal.ts, chatClient.ts    — chatClient now resolves scripted replies locally
prisma/schema.prisma
scripts/                           — one-off dev tooling used to port the
                                      reference HTML (see below), not needed
                                      at runtime
```

`scripts/extract-ref.js`, `scripts/html-to-jsx.js`, and `scripts/scope-css.js`
were used once during the build to mechanically pull the reference mockups'
CSS/markup into this codebase (avoiding hand-retyping thousands of lines of
pixel-tuned CSS) and are kept for reference/re-runs if the source mockups change.

## Testing

- `npx tsc --noEmit` — type-checks clean.
- Manual QA: every route renders with no console/network errors in dev;
  channel tabs, industry selector, scenario list, billing toggle, FAQ
  accordion, testimonial filters/modal, and all five Live Demo panels were
  clicked through in a live dev server.
- No automated test suite is included — out of scope for this build.
