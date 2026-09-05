'use client';

import { useState } from 'react';
import { useReveal } from '@/lib/useReveal';
import './contact.scoped.css';

const INDUSTRIES = ['Clinic / Healthcare', 'Coaching', 'E-commerce', 'Interior Design', 'Professional Services', 'Other'];
const CHANNELS = ['Voice', 'Chat', 'WhatsApp', 'Email', 'Not sure yet'];

export default function ContactPage() {
  useReveal();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState('');
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [channel, setChannel] = useState(CHANNELS[0]);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('Please add your name and a valid work email.');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.includes('@')) {
      setErrorMsg('Please add your name and a valid work email.');
      setStatus('error');
      return;
    }
    setStatus('submitting');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, business, industry, channel, message, source: 'contact-form' }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
      setStatus('done');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  return (
    <div className="page-contact">
      <section id="contact-hero">
        <div className="contact-grid-bg" aria-hidden="true" />
        <div className="container">
          <div className="sec-eyebrow reveal">
            <div className="sec-eyebrow-line" />
            Get in touch
          </div>
          <h1 className="sec-h2 reveal reveal-delay-1" style={{ maxWidth: 640 }}>
            Let&apos;s put your business
            <br />
            on intelligence.
          </h1>
          <p className="sec-sub reveal reveal-delay-2" style={{ maxWidth: 560 }}>
            Tell us about your business and we&apos;ll show you exactly how Nemora would run your voice, chat, WhatsApp,
            and email — live, in under 30 minutes.
          </p>
        </div>
      </section>

      <section id="contact-main">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info-card reveal">
              <div className="contact-info-title">Talk to us directly</div>
              <div className="contact-info-desc">
                Prefer email or a call? Reach the Nemora team directly — we&apos;re a small team based in Chennai and read
                every message ourselves.
              </div>

              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <rect x="2" y="4" width="14" height="10" rx="2" stroke="#6E56FF" strokeWidth="1.4" />
                    <path d="M2 5.5l7 5 7-5" stroke="#6E56FF" strokeWidth="1.4" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">nemorastudios@gmail.com</div>
                </div>
              </div>

              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M9 16.5s6-5.13 6-9.5A6 6 0 003 7c0 4.37 6 9.5 6 9.5z"
                      stroke="#6E56FF"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                    <circle cx="9" cy="7" r="2" stroke="#6E56FF" strokeWidth="1.4" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Based in</div>
                  <div className="contact-info-value">Chennai, India</div>
                </div>
              </div>

              <div className="contact-info-row">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="9" cy="9" r="7" stroke="#10B981" strokeWidth="1.4" />
                    <path d="M9 5v4l2.5 2.5" stroke="#10B981" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Response time</div>
                  <div className="contact-info-value">Usually within a few hours</div>
                </div>
              </div>

              <a className="contact-sales-cta" href="mailto:nemorastudios@gmail.com?subject=Talk%20to%20Nemora%20Sales">
                Contact Sales directly →
              </a>
            </div>

            <div className="contact-form-card reveal reveal-delay-1">
              {status === 'done' ? (
                <div className="contact-success">
                  <div className="contact-success-icon" aria-hidden="true">
                    ✓
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 8 }}>
                    Thanks, {name.split(' ')[0]}!
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--text-3)', maxWidth: 360, margin: '0 auto' }}>
                    We&apos;ve got your details and will reach out at {email} shortly to set up your live demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-field" style={{ marginTop: 0 }}>
                      <label htmlFor="c-name">Your name</label>
                      <input id="c-name" type="text" placeholder="Riya Sharma" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="contact-field" style={{ marginTop: 0 }}>
                      <label htmlFor="c-email">Work email</label>
                      <input
                        id="c-email"
                        type="email"
                        placeholder="riya@studiohues.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="c-business">Business name</label>
                    <input
                      id="c-business"
                      type="text"
                      placeholder="Studio Hues Interiors"
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                    />
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label htmlFor="c-industry">Industry</label>
                      <select id="c-industry" value={industry} onChange={(e) => setIndustry(e.target.value)}>
                        {INDUSTRIES.map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="contact-field">
                      <label htmlFor="c-channel">Channel of interest</label>
                      <select id="c-channel" value={channel} onChange={(e) => setChannel(e.target.value)}>
                        {CHANNELS.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="c-message">What's going on in your business right now?</label>
                    <textarea
                      id="c-message"
                      placeholder="e.g. We're missing WhatsApp enquiries after hours and want to see it live..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  {status === 'error' && <p className="contact-error">{errorMsg}</p>}

                  <button className="contact-submit" type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Book a free demo →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
