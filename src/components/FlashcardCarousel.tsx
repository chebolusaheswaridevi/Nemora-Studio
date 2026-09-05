'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { HOME_TESTIMONIALS } from '@/lib/homeTestimonials';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'clinic', label: 'Clinics' },
  { key: 'coach', label: 'Coaches' },
  { key: 'ecom', label: 'E-commerce' },
  { key: 'service', label: 'Service Biz' },
] as const;

export default function FlashcardCarousel() {
  const [filter, setFilter] = useState<string>('all');
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const wrapRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const visible = useMemo(
    () => (filter === 'all' ? HOME_TESTIMONIALS : HOME_TESTIMONIALS.filter((t) => t.category === filter)),
    [filter],
  );
  const total = Math.max(1, Math.ceil(visible.length / perPage));

  useEffect(() => {
    function getPerPage() {
      const w = wrapRef.current?.offsetWidth ?? 1160;
      if (w < 600) return 1;
      if (w < 900) return 2;
      return 3;
    }
    function onResize() {
      setPerPage(getPerPage());
    }
    onResize();
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setPage(0);
  }, [filter, perPage]);

  const cardWidth = 300;
  const gap = 20;
  const offset = page * perPage * (cardWidth + gap);

  return (
    <>
      <div className="cust-filters" role="tablist" aria-label="Filter customer stories">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`cust-filter-btn ${filter === f.key ? 'active' : ''}`}
            role="tab"
            aria-selected={filter === f.key}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div
        className="fc-track-wrap"
        ref={wrapRef}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          if (dx < -50) setPage((p) => Math.min(p + 1, total - 1));
          else if (dx > 50) setPage((p) => Math.max(p - 1, 0));
        }}
      >
        <div className="fc-track" style={{ transform: `translateX(-${offset}px)` }}>
          {visible.map((t) => (
            <div key={t.author} className={`fc-card ${t.highlighted ? 'highlighted' : ''}`} data-cat={t.category}>
              <div className="fc-tag">{t.tag}</div>
              <div className="fc-stars">⭐⭐⭐⭐⭐</div>
              <div className="fc-quote">
                <div className="fc-quote-text">{t.quote}</div>
              </div>
              <div className="fc-author">
                <div className="fc-avatar" style={{ background: t.avatarGradient }}>
                  {t.initials}
                </div>
                <div className="fc-author-info">
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
              <div className="fc-result">
                <div className="fc-result-dot" />
                {t.result}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fc-nav">
        <button className="fc-btn" aria-label="Previous stories" disabled={page === 0} onClick={() => setPage((p) => Math.max(p - 1, 0))}>
          ←
        </button>
        <div className="fc-dots" role="tablist">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              className={`fc-dot ${i === page ? 'active' : ''}`}
              role="tab"
              aria-selected={i === page}
              aria-label={`Page ${i + 1}`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>
        <button className="fc-btn" aria-label="Next stories" disabled={page >= total - 1} onClick={() => setPage((p) => Math.min(p + 1, total - 1))}>
          →
        </button>
      </div>
    </>
  );
}
