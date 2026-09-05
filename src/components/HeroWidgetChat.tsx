'use client';

import { useEffect, useState } from 'react';

const RESPONSES = [
  'Done! Your appointment is moved to Friday 10:30 AM. Confirmation sent! ✓',
  'Great choice! Your Friday slot is confirmed. See you then.',
  "All set! I've sent a calendar invite to your number.",
];

export default function HeroWidgetChat() {
  const [reply, setReply] = useState<string | null>(null);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let idx = 0;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function showResponse() {
      if (cancelled) return;
      setReply(RESPONSES[idx % RESPONSES.length]);
      setTyping(false);
      idx++;
      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setTyping(true);
          setReply(null);
          timers.push(setTimeout(showResponse, 2200));
        }, 3500),
      );
    }

    timers.push(setTimeout(showResponse, 1800));
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="hw-msg" id="typing-msg">
      <div className="hw-msg-avatar ai">N</div>
      <div className={`hw-msg-bubble ai ${typing ? 'typing' : ''}`}>
        {typing ? (
          <div className="hw-typing">
            <span />
            <span />
            <span />
          </div>
        ) : (
          reply
        )}
      </div>
    </div>
  );
}
