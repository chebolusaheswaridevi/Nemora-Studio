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
  const { text, escalate } = getScriptedAnswer(industry, opener, 'chat');
  return [
    { role: 'user', content: opener },
    { role: 'assistant', content: text, escalate },
  ];
}

export default function ChatPanel({ demo, active }: Props) {
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
      channel: 'chat',
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
    <div id="panel-chat" role="tabpanel" aria-label="Chat demo" style={{ display: active ? undefined : 'none' }}>
      <div className="stage-topbar">
        <div className="stage-dots" aria-hidden="true">
          <div className="stage-dot stage-dot-r" />
          <div className="stage-dot stage-dot-y" />
          <div className="stage-dot stage-dot-g" />
        </div>
        <div className="stage-title-wrap">
          <div className="stage-channel-badge">
            <div className="badge-dot" />
            nemora · chat
          </div>
        </div>
        <div className="stage-status" aria-label="Agent online">
          ONLINE
        </div>
      </div>
      <div className="chat-panel">
        <div className="chat-messages" ref={scrollRef} role="log" aria-label="Chat messages">
          {messages.map((m, i) => (
            <div className={`msg-group ${m.role === 'user' ? 'user' : ''}`} key={i}>
              <div className={`chat-msg ${m.role === 'user' ? 'user' : ''}`}>
                <div className={`chat-avatar ${m.role === 'user' ? 'user' : 'ai'}`}>{m.role === 'user' ? 'You' : 'AI'}</div>
                <div className={`chat-bubble ${m.role === 'user' ? 'user' : 'ai'}`} style={{ whiteSpace: 'pre-wrap' }}>
                  {m.content}
                </div>
              </div>
              {m.escalate && <EscalationActions />}
            </div>
          ))}
          {busy && (
            <div className="chat-msg">
              <div className="chat-avatar ai">AI</div>
              <div className="chat-bubble typing-bubble">
                <div className="typing-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="chat-input-row">
          <input
            className="chat-input"
            type="text"
            placeholder="Type a message…"
            aria-label="Chat message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send(input)}
            disabled={busy}
          />
          <button className="chat-send-btn" aria-label="Send message" onClick={() => send(input)} disabled={busy}>
            <svg viewBox="0 0 15 15" fill="none">
              <path d="M13.5 7.5L1.5 2l2 5.5L1.5 13l12-5.5z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
