'use client';

import { useRouter } from 'next/navigation';
import { useReveal } from '@/lib/useReveal';
import Counter from '@/components/Counter';
import ChatPanel from '@/components/demo/ChatPanel';
import GptPanel from '@/components/demo/GptPanel';
import VoicePanel from '@/components/demo/VoicePanel';
import WhatsappPanel from '@/components/demo/WhatsappPanel';
import EmailPanel from '@/components/demo/EmailPanel';
import { useDemoState } from '@/components/demo/useDemoState';
import { SCENARIOS, type ScenarioKey } from '@/lib/scenarios';
import './demo.scoped.css';

const CHANNELS = [
  { key: 'chat', label: 'Chat Bot', color: 'rgba(110,86,255,0.15)', d: 'M1 1h10v7H7l-3 3V8H1z', stroke: '#6E56FF' },
  { key: 'voice', label: 'Voice Agent', color: 'rgba(255,92,53,0.15)', stroke: '#FF5C35' },
  { key: 'email', label: 'Email AI', color: 'rgba(245,158,11,0.15)', stroke: '#F59E0B' },
  { key: 'whatsapp', label: 'WhatsApp', color: 'rgba(16,185,129,0.15)', stroke: '#10B981' },
  { key: 'gpt', label: 'Custom GPT', color: 'rgba(96,165,250,0.15)', stroke: '#60a5fa' },
] as const;

const INDUSTRIES: { key: ScenarioKey; label: string }[] = [
  { key: 'clinic', label: 'Clinic / Health' },
  { key: 'coach', label: 'Coach / Trainer' },
  { key: 'ecom', label: 'E-commerce' },
  { key: 'service', label: 'Service Business' },
];

const INDUSTRY_ICON_PATHS: Record<ScenarioKey, React.ReactNode> = {
  clinic: <path d="M7 1v12M1 7h12M4 4l6 6M10 4l-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />,
  coach: (
    <>
      <circle cx="7" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1 13c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </>
  ),
  ecom: (
    <>
      <path d="M1.5 1.5H3l2 7h6l1.5-5H5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="12" r="1" fill="currentColor" />
      <circle cx="11" cy="12" r="1" fill="currentColor" />
    </>
  ),
  service: (
    <>
      <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 3V2a2 2 0 014 0v1" stroke="currentColor" strokeWidth="1.3" />
    </>
  ),
};

export default function Page() {
  useReveal();
  const router = useRouter();
  const demo = useDemoState();

  return (
    <div className="page-demo">
      {/* ════ NAVIGATION ════ */}
      
      
      {/* ════ DEMO HERO ════ */}
      <section id="demo-hero" aria-label="Live Demo hero">
        <div className="demo-hero-mesh" aria-hidden="true"></div>
        <div className="container">
          <div className="demo-hero-inner">
            <div className="demo-eyebrow">
              <div className="demo-eyebrow-dot"></div>
              Interactive live demos — no sign-up required
            </div>
            <h1 className="demo-h1">
              See Nemora work,<br /><em>right now.</em>
            </h1>
            <p className="demo-sub">
              Pick a channel, choose your industry, and watch the AI handle a real scenario live. Every demo is powered by the same intelligence your business would run on.
            </p>
            <div className="demo-channel-tabs" role="tablist" aria-label="Demo channels">
              <button
                className={`dct-btn chat ${demo.channel === 'chat' ? 'active' : ''}`}
                role="tab"
                aria-selected={demo.channel === 'chat'}
                aria-controls="panel-chat"
                onClick={() => demo.setChannel('chat')}
              >
                <div className="dct-icon" style={{ background: 'rgba(110,86,255,0.15)' }}>
                  <svg viewBox="0 0 12 12" fill="none"><path d="M1 1h10v7H7l-3 3V8H1z" stroke="#6E56FF" strokeWidth="1.2" strokeLinejoin="round" /></svg>
                </div>
                <span>Chat Bot</span>
              </button>
              <button
                className={`dct-btn voice ${demo.channel === 'voice' ? 'active' : ''}`}
                role="tab"
                aria-selected={demo.channel === 'voice'}
                aria-controls="panel-voice"
                onClick={() => demo.setChannel('voice')}
              >
                <div className="dct-icon" style={{ background: 'rgba(255,92,53,0.15)' }}>
                  <svg viewBox="0 0 12 12" fill="none"><rect x="4" y="1" width="4" height="7" rx="2" stroke="#FF5C35" strokeWidth="1.2" /><path d="M2 6.5A4 4 0 006 10.5M10 6.5A4 4 0 016 10.5M6 10.5V12" stroke="#FF5C35" strokeWidth="1.2" strokeLinecap="round" /></svg>
                </div>
                <span>Voice Agent</span>
              </button>
              <button
                className={`dct-btn email ${demo.channel === 'email' ? 'active' : ''}`}
                role="tab"
                aria-selected={demo.channel === 'email'}
                aria-controls="panel-email"
                onClick={() => demo.setChannel('email')}
              >
                <div className="dct-icon" style={{ background: 'rgba(245,158,11,0.15)' }}>
                  <svg viewBox="0 0 12 12" fill="none"><rect x="1" y="2.5" width="10" height="7" rx="1.5" stroke="#F59E0B" strokeWidth="1.2" /><path d="M1 4l5 3.5L11 4" stroke="#F59E0B" strokeWidth="1.2" /></svg>
                </div>
                <span>Email AI</span>
              </button>
              <button
                className={`dct-btn whatsapp ${demo.channel === 'whatsapp' ? 'active' : ''}`}
                role="tab"
                aria-selected={demo.channel === 'whatsapp'}
                aria-controls="panel-whatsapp"
                onClick={() => demo.setChannel('whatsapp')}
              >
                <div className="dct-icon" style={{ background: 'rgba(16,185,129,0.15)' }}>
                  <svg viewBox="0 0 12 12" fill="none"><path d="M6 1C3.24 1 1 3.24 1 6c0 .9.22 1.74.6 2.49L1 11l2.6-.56C4.3 10.78 5.13 11 6 11c2.76 0 5-2.24 5-5S8.76 1 6 1z" stroke="#10B981" strokeWidth="1.2" /><path d="M4 5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V5z" stroke="#10B981" strokeWidth="1" /></svg>
                </div>
                <span>WhatsApp</span>
              </button>
              <button
                className={`dct-btn gpt ${demo.channel === 'gpt' ? 'active' : ''}`}
                role="tab"
                aria-selected={demo.channel === 'gpt'}
                aria-controls="panel-gpt"
                onClick={() => demo.setChannel('gpt')}
              >
                <div className="dct-icon" style={{ background: 'rgba(96,165,250,0.15)' }}>
                  <svg viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4.5" stroke="#60a5fa" strokeWidth="1.2" /><path d="M4 6l1.5 1.5L8 4.5" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <span>Custom GPT</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ DEMO WORKSPACE ════ */}
      <div id="demo-workspace">
        <div className="container">
          <div className="demo-ws-grid reveal">
      
            {/* LEFT PANEL */}
            <div className="demo-left-panel">
              {/* Industry selector */}
              <div>
                <div className="dl-section-label">Industry</div>
                <div className="industry-selector" role="radiogroup" aria-label="Select industry">
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind.key}
                      className={`industry-btn ${demo.industry === ind.key ? 'active' : ''}`}
                      role="radio"
                      aria-checked={demo.industry === ind.key}
                      onClick={() => demo.setIndustry(ind.key)}
                    >
                      <div className="ib-icon">
                        <svg viewBox="0 0 14 14" fill="none">{INDUSTRY_ICON_PATHS[ind.key]}</svg>
                      </div>
                      {ind.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scenario picker */}
              <div>
                <div className="dl-section-label">Scenario</div>
                <div className="scenario-list" role="listbox" aria-label="Select scenario">
                  {SCENARIOS[demo.industry].starters.map((text, i) => (
                    <button
                      key={i}
                      className="scenario-btn"
                      role="option"
                      aria-selected={false}
                      onClick={() => demo.selectScenario(text)}
                    >
                      <div className="scenario-num">{i + 1}</div>
                      {text}
                    </button>
                  ))}
                </div>
              </div>
      
              {/* Live metrics */}
              <div className="live-panel" aria-label="Live performance metrics">
                <div className="live-panel-header">
                  <div className="live-dot" aria-hidden="true"></div>
                  <div className="live-panel-title">Live metrics</div>
                </div>
                <div className="live-metric">
                  <span className="live-metric-label">Avg response time</span>
                  <span className="live-metric-val purple">{(demo.avgResponseMs / 1000).toFixed(1)}s</span>
                </div>
                <div className="live-metric">
                  <span className="live-metric-label">Resolution rate</span>
                  <span className="live-metric-val green">98%</span>
                </div>
                <div className="live-metric">
                  <span className="live-metric-label">Messages handled</span>
                  <span className="live-metric-val">{demo.messagesHandled.toLocaleString('en-IN')}</span>
                </div>
                <div className="live-metric">
                  <span className="live-metric-label">Active agents</span>
                  <span className="live-metric-val green">3 / 3</span>
                </div>
              </div>
            </div>
      
            {/* DEMO STAGE */}
            <div className="demo-stage" id="demo-stage" aria-live="polite">
              <ChatPanel demo={demo} active={demo.channel === "chat"} />
              <VoicePanel demo={demo} active={demo.channel === "voice"} />
              <EmailPanel demo={demo} active={demo.channel === "email"} />
              <WhatsappPanel demo={demo} active={demo.channel === "whatsapp"} />
              <GptPanel demo={demo} active={demo.channel === "gpt"} />
            </div>{/* /demo-stage */}
          </div>{/* /demo-ws-grid */}
        </div>
      </div>
      
      {/* ════ RESULTS ════ */}
      <section id="sec-results" aria-labelledby="results-heading">
        <div className="container">
          <div className="results-eyebrow reveal">
            <div className="results-eyebrow-line" aria-hidden="true"></div>
            By the numbers
          </div>
          <h2 id="results-heading" className="results-h2 reveal reveal-delay-1">What happens when<br />Nemora goes live.</h2>
          <p className="results-sub reveal reveal-delay-2">Measured across 40+ businesses in Chennai — clinics, coaches, and service providers — in the first 30 days.</p>
          <div className="results-grid reveal reveal-delay-3" role="list">
            <div className="result-cell" role="listitem">
              <Counter className="result-num" target={98} suffix="%" />
              <div className="result-label">Query response rate — no missed leads, no unanswered messages</div>
              <div className="result-tag">
                <svg viewBox="0 0 12 12" fill="none"><path d="M2 9L5 6L7 8L10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Response rate
              </div>
            </div>
            <div className="result-cell" role="listitem">
              <Counter className="result-num" target={3} suffix="×" />
              <div className="result-label">Faster client response time, day one — no warm-up period required</div>
              <div className="result-tag">
                <svg viewBox="0 0 12 12" fill="none"><path d="M2 9L5 6L7 8L10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Response speed
              </div>
            </div>
            <div className="result-cell" role="listitem">
              <Counter className="result-num" target={4} suffix="h" />
              <div className="result-label">Average hours saved per day on repetitive client communications</div>
              <div className="result-tag">
                <svg viewBox="0 0 12 12" fill="none"><path d="M2 9L5 6L7 8L10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Daily time saved
              </div>
            </div>
            <div className="result-cell" role="listitem">
              <Counter className="result-num" target={72} suffix="h" />
              <div className="result-label">From briefing to your AI agent going live — fully set up and trained</div>
              <div className="result-tag">
                <svg viewBox="0 0 12 12" fill="none"><path d="M2 9L5 6L7 8L10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Time to launch
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ HOW IT WORKS ════ */}
      <section id="sec-how" aria-labelledby="how-heading">
        <div className="container">
          <div className="how-header">
            <div className="results-eyebrow reveal" style={{ justifyContent: 'center' }}>
              <div className="results-eyebrow-line" aria-hidden="true"></div>
              How it works
              <div className="results-eyebrow-line" aria-hidden="true"></div>
            </div>
            <h2 id="how-heading" className="results-h2 reveal reveal-delay-1" style={{ textAlign: 'center' }}>Live in 72 hours,<br />not 72 days.</h2>
          </div>
          <div className="how-grid">
            <div className="how-step reveal">
              <div className="how-num-wrap"><div className="how-num">01</div></div>
              <div className="how-step-title">Discovery call</div>
              <div className="how-step-sub">30 minutes. We map your business, your clients, and the exact scenarios your AI needs to handle.</div>
            </div>
            <div className="how-step reveal reveal-delay-1">
              <div className="how-num-wrap"><div className="how-num">02</div></div>
              <div className="how-step-title">We build & train</div>
              <div className="how-step-sub">We configure your AI agent — chat, voice, email, or WhatsApp — trained on your voice, your services, your FAQs.</div>
            </div>
            <div className="how-step reveal reveal-delay-2">
              <div className="how-num-wrap"><div className="how-num">03</div></div>
              <div className="how-step-title">Review & go live</div>
              <div className="how-step-sub">You review a live sandbox. We refine it together. Then we flip the switch — your AI goes live across every channel.</div>
            </div>
            <div className="how-step reveal reveal-delay-3">
              <div className="how-num-wrap"><div className="how-num">04</div></div>
              <div className="how-step-title">Monitor & improve</div>
              <div className="how-step-sub">We watch performance monthly, refine edge cases, and add new scenarios as your business grows.</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ INDUSTRY SHOWCASE ════ */}
      <section id="sec-showcase" aria-labelledby="showcase-heading">
        <div className="container">
          <div className="results-eyebrow reveal">
            <div className="results-eyebrow-line" aria-hidden="true"></div>
            Built for your industry
          </div>
          <h2 id="showcase-heading" className="results-h2 reveal reveal-delay-1">Every business.<br />One intelligence.</h2>
          <div className="showcase-grid">
            <div className="showcase-card reveal">
              <div className="sc-icon" style={{ background: 'rgba(110,86,255,0.12)' }}>
                <svg viewBox="0 0 20 20" fill="none"><path d="M10 2v16M2 10h16M6 6l8 8M14 6l-8 8" stroke="#6E56FF" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <div className="sc-title">Clinics &amp; Health Providers</div>
              <div className="sc-sub">Appointment scheduling, patient FAQ, prep instructions, follow-up reminders — handled 24/7 without a front desk.</div>
              <div className="sc-features">
                <div className="sc-feature">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  WhatsApp appointment bot
                </div>
                <div className="sc-feature">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Patient FAQ auto-resolver
                </div>
                <div className="sc-feature">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Post-visit follow-up sequences
                </div>
              </div>
              <div className="sc-result" style={{ background: 'rgba(110,86,255,0.08)', border: '1px solid rgba(110,86,255,0.2)', color: 'rgba(190,180,255,0.9)' }}>
                <svg viewBox="0 0 14 14" fill="none" style={{ width: '14px', height: '14px' }}><path d="M2 9L5 6L7 8L10 4" stroke="#6E56FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Orthocare: Zero missed queries in 3 months
              </div>
            </div>
      
            <div className="showcase-card reveal reveal-delay-1">
              <div className="sc-icon" style={{ background: 'rgba(255,92,53,0.12)' }}>
                <svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="6" r="3.5" stroke="#FF5C35" strokeWidth="1.5" /><path d="M2 18c0-4.42 3.58-8 8-8s8 3.58 8 8" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <div className="sc-title">Coaches &amp; Consultants</div>
              <div className="sc-sub">Pre-sale GPT that sells while you sleep. Answers methodology, pricing, and programme questions with your exact voice.</div>
              <div className="sc-features">
                <div className="sc-feature">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Custom GPT trained on your content
                </div>
                <div className="sc-feature">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Programme sign-up automation
                </div>
                <div className="sc-feature">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  DM auto-qualifier for leads
                </div>
              </div>
              <div className="sc-result" style={{ background: 'rgba(255,92,53,0.08)', border: '1px solid rgba(255,92,53,0.2)', color: 'rgba(255,200,180,0.9)' }}>
                <svg viewBox="0 0 14 14" fill="none" style={{ width: '14px', height: '14px' }}><path d="M2 9L5 6L7 8L10 4" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Subha Priya: 2× sign-ups in 6 weeks
              </div>
            </div>
      
            <div className="showcase-card reveal reveal-delay-2">
              <div className="sc-icon" style={{ background: 'rgba(16,185,129,0.12)' }}>
                <svg viewBox="0 0 20 20" fill="none"><path d="M2 3h16v11H2zM6 14v3M14 14v3M4 17h12" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 7l8 5 8-5" stroke="#10B981" strokeWidth="1.5" /></svg>
              </div>
              <div className="sc-title">E-commerce Stores</div>
              <div className="sc-sub">Resolve returns, track orders, answer product questions — the AI handles 90% of support tickets without human intervention.</div>
              <div className="sc-features">
                <div className="sc-feature">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Return &amp; refund automation
                </div>
                <div className="sc-feature">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Order tracking chatbot
                </div>
                <div className="sc-feature">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Product recommendation engine
                </div>
              </div>
              <div className="sc-result" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: 'rgba(100,240,180,0.9)' }}>
                <svg viewBox="0 0 14 14" fill="none" style={{ width: '14px', height: '14px' }}><path d="M2 9L5 6L7 8L10 4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Velvet Roots: 4h/day back, zero hires
              </div>
            </div>
      
            <div className="showcase-card reveal reveal-delay-3">
              <div className="sc-icon" style={{ background: 'rgba(245,158,11,0.12)' }}>
                <svg viewBox="0 0 20 20" fill="none"><rect x="2" y="5" width="16" height="12" rx="2" stroke="#F59E0B" strokeWidth="1.5" /><path d="M6 5V4a4 4 0 018 0v1" stroke="#F59E0B" strokeWidth="1.5" /><path d="M10 10v3M8 11h4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <div className="sc-title">Service Businesses</div>
              <div className="sc-sub">Interior designers, studios, agencies — AI that speaks your brand voice so perfectly that clients can't tell the difference.</div>
              <div className="sc-features">
                <div className="sc-feature">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  On-brand 24/7 responses
                </div>
                <div className="sc-feature">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Lead qualification &amp; routing
                </div>
                <div className="sc-feature">
                  <svg viewBox="0 0 14 14" fill="none"><path d="M2 7l3 3 7-7" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Knowledge base assistant
                </div>
              </div>
              <div className="sc-result" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', color: 'rgba(255,220,100,0.9)' }}>
                <svg viewBox="0 0 14 14" fill="none" style={{ width: '14px', height: '14px' }}><path d="M2 9L5 6L7 8L10 4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Studio Hues: Indistinguishable from human
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ CTA ════ */}
      <section id="sec-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-badge reveal" aria-label="No setup fee">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" aria-hidden="true"><circle cx="3" cy="3" r="3" fill="#6E56FF" /></svg>
            Live in 72 hours · No setup fee
          </div>
          <h2 id="cta-heading" className="cta-h2 reveal reveal-delay-1">Ready to see your<br />business run on<br />intelligence?</h2>
          <p className="cta-sub reveal reveal-delay-2">Book a 30-minute call. We'll build and show you a live demo of your custom AI agent — before you commit to anything.</p>
          <div className="cta-buttons reveal reveal-delay-3">
            <button className="cta-btn-primary" onClick={() => router.push("/contact")}>
              <svg viewBox="0 0 18 18" fill="none" style={{ width: '16px', height: '16px' }} aria-hidden="true"><path d="M9 1.5L16.5 5.25V12.75L9 16.5L1.5 12.75V5.25L9 1.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="9" cy="9" r="3" fill="white" fillOpacity="0.9" /></svg>
              Book a free demo
            </button>
            <button className="cta-btn-secondary" onClick={() => router.push("/pricing")}>See pricing →</button>
          </div>
          <div className="cta-note reveal reveal-delay-4">No commitment required · Cancel anytime · Setup included</div>
        </div>
      </section>
      
      {/* ════ FOOTER ════ */}
    </div>
  );
}
