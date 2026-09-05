'use client';

import { useEffect } from 'react';

/**
 * Ports the reference mockups' shared IntersectionObserver: any element with
 * class "reveal" gets "is-visible" appended once it enters the viewport.
 * Mount once per page (client components render before the DOM exists, so
 * this re-scans on every route change via the effect's dependency-free run).
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
