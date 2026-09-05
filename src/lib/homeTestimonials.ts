// Verbatim from the reference nemora-v5.html "Customers" flashcard section.
export interface HomeTestimonial {
  category: 'clinic' | 'coach' | 'ecom' | 'service';
  tag: string;
  quote: string;
  avatarGradient: string;
  initials: string;
  author: string;
  role: string;
  result: string;
  highlighted?: boolean;
}

export const HOME_TESTIMONIALS: HomeTestimonial[] = [
  {
    category: 'clinic',
    tag: '🏥 Clinic',
    quote:
      'We used to miss at least 5–6 appointment queries every week just because staff were busy. Nemora’s WhatsApp bot handles everything now — patients get instant replies, and our front desk can actually focus on in-person care.',
    avatarGradient: 'linear-gradient(135deg,#6E56FF,#a78bfa)',
    initials: 'DR',
    author: 'Dr. Ramesh Iyer',
    role: 'Orthocare Clinic, Anna Nagar',
    result: 'Zero missed queries in 3 months',
    highlighted: true,
  },
  {
    category: 'coach',
    tag: '🎯 Coach',
    quote:
      'My Custom GPT answers all the pre-sale questions about my programmes. I wake up to sign-ups that happened at 2 AM. It’s like having a salesperson who never sleeps.',
    avatarGradient: 'linear-gradient(135deg,#FF5C35,#f59e0b)',
    initials: 'SP',
    author: 'Subha Priya',
    role: 'Business Coach, Chennai',
    result: '2× programme sign-ups in 6 weeks',
  },
  {
    category: 'ecom',
    tag: '🛒 E-commerce',
    quote:
      'Customer support was eating 3–4 hours of my day. Now the chatbot handles returns, tracking, and FAQs on its own. I check in once a day to approve anything unusual.',
    avatarGradient: 'linear-gradient(135deg,#10B981,#34d399)',
    initials: 'MK',
    author: 'Meena Krishnan',
    role: 'Velvet Roots Botanicals',
    result: '4 hrs/day back. Zero extra hires.',
  },
  {
    category: 'clinic',
    tag: '🏥 Clinic',
    quote:
      'Patients were calling at odd hours about prep instructions. Now the FAQ bot covers everything — diet restrictions, what to bring, cancellation policy. Patient satisfaction went up immediately.',
    avatarGradient: 'linear-gradient(135deg,#60a5fa,#3b82f6)',
    initials: 'NK',
    author: 'Dr. Nithya Kumar',
    role: 'Bloom Wellness Clinic, T. Nagar',
    result: 'Patient satisfaction up 34%',
  },
  {
    category: 'coach',
    tag: '🎯 Coach',
    quote:
      'The knowledge base Nemora built is extraordinary. Clients ask about my methodology, past case studies, payment options — it knows everything I know. I recommend Nemora to every solo coach I meet.',
    avatarGradient: 'linear-gradient(135deg,#f472b6,#ec4899)',
    initials: 'AV',
    author: 'Anandhi V.',
    role: 'Life & Career Coach',
    result: '40% fewer repetitive DMs',
  },
  {
    category: 'service',
    tag: '🛠 Service Biz',
    quote:
      'I was skeptical AI could understand our brand voice — but the Custom GPT Nemora built is indistinguishable from us. Clients don’t even realise they’re not talking to a person.',
    avatarGradient: 'linear-gradient(135deg,#a78bfa,#7c3aed)',
    initials: 'RS',
    author: 'Riya Sharma',
    role: 'Studio Hues, Nungambakkam',
    result: 'On-brand replies, 24/7',
  },
];
