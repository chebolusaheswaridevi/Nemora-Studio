'use client';

import { useEffect, useRef } from 'react';

/**
 * Ports the home page's scroll-driven timeline progress line + node
 * activation from the reference nemora-v5.html inline script.
 */
export default function FeatureTimeline() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = document.getElementById('sec-features');
    const line = lineRef.current;
    if (!section || !line) return;

    function update() {
      const rect = section!.getBoundingClientRect();
      const sH = section!.offsetHeight;
      const viewH = window.innerHeight;
      const scrolled = Math.max(0, viewH / 2 - rect.top);
      const progress = Math.min(1, scrolled / sH);
      line!.style.height = progress * 100 + '%';

      document.querySelectorAll('.sf-node').forEach((node) => {
        const nRect = node.getBoundingClientRect();
        node.classList.toggle('active', nRect.top < viewH * 0.6);
      });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <>
      <div className="timeline-line-bg" aria-hidden="true" />
      <div className="timeline-line-progress" ref={lineRef} aria-hidden="true" />
    </>
  );
}
