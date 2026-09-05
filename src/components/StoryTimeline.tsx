'use client';

import { useEffect, useRef } from 'react';

/**
 * Scroll-driven progress line + row activation for the About page's founder
 * story timeline — same technique as FeatureTimeline.tsx (home page), scoped
 * to #sec-story / .tl-row instead of #sec-features / .sf-node.
 */
export default function StoryTimeline() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = document.getElementById('sec-story');
    const line = lineRef.current;
    if (!section || !line) return;

    function update() {
      const rect = section!.getBoundingClientRect();
      const sH = section!.offsetHeight;
      const viewH = window.innerHeight;
      const scrolled = Math.max(0, viewH / 2 - rect.top);
      const progress = Math.min(1, scrolled / sH);
      line!.style.height = progress * 100 + '%';

      document.querySelectorAll('.tl-row').forEach((row) => {
        const rRect = row.getBoundingClientRect();
        row.classList.toggle('active', rRect.top < viewH * 0.6);
      });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <div className="tl-progress" ref={lineRef} aria-hidden="true" />;
}
