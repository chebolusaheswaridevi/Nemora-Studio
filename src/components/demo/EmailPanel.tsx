'use client';

import { useEffect, useState } from 'react';
import { streamChat } from '@/lib/chatClient';
import EscalationActions from './EscalationActions';
import type { ScenarioKey } from '@/lib/scenarios';
import type { DemoState } from './useDemoState';

interface Props {
  demo: DemoState;
  active: boolean;
}

// Fixed multi-scenario inbox — these three senders (and their scenario) don't
// change with the industry selector, so each carries its own scenario for
// looking up a scripted reply rather than using the globally-selected one.
const EMAILS: { initials: string; gradient: string; sender: string; time: string; subject: string; preview: string; body: string; badge: { label: string; cls: string }; resolved: boolean; scenario: ScenarioKey }[] = [
  {
    initials: 'DR',
    gradient: 'linear-gradient(135deg,#6E56FF,#a78bfa)',
    sender: 'Dr. Ramesh Iyer',
    time: '9:41 AM',
    subject: 'Patient prep instructions — urgent',
    preview: "Hi, could you please resend the pre-op instructions for Mrs. Kavitha...",
    body: "Hi, could you please resend the pre-op instructions for Mrs. Kavitha Suresh? She's coming in tomorrow morning and seems to have misplaced the document we sent earlier.",
    badge: { label: '⚡ AI drafted reply', cls: 'ai' },
    resolved: false,
    scenario: 'clinic',
  },
  {
    initials: 'SP',
    gradient: 'linear-gradient(135deg,#FF5C35,#f59e0b)',
    sender: 'Subha Priya',
    time: '8:15 AM',
    subject: 'Re: Programme pricing enquiry',
    preview: 'Thank you for reaching out! I wanted to ask about the 3-month coaching...',
    body: 'Thank you for reaching out! I wanted to ask about the 3-month coaching programme pricing and whether there are any payment plans available.',
    badge: { label: '✓ Resolved by AI', cls: 'resolved' },
    resolved: true,
    scenario: 'coach',
  },
  {
    initials: 'MK',
    gradient: 'linear-gradient(135deg,#10B981,#34d399)',
    sender: 'Meena Krishnan',
    time: 'Yesterday',
    subject: 'Order #4471 — return request',
    preview: 'I received the wrong variant of the face serum. Ordered the niacinamide...',
    body: 'I received the wrong variant of the face serum. Ordered the niacinamide version but got the Vitamin C one. Please process a return and send the correct item.',
    badge: { label: '⏳ Pending review', cls: 'pending' },
    resolved: false,
    scenario: 'ecom',
  },
];

export default function EmailPanel({ demo, active }: Props) {
  const [selected, setSelected] = useState(0);
  const [drafts, setDrafts] = useState<Record<number, string>>({});
  const [escalated, setEscalated] = useState<Record<number, boolean>>({});
  const [loadingDraft, setLoadingDraft] = useState(false);
  const [sent, setSent] = useState<Record<number, boolean>>({});

  async function loadDraft(idx: number, force = false) {
    if ((drafts[idx] && !force) || EMAILS[idx].resolved) return;
    setLoadingDraft(true);
    const { text, ms, error, escalate } = await streamChat({
      messages: [{ role: 'user', content: EMAILS[idx].body }],
      scenario: EMAILS[idx].scenario,
      channel: 'email',
      onDelta: (_c, soFar) => setDrafts((d) => ({ ...d, [idx]: soFar })),
    });
    if (!error) demo.recordResponse(ms);
    setDrafts((d) => ({ ...d, [idx]: text || (error ? `⚠️ ${error}` : d[idx] ?? '') }));
    setEscalated((e) => ({ ...e, [idx]: Boolean(escalate) }));
    setLoadingDraft(false);
  }

  useEffect(() => {
    if (active) loadDraft(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, selected]);

  const email = EMAILS[selected];

  return (
    <div id="panel-email" role="tabpanel" aria-label="Email demo" style={{ display: active ? undefined : 'none' }}>
      <div className="stage-topbar">
        <div className="stage-dots" aria-hidden="true">
          <div className="stage-dot stage-dot-r" />
          <div className="stage-dot stage-dot-y" />
          <div className="stage-dot stage-dot-g" />
        </div>
        <div
          className="stage-channel-badge"
          style={{ background: 'rgba(245,158,11,0.12)', borderColor: 'rgba(245,158,11,0.25)', color: 'rgba(255,220,100,0.9)' }}
        >
          <div className="badge-dot" style={{ background: 'var(--amber)' }} />
          nemora · email
        </div>
        <div className="stage-status" aria-label="Agent online">
          ONLINE
        </div>
      </div>
      <div className="email-panel">
        <div className="email-topbar">
          <button className="email-folder-btn active">Inbox</button>
          <button className="email-folder-btn">AI Resolved</button>
          <button className="email-folder-btn">Drafts</button>
        </div>
        <div className="email-list" role="list" aria-label="Email inbox">
          {EMAILS.map((e, i) => (
            <div
              className={`email-item ${i === selected ? 'selected' : 'unread'}`}
              role="listitem"
              key={i}
              onClick={() => setSelected(i)}
              style={{ cursor: 'pointer' }}
            >
              <div className="email-avatar-sm" style={{ background: e.gradient }}>
                {e.initials}
              </div>
              <div className="email-item-body">
                <div className="email-item-header">
                  <span className="email-sender">{e.sender}</span>
                  <span className="email-time">{e.time}</span>
                </div>
                <div className="email-subject">{e.subject}</div>
                <div className="email-preview">{e.preview}</div>
                <div className="email-badges">
                  <span className={`email-badge ${e.badge.cls}`}>{e.badge.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="email-detail visible" id="email-detail">
          <div className="email-detail-header">
            <div>
              <div className="email-detail-subject">{email.subject}</div>
              <div className="email-detail-meta">
                {email.sender} · {email.time}
              </div>
            </div>
          </div>
          <div style={{ fontSize: 13.5, color: 'var(--text-3)', lineHeight: 1.7, marginBottom: 12 }}>{email.body}</div>
          <div className="ai-draft-box">
            <div className="ai-draft-label">{email.resolved ? 'AI Resolution Summary' : 'Nemora AI — Draft reply'}</div>
            <div className="ai-draft-text" style={{ whiteSpace: 'pre-line' }}>
              {email.resolved
                ? 'This thread was resolved automatically by Nemora AI — the enquiry was answered in full and the lead was offered a follow-up.'
                : drafts[selected] || (loadingDraft ? 'Drafting reply…' : '')}
            </div>
            {!email.resolved && escalated[selected] && <EscalationActions />}
          </div>
          {!email.resolved && (
            <div className="email-action-row">
              <button
                className="email-action-btn primary"
                style={sent[selected] ? { background: 'var(--emerald)' } : undefined}
                onClick={() => setSent((s) => ({ ...s, [selected]: true }))}
              >
                {sent[selected] ? 'Sent ✓' : 'Send reply'}
              </button>
              <button
                className="email-action-btn ghost"
                onClick={() => {
                  setDrafts((d) => ({ ...d, [selected]: '' }));
                  loadDraft(selected, true);
                }}
              >
                Regenerate draft
              </button>
              <button className="email-action-btn ghost">Dismiss</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
