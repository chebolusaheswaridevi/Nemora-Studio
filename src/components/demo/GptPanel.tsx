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
  const { text, escalate } = getScriptedAnswer(industry, opener, 'gpt');
  return [
    { role: 'user', content: opener },
    { role: 'assistant', content: text, escalate },
  ];
}

export default function GptPanel({ demo, active }: Props) {
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
      channel: 'gpt',
      onDelta: () => {},
    });
    if (error) {
      setMessages((m) => [...m, { role: 'assistant', content: `⚠️ ${error}` }]);
    } else {
      demo.recordResponse(ms);
      setMessages((m) => [...m, { role: 'assistant', content: full, escalate }]);
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
    <div id="panel-gpt" role="tabpanel" aria-label="Custom GPT demo" style={{ display: active ? undefined : 'none' }}>
      <div className="stage-topbar">
        <div className="stage-dots" aria-hidden="true">
          <div className="stage-dot stage-dot-r" />
          <div className="stage-dot stage-dot-y" />
          <div className="stage-dot stage-dot-g" />
        </div>
        <div
          className="stage-channel-badge"
          style={{ background: 'rgba(96,165,250,0.12)', borderColor: 'rgba(96,165,250,0.25)', color: 'rgba(180,220,255,0.9)' }}
        >
          <div className="badge-dot" style={{ background: '#60a5fa' }} />
          nemora · custom gpt
        </div>
        <div className="stage-status">ONLINE</div>
      </div>
      <div className="gpt-panel">
        <div className="gpt-header">
          <div className="gpt-logo-icon">
            <svg viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
              <path d="M6 9l2 2 4-4" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="gpt-name">{scenario.business} GPT</div>
            <div className="gpt-model">Powered by Nemora · Custom-trained on your knowledge</div>
          </div>
        </div>
        <div className="gpt-body" ref={scrollRef} role="log" aria-label="GPT conversation">
          {messages.map((m, i) => (
            <div key={i}>
              <div className={`gpt-msg ${m.role === 'user' ? 'user' : ''}`}>
                <div className={`gpt-avatar ${m.role === 'user' ? 'user' : 'ai'}`}>{m.role === 'user' ? 'You' : 'AI'}</div>
                <div className={`gpt-bubble ${m.role === 'user' ? 'user' : 'ai'}`} style={{ whiteSpace: 'pre-wrap' }}>
                  {m.content}
                </div>
              </div>
              {m.escalate && <EscalationActions />}
            </div>
          ))}
          {busy && (
            <div className="gpt-msg">
              <div className="gpt-avatar ai">AI</div>
              <div className="gpt-bubble ai typing-bubble">
                <div className="typing-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="gpt-input-row">
          <input
            className="gpt-input"
            placeholder="Ask anything…"
            aria-label="GPT message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send(input)}
            disabled={busy}
          />
          <button className="gpt-send" aria-label="Send" onClick={() => send(input)} disabled={busy}>
            <svg viewBox="0 0 14 14" fill="none">
              <path d="M12.5 7L1.5 2l2 5-2 5 11-5z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
