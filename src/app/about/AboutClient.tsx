'use client';

import Link from 'next/link';
import { useReveal } from '@/lib/useReveal';
import StoryTimeline from '@/components/StoryTimeline';
import './about.scoped.css';

export default function Page() {
  useReveal();

  return (
    <div className="page-about">
      {/* ════ NAV ════ */}
      
      
      {/* ════ HERO ════ */}
      <section id="about-hero" aria-label="About Nemora">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="hero-radial-glow" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-2" aria-hidden="true"></div>
      
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <div className="eyebrow-dot" aria-hidden="true"></div>
              Our Story
            </div>
            <h1 className="hero-h1">
              Built for the<br />
              business owners<br />
              <span className="hi-accent">who do it all</span>
            </h1>
            <p className="hero-sub">
              Nemora was born in Chennai from one simple observation: the best local businesses were losing clients not because of the quality of their service — but because they couldn't be everywhere at once.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="hero-btn-primary">
                <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 1.5L16.5 5.25V12.75L9 16.5L1.5 12.75V5.25L9 1.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="9" cy="9" r="3" fill="white" fillOpacity="0.9" /></svg>
                Book a free demo
              </Link>
              <a href="#sec-team" className="hero-btn-secondary">
                Meet the team ↓
              </a>
            </div>
          </div>
      
          {/* Right visual — team card mockup */}
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card">
              <div className="hc-topbar">
                <div className="hc-dots">
                  <div className="hc-dot" style={{ background: 'rgba(255,92,92,0.6)' }}></div>
                  <div className="hc-dot" style={{ background: 'rgba(255,185,56,0.6)' }}></div>
                  <div className="hc-dot" style={{ background: 'rgba(52,211,153,0.6)' }}></div>
                </div>
                <div style={{ fontSize: '11.5px', fontWeight: '600', color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>nemora · team</div>
                <div className="hc-tag" style={{ marginLeft: 'auto' }}>
                  <div className="hc-tag-dot"></div>Chennai
                </div>
              </div>
              <div className="hc-body">
                <div className="team-mini-grid">
                  <div className="tmg-card">
                    <div className="tmg-avatar" style={{ background: 'linear-gradient(135deg,#6E56FF,#a594ff)' }}>AK</div>
                    <div className="tmg-name">Arjun K.</div>
                    <div className="tmg-role">Co-Founder & CEO</div>
                    <div className="tmg-badge">ai-strategy</div>
                  </div>
                  <div className="tmg-card">
                    <div className="tmg-avatar" style={{ background: 'linear-gradient(135deg,#10B981,#34d399)' }}>PR</div>
                    <div className="tmg-name">Priya R.</div>
                    <div className="tmg-role">Co-Founder & CTO</div>
                    <div className="tmg-badge">ml-infra</div>
                  </div>
                  <div className="tmg-card">
                    <div className="tmg-avatar" style={{ background: 'linear-gradient(135deg,#FF5C35,#f59e0b)' }}>DV</div>
                    <div className="tmg-name">Dhruv V.</div>
                    <div className="tmg-role">Head of Product</div>
                    <div className="tmg-badge">ux-systems</div>
                  </div>
                  <div className="tmg-card">
                    <div className="tmg-avatar" style={{ background: 'linear-gradient(135deg,#60a5fa,#3b82f6)' }}>SK</div>
                    <div className="tmg-name">Sana K.</div>
                    <div className="tmg-role">Head of Growth</div>
                    <div className="tmg-badge">go-to-market</div>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="hero-stat-row">
              <div className="hero-stat-mini">
                <div className="hsm-val"><span data-target="40" data-suffix="+" className="acc">40+</span></div>
                <div className="hsm-label">Businesses served</div>
              </div>
              <div className="hero-stat-mini">
                <div className="hsm-val"><span data-target="72" data-suffix="h" className="acc">72h</span></div>
                <div className="hsm-label">Avg setup time</div>
              </div>
              <div className="hero-stat-mini">
                <div className="hsm-val"><span data-target="98" data-suffix="%" className="acc">98%</span></div>
                <div className="hsm-label">Client retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ MISSION ════ */}
      <section id="sec-mission" aria-labelledby="mission-heading">
        <div className="mission-bg" aria-hidden="true"></div>
        <div className="container">
          <div className="mission-inner">
            <div className="mission-left">
              <div className="sec-eyebrow reveal">
                <div className="sec-eyebrow-dot" aria-hidden="true"></div>
                Our Mission
              </div>
              <h2 id="mission-heading" className="sec-h2 reveal reveal-delay-1">
                Intelligence that<br />works <span style={{ color: 'var(--accent)' }}>while you rest</span>
              </h2>
              <p className="mission-body reveal reveal-delay-2">
                We believe every local business — the physiotherapist, the boutique owner, the solo coach — deserves the same AI infrastructure that Fortune 500 companies spend millions building. We've democratised it.
              </p>
              <p className="mission-body reveal reveal-delay-3">
                Nemora isn't a chatbot. It's an intelligence layer that learns your voice, your services, your customers — and handles everything you'd normally have to stop your day for.
              </p>
            </div>
            <div className="mission-right">
              <div className="mission-pillar reveal reveal-delay-1">
                <div className="mp-icon">
                  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" /><path d="M6 9l2.5 2.5L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div className="mp-content">
                  <div className="mp-title">No missed opportunity</div>
                  <div className="mp-desc">Every inquiry, every after-hours question, every booking request — caught, responded to, and logged. Revenue that used to slip through the cracks stays in your business.</div>
                </div>
              </div>
              <div className="mission-pillar reveal reveal-delay-2">
                <div className="mp-icon" style={{ background: 'rgba(16,185,129,0.12)', borderColor: 'rgba(16,185,129,0.25)' }}>
                  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 1.5C5 1.5 1.5 5 1.5 9S5 16.5 9 16.5 16.5 13 16.5 9" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" /><path d="M12.5 1.5v5h5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div className="mp-content">
                  <div className="mp-title">Built for your context</div>
                  <div className="mp-desc">Not a generic chatbot you configure yourself. We build your knowledge base, train your agent, and tune it until it sounds like you — all within 72 hours.</div>
                </div>
              </div>
              <div className="mission-pillar reveal reveal-delay-3">
                <div className="mp-icon" style={{ background: 'rgba(255,92,53,0.1)', borderColor: 'rgba(255,92,53,0.22)' }}>
                  <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 1.5L11.5 6.5L17 7.5L13 11.5L14 17L9 14.5L4 17L5 11.5L1 7.5L6.5 6.5L9 1.5Z" stroke="#FF5C35" strokeWidth="1.5" strokeLinejoin="round" /></svg>
                </div>
                <div className="mp-content">
                  <div className="mp-title">Quality over quantity</div>
                  <div className="mp-desc">We're not trying to onboard every business in India. We work deeply with a focused cohort of local businesses, deliver extraordinary results, then grow from trust.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ FOUNDERS STORY — TIMELINE ════ */}
      <section id="sec-story" aria-labelledby="story-heading">
        <div className="story-bg-line" aria-hidden="true"></div>
        <div className="container">
          <div className="story-header">
            <div className="sec-eyebrow reveal" style={{ justifyContent: 'center' }}>
              <div className="sec-eyebrow-dot" aria-hidden="true"></div>
              How it started
            </div>
            <h2 id="story-heading" className="sec-h2 reveal reveal-delay-1" style={{ textAlign: 'center' }}>The story behind the product</h2>
            <p className="sec-sub reveal reveal-delay-2" style={{ textAlign: 'center', margin: '0 auto' }}>Every great product starts with a problem the founders felt personally. Ours was watching brilliant local businesses lose clients to silence.</p>
          </div>
      
          <div className="timeline" role="list">
            <div className="tl-spine" aria-hidden="true">
              <StoryTimeline />
            </div>
      
            {/* Row 1 */}
            <div className="tl-row reveal" role="listitem">
              <div className="tl-left">
                <div className="tl-year">Early 2022</div>
                <div className="tl-title">The problem becomes personal</div>
                <div className="tl-desc">Co-founder Arjun's family physiotherapy clinic in Adyar starts losing bookings to competitors — not because of care quality, but because their phone lines were unreachable on weekends. That gap between great service and client communication plants the seed for Nemora.</div>
                <div className="tl-tag">📍 Adyar, Chennai</div>
              </div>
              <div className="tl-node" aria-hidden="true">
                <div className="tl-node-inner">
                  <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" fill="currentColor" /></svg>
                </div>
              </div>
              <div className="tl-right"></div>
            </div>
      
            {/* Row 2 */}
            <div className="tl-row reveal" role="listitem">
              <div className="tl-left"></div>
              <div className="tl-node" aria-hidden="true">
                <div className="tl-node-inner">
                  <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" fill="currentColor" /></svg>
                </div>
              </div>
              <div className="tl-right">
                <div className="tl-year">Late 2022</div>
                <div className="tl-title">Prototype in a WhatsApp group</div>
                <div className="tl-desc">Priya (CTO) builds the first Nemora prototype — a WhatsApp bot trained on the clinic's FAQ document. Within 3 weeks, after-hours enquiries drop to zero missed messages. The proof of concept is undeniable.</div>
                <div className="tl-tag">🤖 First working prototype</div>
              </div>
            </div>
      
            {/* Row 3 */}
            <div className="tl-row reveal" role="listitem">
              <div className="tl-left">
                <div className="tl-year">Mid 2023</div>
                <div className="tl-title">First 10 paying businesses</div>
                <div className="tl-desc">Word spreads through Chennai's business community. A yoga studio in Nungambakkam, a skincare brand in T. Nagar, a law firm in Anna Salai — all sign on. Nemora's onboarding model (build, train, launch in 72h) is battle-tested and proven.</div>
                <div className="tl-tag">🚀 10 clients · ₹0 in ads</div>
              </div>
              <div className="tl-node" aria-hidden="true">
                <div className="tl-node-inner">
                  <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" fill="currentColor" /></svg>
                </div>
              </div>
              <div className="tl-right"></div>
            </div>
      
            {/* Row 4 */}
            <div className="tl-row reveal" role="listitem">
              <div className="tl-left"></div>
              <div className="tl-node" aria-hidden="true">
                <div className="tl-node-inner">
                  <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" fill="currentColor" /></svg>
                </div>
              </div>
              <div className="tl-right">
                <div className="tl-year">Early 2024</div>
                <div className="tl-title">Multi-channel expansion</div>
                <div className="tl-desc">Voice intelligence and email orchestration ship. Nemora is no longer a WhatsApp bot — it's a full client-communication layer. Businesses report handling 3× more enquiries with the same team size.</div>
                <div className="tl-tag">📞 Voice · 💬 Chat · 📧 Email</div>
              </div>
            </div>
      
            {/* Row 5 */}
            <div className="tl-row reveal" role="listitem">
              <div className="tl-left">
                <div className="tl-year">Today</div>
                <div className="tl-title">40+ businesses running on Nemora</div>
                <div className="tl-desc">Nemora now powers over 40 businesses across Chennai and beyond — from solo health coaches to multi-location clinics. Zero missed queries. 98% client retention. And we're just getting started.</div>
                <div className="tl-tag" style={{ background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.25)', color: '#10B981' }}>✓ Live & growing</div>
              </div>
              <div className="tl-node" aria-hidden="true">
                <div className="tl-node-inner">
                  <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" fill="currentColor" /></svg>
                </div>
              </div>
              <div className="tl-right"></div>
            </div>
      
          </div>
        </div>
      </section>
      
      {/* ════ WHY CHENNAI ════ */}
      <section id="sec-chennai" aria-labelledby="chennai-heading">
        <div className="chennai-bg" aria-hidden="true"></div>
        <div className="container">
          <div className="chennai-inner">
            <div className="chennai-left">
              <div className="sec-eyebrow reveal">
                <div className="sec-eyebrow-dot" aria-hidden="true" style={{ background: '#4a36e8' }}></div>
                <span style={{ color: '#4a36e8' }}>Why Chennai</span>
              </div>
              <h2 id="chennai-heading" className="sec-h2 light reveal reveal-delay-1">We're not from<br />Silicon Valley.<br /><span style={{ color: '#4a36e8' }}>That's the point.</span></h2>
              <p className="sec-sub light reveal reveal-delay-2">Chennai isn't a test market for us. It's home. We understand the rhythms of local business here — the importance of trust, the role of WhatsApp, the way referrals travel through communities.</p>
      
              <div className="chennai-cards">
                <div className="chennai-card reveal reveal-delay-2">
                  <div className="cc-icon">
                    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" stroke="#6E56FF" strokeWidth="1.5" /><path d="M9 5v4l3 2" stroke="#6E56FF" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                  <div className="cc-content">
                    <div className="cc-title">Indian business hours are different</div>
                    <div className="cc-desc">Most Chennai businesses get enquiries until 10 PM, on Sundays, on holidays. We built for that reality — not 9-to-5 American office culture.</div>
                  </div>
                </div>
                <div className="chennai-card reveal reveal-delay-3">
                  <div className="cc-icon">
                    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M14 4H4a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2z" stroke="#10B981" strokeWidth="1.5" /><path d="M2 7l7 4 7-4" stroke="#10B981" strokeWidth="1.5" /></svg>
                  </div>
                  <div className="cc-content">
                    <div className="cc-title">Tamil language support, natively</div>
                    <div className="cc-desc">Our agents handle Tamil-English code-switching naturally — because that's how Chennai customers actually communicate, not how textbooks say they do.</div>
                  </div>
                </div>
                <div className="chennai-card reveal reveal-delay-4">
                  <div className="cc-icon">
                    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 9l6-6 6 6M5 7.5V15h3v-3h2v3h3V7.5" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div className="cc-content">
                    <div className="cc-title">Local trust built face-to-face</div>
                    <div className="cc-desc">We onboard every client ourselves. No self-serve forms, no 30-minute demos. You speak to our team, we understand your business, and we build it right.</div>
                  </div>
                </div>
              </div>
            </div>
      
            <div className="chennai-right reveal-right">
              <div className="chennai-map">
                <div className="map-topbar">
                  <div className="map-dots">
                    <div className="map-dot" style={{ background: 'rgba(255,92,92,0.5)' }}></div>
                    <div className="map-dot" style={{ background: 'rgba(255,185,56,0.5)' }}></div>
                    <div className="map-dot" style={{ background: 'rgba(52,211,153,0.5)' }}></div>
                  </div>
                  <div className="map-label">nemora · coverage</div>
                </div>
                <div className="map-visual">
                  {/* SVG city visualization */}
                  <svg width="100%" height="100%" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Map of Chennai neighborhoods where Nemora operates">
                    {/* Grid lines */}
                    <g stroke="rgba(110,86,255,0.08)" strokeWidth="1">
                      <line x1="0" y1="40" x2="400" y2="40" />
                      <line x1="0" y1="80" x2="400" y2="80" />
                      <line x1="0" y1="120" x2="400" y2="120" />
                      <line x1="0" y1="160" x2="400" y2="160" />
                      <line x1="0" y1="200" x2="400" y2="200" />
                      <line x1="0" y1="240" x2="400" y2="240" />
                      <line x1="80" y1="0" x2="80" y2="280" />
                      <line x1="160" y1="0" x2="160" y2="280" />
                      <line x1="240" y1="0" x2="240" y2="280" />
                      <line x1="320" y1="0" x2="320" y2="280" />
                    </g>
                    {/* Connector lines between nodes */}
                    <g stroke="rgba(110,86,255,0.15)" strokeWidth="1" strokeDasharray="4 3">
                      <line x1="180" y1="90" x2="240" y2="140" />
                      <line x1="180" y1="90" x2="120" y2="140" />
                      <line x1="240" y1="140" x2="280" y2="190" />
                      <line x1="120" y1="140" x2="140" y2="190" />
                      <line x1="140" y1="190" x2="200" y2="220" />
                      <line x1="280" y1="190" x2="200" y2="220" />
                    </g>
                    {/* Pins */}
                    {/* T. Nagar (center-top) */}
                    <g transform="translate(180,90)">
                      <circle r="20" fill="rgba(110,86,255,0.1)" />
                      <circle r="8" fill="rgba(110,86,255,0.3)" />
                      <circle r="4" fill="#6E56FF" />
                      <rect x="-28" y="-44" width="56" height="20" rx="4" fill="white" fillOpacity="0.9" />
                      <text x="0" y="-29" fontSize="9" fontWeight="700" fill="#3a3a6e" textAnchor="middle" fontFamily="Inter">T. Nagar</text>
                    </g>
                    {/* Nungambakkam */}
                    <g transform="translate(120,140)">
                      <circle r="16" fill="rgba(16,185,129,0.1)" />
                      <circle r="6" fill="rgba(16,185,129,0.3)" />
                      <circle r="3" fill="#10B981" />
                      <rect x="-48" y="-32" width="72" height="18" rx="4" fill="white" fillOpacity="0.9" />
                      <text x="-12" y="-18" fontSize="8" fontWeight="700" fill="#3a3a6e" textAnchor="middle" fontFamily="Inter">Nungambakkam</text>
                    </g>
                    {/* Adyar */}
                    <g transform="translate(240,140)">
                      <circle r="14" fill="rgba(255,92,53,0.1)" />
                      <circle r="5.5" fill="rgba(255,92,53,0.3)" />
                      <circle r="2.8" fill="#FF5C35" />
                      <rect x="-22" y="-32" width="44" height="18" rx="4" fill="white" fillOpacity="0.9" />
                      <text x="0" y="-18" fontSize="8" fontWeight="700" fill="#3a3a6e" textAnchor="middle" fontFamily="Inter">Adyar</text>
                    </g>
                    {/* Anna Nagar */}
                    <g transform="translate(280,190)">
                      <circle r="12" fill="rgba(245,158,11,0.1)" />
                      <circle r="5" fill="rgba(245,158,11,0.25)" />
                      <circle r="2.5" fill="#F59E0B" />
                      <rect x="-36" y="10" width="66" height="18" rx="4" fill="white" fillOpacity="0.9" />
                      <text x="-3" y="23" fontSize="8" fontWeight="700" fill="#3a3a6e" textAnchor="middle" fontFamily="Inter">Anna Nagar</text>
                    </g>
                    {/* Velachery */}
                    <g transform="translate(140,190)">
                      <circle r="10" fill="rgba(96,165,250,0.1)" />
                      <circle r="4" fill="rgba(96,165,250,0.25)" />
                      <circle r="2" fill="#60a5fa" />
                      <rect x="-28" y="10" width="56" height="18" rx="4" fill="white" fillOpacity="0.9" />
                      <text x="0" y="23" fontSize="8" fontWeight="700" fill="#3a3a6e" textAnchor="middle" fontFamily="Inter">Velachery</text>
                    </g>
                    {/* Anna Salai */}
                    <g transform="translate(200,220)">
                      <circle r="12" fill="rgba(110,86,255,0.1)" />
                      <circle r="5" fill="rgba(110,86,255,0.25)" />
                      <circle r="2.5" fill="#6E56FF" />
                      <rect x="-28" y="-32" width="56" height="18" rx="4" fill="white" fillOpacity="0.9" />
                      <text x="0" y="-18" fontSize="8" fontWeight="700" fill="#3a3a6e" textAnchor="middle" fontFamily="Inter">Anna Salai</text>
                    </g>
                  </svg>
                </div>
                <div className="map-footer">
                  <div className="map-footer-stat">
                    <div className="map-footer-val">6+</div>
                    <div className="map-footer-lbl">Neighborhoods</div>
                  </div>
                  <div className="map-footer-stat">
                    <div className="map-footer-val">40+</div>
                    <div className="map-footer-lbl">Businesses live</div>
                  </div>
                  <div className="map-footer-stat">
                    <div className="map-footer-val">24/7</div>
                    <div className="map-footer-lbl">Response coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ TEAM ════ */}
      <section id="sec-team" aria-labelledby="team-heading">
        <div className="team-bg" aria-hidden="true"></div>
        <div className="container">
          <div className="team-header">
            <div className="sec-eyebrow reveal">
              <div className="sec-eyebrow-dot" aria-hidden="true"></div>
              The Team
            </div>
            <h2 id="team-heading" className="sec-h2 reveal reveal-delay-1">Small team,<br />strong opinions</h2>
            <p className="sec-sub reveal reveal-delay-2">We keep the team lean on purpose. Every person here talks directly to clients, ships code, and stays close to the product. No layers, no hand-offs.</p>
          </div>
      
          <div className="team-grid" role="list">
            {/* Card 1 */}
            <div className="team-card reveal reveal-delay-1" role="listitem">
              <div className="tc-header">
                <div className="tc-header-bg" style={{ '--color-a': 'rgba(110,86,255,0.18)' } as React.CSSProperties}></div>
                <div className="tc-avatar" style={{ background: 'linear-gradient(135deg,#6E56FF,#a594ff)' }}>AK</div>
                <div className="tc-name">Arjun Krishnamurthy</div>
                <div className="tc-role">Co-Founder &amp; CEO</div>
              </div>
              <div className="tc-body">
                <div className="tc-bio">Ex-product manager at a B2B SaaS company in Bangalore. Returned to Chennai to solve a problem he watched his family face. Obsessed with local business economics and how technology changes unit economics at the SMB level.</div>
                <div className="tc-skills">
                  <span className="tc-skill">AI Strategy</span>
                  <span className="tc-skill">Product</span>
                  <span className="tc-skill">Sales</span>
                </div>
              </div>
            </div>
      
            {/* Card 2 */}
            <div className="team-card reveal reveal-delay-2" role="listitem">
              <div className="tc-header">
                <div className="tc-header-bg" style={{ '--color-a': 'rgba(16,185,129,0.15)' } as React.CSSProperties}></div>
                <div className="tc-avatar" style={{ background: 'linear-gradient(135deg,#10B981,#34d399)' }}>PR</div>
                <div className="tc-name">Priya Raghavan</div>
                <div className="tc-role">Co-Founder &amp; CTO</div>
              </div>
              <div className="tc-body">
                <div className="tc-bio">ML engineer who spent 4 years building NLP systems at a fintech startup. Believes the hardest part of AI isn't the model — it's understanding what the customer actually needs. Architects every Nemora knowledge base from scratch.</div>
                <div className="tc-skills">
                  <span className="tc-skill">ML Infra</span>
                  <span className="tc-skill">NLP</span>
                  <span className="tc-skill">Systems</span>
                </div>
              </div>
            </div>
      
            {/* Card 3 */}
            <div className="team-card reveal reveal-delay-3" role="listitem">
              <div className="tc-header">
                <div className="tc-header-bg" style={{ '--color-a': 'rgba(255,92,53,0.12)' } as React.CSSProperties}></div>
                <div className="tc-avatar" style={{ background: 'linear-gradient(135deg,#FF5C35,#f59e0b)' }}>DV</div>
                <div className="tc-name">Dhruv Venkatesh</div>
                <div className="tc-role">Head of Product</div>
              </div>
              <div className="tc-body">
                <div className="tc-bio">Interaction designer turned product lead. Spent years making enterprise software feel human before joining Nemora. Responsible for the dashboard, the onboarding flow, and every pixel the client touches. Thinks good UX is invisible.</div>
                <div className="tc-skills">
                  <span className="tc-skill">UX Systems</span>
                  <span className="tc-skill">Frontend</span>
                  <span className="tc-skill">Research</span>
                </div>
              </div>
            </div>
      
            {/* Card 4 */}
            <div className="team-card reveal reveal-delay-1" role="listitem">
              <div className="tc-header">
                <div className="tc-header-bg" style={{ '--color-a': 'rgba(96,165,250,0.12)' } as React.CSSProperties}></div>
                <div className="tc-avatar" style={{ background: 'linear-gradient(135deg,#60a5fa,#3b82f6)' }}>SK</div>
                <div className="tc-name">Sana Khan</div>
                <div className="tc-role">Head of Growth</div>
              </div>
              <div className="tc-body">
                <div className="tc-bio">Grew up in Chennai, studied at IIT Madras, worked in marketing for consumer brands before joining Nemora at inception. Deeply understands how local business owners make decisions. Handles every client relationship from first call to go-live.</div>
                <div className="tc-skills">
                  <span className="tc-skill">GTM</span>
                  <span className="tc-skill">Partnerships</span>
                  <span className="tc-skill">Content</span>
                </div>
              </div>
            </div>
      
            {/* Card 5 */}
            <div className="team-card reveal reveal-delay-2" role="listitem">
              <div className="tc-header">
                <div className="tc-header-bg" style={{ '--color-a': 'rgba(245,158,11,0.12)' } as React.CSSProperties}></div>
                <div className="tc-avatar" style={{ background: 'linear-gradient(135deg,#F59E0B,#fbbf24)' }}>RM</div>
                <div className="tc-name">Rohit Murugesan</div>
                <div className="tc-role">AI Engineer</div>
              </div>
              <div className="tc-body">
                <div className="tc-bio">Masters in CS from BITS Pilani. Builds and maintains the core agent infrastructure — the prompt engineering, the retrieval pipelines, the safety guardrails. Has probably read more client FAQs than any human alive.</div>
                <div className="tc-skills">
                  <span className="tc-skill">LLMs</span>
                  <span className="tc-skill">RAG</span>
                  <span className="tc-skill">Python</span>
                </div>
              </div>
            </div>
      
            {/* Card 6 — Open role */}
            <div className="team-card reveal reveal-delay-3" role="listitem" style={{ borderStyle: 'dashed', opacity: '.7', background: 'transparent' }}>
              <div className="tc-header" style={{ background: 'var(--ink-2)' }}>
                <div className="tc-avatar" style={{ background: 'var(--ink-3)', border: '1.5px dashed var(--border-md)' }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M11 4v14M4 11h14" stroke="var(--text-4)" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </div>
                <div className="tc-name" style={{ color: 'var(--text-3)' }}>You?</div>
                <div className="tc-role">We're hiring</div>
              </div>
              <div className="tc-body">
                <div className="tc-bio">We're looking for a full-stack engineer and a customer success lead who care deeply about local businesses. Small team, meaningful equity, real impact from day one.</div>
                <div className="tc-skills">
                  <span className="tc-skill" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'var(--border)' }}>Full-stack</span>
                  <span className="tc-skill" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'var(--border)' }}>Customer Success</span>
                </div>
              </div>
            </div>
          </div>
      
          {/* Advisors strip */}
          <div className="advisors-strip reveal">
            <div className="advisors-label">Advisors</div>
            <div className="advisors-list">
              <div className="advisor-item">
                <div className="advisor-avatar" style={{ background: 'linear-gradient(135deg,#6E56FF,#a594ff)' }}>VB</div>
                <div className="advisor-info">
                  <strong>Vikram Bhatt</strong>
                  <span>Ex-VP, Freshworks</span>
                </div>
              </div>
              <div className="advisor-item">
                <div className="advisor-avatar" style={{ background: 'linear-gradient(135deg,#10B981,#34d399)' }}>MS</div>
                <div className="advisor-info">
                  <strong>Meera Subramanian</strong>
                  <span>Partner, IAN Fund</span>
                </div>
              </div>
              <div className="advisor-item">
                <div className="advisor-avatar" style={{ background: 'linear-gradient(135deg,#F59E0B,#fbbf24)' }}>RK</div>
                <div className="advisor-info">
                  <strong>Rajan Kumar</strong>
                  <span>Founder, 10x Academy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ VALUES ════ */}
      <section id="sec-values" aria-labelledby="values-heading">
        <div className="values-bg" aria-hidden="true"></div>
        <div className="container">
          <div className="values-header">
            <div className="sec-eyebrow reveal" style={{ justifyContent: 'center' }}>
              <div className="sec-eyebrow-dot" aria-hidden="true"></div>
              What we believe
            </div>
            <h2 id="values-heading" className="sec-h2 reveal reveal-delay-1" style={{ textAlign: 'center' }}>Three principles<br />everything is built on</h2>
          </div>
      
          <div className="values-grid" role="list">
            {/* Value 1 */}
            <div className="value-card reveal reveal-delay-1" style={{ '--val-color': '#6E56FF' } as React.CSSProperties} role="listitem">
              <div className="value-number">01</div>
              <div className="value-icon" style={{ background: 'rgba(110,86,255,0.12)', border: '1px solid rgba(110,86,255,0.2)' }}>
                <svg viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M11 2L14 8.5L21 9.5L16 14.5L17.5 21.5L11 18L4.5 21.5L6 14.5L1 9.5L8 8.5L11 2Z" stroke="#6E56FF" strokeWidth="1.5" strokeLinejoin="round" /></svg>
              </div>
              <div className="value-title">Earned trust, not implied</div>
              <div className="value-desc">Every business that trusts us with their client communication is trusting us with their reputation. We take that seriously. We onboard manually. We measure outcomes. We only claim success when clients see it.</div>
              <div className="value-quote">
                <p>"We don't send automated NPS surveys. We have actual conversations."</p>
              </div>
            </div>
      
            {/* Value 2 */}
            <div className="value-card reveal reveal-delay-2" style={{ '--val-color': '#10B981' } as React.CSSProperties} role="listitem">
              <div className="value-number">02</div>
              <div className="value-icon" style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.2)' }}>
                <svg viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="9" stroke="#10B981" strokeWidth="1.5" /><path d="M7 11l3 3 5-5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div className="value-title">Invisible when it works</div>
              <div className="value-desc">The best technology is the kind clients never think about. Nemora should feel like an extension of your business — not a product layered on top. Our job is done when you forget we're there.</div>
              <div className="value-quote">
                <p>"We succeeded when a client says 'my team handled it' — and means Nemora."</p>
              </div>
            </div>
      
            {/* Value 3 */}
            <div className="value-card reveal reveal-delay-3" style={{ '--val-color': '#FF5C35' } as React.CSSProperties} role="listitem">
              <div className="value-number">03</div>
              <div className="value-icon" style={{ background: 'rgba(255,92,53,0.1)', border: '1px solid rgba(255,92,53,0.2)' }}>
                <svg viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M19 11C19 15.4 15.4 19 11 19S3 15.4 3 11 6.6 3 11 3" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" /><path d="M15 3l2 2-6 6" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19 3l-4 4" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <div className="value-title">Speed without shortcuts</div>
              <div className="value-desc">We launch in 72 hours, but we don't compromise on quality to do it. Every knowledge base is hand-curated, every agent is tested, every edge case is handled before go-live. Fast and thorough aren't opposites.</div>
              <div className="value-quote">
                <p>"72 hours to launch. Zero tolerance for 'good enough'."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ CTA ════ */}
      <section id="sec-cta" aria-labelledby="cta-heading">
        <div className="cta-grid-bg" aria-hidden="true"></div>
        <div className="cta-glow" aria-hidden="true"></div>
        <div className="container">
          <div className="cta-inner">
            <div className="cta-badge reveal">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true"><circle cx="4" cy="4" r="4" fill="#6E56FF" /></svg>
              No setup fees · Live in 72 hours
            </div>
            <h2 id="cta-heading" className="cta-h2 reveal reveal-delay-1">Your business doesn't<br />sleep. Neither does<br />Nemora.</h2>
            <p className="cta-sub reveal reveal-delay-2">Join 40+ businesses running on intelligence. Book a call and see your custom AI agent live in under 30 minutes.</p>
            <div className="cta-buttons reveal reveal-delay-3">
              <Link href="/contact" className="cta-btn-primary">
                <svg viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 1.5L16.5 5.25V12.75L9 16.5L1.5 12.75V5.25L9 1.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="9" cy="9" r="3" fill="white" fillOpacity="0.9" /></svg>
                Book a free demo
              </Link>
              <Link href="/demo" className="cta-btn-secondary">
                See live demos →
              </Link>
            </div>
            <div className="cta-note reveal reveal-delay-4">No commitment required · Cancel anytime · Setup included</div>
          </div>
        </div>
      </section>
      
      {/* ════ FOOTER ════ */}
    </div>
  );
}
