'use client';

import { useEffect, useState } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

const CATEGORY_FROM_KEYWORDS = (biz: string): string => {
  const b = biz.toLowerCase();
  if (/clinic|health|dental|wellness/.test(b)) return 'clinic';
  if (/coach/.test(b)) return 'coach';
  if (/store|shop|botanicals|ecommerce|e-commerce/.test(b)) return 'ecom';
  return 'service';
};

export default function TestimonialModal({ open, onClose }: Props) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [result, setResult] = useState('');
  const [story, setStory] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('Please fill in your name, business, and story before submitting.');

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setStatus('idle');
      setRating(0);
      setHoverRating(0);
      setName('');
      setBusiness('');
      setResult('');
      setStory('');
    }
  }, [open]);

  async function handleSubmit() {
    if (!name.trim() || !business.trim() || !story.trim()) {
      setErrorMsg('Please fill in your name, business, and story before submitting.');
      setStatus('error');
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          business,
          category: CATEGORY_FROM_KEYWORDS(business),
          rating: rating || 5,
          result,
          story,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setStatus('done');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  const displayRating = hoverRating || rating;

  return (
    <div className={`modal-overlay ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        {status === 'done' ? (
          <div className="modal-thankyou">
            <div className="modal-thankyou-icon" aria-hidden="true">
              ✓
            </div>
            <h3 id="modal-title">Thank you!</h3>
            <p className="modal-sub">
              We&apos;ve received your story. If we feature it, we&apos;ll reach out before publishing.
            </p>
            <button className="modal-submit" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 id="modal-title">Share your Nemora story</h3>
            <p className="modal-sub">We&apos;d love to feature your result. Tell us what changed.</p>
            <div className="modal-stars" aria-label="Rate your experience">
              {[1, 2, 3, 4, 5].map((v) => (
                <button
                  key={v}
                  type="button"
                  className={`modal-star ${v <= displayRating ? 'lit' : ''}`}
                  role="radio"
                  aria-checked={v === rating}
                  aria-label={`${v} star${v > 1 ? 's' : ''}`}
                  onClick={() => setRating(v)}
                  onMouseEnter={() => setHoverRating(v)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  ⭐
                </button>
              ))}
            </div>
            <div className="modal-row">
              <div>
                <label htmlFor="m-name">Your name</label>
                <input id="m-name" type="text" placeholder="Dr. Ramesh Iyer" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="m-biz">Business name</label>
                <input id="m-biz" type="text" placeholder="Orthocare Clinic" value={business} onChange={(e) => setBusiness(e.target.value)} />
              </div>
            </div>
            <label htmlFor="m-result">What result did you see?</label>
            <input
              id="m-result"
              type="text"
              placeholder="e.g. Zero missed queries in 3 months"
              value={result}
              onChange={(e) => setResult(e.target.value)}
            />
            <label htmlFor="m-story">Your story (in your own words)</label>
            <textarea
              id="m-story"
              placeholder="Tell us what changed after Nemora went live..."
              value={story}
              onChange={(e) => setStory(e.target.value)}
            />
            {status === 'error' && (
              <p style={{ color: '#ff8c8c', fontSize: 12.5, marginTop: 10 }}>{errorMsg}</p>
            )}
            <button className="modal-submit" onClick={handleSubmit} disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting…' : 'Submit your story →'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
