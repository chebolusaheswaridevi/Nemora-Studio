'use client';

import { useEffect, useRef, useState } from 'react';
import { streamChat, getScriptedAnswer, type ChatMsg } from '@/lib/chatClient';
import { SCENARIOS } from '@/lib/scenarios';
import EscalationActions from './EscalationActions';
import type { DemoState } from './useDemoState';

interface Props {
  demo: DemoState;
  active: boolean;
}

function defaultThread(industry: DemoState['industry']): ChatMsg[] {
  const opener = SCENARIOS[industry].starters[0];
  const { text, escalate } = getScriptedAnswer(industry, opener, 'whatsapp');
  return [
    { role: 'user', content: opener },
    { role: 'assistant', content: text, escalate },
  ];
}

export default function WhatsappPanel({ demo, active }: Props) {
  const scenario = SCENARIOS[demo.industry];
  const [messages, setMessages] = useState<ChatMsg[]>(() => defaultThread(demo.industry));
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(defaultThread(demo.industry));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [demo.industry]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, busy]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    setBusy(true);
    const next: ChatMsg[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(next);
    setInput('');

    const { text: full, ms, error, escalate } = await streamChat({
      messages: next,
      scenario: demo.industry,
      channel: 'whatsapp',
      onDelta: () => {},
    });
    if (error) {
      setMessages((m) => [...m, { role: 'assistant', content: `⚠️ ${error}` }]);
    } else {
      demo.recordResponse(ms);
      setMessages((m) => [...m, { role: 'assistant', content: full, escalate }]);
      // Real WhatsApp Business API sending is gated off by default — see
      // ENABLE_WHATSAPP_SEND in .env.example. When enabled, this is where a
      // production build would call Twilio's WhatsApp API to actually
      // deliver the AI's reply to the customer's number.
      if (process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_SEND === 'true') {
        console.info('[demo] would send via Twilio WhatsApp API here');
      }
    }
    setBusy(false);
  }

  useEffect(() => {
    if (active && demo.pendingStarter) {
      const text = demo.pendingStarter;
      demo.consumeStarter();
      send(text);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, demo.pendingStarter]);

  return (
    <div id="panel-whatsapp" role="tabpanel" aria-label="WhatsApp demo" style={{ display: active ? undefined : 'none' }}>
      <div className="stage-topbar">
        <div className="stage-dots" aria-hidden="true">
          <div className="stage-dot stage-dot-r" />
          <div className="stage-dot stage-dot-y" />
          <div className="stage-dot stage-dot-g" />
        </div>
        <div
          className="stage-channel-badge"
          style={{ background: 'rgba(16,185,129,0.12)', borderColor: 'rgba(16,185,129,0.25)', color: 'rgba(100,240,180,0.9)' }}
        >
          <div className="badge-dot" style={{ background: 'var(--emerald)' }} />
          nemora · whatsapp
        </div>
        <div className="stage-status" aria-label="Agent online">
          ONLINE
        </div>
      </div>
      <div className="wa-panel">
        <div className="wa-header">
          <div className="wa-business-avatar">
            {scenario.business
              .split(' ')
              .slice(0, 2)
              .map((w) => w[0])
              .join('')
              .toUpperCase()}
          </div>
          <div>
            <div className="wa-biz-name">{scenario.business}</div>
            <div className="wa-biz-status">● Nemora agent active</div>
          </div>
          <svg className="wa-verified" viewBox="0 0 20 20" fill="none" aria-label="Verified business">
            <circle cx="10" cy="10" r="9" fill="rgba(16,185,129,0.2)" stroke="#10B981" strokeWidth="1.3" />
            <path d="M6 10l3 3 5-5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="wa-chat" ref={scrollRef} role="log" aria-label="WhatsApp messages">
          {messages.map((m, i) => (
            <div className={`wa-msg ${m.role === 'user' ? 'outgoing' : 'incoming'}`} key={i}>
              <div className="wa-bubble" style={{ whiteSpace: 'pre-wrap' }}>
                {m.content}
              </div>
              <div className="wa-time">now{m.role === 'user' ? ' ✓✓' : ''}</div>
              {m.escalate && <EscalationActions />}
            </div>
          ))}
          {busy && (
            <div className="wa-msg incoming">
              <div className="wa-bubble typing-bubble">
                <div className="typing-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="wa-input-row">
          <input
            className="wa-input"
            type="text"
            placeholder={`Message ${scenario.business}…`}
            aria-label="WhatsApp message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send(input)}
            disabled={busy}
          />
          <button className="wa-send" aria-label="Send message" onClick={() => send(input)} disabled={busy}>
            <svg viewBox="0 0 14 14" fill="none">
              <path d="M12.5 7L1.5 2l2 5-2 5 11-5z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
