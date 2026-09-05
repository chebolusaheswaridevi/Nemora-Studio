import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FROM = process.env.EMAIL_FROM ?? 'Nemora <onboarding@resend.dev>';
const TEAM_INBOX = process.env.TEAM_NOTIFICATION_EMAIL ?? 'nemorastudios@gmail.com';

interface SendArgs {
  to: string;
  subject: string;
  html: string;
}

/**
 * Sends via Resend when RESEND_API_KEY is configured; otherwise logs to the
 * server console so local dev / demos still work without email credentials.
 */
async function send({ to, subject, html }: SendArgs) {
  if (!resend) {
    console.log(`[email:dev-mode] to=${to} subject="${subject}"\n${html}`);
    return;
  }
  try {
    await resend.emails.send({ from: FROM, to, subject, html });
  } catch (err) {
    console.error('[email] send failed', err);
  }
}

export async function notifyTeamOfLead(lead: { name?: string | null; email: string; business?: string | null; message?: string | null; plan?: string | null }) {
  await send({
    to: TEAM_INBOX,
    subject: `New lead: ${lead.name ?? lead.email}${lead.business ? ` (${lead.business})` : ''}`,
    html: `
      <h2>New lead from nemora website</h2>
      <p><strong>Name:</strong> ${lead.name ?? '—'}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Business:</strong> ${lead.business ?? '—'}</p>
      <p><strong>Plan:</strong> ${lead.plan ?? '—'}</p>
      <p><strong>Message:</strong> ${lead.message ?? '—'}</p>
    `,
  });
}

export async function confirmLeadToSubmitter(email: string, name?: string | null) {
  await send({
    to: email,
    subject: 'Thanks for reaching out to Nemora',
    html: `
      <p>Hi ${name ?? 'there'},</p>
      <p>Thanks for your interest in Nemora — we've received your details and someone from our team will be in touch shortly.</p>
      <p>— The Nemora team</p>
    `,
  });
}

export async function notifyTeamOfTestimonial(t: { name: string; business: string; result?: string | null }) {
  await send({
    to: TEAM_INBOX,
    subject: `New testimonial submitted: ${t.name} (${t.business})`,
    html: `
      <h2>New customer story submitted</h2>
      <p><strong>Name:</strong> ${t.name}</p>
      <p><strong>Business:</strong> ${t.business}</p>
      <p><strong>Result:</strong> ${t.result ?? '—'}</p>
      <p>Review it in the admin testimonials queue before it goes live.</p>
    `,
  });
}
