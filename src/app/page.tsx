'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '@/lib/useReveal';
import Counter from '@/components/Counter';
import HeroWidgetChat from '@/components/HeroWidgetChat';
import FeatureTimeline from '@/components/FeatureTimeline';
import FlashcardCarousel from '@/components/FlashcardCarousel';
import TestimonialModal from '@/components/TestimonialModal';
import HeroForm from '@/components/HeroForm';
import './home.scoped.css';

const LOGO_PILLS = [
  { name: 'Orthocare Clinic', color: '#6E56FF' },
  { name: 'Velvet Roots', color: '#10B981' },
  { name: 'Studio Hues', color: '#F59E0B' },
  { name: 'Bloom Wellness', color: '#FF5C35' },
  { name: 'Priya Coaching', color: '#6E56FF' },
  { name: 'Nungambakkam Dental', color: '#60a5fa' },
  { name: 'Anandhi Coaching', color: '#10B981' },
  { name: 'T.Nagar Skincare', color: '#F59E0B' },
  { name: 'Chennai Physio', color: '#FF5C35' },
  { name: 'MindSpace Studio', color: '#6E56FF' },
];

export default function HomePage() {
  useReveal();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="page-home">
      {/* ════ HERO ════ */}
      <section id="hero" aria-label="Hero">
        <div id="hero-bg-photo" aria-hidden="true" />
        <div id="hero-tint" aria-hidden="true" />
        <div id="hero-left-grad" aria-hidden="true" />
        <div id="hero-top-fade" aria-hidden="true" />
        <div id="hero-bottom-fade" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-left">
            <h1 className="hero-h1">
              Your business,
              <br />
              running on
              <br />
              <span className="accent-word">intelligence</span>
            </h1>
            <p className="hero-sub">Build, optimise, and scale AI agents that treat every client like the only one.</p>
            <HeroForm />
            <div className="hero-trust" aria-label="Trusted by 40+ businesses">
              <div className="hero-avatars" aria-hidden="true">
                <div className="hero-avatar" style={{ background: 'linear-gradient(135deg,#6E56FF,#a594ff)' }}>
                  DR
                </div>
                <div className="hero-avatar" style={{ background: 'linear-gradient(135deg,#FF5C35,#f59e0b)' }}>
                  SP
                </div>
                <div className="hero-avatar" style={{ background: 'linear-gradient(135deg,#10B981,#34d399)' }}>
                  MK
                </div>
                <div className="hero-avatar" style={{ background: 'linear-gradient(135deg,#60a5fa,#3b82f6)' }}>
                  RY
                </div>
              </div>
              <div className="hero-trust-text">
                Trusted by <strong>40+ businesses</strong> in Chennai &amp; beyond
              </div>
            </div>
          </div>

          <div className="hero-right" aria-hidden="true">
            <div className="hero-widget">
              <div className="hw-topbar">
                <div className="hw-dots">
                  <div className="hw-dot hw-dot-r" />
                  <div className="hw-dot hw-dot-y" />
                  <div className="hw-dot hw-dot-g" />
                </div>
                <div className="hw-title">nemora · live agent</div>
              </div>
              <div className="hw-body">
                <div className="hw-msg">
                  <div className="hw-msg-avatar user">VR</div>
                  <div className="hw-msg-bubble user">Hi, can I reschedule my appointment for Friday?</div>
                </div>
                <div className="hw-msg">
                  <div className="hw-msg-avatar ai">N</div>
                  <div className="hw-msg-bubble ai">
                    Of course! I&apos;ve checked your booking — there&apos;s a 10:30 AM slot available this Friday. Shall I move
                    your appointment?
                  </div>
                </div>
                <div className="hw-msg">
                  <div className="hw-msg-avatar user">VR</div>
                  <div className="hw-msg-bubble user">Yes please!</div>
                </div>
                <HeroWidgetChat />
              </div>
            </div>
            <div className="hero-stats">
              <div className="hero-stat-pill">
                <Counter className="hero-stat-val" target={98} suffix="%" />
                <div className="hero-stat-lbl">
                  Response
                  <br />
                  rate
                </div>
              </div>
              <div className="hero-stat-pill">
                <Counter className="hero-stat-val" target={0.8} suffix="s" decimals={1} />
                <div className="hero-stat-lbl">
                  Avg response
                  <br />
                  time
                </div>
              </div>
              <div className="hero-stat-pill">
                <Counter className="hero-stat-val" target={24} suffix="/7" />
                <div className="hero-stat-lbl">
                  Always
                  <br />
                  on
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
          <div className="hero-scroll-txt">scroll</div>
        </div>
      </section>

      {/* ════ LOGO MARQUEE ════ */}
      <div id="sec-logos" aria-label="Trusted by">
        <div className="logos-label">Trusted by businesses across Chennai</div>
        <div className="marquee-wrap">
          <div className="marquee-gradient-l" aria-hidden="true" />
          <div className="marquee-gradient-r" aria-hidden="true" />
          <div className="marquee-track" aria-hidden="true">
            {[...LOGO_PILLS, ...LOGO_PILLS].map((pill, i) => (
              <div className="logo-pill" key={i}>
                <div className="logo-pill-dot" style={{ background: pill.color }} />
                {pill.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════ PROBLEM ════ */}
      <section id="sec-problem" aria-labelledby="problem-heading">
        <div className="container">
          <div className="problem-grid">
            <div>
              <div className="sec-eyebrow reveal">
                <div className="sec-eyebrow-line" aria-hidden="true" />
                The Problem
              </div>
              <h2 id="problem-heading" className="sec-h2 reveal reveal-delay-1">
                Every client deserves
                <br />
                your full attention
              </h2>
              <p className="sec-sub reveal reveal-delay-2">
                Scaling personalised care manually is impossible. Here&apos;s what teams deal with every day — and why they
                keep losing clients.
              </p>

              <div className="problem-cards">
                <div className="p-card reveal reveal-delay-2">
                  <div className="p-card-icon" style={{ background: 'rgba(255,92,92,0.1)' }}>
                    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <circle cx="9" cy="9" r="7" stroke="#FF5C5C" strokeWidth="1.5" />
                      <path d="M9 5.5V9.5M9 11.5V12" stroke="#FF5C5C" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="p-card-content">
                    <div className="p-card-title">Missed follow-ups</div>
                    <div className="p-card-desc">
                      Clients reach out and hear nothing back for days. They churn quietly, and you never know why.
                    </div>
                  </div>
                </div>
                <div className="p-card reveal reveal-delay-3">
                  <div className="p-card-icon" style={{ background: 'rgba(245,158,11,0.1)' }}>
                    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <rect x="2" y="4" width="14" height="10" rx="2" stroke="#F59E0B" strokeWidth="1.5" />
                      <path d="M2 7h14" stroke="#F59E0B" strokeWidth="1.5" />
                      <path d="M6 11h2M10 11h2" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="p-card-content">
                    <div className="p-card-title">Team capacity walls</div>
                    <div className="p-card-desc">
                      When your team is overwhelmed, service quality drops. Hiring more people doesn&apos;t solve the root
                      problem.
                    </div>
                  </div>
                </div>
                <div className="p-card reveal reveal-delay-4">
                  <div className="p-card-icon" style={{ background: 'rgba(110,86,255,0.1)' }}>
                    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M3 14V6L9 3L15 6V14H11V10H7V14H3Z" stroke="#6E56FF" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="p-card-content">
                    <div className="p-card-title">Zero consistency after-hours</div>
                    <div className="p-card-desc">
                      Business doesn&apos;t stop at 6 PM, but your staff do. Prospects and clients go unanswered overnight and
                      on weekends.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-3">
              <div className="chaos-dashboard">
                <div className="cd-topbar">
                  <div className="cd-dots">
                    <div className="cd-dot" style={{ background: 'rgba(255,92,92,0.6)' }} />
                    <div className="cd-dot" style={{ background: 'rgba(255,185,56,0.6)' }} />
                    <div className="cd-dot" style={{ background: 'rgba(52,211,153,0.6)' }} />
                  </div>
                  <div className="cd-title-txt">operations · dashboard</div>
                </div>
                <div className="cd-body">
                  <div className="cd-alert red">
                    <div className="cd-alert-dot" />
                    <div className="cd-alert-text">Follow-up missed — Acme Corp</div>
                    <div className="cd-alert-time">3d ago</div>
                  </div>
                  <div className="cd-alert amber">
                    <div className="cd-alert-dot" />
                    <div className="cd-alert-text">Team capacity at 94% — 12 unassigned</div>
                    <div className="cd-alert-time">2h ago</div>
                  </div>
                  <div className="cd-alert purple">
                    <div className="cd-alert-dot" />
                    <div className="cd-alert-text">Deal went cold — Vertex · ₹3.8L lost</div>
                    <div className="cd-alert-time">1d ago</div>
                  </div>
                  <div className="cd-alert red">
                    <div className="cd-alert-dot" />
                    <div className="cd-alert-text">5 WhatsApp queries unanswered</div>
                    <div className="cd-alert-time">Now</div>
                  </div>
                  <div className="cd-resolved">
                    <div className="cd-resolved-dot" />
                    Nemora responded to all queries — 0.8s avg · on-brand ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ FEATURES TIMELINE ════ */}
      <section id="sec-features" aria-labelledby="features-heading">
        <div className="container">
          <div className="features-header">
            <div className="sec-eyebrow reveal" style={{ justifyContent: 'center' }}>
              <div className="sec-eyebrow-line" />
              How It Works
            </div>
            <h2
              id="features-heading"
              className="sec-h2 reveal reveal-delay-1"
              style={{ textAlign: 'center', marginBottom: 12, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}
            >
              One platform.
              <br />
              <em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Three superpowers.</em>
            </h2>
            <p className="sec-sub reveal reveal-delay-2" style={{ textAlign: 'center', marginBottom: 0 }}>
              From first message to loyal client — Nemora handles the entire journey, intelligently.
            </p>
          </div>
        </div>

        <div className="features-timeline-wrap">
          <FeatureTimeline />

          <div className="sf-row" data-row="0">
            <div className="sf-text sf-text-left reveal">
              <div className="sf-label">01 · Connect</div>
              <h3 className="sf-title">
                Respond to every
                <br />
                client <em>instantly</em>
              </h3>
              <p className="sf-desc">
                Nemora plugs into WhatsApp, Instagram, your website, and email — responding in your voice, at any hour. No
                script. No delay. No missed lead.
              </p>
              <div className="sf-bullets">
                <div className="sf-bullet">
                  <div className="sf-bullet-dot" />
                  WhatsApp, chat, email, voice
                </div>
                <div className="sf-bullet">
                  <div className="sf-bullet-dot" />
                  Trained on your business knowledge
                </div>
                <div className="sf-bullet">
                  <div className="sf-bullet-dot" />
                  Sounds exactly like you
                </div>
              </div>
            </div>
            <div className="sf-dot-col">
              <div className="sf-node" id="sfNode0" />
            </div>
            <div className="sf-text sf-text-right sf-visual-wrap">
              <div className="sf-visual right reveal reveal-delay-2">
                <div className="fv-card" style={{ animation: 'home-float-a 5s ease-in-out infinite' }}>
                  <div className="fv-topbar">
                    <div className="fv-dots">
                      <div className="fv-dot" style={{ background: 'rgba(255,92,92,0.6)' }} />
                      <div className="fv-dot" style={{ background: 'rgba(255,185,56,0.6)' }} />
                      <div className="fv-dot" style={{ background: 'rgba(52,211,153,0.6)' }} />
                    </div>
                    <div className="fv-title-txt">whatsapp · nemora agent</div>
                  </div>
                  <div className="fv-chat-body">
                    <div className="fv-bubble-user">Hi, what&apos;s your pricing for the basic plan?</div>
                    <div className="fv-bubble-ai">
                      <div className="fv-ai-mark">
                        <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
                          <path d="M5 1L9 3V7L5 9L1 7V3L5 1Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span>
                        Our Starter plan is ₹4,999/month — includes WhatsApp automation, FAQ bot, and onboarding support.
                        Want to see a live demo?
                      </span>
                    </div>
                    <div className="fv-bubble-user">Yes, book me in!</div>
                    <div className="fv-bubble-ai">
                      <div className="fv-ai-mark">
                        <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
                          <path d="M5 1L9 3V7L5 9L1 7V3L5 1Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <div>Done! I&apos;ve sent a calendar link to your number.</div>
                        <div className="fv-wave" style={{ marginTop: 6 }}>
                          <span style={{ height: 4 }} />
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sf-row" data-row="1">
            <div className="sf-text sf-text-left sf-visual-wrap" style={{ justifyContent: 'center' }}>
              <div className="sf-visual left reveal reveal-delay-1">
                <div className="fv-card" style={{ animation: 'home-float-b 6s ease-in-out infinite' }}>
                  <div className="fv-topbar">
                    <div className="fv-dots">
                      <div className="fv-dot" style={{ background: 'rgba(255,92,92,0.6)' }} />
                      <div className="fv-dot" style={{ background: 'rgba(255,185,56,0.6)' }} />
                      <div className="fv-dot" style={{ background: 'rgba(52,211,153,0.6)' }} />
                    </div>
                    <div className="fv-title-txt">nemora · performance</div>
                  </div>
                  <div className="fv-metrics-body">
                    <div className="fv-metric">
                      <div className="fv-metric-icon">
                        <svg viewBox="0 0 11 11" fill="none" aria-hidden="true">
                          <path d="M2 8L5 5L7 7L9 3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="fv-metric-lbl">Leads Converted</div>
                      <div className="fv-metric-val accent">2.4×</div>
                      <div className="fv-metric-change">
                        <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
                          <path d="M5 2L8 5H2L5 2Z" fill="#10B981" />
                        </svg>
                        vs last month
                      </div>
                    </div>
                    <div className="fv-metric">
                      <div className="fv-metric-icon" style={{ background: 'rgba(16,185,129,0.8)' }}>
                        <svg viewBox="0 0 11 11" fill="none" aria-hidden="true">
                          <circle cx="5.5" cy="5.5" r="3.5" stroke="white" strokeWidth="1.2" />
                          <path d="M5.5 3.5V5.5L7 6.5" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="fv-metric-lbl">Avg Response</div>
                      <div className="fv-metric-val">0.8s</div>
                      <div className="fv-metric-change">
                        <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
                          <path d="M5 2L8 5H2L5 2Z" fill="#10B981" />
                        </svg>
                        vs 4.2h manual
                      </div>
                    </div>
                    <div className="fv-metric" style={{ gridColumn: 'span 2' }}>
                      <div className="fv-metric-lbl">Weekly conversations handled</div>
                      <div className="fv-metric-val" style={{ fontSize: 20 }}>
                        847 <span style={{ fontSize: 14, color: 'var(--text-3)', fontWeight: 500 }}>this week</span>
                      </div>
                      <div className="fv-metric-change">All resolved without escalation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sf-dot-col">
              <div className="sf-node" id="sfNode1" />
            </div>
            <div className="sf-text sf-text-right reveal">
              <div className="sf-label">02 · Optimise</div>
              <h3 className="sf-title">
                Learn what
                <br />
                <em>actually</em> converts
              </h3>
              <p className="sf-desc">
                Every conversation is a data point. Nemora tracks what questions clients ask, what objections arise, and
                what language closes deals — then improves automatically.
              </p>
              <div className="sf-bullets">
                <div className="sf-bullet">
                  <div className="sf-bullet-dot" />
                  Conversion tracking per channel
                </div>
                <div className="sf-bullet">
                  <div className="sf-bullet-dot" />
                  A/B test messaging automatically
                </div>
                <div className="sf-bullet">
                  <div className="sf-bullet-dot" />
                  Continuous self-improvement
                </div>
              </div>
            </div>
          </div>

          <div className="sf-row" data-row="2">
            <div className="sf-text sf-text-left reveal">
              <div className="sf-label">03 · Scale</div>
              <h3 className="sf-title">
                More clients,
                <br />
                <em>same</em> team
              </h3>
              <p className="sf-desc">
                From 40 clients to 400 — Nemora scales linearly. No new hires needed. Your AI handles the volume spike while
                your team focuses on high-value work.
              </p>
              <div className="sf-bullets">
                <div className="sf-bullet">
                  <div className="sf-bullet-dot" />
                  Unlimited concurrent conversations
                </div>
                <div className="sf-bullet">
                  <div className="sf-bullet-dot" />
                  Zero additional cost per conversation
                </div>
                <div className="sf-bullet">
                  <div className="sf-bullet-dot" />
                  Enterprise-grade reliability
                </div>
              </div>
            </div>
            <div className="sf-dot-col">
              <div className="sf-node" id="sfNode2" />
            </div>
            <div className="sf-text sf-text-right sf-visual-wrap">
              <div className="sf-visual right reveal reveal-delay-2">
                <div className="fv-card" style={{ animation: 'home-float-a 5.5s ease-in-out infinite 0.8s' }}>
                  <div className="fv-topbar">
                    <div className="fv-dots">
                      <div className="fv-dot" style={{ background: 'rgba(255,92,92,0.6)' }} />
                      <div className="fv-dot" style={{ background: 'rgba(255,185,56,0.6)' }} />
                      <div className="fv-dot" style={{ background: 'rgba(52,211,153,0.6)' }} />
                    </div>
                    <div className="fv-title-txt">nemora · analytics</div>
                  </div>
                  <div className="fv-analytics-body">
                    <div style={{ fontSize: 10.5, color: 'var(--text-3)', marginBottom: 8, fontWeight: 600 }}>
                      Conversations handled · last 7 days
                    </div>
                    <div className="fv-bar-chart">
                      <div className="fv-bar" style={{ height: '45%' }} />
                      <div className="fv-bar" style={{ height: '60%' }} />
                      <div className="fv-bar" style={{ height: '50%' }} />
                      <div className="fv-bar" style={{ height: '75%' }} />
                      <div className="fv-bar hi" style={{ height: '85%' }} />
                      <div className="fv-bar" style={{ height: '70%' }} />
                      <div className="fv-bar hi" style={{ height: '100%' }} />
                    </div>
                    <div className="fv-analytics-stats">
                      <div className="fv-analytics-stat">
                        <div className="fv-analytics-stat-val accent">847</div>
                        <div className="fv-analytics-stat-lbl">This week</div>
                      </div>
                      <div className="fv-analytics-stat">
                        <div className="fv-analytics-stat-val">98.2%</div>
                        <div className="fv-analytics-stat-lbl">Resolution rate</div>
                      </div>
                      <div className="fv-analytics-stat">
                        <div className="fv-analytics-stat-val">4.9</div>
                        <div className="fv-analytics-stat-lbl">Avg rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ CHANNELS ════ */}
      <section id="sec-channels" aria-labelledby="channels-heading">
        <div className="container">
          <div className="channels-header">
            <div className="sec-eyebrow reveal">
              <div className="sec-eyebrow-line" style={{ background: '#4a36e8' }} />
              Omnichannel by Design
            </div>
            <h2 id="channels-heading" className="sec-h2 reveal reveal-delay-1">
              Build once.
              <br />
              Deploy everywhere.
            </h2>
            <p className="sec-sub reveal reveal-delay-2">
              Voice, chat, and email in a single intelligence layer — every channel consistent, every conversation
              remembered.
            </p>
          </div>

          <div className="channels-grid">
            <div className="ch-card reveal" style={{ '--ch-color': '#6E56FF' } as React.CSSProperties}>
              <div className="ch-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zM8 12a4 4 0 108 0 4 4 0 00-8 0z" stroke="#6E56FF" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="2" fill="#6E56FF" />
                </svg>
              </div>
              <div className="ch-title">Voice Intelligence</div>
              <div className="ch-desc">
                Human-calibre voice AI that understands context, handles complex queries, and sounds exactly like your brand
                — at any scale.
              </div>
              <Link href="/platform#voice" className="ch-link">
                Learn more
                <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <div className="ch-mockup">
                <div className="voice-pill">
                  <div className="voice-icon">
                    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M9 1v10M6 5v4a3 3 0 006 0V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M3 9a6 6 0 0012 0M9 15v2M6 17h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="voice-text">
                    <div className="voice-text-top">Nemora Voice · Active</div>
                    <div className="voice-wave">
                      <span style={{ height: 4 }} />
                      <span style={{ height: 9 }} />
                      <span style={{ height: 6 }} />
                      <span style={{ height: 12 }} />
                      <span style={{ height: 8 }} />
                      <span style={{ height: 5 }} />
                      <span style={{ height: 10 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ch-card reveal reveal-delay-1" style={{ '--ch-color': '#10B981' } as React.CSSProperties}>
              <div className="ch-icon-wrap" style={{ background: 'rgba(16,185,129,0.08)' }}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="13" rx="2" stroke="#10B981" strokeWidth="1.5" />
                  <path d="M3 8l9 5 9-5" stroke="#10B981" strokeWidth="1.5" />
                  <path d="M8 17v3M16 17v3M5 20h14" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="ch-title">Conversational Chat</div>
              <div className="ch-desc">
                Context-aware chat on WhatsApp, Instagram, and your website — your AI knows your entire business and never
                goes off-script.
              </div>
              <Link href="/platform#chat" className="ch-link" style={{ color: '#059669' }}>
                Learn more
                <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <div className="ch-mockup">
                <div className="chat-thread">
                  <div className="ct-msg out">Do you offer weekend slots?</div>
                  <div className="ct-msg in">Yes! Saturday 10 AM–2 PM. Want me to book one for you? 🎯</div>
                  <div className="ct-msg out">Yes, this Saturday!</div>
                </div>
              </div>
            </div>

            <div className="ch-card reveal reveal-delay-2" style={{ '--ch-color': '#F59E0B' } as React.CSSProperties}>
              <div className="ch-icon-wrap" style={{ background: 'rgba(245,158,11,0.08)' }}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="#F59E0B" strokeWidth="1.5" />
                  <path d="M3 9l9 5 9-5" stroke="#F59E0B" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="ch-title">Email Orchestration</div>
              <div className="ch-desc">
                Intelligent email responses that resolve queries, handle follow-ups, and book meetings — without a single
                manual reply.
              </div>
              <Link href="/platform#email" className="ch-link" style={{ color: '#D97706' }}>
                Learn more
                <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <div className="ch-mockup">
                <div className="email-preview">
                  <div className="ep-from">From: Nemora Agent · via your domain</div>
                  <div className="ep-subject">Re: Appointment enquiry — Tuesday 3PM ✓</div>
                  <div className="ep-body">
                    Your slot is confirmed. I&apos;ve added it to the shared calendar and sent a prep guide...
                  </div>
                  <div className="ep-badge">
                    <div className="ep-badge-dot" />
                    Resolved automatically
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ METRICS ════ */}
      <section id="sec-metrics" aria-labelledby="metrics-heading">
        <div className="metrics-inner">
          <div className="sec-eyebrow reveal" style={{ marginBottom: 48, justifyContent: 'center' }}>
            <div className="sec-eyebrow-line" />
            Instant ROI on metrics that matter
          </div>
          <div className="metrics-grid" role="list">
            <div className="metric-cell reveal" role="listitem">
              <Counter className="metric-num" target={4.9} suffix="★" decimals={1} />
              <div className="metric-desc">Average customer satisfaction rating across all businesses on Nemora</div>
              <div className="metric-tag">
                <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 9L5 6L7 8L10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Verified ratings
              </div>
            </div>
            <div className="metric-cell reveal reveal-delay-1" role="listitem">
              <Counter className="metric-num" target={40} suffix="+" />
              <div className="metric-desc">Businesses running on Nemora intelligence in Chennai and beyond</div>
              <div className="metric-tag">
                <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 9L5 6L7 8L10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                And growing
              </div>
            </div>
            <div className="metric-cell reveal reveal-delay-2" role="listitem">
              <Counter className="metric-num" target={3} suffix="×" />
              <div className="metric-desc">Average speed improvement in client response time after Nemora goes live</div>
              <div className="metric-tag">
                <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 9L5 6L7 8L10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Day one results
              </div>
            </div>
            <div className="metric-cell reveal reveal-delay-3" role="listitem">
              <Counter className="metric-num" target={90} suffix="%" />
              <div className="metric-desc">Of Nemora customers say they would recommend it to another business owner</div>
              <div className="metric-tag">
                <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 9L5 6L7 8L10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                NPS score
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ CUSTOMERS FLASHCARDS ════ */}
      <section id="sec-customers" aria-labelledby="customers-heading">
        <div className="container">
          <div className="customers-header">
            <div className="cust-header-row">
              <div>
                <div className="sec-eyebrow reveal" style={{ color: '#4a36e8' }}>
                  <div className="sec-eyebrow-line" style={{ background: '#4a36e8' }} />
                  Customers
                </div>
                <h2 id="customers-heading" className="sec-h2 reveal reveal-delay-1" style={{ color: '#0d0d1a' }}>
                  Real businesses.
                  <br />
                  <em style={{ fontStyle: 'normal', color: '#4a36e8' }}>Real results.</em>
                </h2>
              </div>
              <p className="cust-sub reveal reveal-delay-2">
                Clinics, coaches, and service businesses across Chennai share what changed after Nemora went live.
              </p>
            </div>

            <div className="cust-stats reveal">
              <div className="cust-stat">
                <div className="cust-stat-val">4.9★</div>
                <div className="cust-stat-lbl">Average rating</div>
              </div>
              <div className="cust-stat">
                <div className="cust-stat-val">40+</div>
                <div className="cust-stat-lbl">Businesses live</div>
              </div>
              <div className="cust-stat">
                <div className="cust-stat-val">3×</div>
                <div className="cust-stat-lbl">Avg response speed</div>
              </div>
              <div className="cust-stat">
                <div className="cust-stat-val">90%</div>
                <div className="cust-stat-lbl">Would recommend</div>
              </div>
            </div>

            <FlashcardCarousel />
          </div>

          <div className="fc-cta-bar reveal">
            <div className="fc-cta-left">
              <strong>Tried Nemora? Tell us what changed.</strong>
              <p>Your story helps other business owners see what&apos;s possible — and we&apos;d love to feature it here.</p>
            </div>
            <div className="fc-cta-right">
              <Link href="/customers" className="fc-cta-btn ghost">
                See all stories
              </Link>
              <button className="fc-cta-btn primary" onClick={() => setModalOpen(true)}>
                Share your result →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════ CTA ════ */}
      <section id="sec-cta" aria-labelledby="cta-heading">
        <div className="cta-grid-bg" aria-hidden="true" />
        <div className="cta-glow" aria-hidden="true" />
        <div className="container">
          <div className="cta-inner">
            <div className="cta-badge reveal">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                <circle cx="4" cy="4" r="4" fill="#6E56FF" />
              </svg>
              No setup fees · Live in 72 hours
            </div>
            <h2 id="cta-heading" className="cta-h2 reveal reveal-delay-1">
              Your business doesn&apos;t
              <br />
              sleep. Neither does
              <br />
              Nemora.
            </h2>
            <p className="cta-sub reveal reveal-delay-2">
              Join 40+ businesses running on intelligence. Book a call and see your custom AI agent live in under 30
              minutes.
            </p>
            <div className="cta-buttons reveal reveal-delay-3">
              <Link href="/contact" className="cta-btn-primary">
                <svg viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M9 1.5L16.5 5.25V12.75L9 16.5L1.5 12.75V5.25L9 1.5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="9" cy="9" r="3" fill="white" fillOpacity="0.9" />
                </svg>
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

      <TestimonialModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
