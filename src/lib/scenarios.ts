export type ScenarioKey = 'clinic' | 'coach' | 'ecom' | 'service';

export interface ScenarioDef {
  key: ScenarioKey;
  label: string;
  business: string;
  starters: string[];
}

// Reuses the persona/business details from the reference nemora-demo.html
// mockup (Orthocare Clinic, Subha Priya coaching, Velvet Roots Botanicals,
// Studio Hues). Each starter has a matching hand-written answer in
// src/lib/scriptedReplies.ts — see README "Live Demo" for why these are
// scripted rather than backed by a live LLM.
export const SCENARIOS: Record<ScenarioKey, ScenarioDef> = {
  clinic: {
    key: 'clinic',
    label: 'Clinic — Orthocare Clinic',
    business: 'Orthocare Clinic',
    starters: [
      'Hi, I need to reschedule my appointment from Monday to sometime this week.',
      'What are the instructions before my surgery tomorrow?',
      'Do you accept Star Health Insurance?',
    ],
  },
  coach: {
    key: 'coach',
    label: 'Coach — Subha Priya Coaching',
    business: 'Subha Priya Coaching',
    starters: [
      'How much does the 3-month coaching programme cost?',
      'What is your coaching approach?',
      'I want to book a discovery call.',
    ],
  },
  ecom: {
    key: 'ecom',
    label: 'E-commerce — Velvet Roots Botanicals',
    business: 'Velvet Roots Botanicals',
    starters: [
      'Where is my order #4471?',
      'I received the wrong product. I want to return it.',
    ],
  },
  service: {
    key: 'service',
    label: 'Service Biz — Studio Hues Interiors',
    business: 'Studio Hues Interiors',
    starters: [
      'What are your interior design packages for a 2BHK?',
      'Can I see your previous projects?',
    ],
  },
};

export const SCENARIO_KEYS = Object.keys(SCENARIOS) as ScenarioKey[];
