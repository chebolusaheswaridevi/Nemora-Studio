'use client';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

/**
 * Shown under a scripted-demo reply that couldn't match a canned answer.
 * "Book a call" always works (real Cal.com scheduling link); the WhatsApp
 * button only renders once a real business number is set in
 * NEXT_PUBLIC_WHATSAPP_NUMBER — no fictional number is fabricated here.
 */
export default function EscalationActions() {
  return (
    <div className="escalate-cta">
      {WHATSAPP_NUMBER && (
        <a
          className="escalate-btn whatsapp"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
      )}
      <a
        className="escalate-btn call"
        href="https://cal.com/nemora-studio/discovery-call"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a call
      </a>
    </div>
  );
}
