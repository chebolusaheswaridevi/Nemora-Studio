'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useReveal } from '@/lib/useReveal';
import './pricing.scoped.css';

function fmt(n: number) {
  return n.toLocaleString('en-IN');
}

export default function Page() {
  useReveal();
  const router = useRouter();
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [checkingOut, setCheckingOut] = useState<string | null>(null);

  async function startCheckout(plan: 'spark' | 'pulse') {
    setCheckingOut(plan);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, billing: annual ? 'annual' : 'monthly' }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        router.push('/contact');
      }
    } catch {
      router.push('/contact');
    } finally {
      setCheckingOut(null);
    }
  }

  return (
    <div className="page-pricing">
      {/* ════ NAVIGATION ════ */}
      
      
      {/* ════ HERO ════ */}
      <section id="pricing-hero">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="hero-glow-orb" aria-hidden="true"></div>
        <div className="container" style={{ position: 'relative', zIndex: '2' }}>
          <div className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            Transparent pricing · No hidden fees
          </div>
          <h1 className="pricing-h1">Pricing that<br /><em>scales with you</em></h1>
          <p className="pricing-sub">Start for free. Pay only when you grow. Every plan includes setup, onboarding, and 24/7 support.</p>
      
          {/* Billing Toggle */}
          <div className="billing-toggle-wrap" id="billingToggle">
            <span className={`billing-label ${!annual ? 'active' : ''}`} id="lblMonthly">Monthly</span>
            <div
              className={`toggle-track ${annual ? 'annual' : ''}`}
              id="toggleTrack"
              onClick={() => setAnnual((a) => !a)}
              role="switch"
              aria-checked={annual}
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setAnnual((a) => !a)}
            >
              <div className="toggle-thumb"></div>
            </div>
            <span className={`billing-label ${annual ? 'active' : ''}`} id="lblAnnual">Annual</span>
            <span className="billing-badge">Save 25%</span>
          </div>
        </div>
      </section>
      
      {/* ════ PRICING CARDS ════ */}
      <section id="pricing-cards">
        <div className="container">
          <div className="pricing-grid">
      
            {/* Starter */}
            <div className="price-card reveal">
              <div className="plan-label">Starter</div>
              <div className="plan-name">Spark</div>
              <div className="plan-desc">For solo professionals and micro-businesses just getting started with AI.</div>
              <div className="plan-price-wrap">
                <div className="plan-price">
                  <span className="price-currency">₹</span>
                  <span className="price-amount" id="price-spark">{annual ? fmt(2249) : fmt(2999)}</span>
                  <span className="price-period">/mo</span>
                </div>
                <div className={`price-annual-note ${annual ? "" : "hidden"}`} id="note-spark">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Billed ₹26,988/yr · Save ₹8,988
                </div>
              </div>
              <button className="plan-cta" onClick={() => startCheckout('spark')} disabled={checkingOut === 'spark'}>{checkingOut === 'spark' ? 'Redirecting…' : 'Start free trial →'}</button>
              <div className="plan-divider"></div>
              <div className="plan-features-label">What's included</div>
              <div className="plan-features">
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  1 AI agent (chat or email)
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  500 conversations/month
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  WhatsApp + Website chat
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  Basic analytics dashboard
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  Email support
                </div>
                <div className="plan-feature">
                  <div className="feature-check no"><svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></div>
                  <span style={{ color: 'var(--text-4)' }}>Voice intelligence</span>
                </div>
                <div className="plan-feature">
                  <div className="feature-check no"><svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></div>
                  <span style={{ color: 'var(--text-4)' }}>CRM integrations</span>
                </div>
              </div>
            </div>
      
            {/* Growth — FEATURED */}
            <div className="price-card featured reveal reveal-delay-1">
              <div className="featured-badge">Most Popular</div>
              <div className="plan-label">Growth</div>
              <div className="plan-name">Pulse</div>
              <div className="plan-desc">For growing businesses ready to automate client communication at scale.</div>
              <div className="plan-price-wrap">
                <div className="plan-price">
                  <span className="price-currency">₹</span>
                  <span className="price-amount accent" id="price-pulse">{annual ? fmt(5999) : fmt(7999)}</span>
                  <span className="price-period">/mo</span>
                </div>
                <div className={`price-annual-note ${annual ? "" : "hidden"}`} id="note-pulse">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Billed ₹71,988/yr · Save ₹23,988
                </div>
              </div>
              <button className="plan-cta" onClick={() => startCheckout('pulse')} disabled={checkingOut === 'pulse'}>{checkingOut === 'pulse' ? 'Redirecting…' : 'Get started free →'}</button>
              <div className="plan-divider"></div>
              <div className="plan-features-label">Everything in Spark, plus</div>
              <div className="plan-features">
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  3 AI agents (voice + chat + email)
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  5,000 conversations/month
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  Voice intelligence included
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  Advanced analytics + CSAT
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  CRM + calendar integrations
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  Priority WhatsApp support
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  A/B testing for conversations
                </div>
              </div>
            </div>
      
            {/* Scale */}
            <div className="price-card reveal reveal-delay-2">
              <div className="plan-label">Scale</div>
              <div className="plan-name">Apex</div>
              <div className="plan-desc">For multi-location businesses and teams who need enterprise-grade intelligence.</div>
              <div className="plan-price-wrap">
                <div className="plan-price">
                  <span className="price-currency">₹</span>
                  <span className="price-amount" id="price-apex">{annual ? fmt(14249) : fmt(18999)}</span>
                  <span className="price-period">/mo</span>
                </div>
                <div className={`price-annual-note ${annual ? "" : "hidden"}`} id="note-apex">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Billed ₹1,70,988/yr · Save ₹56,988
                </div>
              </div>
              <button className="plan-cta" onClick={() => router.push('/contact')}>Talk to sales →</button>
              <div className="plan-divider"></div>
              <div className="plan-features-label">Everything in Pulse, plus</div>
              <div className="plan-features">
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  Unlimited AI agents
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  Unlimited conversations
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  Custom AI persona & voice
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  Dedicated success manager
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  SLA uptime guarantee (99.9%)
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  Custom API integrations
                </div>
                <div className="plan-feature">
                  <div className="feature-check yes"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  Revenue intelligence reports
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </section>
      
      {/* ════ TRUST STRIP ════ */}
      <div id="trust-strip">
        <div className="container">
          <div className="trust-inner">
            <div className="trust-item">
              <svg viewBox="0 0 18 18" fill="none"><path d="M9 1L11.5 6H17L12.5 9.5L14.5 15L9 11.5L3.5 15L5.5 9.5L1 6H6.5L9 1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
              No setup fees ever
            </div>
            <div className="trust-item">
              <svg viewBox="0 0 18 18" fill="none"><path d="M9 2a7 7 0 100 14A7 7 0 009 2zM6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Live in 72 hours
            </div>
            <div className="trust-item">
              <svg viewBox="0 0 18 18" fill="none"><path d="M9 3v6l4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" /></svg>
              Cancel anytime
            </div>
            <div className="trust-item">
              <svg viewBox="0 0 18 18" fill="none"><path d="M3 9a6 6 0 0112 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><path d="M9 15v-4M6 13l3 2 3-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Free 14-day trial
            </div>
            <div className="trust-item">
              <svg viewBox="0 0 18 18" fill="none"><path d="M9 2l1.8 4H15l-3.5 2.6L12.9 13 9 10.5 5.1 13l1.4-4.4L3 6h4.2L9 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
              4.9★ rated by 40+ businesses
            </div>
          </div>
        </div>
      </div>
      
      {/* ════ COMPARISON TABLE ════ */}
      <section id="comparison">
        <div className="container">
          <div className="section-header reveal">
            <div className="sec-eyebrow">
              <div className="sec-eyebrow-line"></div>
              Full Comparison
            </div>
            <h2 className="sec-h2">Every feature, laid bare</h2>
            <p className="sec-sub">No marketing fluff — see exactly what you get on each plan.</p>
          </div>
      
          <div className="comparison-table-wrap reveal reveal-delay-1">
            <table className="comparison-table">
              <thead>
                <tr className="ct-header-row">
                  <th>Feature</th>
                  <th className="ct-plan-head">Spark</th>
                  <th className="ct-plan-head featured-col">Pulse</th>
                  <th className="ct-plan-head">Apex</th>
                </tr>
              </thead>
              <tbody>
                {/* Channels */}
                <tr className="ct-section-row"><td colSpan={4}>Channels</td></tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>WhatsApp Chat</td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                </tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>Website Chat Widget</td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                </tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>Voice Intelligence</td>
                  <td><span className="ct-cross"><svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                </tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>Email Orchestration</td>
                  <td><span className="ct-cross"><svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                </tr>
                {/* Volume */}
                <tr className="ct-section-row"><td colSpan={4}>Volume & Agents</td></tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>Monthly conversations</td>
                  <td><span className="ct-text">500</span></td>
                  <td><span className="ct-text">5,000</span></td>
                  <td><span className="ct-text">Unlimited</span></td>
                </tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>AI agents</td>
                  <td><span className="ct-text">1</span></td>
                  <td><span className="ct-text">3</span></td>
                  <td><span className="ct-text">Unlimited</span></td>
                </tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>Team seats</td>
                  <td><span className="ct-text">1</span></td>
                  <td><span className="ct-text">5</span></td>
                  <td><span className="ct-text">Unlimited</span></td>
                </tr>
                {/* Analytics */}
                <tr className="ct-section-row"><td colSpan={4}>Analytics & Intelligence</td></tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>Basic analytics</td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                </tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>CSAT & satisfaction tracking</td>
                  <td><span className="ct-cross"><svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                </tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>Revenue intelligence reports</td>
                  <td><span className="ct-cross"><svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span></td>
                  <td><span className="ct-cross"><svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                </tr>
                {/* Integrations */}
                <tr className="ct-section-row"><td colSpan={4}>Integrations</td></tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>Google Calendar sync</td>
                  <td><span className="ct-cross"><svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                </tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>CRM integrations</td>
                  <td><span className="ct-cross"><svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                </tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>Custom API access</td>
                  <td><span className="ct-cross"><svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span></td>
                  <td><span className="ct-cross"><svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                </tr>
                {/* Support */}
                <tr className="ct-section-row"><td colSpan={4}>Support</td></tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>Email support</td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                </tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>Priority WhatsApp support</td>
                  <td><span className="ct-cross"><svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                </tr>
                <tr className="ct-feature-row featured-col-bg">
                  <td>Dedicated success manager</td>
                  <td><span className="ct-cross"><svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span></td>
                  <td><span className="ct-cross"><svg viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></span></td>
                  <td><span className="ct-check"><svg viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* ════ ENTERPRISE STRIP ════ */}
      <section id="enterprise-strip">
        <div className="container">
          <div className="enterprise-card reveal">
            <div>
              <div className="enterprise-eyebrow">Enterprise</div>
              <h3 className="enterprise-h3">Built for multi-location<br />and high-volume teams</h3>
              <p className="enterprise-desc">Custom contracts, white-label options, advanced security, and SLA guarantees. We build around you — not the other way around.</p>
              <div className="enterprise-features">
                <div className="e-feat-pill">
                  <svg viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  White-label AI agents
                </div>
                <div className="e-feat-pill">
                  <svg viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  99.9% SLA uptime
                </div>
                <div className="e-feat-pill">
                  <svg viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Custom security & compliance
                </div>
                <div className="e-feat-pill">
                  <svg viewBox="0 0 11 11" fill="none"><path d="M1 5.5l3 3 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  On-premise deployment
                </div>
              </div>
            </div>
            <div className="enterprise-actions">
              <button className="btn-enterprise primary" onClick={() => router.push('/contact')}>Contact Sales</button>
              <button className="btn-enterprise ghost" onClick={() => router.push('/demo')}>See a demo</button>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ FAQ ════ */}
      <section id="faq">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-left reveal">
              <div className="sec-eyebrow" style={{ justifyContent: 'flex-start' }}>
                <div className="sec-eyebrow-line"></div>
                FAQ
              </div>
              <h2 className="sec-h2" style={{ fontSize: 'clamp(28px,3.5vw,42px)' }}>Questions<br />answered.</h2>
              <p className="sec-sub">Still not sure? We're human — reach out anytime.</p>
              <div className="faq-contact" onClick={() => router.push('/contact')}>
                Talk to us
                <svg viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
      
            <div className="faq-items reveal reveal-delay-1">
              <div className={`faq-item ${openFaq === 0 ? "open" : ""}`}>
                <div className="faq-q" onClick={() => setOpenFaq((v) => (v === 0 ? -1 : 0))}>
                  <span className="faq-q-text">Is there really no setup fee?</span>
                  <span className="faq-icon">
                    <svg viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </span>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    Zero setup fees on all plans. We onboard you, train the AI on your business, and test everything before going live — all included in your subscription. We only win when you win.
                  </div>
                </div>
              </div>
      
              <div className={`faq-item ${openFaq === 1 ? "open" : ""}`}>
                <div className="faq-q" onClick={() => setOpenFaq((v) => (v === 1 ? -1 : 1))}>
                  <span className="faq-q-text">How fast can I go live?</span>
                  <span className="faq-icon">
                    <svg viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </span>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    Most businesses go live within 72 hours of signing up. We handle the technical setup — you just answer a few questions about your business, services, and FAQs, and we handle everything else.
                  </div>
                </div>
              </div>
      
              <div className={`faq-item ${openFaq === 2 ? "open" : ""}`}>
                <div className="faq-q" onClick={() => setOpenFaq((v) => (v === 2 ? -1 : 2))}>
                  <span className="faq-q-text">What happens if I exceed my conversation limit?</span>
                  <span className="faq-icon">
                    <svg viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </span>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    You'll never lose a client conversation. We'll notify you when you approach 80% of your limit and offer a seamless upgrade. Overages are billed at a flat ₹3 per conversation — no surprises.
                  </div>
                </div>
              </div>
      
              <div className={`faq-item ${openFaq === 3 ? "open" : ""}`}>
                <div className="faq-q" onClick={() => setOpenFaq((v) => (v === 3 ? -1 : 3))}>
                  <span className="faq-q-text">Can I switch plans later?</span>
                  <span className="faq-icon">
                    <svg viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </span>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    Absolutely. Upgrade or downgrade any time from your dashboard. Upgrades take effect immediately. Downgrades take effect at the next billing cycle, and any unused credit is applied to your next invoice.
                  </div>
                </div>
              </div>
      
              <div className={`faq-item ${openFaq === 4 ? "open" : ""}`}>
                <div className="faq-q" onClick={() => setOpenFaq((v) => (v === 4 ? -1 : 4))}>
                  <span className="faq-q-text">Does Nemora support Tamil and regional languages?</span>
                  <span className="faq-icon">
                    <svg viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </span>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    Yes. Nemora supports Tamil, Hindi, and Tanglish (Tamil-English code-mixing) natively. Your AI agent can detect language automatically and respond in whatever language your client prefers.
                  </div>
                </div>
              </div>
      
              <div className={`faq-item ${openFaq === 5 ? "open" : ""}`}>
                <div className="faq-q" onClick={() => setOpenFaq((v) => (v === 5 ? -1 : 5))}>
                  <span className="faq-q-text">How is my business data protected?</span>
                  <span className="faq-icon">
                    <svg viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </span>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    Your data is encrypted at rest and in transit. We never use your business data to train models for other companies. Each client gets an isolated environment, and you can export or delete your data at any time.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ CTA ════ */}
      <section id="sec-cta">
        <div className="cta-grid-bg" aria-hidden="true"></div>
        <div className="cta-glow" aria-hidden="true"></div>
        <div className="container">
          <div className="cta-inner">
            <div className="cta-badge reveal">
              <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#6E56FF" /></svg>
              Start free · No credit card required
            </div>
            <h2 className="cta-h2 reveal reveal-delay-1">14 days free.<br />No strings. No pitch.</h2>
            <p className="cta-sub reveal reveal-delay-2">See your custom AI agent live in under 30 minutes. If it doesn't change how you work, cancel with one click.</p>
            <div className="cta-buttons reveal reveal-delay-3">
              <button className="cta-btn-primary" onClick={() => router.push('/contact')}>
                <svg viewBox="0 0 18 18" fill="none"><path d="M9 1.5L16.5 5.25V12.75L9 16.5L1.5 12.75V5.25L9 1.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="9" cy="9" r="3" fill="white" fillOpacity="0.9" /></svg>
                Start free trial
              </button>
              <button className="cta-btn-secondary" onClick={() => router.push('/demo')}>Watch a live demo →</button>
            </div>
            <div className="cta-note reveal reveal-delay-4">Setup included · Cancel anytime · Live in 72 hours</div>
          </div>
        </div>
      </section>
      
      {/* ════ FOOTER ════ */}
    </div>
  );
}
