'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  target: number;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export default function Counter({ target, suffix = '', decimals = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            const duration = 1600;
            const start = performance.now();
            const step = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(target * eased);
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  const display = decimals ? value.toFixed(decimals) : Math.round(value);

  return (
    <div ref={ref} className={className}>
      {display}
      {suffix}
    </div>
  );
}
