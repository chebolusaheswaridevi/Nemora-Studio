'use client';

import { useState } from 'react';

const BOOKING_LINK = 'https://cal.com/nemora-studio/discovery-call';

export default function HeroForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setErrorMsg(null);

    // Best-effort lead capture — booking the call itself never blocks on it,
    // since the calendar link works regardless of whether our DB is up.
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source: 'homepage-hero' }),
    }).catch(() => {});

    window.open(BOOKING_LINK, '_blank', 'noopener,noreferrer');
    setStatus('done');
    setEmail('');
  }

  if (status === 'done') {
    return (
      <div className="hero-form" role="status" style={{ padding: '12px 22px' }}>
        <span style={{ fontSize: 14, color: '#fff' }}>
          Opening our booking calendar —{' '}
          <a href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
            click here
          </a>{' '}
          if it didn&apos;t open. ✓
        </span>
      </div>
    );
  }

  return (
    <div>
      <form className="hero-form" role="search" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Work email"
          aria-label="Work email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="hero-form-btn" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Book a call →'}
        </button>
      </form>
      {status === 'error' && errorMsg && (
        <div role="alert" style={{ marginTop: 8, fontSize: 12.5, color: 'rgba(255,150,150,0.95)', textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>
          {errorMsg}
        </div>
      )}
    </div>
  );
}
