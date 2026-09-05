import type { ScenarioKey } from './scenarios';

export interface ScriptedQA {
  /** Canonical starter question — matched exactly when a user clicks the scenario chip. */
  question: string;
  /** Lowercase keywords/phrases — matched with .includes() against free-typed input. */
  match: string[];
  answer: string;
}

/**
 * Hand-written answer bank replacing the live-LLM demo. Each entry mirrors a
 * "starter" question from scenarios.ts, written in the same voice/business
 * facts the system prompts used to describe. Free-typed input that doesn't
 * match anything here falls through to an escalation message (see
 * findScriptedReply) instead of a guess — no live model call, so nothing to
 * hallucinate.
 */
export const SCRIPTED_REPLIES: Record<ScenarioKey, ScriptedQA[]> = {
  clinic: [
    {
      question: 'Hi, I need to reschedule my appointment from Monday to sometime this week.',
      match: ['reschedul', 'change my appointment', 'move my appointment', 'another day', 'different day', 'different time'],
      answer:
        "Of course! I can see your appointment with Dr. Ramesh on Monday. We have open slots this week — Wednesday 11 AM or Friday 2 PM. Let me know which one works and I'll move it right away, along with a fresh reminder 24 hours before your visit.",
    },
    {
      question: 'What are the instructions before my surgery tomorrow?',
      match: ['instruction', 'before my surgery', 'pre-op', 'preop', 'prep', 'surgery tomorrow'],
      answer:
        "Here's what to do before tomorrow's procedure:\n\n• No food or water after 10 PM tonight\n• Wear loose, comfortable clothing\n• Bring a valid photo ID and your insurance card\n• Arrange for someone to drive you home afterward\n\nPlease arrive 30 minutes early for check-in. If you have allergies or are on blood thinners, call the clinic directly at +91 44 2222 3333 before your visit.",
    },
    {
      question: 'Do you accept Star Health Insurance?',
      match: ['insurance', 'star health', 'cashless', 'covered', 'accept'],
      answer:
        "Yes! Orthocare Clinic accepts Star Health Insurance, and most procedures are cashless — we handle the pre-authorisation directly with the insurer so you don't have to. Just bring your policy card and a photo ID on the day of your visit, and our front desk takes care of the rest.",
    },
  ],
  coach: [
    {
      question: 'How much does the 3-month coaching programme cost?',
      match: ['cost', 'price', 'pricing', 'how much', 'fee', 'emi'],
      answer:
        "The 3-month Business Transformation Programme is ₹45,000 — that includes 12 weekly 1:1 sessions, WhatsApp support between calls, the full resource vault, and regular accountability check-ins. If it's easier, we also offer a 3-month EMI at ₹16,000/month. Want me to check available start dates this week?",
    },
    {
      question: 'What is your coaching approach?',
      match: ['approach', 'methodology', 'how does it work', 'clear framework', 'process'],
      answer:
        "Subha's coaching runs on the C.L.E.A.R. framework — Clarity, Leverage, Execution, Accountability, Results. Instead of generic advice, each session builds on the last: you leave with one clear action, not a list of twenty. Most clients see their first tangible shift within the first three weeks.",
    },
    {
      question: 'I want to book a discovery call.',
      match: ['book', 'discovery call', 'schedule a call', 'free call'],
      answer:
        "Love that! Subha has a few discovery call slots open this week — Tuesday 4 PM, Thursday 11 AM, or Friday 3 PM (30 minutes, free, no pitch). Reply with the one that works and I'll lock it in and send a calendar invite.",
    },
  ],
  ecom: [
    {
      question: 'Where is my order #4471?',
      match: ['where is my order', 'track', 'order #', 'order number', 'shipment', 'delivery'],
      answer:
        "Let me check that for you — order #4471 was picked up by our courier partner 2 days ago and is currently out for delivery in your area 🚚. You should have it by end of day tomorrow. I'll send the live tracking link over WhatsApp so you can follow along.",
    },
    {
      question: 'I received the wrong product. I want to return it.',
      match: ['wrong product', 'wrong variant', 'return', 'exchange', 'wrong item'],
      answer:
        "So sorry about that! 🌿 We'll arrange a free pick-up within 48 hours — no restocking fee. Once our courier collects the wrong item, we'll ship the correct one out the same day (or refund you immediately, whichever you prefer). Can you confirm the order number and the product you actually ordered?",
    },
  ],
  service: [
    {
      question: 'What are your interior design packages for a 2BHK?',
      match: ['package', 'pricing', '2bhk', 'cost', 'how much'],
      answer:
        "For a 2BHK, we have three tiers:\n\n• Essential — ₹1.8L (floorplan, material selection, 2D renders)\n• Signature — ₹3.2L (+ 3D visualisations, site supervision) — our most popular\n• Bespoke — ₹5L+ (full turnkey, custom furniture, scoped after a site visit)\n\nWant me to book a free site visit so we can recommend the right tier for your space?",
    },
    {
      question: 'Can I see your previous projects?',
      match: ['previous project', 'portfolio', 'past work', 'examples'],
      answer:
        "Absolutely — we've completed similar 2BHK and 3BHK projects across Nungambakkam, Anna Nagar, and Velachery, ranging from ₹2L–₹4L. Share your email and I'll send over the full portfolio deck with photos and budgets for each.",
    },
  ],
};

const ESCALATION_TEXT: Record<'chat' | 'gpt' | 'whatsapp' | 'email' | 'voice', string> = {
  chat: "That's a great question — I don't want to guess and get it wrong. Let's get you a real answer from our team:",
  gpt: "Good question — that's outside what I'm trained to answer precisely. Let's get you a real answer from the team:",
  whatsapp: 'Good question! Let me connect you with our team so you get the exact answer 👇',
  email:
    'Thank you for your message. To make sure you receive complete and accurate information, I have flagged this for our team to follow up with you directly. In the meantime, you can also reach us here:',
  voice:
    "That's a great question, and I'd rather connect you with a real person than guess. You can reach our team on WhatsApp or book a call — I've also shown both options on screen.",
};

export interface ScriptedResult {
  text: string;
  escalate: boolean;
}

/** Looks up a scripted answer for free-typed or clicked input; falls back to an escalation message instead of guessing. */
export function findScriptedReply(
  scenario: ScenarioKey,
  userText: string,
  channel: 'chat' | 'gpt' | 'whatsapp' | 'email' | 'voice',
): ScriptedResult {
  const bank = SCRIPTED_REPLIES[scenario];
  const norm = userText.trim().toLowerCase();

  const exact = bank.find((qa) => qa.question.toLowerCase() === norm);
  if (exact) return { text: exact.answer, escalate: false };

  const fuzzy = bank.find((qa) => qa.match.some((k) => norm.includes(k)));
  if (fuzzy) return { text: fuzzy.answer, escalate: false };

  return { text: ESCALATION_TEXT[channel], escalate: true };
}
