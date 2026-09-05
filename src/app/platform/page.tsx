'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useReveal } from '@/lib/useReveal';
import './platform.scoped.css';

type Channel = 'chat' | 'voice' | 'email';

export default function Page() {
  useReveal();
  const router = useRouter();
  const [activeChannel, setActiveChannel] = useState<Channel>('chat');

  return (
    <div className="page-platform">
      {/* ════ NAV ════ */}
      
      
      {/* ════ HERO ════ */}
      <section id="hero-platform" aria-labelledby="hero-h1">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="container">
          <div className="hero-platform-inner">
            <div className="hero-badge">
              <div className="hero-badge-dot"></div>
              Platform Overview — Full Technical Breakdown
            </div>
            <h1 id="hero-h1" className="hero-platform-h1">
              One platform.<br /><em>Every channel.</em><br />Zero missed leads.
            </h1>
            <p className="hero-platform-sub">
              Nemora plugs into how your business already runs — WhatsApp, your website, email — and turns every client touchpoint into an intelligent, on-brand conversation.
            </p>
            <div className="hero-ctas">
              <button className="btn-primary-lg" onClick={() => router.push('/contact')}>
                Book a free demo
              </button>
              <button className="btn-outline-lg" onClick={() => router.push('/demo')}>See it live &rarr;</button>
            </div>
      
            {/* Architecture diagram */}
            <div className="arch-diagram-wrap">
              <div className="arch-diagram">
                <div className="arch-topbar">
                  <div className="arch-dots">
                    <div className="arch-dot" style={{ background: 'rgba(255,92,92,0.6)' }}></div>
                    <div className="arch-dot" style={{ background: 'rgba(255,185,56,0.6)' }}></div>
                    <div className="arch-dot" style={{ background: 'rgba(52,211,153,0.6)' }}></div>
                  </div>
                  <div className="arch-title">nemora platform · intelligence layer</div>
                </div>
                <div className="arch-body">
                  <svg viewBox="0 0 820 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
                    {/* Background grid subtle */}
                    <defs>
                      <pattern id="mini-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      </pattern>
                      {/* Animated path for packets */}
                      <path id="path-wa" d="M 130 60 C 200 60 220 140 290 140" />
                      <path id="path-web" d="M 130 140 L 290 140" />
                      <path id="path-email" d="M 130 220 C 200 220 220 140 290 140" />
                      <path id="path-crm" d="M 530 140 C 600 140 640 100 680 100" />
                      <path id="path-wa2" d="M 530 140 C 600 140 640 140 680 140" />
                      <path id="path-notif" d="M 530 140 C 600 140 640 180 680 180" />
                      <linearGradient id="core-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6E56FF" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#a594ff" stopOpacity="0.9" />
                      </linearGradient>
                      <filter id="node-glow">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                      </filter>
                    </defs>
                    <rect width="820" height="280" fill="url(#mini-grid)" rx="12" />
      
                    {/* INPUT NODES — left */}
                    {/* WhatsApp */}
                    <rect x="20" y="35" width="110" height="50" rx="10" fill="rgba(110,86,255,0.08)" stroke="rgba(110,86,255,0.25)" strokeWidth="1" />
                    <text x="75" y="55" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="500">WhatsApp</text>
                    <text x="75" y="72" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">Business API</text>
      
                    {/* Website Chat */}
                    <rect x="20" y="115" width="110" height="50" rx="10" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.25)" strokeWidth="1" />
                    <text x="75" y="135" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="500">Website Chat</text>
                    <text x="75" y="152" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">Voiceflow / Tidio</text>
      
                    {/* Email */}
                    <rect x="20" y="195" width="110" height="50" rx="10" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.25)" strokeWidth="1" />
                    <text x="75" y="215" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="500">Email</text>
                    <text x="75" y="232" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">Gmail / Mailchimp</text>
      
                    {/* Animated connecting lines — input to core */}
                    <path d="M 130 60 C 200 60 220 140 290 140" stroke="rgba(110,86,255,0.25)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                    <path d="M 130 140 L 290 140" stroke="rgba(16,185,129,0.25)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                    <path d="M 130 220 C 200 220 220 140 290 140" stroke="rgba(245,158,11,0.25)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
      
                    {/* Animated glow on lines */}
                    <path d="M 130 60 C 200 60 220 140 290 140" stroke="rgba(110,86,255,0)" strokeWidth="2" fill="none" className="flow-path" id="fp1">
                      <animate attributeName="stroke-dashoffset" from="400" to="0" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="stroke" values="rgba(110,86,255,0.7);rgba(110,86,255,0.1);rgba(110,86,255,0.7)" dur="2.5s" repeatCount="indefinite" />
                    </path>
                    <path d="M 130 140 L 290 140" stroke="rgba(16,185,129,0)" strokeWidth="2" fill="none">
                      <animate attributeName="stroke-dashoffset" from="200" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                      <animate attributeName="stroke" values="rgba(16,185,129,0.7);rgba(16,185,129,0.1);rgba(16,185,129,0.7)" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </path>
                    <path d="M 130 220 C 200 220 220 140 290 140" stroke="rgba(245,158,11,0)" strokeWidth="2" fill="none">
                      <animate attributeName="stroke-dashoffset" from="400" to="0" dur="3s" begin="1s" repeatCount="indefinite" />
                      <animate attributeName="stroke" values="rgba(245,158,11,0.7);rgba(245,158,11,0.1);rgba(245,158,11,0.7)" dur="3s" begin="1s" repeatCount="indefinite" />
                    </path>
      
                    {/* CORE — Nemora Brain */}
                    <rect x="290" y="80" width="240" height="120" rx="16" fill="url(#core-grad)" fillOpacity="0.12" stroke="rgba(110,86,255,0.5)" strokeWidth="1.5" />
                    {/* Inner glow */}
                    <rect x="295" y="85" width="230" height="110" rx="14" fill="rgba(110,86,255,0.06)" />
      
                    {/* Hexagon icon center */}
                    <polygon points="410,100 428,110 428,130 410,140 392,130 392,110" fill="rgba(110,86,255,0.15)" stroke="rgba(110,86,255,0.6)" strokeWidth="1.5" />
                    <circle cx="410" cy="120" r="8" fill="rgba(110,86,255,0.8)">
                      <animate attributeName="opacity" values="0.8;0.5;0.8" dur="2s" repeatCount="indefinite" />
                    </circle>
      
                    <text x="410" y="158" textAnchor="middle" fill="rgba(255,255,255,0.95)" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="800">Nemora Intelligence</text>
                    <text x="410" y="174" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9.5" fontFamily="JetBrains Mono, monospace">LLM · Knowledge Base · Memory</text>
                    {/* Ping ring */}
                    <circle cx="410" cy="120" r="24" fill="none" stroke="rgba(110,86,255,0.3)" strokeWidth="1">
                      <animate attributeName="r" values="20;32;20" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" />
                    </circle>
      
                    {/* Animated lines — core to output */}
                    <path d="M 530 140 C 600 140 640 60 680 60" stroke="rgba(110,86,255,0.25)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                    <path d="M 530 140 L 680 140" stroke="rgba(16,185,129,0.25)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                    <path d="M 530 140 C 600 140 640 220 680 220" stroke="rgba(245,158,11,0.25)" strokeWidth="1" strokeDasharray="4 4" fill="none" />

                    {/* Animated output lines */}
                    <path d="M 530 140 C 600 140 640 60 680 60" stroke="rgba(110,86,255,0)" strokeWidth="2" fill="none">
                      <animate attributeName="stroke-dashoffset" from="0" to="400" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="stroke" values="rgba(110,86,255,0.1);rgba(110,86,255,0.7);rgba(110,86,255,0.1)" dur="2.5s" repeatCount="indefinite" />
                    </path>
                    <path d="M 530 140 L 680 140" stroke="rgba(16,185,129,0)" strokeWidth="2" fill="none">
                      <animate attributeName="stroke-dashoffset" from="0" to="200" dur="2s" begin="0.5s" repeatCount="indefinite" />
                      <animate attributeName="stroke" values="rgba(16,185,129,0.1);rgba(16,185,129,0.7);rgba(16,185,129,0.1)" dur="2s" begin="0.5s" repeatCount="indefinite" />
                    </path>
                    <path d="M 530 140 C 600 140 640 220 680 220" stroke="rgba(245,158,11,0)" strokeWidth="2" fill="none">
                      <animate attributeName="stroke-dashoffset" from="0" to="400" dur="3s" begin="1s" repeatCount="indefinite" />
                      <animate attributeName="stroke" values="rgba(245,158,11,0.1);rgba(245,158,11,0.7);rgba(245,158,11,0.1)" dur="3s" begin="1s" repeatCount="indefinite" />
                    </path>

                    {/* OUTPUT NODES — right (evenly spaced to match the input side; these
                         previously overlapped each other by 16px) */}
                    {/* Instant Reply */}
                    <rect x="680" y="32" width="120" height="56" rx="10" fill="rgba(110,86,255,0.08)" stroke="rgba(110,86,255,0.25)" strokeWidth="1" />
                    <text x="740" y="56" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="10.5" fontFamily="JetBrains Mono, monospace" fontWeight="500">Instant Reply</text>
                    <text x="740" y="72" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="JetBrains Mono, monospace">0.8s avg</text>
                    <circle cx="723" cy="44" r="3" fill="rgba(16,185,129,0.8)">
                      <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Auto Booking */}
                    <rect x="680" y="112" width="120" height="56" rx="10" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.25)" strokeWidth="1" />
                    <text x="740" y="136" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="10.5" fontFamily="JetBrains Mono, monospace" fontWeight="500">Auto Booking</text>
                    <text x="740" y="152" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="JetBrains Mono, monospace">CRM Sync</text>

                    {/* Follow-up */}
                    <rect x="680" y="192" width="120" height="56" rx="10" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.25)" strokeWidth="1" />
                    <text x="740" y="216" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="10.5" fontFamily="JetBrains Mono, monospace" fontWeight="500">Follow-up</text>
                    <text x="740" y="232" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="JetBrains Mono, monospace">Email / WhatsApp</text>
      
                    {/* Labels */}
                    <text x="75" y="14" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5">INPUT CHANNELS</text>
                    <text x="410" y="18" textAnchor="middle" fill="rgba(110,86,255,0.6)" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5">NEMORA CORE</text>
                    <text x="740" y="14" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5">OUTPUTS</text>
      
                    {/* Bottom stats bar */}
                    <rect x="20" y="250" width="780" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    <text x="40" y="266" fill="rgba(110,86,255,0.8)" fontSize="9" fontFamily="JetBrains Mono, monospace">● LIVE</text>
                    <text x="90" y="266" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="JetBrains Mono, monospace">847 conversations handled today</text>
                    <text x="410" y="266" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="JetBrains Mono, monospace">avg response: 0.8s</text>
                    <text x="780" y="266" textAnchor="end" fill="rgba(16,185,129,0.8)" fontSize="9" fontFamily="JetBrains Mono, monospace">98% resolved ✓</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ INTEGRATIONS MARQUEE ════ */}
      <div id="sec-integrations-marquee" aria-label="Integrations">
        <div className="logos-label">Connects with tools you already use</div>
        <div className="marquee-wrap">
          <div className="marquee-gradient-l" aria-hidden="true"></div>
          <div className="marquee-gradient-r" aria-hidden="true"></div>
          <div className="marquee-track" aria-hidden="true">
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#25D366' }}></div>WhatsApp Business</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#6E56FF' }}></div>Voiceflow</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#F59E0B' }}></div>Mailchimp</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#10B981' }}></div>Tidio</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#FF5C35' }}></div>Gmail API</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#60a5fa' }}></div>Notion</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#6E56FF' }}></div>Claude API</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#F59E0B' }}></div>Calendly</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#10B981' }}></div>Google Calendar</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#FF5C35' }}></div>Kit (ConvertKit)</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#a78bfa' }}></div>Make (Integromat)</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#60a5fa' }}></div>n8n</div>
            {/* Duplicate */}
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#25D366' }}></div>WhatsApp Business</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#6E56FF' }}></div>Voiceflow</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#F59E0B' }}></div>Mailchimp</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#10B981' }}></div>Tidio</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#FF5C35' }}></div>Gmail API</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#60a5fa' }}></div>Notion</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#6E56FF' }}></div>Claude API</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#F59E0B' }}></div>Calendly</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#10B981' }}></div>Google Calendar</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#FF5C35' }}></div>Kit (ConvertKit)</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#a78bfa' }}></div>Make (Integromat)</div>
            <div className="logo-pill"><div className="logo-pill-dot" style={{ background: '#60a5fa' }}></div>n8n</div>
          </div>
        </div>
      </div>
      
      {/* ════ CHANNELS DEEP DIVE ════ */}
      <section id="sec-channels" aria-labelledby="channels-heading">
        <div className="container">
          <div className="channels-header">
            <div className="sec-eyebrow reveal">
              <div className="sec-eyebrow-line"></div>
              Three Channels
            </div>
            <h2 id="channels-heading" className="sec-h2 reveal reveal-delay-1">
              Meet clients where<br /><em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>they already are.</em>
            </h2>
            <p className="sec-sub reveal reveal-delay-2">Each channel is a fully autonomous intelligence layer — trained on your business, tuned to your voice, live 24/7.</p>
      
            <div className="channel-tabs reveal reveal-delay-3" role="tablist" aria-label="Channel details">
              <button
                className={`ch-tab${activeChannel === 'chat' ? ' active' : ''}`}
                data-panel="chat"
                role="tab"
                aria-selected={activeChannel === 'chat'}
                aria-controls="panel-chat"
                onClick={() => setActiveChannel('chat')}
              >
                Conversational Chat
              </button>
              <button
                className={`ch-tab${activeChannel === 'voice' ? ' active' : ''}`}
                data-panel="voice"
                role="tab"
                aria-selected={activeChannel === 'voice'}
                aria-controls="panel-voice"
                onClick={() => setActiveChannel('voice')}
              >
                Voice Intelligence
              </button>
              <button
                className={`ch-tab${activeChannel === 'email' ? ' active' : ''}`}
                data-panel="email"
                role="tab"
                aria-selected={activeChannel === 'email'}
                aria-controls="panel-email"
                onClick={() => setActiveChannel('email')}
              >
                Email Orchestration
              </button>
            </div>
          </div>
      
          <div className="ch-panels">
      
            {/* ── CHAT PANEL ── */}
            <div className={`ch-panel${activeChannel === 'chat' ? ' active' : ''}`} id="panel-chat" role="tabpanel" aria-labelledby="tab-chat">
              <div className="ch-panel-grid">
                <div className="ch-panel-text reveal">
                  <div className="ch-panel-label"><div className="ch-panel-label-dot"></div>Channel 01 · Chat</div>
                  <h3 className="ch-panel-h3">WhatsApp & web chat,<br /><em>fully automated</em></h3>
                  <p className="ch-panel-desc">From first "Hi" to confirmed appointment — Nemora handles the full conversation, pulling from your knowledge base to give exact, on-brand answers every time. No scripts. No drop-offs.</p>
                  <div className="ch-bullets">
                    <div className="ch-bullet">
                      <div className="ch-bullet-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5.5L4 7.5L8 3" stroke="#6E56FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <span>WhatsApp Business API — responds in under 1 second</span>
                    </div>
                    <div className="ch-bullet">
                      <div className="ch-bullet-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5.5L4 7.5L8 3" stroke="#6E56FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <span>Website chatbot via Voiceflow or Tidio — embed in 5 minutes</span>
                    </div>
                    <div className="ch-bullet">
                      <div className="ch-bullet-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5.5L4 7.5L8 3" stroke="#6E56FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <span>Trained on your FAQs, pricing, services, and team tone</span>
                    </div>
                    <div className="ch-bullet">
                      <div className="ch-bullet-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5.5L4 7.5L8 3" stroke="#6E56FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <span>Auto appointment booking with calendar sync</span>
                    </div>
                  </div>
                  <a className="ch-panel-link" href="/demo">See chat demo <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 4l4 3-4 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
                </div>
                <div className="ch-visual reveal reveal-delay-2">
                  <div className="fv-card" style={{ animation: 'float-a 5s ease-in-out infinite' }}>
                    <div className="fv-topbar">
                      <div className="fv-dots">
                        <div className="fv-dot" style={{ background: 'rgba(255,92,92,0.6)' }}></div>
                        <div className="fv-dot" style={{ background: 'rgba(255,185,56,0.6)' }}></div>
                        <div className="fv-dot" style={{ background: 'rgba(52,211,153,0.6)' }}></div>
                      </div>
                      <div className="fv-title-txt">whatsapp · nemora agent · Dr. Nithya's Clinic</div>
                    </div>
                    <div className="fv-chat-body">
                      <div className="fv-bubble-user">Hi, I wanted to book a dermatology consultation</div>
                      <div className="fv-bubble-ai">
                        <div className="fv-ai-mark"><svg viewBox="0 0 10 10" fill="none"><path d="M5 1L9 3V7L5 9L1 7V3L5 1Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" /></svg></div>
                        <span>Of course! Dr. Nithya has slots this Saturday at 10 AM and 2 PM, and Tuesday at 11 AM. Which works best for you?</span>
                      </div>
                      <div className="fv-bubble-user">Saturday 10 AM please!</div>
                      <div className="fv-bubble-ai">
                        <div className="fv-ai-mark"><svg viewBox="0 0 10 10" fill="none"><path d="M5 1L9 3V7L5 9L1 7V3L5 1Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" /></svg></div>
                        <span>Done! Saturday 10 AM is confirmed. A reminder will come 24 hours before. Please bring a valid photo ID. See you soon! 🌿</span>
                      </div>
                    </div>
                    <div className="fv-status-bar">
                      <div className="fv-status-dot"></div>
                      Booking confirmed · Calendar synced · Reminder queued
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            {/* ── VOICE PANEL ── */}
            <div className={`ch-panel${activeChannel === 'voice' ? ' active' : ''}`} id="panel-voice" role="tabpanel" aria-labelledby="tab-voice">
              <div className="ch-panel-grid">
                <div className="ch-panel-text reveal">
                  <div className="ch-panel-label"><div className="ch-panel-label-dot"></div>Channel 02 · Voice</div>
                  <h3 className="ch-panel-h3">Answer every call.<br /><em>Sound like you.</em></h3>
                  <p className="ch-panel-desc">Nemora's voice layer intercepts inbound calls, handles common queries, books appointments, and escalates only when a human is genuinely needed. Natural, warm, and perfectly on-brand.</p>
                  <div className="ch-bullets">
                    <div className="ch-bullet">
                      <div className="ch-bullet-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5.5L4 7.5L8 3" stroke="#6E56FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <span>Natural language voice — no robotic IVR menus</span>
                    </div>
                    <div className="ch-bullet">
                      <div className="ch-bullet-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5.5L4 7.5L8 3" stroke="#6E56FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <span>Handles FAQs, bookings, directions, and prep instructions</span>
                    </div>
                    <div className="ch-bullet">
                      <div className="ch-bullet-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5.5L4 7.5L8 3" stroke="#6E56FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <span>Escalates gracefully to staff with full call context</span>
                    </div>
                    <div className="ch-bullet">
                      <div className="ch-bullet-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5.5L4 7.5L8 3" stroke="#6E56FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <span>Real-time transcript logged for your review</span>
                    </div>
                  </div>
                  <a className="ch-panel-link" href="/demo">See voice demo <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 4l4 3-4 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
                </div>
                <div className="ch-visual reveal reveal-delay-2">
                  <div className="fv-card" style={{ animation: 'float-b 6s ease-in-out infinite' }}>
                    <div className="fv-topbar">
                      <div className="fv-dots">
                        <div className="fv-dot" style={{ background: 'rgba(255,92,92,0.6)' }}></div>
                        <div className="fv-dot" style={{ background: 'rgba(255,185,56,0.6)' }}></div>
                        <div className="fv-dot" style={{ background: 'rgba(52,211,153,0.6)' }}></div>
                      </div>
                      <div className="fv-title-txt">voice · incoming call · +91 98765 xxxxx</div>
                    </div>
                    <div className="voice-visual">
                      <div className="voice-waveform-wrap">
                        <div className="voice-caller-info">
                          <div className="voice-caller-avatar">MR</div>
                          <div>
                            <div className="voice-caller-name">Mohan R.</div>
                            <div className="voice-caller-num">+91 98765 43210</div>
                          </div>
                          <div style={{ marginLeft: 'auto', fontSize: '10px', color: 'var(--emerald)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--emerald)', animation: 'live-pulse 1.5s ease-in-out infinite' }}></div>
                            02:14
                          </div>
                        </div>
                        <div className="voice-waveform">
                          <div className="vw-bar" style={{ height: '18px', animationDelay: '0s' }}></div>
                          <div className="vw-bar" style={{ height: '32px', animationDelay: '.05s' }}></div>
                          <div className="vw-bar" style={{ height: '24px', animationDelay: '.1s' }}></div>
                          <div className="vw-bar" style={{ height: '40px', animationDelay: '.15s' }}></div>
                          <div className="vw-bar" style={{ height: '16px', animationDelay: '.2s' }}></div>
                          <div className="vw-bar" style={{ height: '36px', animationDelay: '.25s' }}></div>
                          <div className="vw-bar" style={{ height: '22px', animationDelay: '.3s' }}></div>
                          <div className="vw-bar" style={{ height: '44px', animationDelay: '.35s' }}></div>
                          <div className="vw-bar" style={{ height: '20px', animationDelay: '.4s' }}></div>
                          <div className="vw-bar" style={{ height: '30px', animationDelay: '.45s' }}></div>
                          <div className="vw-bar" style={{ height: '26px', animationDelay: '.5s' }}></div>
                          <div className="vw-bar" style={{ height: '38px', animationDelay: '.55s' }}></div>
                          <div className="vw-bar" style={{ height: '14px', animationDelay: '.6s' }}></div>
                          <div className="vw-bar" style={{ height: '28px', animationDelay: '.65s' }}></div>
                          <div className="vw-bar" style={{ height: '34px', animationDelay: '.7s' }}></div>
                          <div className="vw-bar" style={{ height: '42px', animationDelay: '.75s' }}></div>
                        </div>
                      </div>
                      <div className="voice-transcript">
                        <div className="vt-line"><span className="vt-speaker">Caller:</span>I need to reschedule my Monday appointment.</div>
                        <div className="vt-line"><span className="vt-speaker vt-ai">Nemora:</span>No problem at all! I can see your appointment for Dr. Kumar on Monday 11 AM. Would Wednesday 2 PM work?</div>
                        <div className="vt-line"><span className="vt-speaker">Caller:</span>Yes, that's perfect.</div>
                        <div className="vt-line"><span className="vt-speaker vt-ai">Nemora:</span>Done! I've updated your booking and sent a confirmation to your number. See you Wednesday! ✓</div>
                      </div>
                      <div className="voice-actions">
                        <div className="voice-action-btn">📋 Full transcript</div>
                        <div className="voice-action-btn">📅 Calendar sync ✓</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            {/* ── EMAIL PANEL ── */}
            <div className={`ch-panel${activeChannel === 'email' ? ' active' : ''}`} id="panel-email" role="tabpanel" aria-labelledby="tab-email">
              <div className="ch-panel-grid">
                <div className="ch-panel-text reveal">
                  <div className="ch-panel-label"><div className="ch-panel-label-dot"></div>Channel 03 · Email</div>
                  <h3 className="ch-panel-h3">Email sequences that<br /><em>close while you sleep.</em></h3>
                  <p className="ch-panel-desc">Automated welcome flows, lead nurture sequences, and follow-up campaigns — all written in your voice, timed intelligently, and triggered by real client behavior.</p>
                  <div className="ch-bullets">
                    <div className="ch-bullet">
                      <div className="ch-bullet-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5.5L4 7.5L8 3" stroke="#6E56FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <span>Welcome sequences via Mailchimp or Kit — live in 48 hours</span>
                    </div>
                    <div className="ch-bullet">
                      <div className="ch-bullet-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5.5L4 7.5L8 3" stroke="#6E56FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <span>Behaviour-triggered sends — opens, clicks, no-shows</span>
                    </div>
                    <div className="ch-bullet">
                      <div className="ch-bullet-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5.5L4 7.5L8 3" stroke="#6E56FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <span>Written in your exact voice — trained from your existing comms</span>
                    </div>
                    <div className="ch-bullet">
                      <div className="ch-bullet-icon"><svg viewBox="0 0 10 10" fill="none"><path d="M2 5.5L4 7.5L8 3" stroke="#6E56FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <span>Re-engagement campaigns for dormant leads and lapsed clients</span>
                    </div>
                  </div>
                  <a className="ch-panel-link" href="/demo">See email demo <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 4l4 3-4 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
                </div>
                <div className="ch-visual reveal reveal-delay-2">
                  <div className="fv-card" style={{ animation: 'float-a 5.5s ease-in-out infinite' }}>
                    <div className="fv-topbar">
                      <div className="fv-dots">
                        <div className="fv-dot" style={{ background: 'rgba(255,92,92,0.6)' }}></div>
                        <div className="fv-dot" style={{ background: 'rgba(255,185,56,0.6)' }}></div>
                        <div className="fv-dot" style={{ background: 'rgba(52,211,153,0.6)' }}></div>
                      </div>
                      <div className="fv-title-txt">email orchestration · nemora</div>
                    </div>
                    <div className="email-visual">
                      <div className="email-thread">
                        <div className="email-item unread">
                          <div className="email-from"><span>↳ Sent to Priya M.</span><span style={{ fontFamily: 'var(--mono)' }}>9:00 AM</span></div>
                          <div className="email-subject">Welcome to Bloom Wellness, Priya 🌸</div>
                          <div className="email-preview">Your first session is confirmed for Tuesday. Here's everything you need to know before you arrive...</div>
                          <div className="email-tag">
                            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--emerald)' }}></div>
                            Opened · 2 min ago
                          </div>
                        </div>
                        <div className="email-item">
                          <div className="email-from"><span>↳ Queued for Rajan S.</span><span style={{ fontFamily: 'var(--mono)' }}>Tomorrow 10:00</span></div>
                          <div className="email-subject">We miss you, Rajan — ready to book again?</div>
                          <div className="email-preview">It's been 6 weeks since your last session. Dr. Nithya has a new opening this week that fits perfectly...</div>
                          <div className="email-tag">
                            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--amber)' }}></div>
                            Re-engagement · Scheduled
                          </div>
                        </div>
                        <div className="email-item">
                          <div className="email-from"><span>↳ Sent to 47 leads</span><span style={{ fontFamily: 'var(--mono)' }}>Yesterday</span></div>
                          <div className="email-subject">Your free consultation is waiting, [First name]</div>
                          <div className="email-preview">You asked about our programme last week. Here's what's included and how to book your spot...</div>
                          <div className="email-tag">
                            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent)' }}></div>
                            34% open rate · 8 booked
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
          </div>{/* /ch-panels */}
        </div>
      </section>
      
      {/* ════ FEATURE CELLS ════ */}
      <section id="sec-features" aria-labelledby="features-heading">
        <div className="container">
          <div className="sec-eyebrow reveal" style={{ justifyContent: 'center', marginBottom: '12px' }}>
            <div className="sec-eyebrow-line"></div>
            Platform Capabilities
          </div>
          <h2 id="features-heading" className="sec-h2 reveal reveal-delay-1" style={{ textAlign: 'center', marginBottom: '16px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>Everything running under<br /><em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>one roof.</em></h2>
          <p className="sec-sub reveal reveal-delay-2" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', marginBottom: '48px' }}>A breakdown of what ships with every Nemora deployment.</p>
      
          <div className="features-grid reveal reveal-delay-2">
      
            <div className="feat-cell">
              <div className="feat-cell-icon" style={{ background: 'rgba(110,86,255,0.1)' }}>
                <svg viewBox="0 0 20 20" fill="none"><path d="M10 2L18 6V14L10 18L2 14V6L10 2Z" stroke="#6E56FF" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="10" cy="10" r="3" fill="#6E56FF" fillOpacity="0.5" /></svg>
              </div>
              <div className="feat-cell-title">AI Knowledge Base</div>
              <div className="feat-cell-desc">Your entire business brain — services, pricing, team, policies — ingested into a structured knowledge graph. Nemora pulls exact answers in milliseconds.</div>
              <div className="feat-cell-tag">Notion + Claude API</div>
            </div>
      
            <div className="feat-cell">
              <div className="feat-cell-icon" style={{ background: 'rgba(16,185,129,0.1)' }}>
                <svg viewBox="0 0 20 20" fill="none"><path d="M4 10C4 6.69 6.69 4 10 4s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6Z" stroke="#10B981" strokeWidth="1.5" /><path d="M10 7v3l2 2" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <div className="feat-cell-title">24/7 Automation</div>
              <div className="feat-cell-desc">No off-hours, no weekends, no sick days. Nemora handles inbound queries around the clock with zero performance degradation.</div>
              <div className="feat-cell-tag">Always live · 0 downtime</div>
            </div>
      
            <div className="feat-cell">
              <div className="feat-cell-icon" style={{ background: 'rgba(245,158,11,0.1)' }}>
                <svg viewBox="0 0 20 20" fill="none"><rect x="3" y="5" width="14" height="10" rx="2" stroke="#F59E0B" strokeWidth="1.5" /><path d="M3 8h14" stroke="#F59E0B" strokeWidth="1.5" /><path d="M7 12h2M11 12h2" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <div className="feat-cell-title">Smart Booking</div>
              <div className="feat-cell-desc">Real-time availability checks, instant confirmation, automated reminders, and reschedule handling — without your team touching anything.</div>
              <div className="feat-cell-tag">Google Cal · Calendly</div>
            </div>
      
            <div className="feat-cell">
              <div className="feat-cell-icon" style={{ background: 'rgba(110,86,255,0.1)' }}>
                <svg viewBox="0 0 20 20" fill="none"><path d="M3 4h14v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4Z" stroke="#6E56FF" strokeWidth="1.5" /><path d="M3 4l7 6 7-6" stroke="#6E56FF" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <div className="feat-cell-title">Email Orchestration</div>
              <div className="feat-cell-desc">Welcome sequences, lead nurture campaigns, and re-engagement flows — all written in your voice and timed to client behavior.</div>
              <div className="feat-cell-tag">Mailchimp · Kit</div>
            </div>
      
            <div className="feat-cell">
              <div className="feat-cell-icon" style={{ background: 'rgba(255,92,53,0.1)' }}>
                <svg viewBox="0 0 20 20" fill="none"><path d="M10 3C6.13 3 3 6.13 3 10c0 1.74.63 3.33 1.67 4.56L3 18l3.56-1.67A6.93 6.93 0 0010 17c3.87 0 7-3.13 7-7s-3.13-7-7-7Z" stroke="#FF5C35" strokeWidth="1.5" strokeLinejoin="round" /></svg>
              </div>
              <div className="feat-cell-title">Brand Voice Engine</div>
              <div className="feat-cell-desc">Nemora learns your tone from real conversations and content, then mirrors it precisely — indistinguishable from a well-trained team member.</div>
              <div className="feat-cell-tag">Custom training · GPT-4</div>
            </div>
      
            <div className="feat-cell">
              <div className="feat-cell-icon" style={{ background: 'rgba(16,185,129,0.1)' }}>
                <svg viewBox="0 0 20 20" fill="none"><path d="M3 14V6L10 3l7 3v8l-7 4-7-4Z" stroke="#10B981" strokeWidth="1.5" strokeLinejoin="round" /><path d="M10 3v14" stroke="#10B981" strokeWidth="1.5" strokeDasharray="2 2" /></svg>
              </div>
              <div className="feat-cell-title">Analytics Dashboard</div>
              <div className="feat-cell-desc">Track conversation volumes, response times, conversion rates, and top queries — updated in real time so you always know what's working.</div>
              <div className="feat-cell-tag">Live metrics · Weekly digest</div>
            </div>
      
            <div className="feat-cell">
              <div className="feat-cell-icon" style={{ background: 'rgba(110,86,255,0.1)' }}>
                <svg viewBox="0 0 20 20" fill="none"><circle cx="6" cy="10" r="2.5" stroke="#6E56FF" strokeWidth="1.5" /><circle cx="14" cy="6" r="2.5" stroke="#6E56FF" strokeWidth="1.5" /><circle cx="14" cy="14" r="2.5" stroke="#6E56FF" strokeWidth="1.5" /><path d="M8.5 9L11.5 7M8.5 11L11.5 13" stroke="#6E56FF" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <div className="feat-cell-title">Integrations</div>
              <div className="feat-cell-desc">Plugs into your existing stack with no disruption. WhatsApp, email providers, calendar tools, CRMs, and website chat platforms all connect out of the box.</div>
              <div className="feat-cell-tag">12+ native integrations</div>
            </div>
      
            <div className="feat-cell">
              <div className="feat-cell-icon" style={{ background: 'rgba(245,158,11,0.1)' }}>
                <svg viewBox="0 0 20 20" fill="none"><path d="M10 2l2 6h6l-5 3.5 2 6L10 14l-5 3.5 2-6L2 8h6l2-6Z" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round" /></svg>
              </div>
              <div className="feat-cell-title">Continuous Learning</div>
              <div className="feat-cell-desc">Every conversation makes Nemora sharper. Monthly knowledge updates, conversation reviews, and edge-case training — included in every plan.</div>
              <div className="feat-cell-tag">Monthly retainer option</div>
            </div>
      
            <div className="feat-cell">
              <div className="feat-cell-icon" style={{ background: 'rgba(255,92,53,0.1)' }}>
                <svg viewBox="0 0 20 20" fill="none"><path d="M5 10a5 5 0 1010 0 5 5 0 00-10 0Z" stroke="#FF5C35" strokeWidth="1.5" /><path d="M10 7v3l2 2" stroke="#FF5C35" strokeWidth="1.5" strokeLinecap="round" /><path d="M2 10h2M16 10h2M10 2v2M10 16v2" stroke="#FF5C35" strokeWidth="1" strokeLinecap="round" opacity=".4" /></svg>
              </div>
              <div className="feat-cell-title">Escalation Logic</div>
              <div className="feat-cell-desc">When a conversation genuinely needs a human, Nemora hands it off cleanly — with full context, transcript, and urgency flag sent to your team instantly.</div>
              <div className="feat-cell-tag">Smart handoff · WhatsApp alert</div>
            </div>
      
          </div>
        </div>
      </section>
      
      {/* ════ HOW IT WORKS ════ */}
      <section id="sec-how" aria-labelledby="how-heading">
        <div className="container">
          <div className="how-header">
            <div className="sec-eyebrow reveal" style={{ color: '#4a36e8' }}>
              <div className="sec-eyebrow-line" style={{ background: '#4a36e8' }}></div>
              Setup Process
            </div>
            <h2 id="how-heading" className="sec-h2 reveal reveal-delay-1" style={{ color: '#0d0d1a' }}>Live in <em style={{ fontStyle: 'normal', color: '#4a36e8' }}>72 hours.</em><br />No technical team needed.</h2>
            <p className="sec-sub reveal reveal-delay-2" style={{ color: '#505070' }}>We handle the entire setup. You hand us your knowledge, we build the intelligence — and it goes live before the week is out.</p>
          </div>
          <div className="how-steps">
            <div className="how-step reveal">
              <div className="how-step-num">01</div>
              <div className="how-step-title">Discovery call</div>
              <div className="how-step-desc">30-minute session where we learn your business, services, tone, and the specific problems to solve.</div>
              <div className="how-step-tag">📞 Day 1</div>
            </div>
            <div className="how-step reveal reveal-delay-1">
              <div className="how-step-num">02</div>
              <div className="how-step-title">Knowledge build</div>
              <div className="how-step-desc">We structure your FAQs, pricing, policies, and team information into a clean, queryable knowledge base.</div>
              <div className="how-step-tag">🧠 Day 1–2</div>
            </div>
            <div className="how-step reveal reveal-delay-2">
              <div className="how-step-num">03</div>
              <div className="how-step-title">Agent training</div>
              <div className="how-step-desc">Your AI is trained on your brand voice, tested across 100+ scenarios, and tuned until it sounds exactly like you.</div>
              <div className="how-step-tag">⚙️ Day 2–3</div>
            </div>
            <div className="how-step reveal reveal-delay-3">
              <div className="how-step-num">04</div>
              <div className="how-step-title">Go live</div>
              <div className="how-step-desc">Channels go live with a 48-hour shadow period — we monitor every conversation and fix anything before handing control to you.</div>
              <div className="how-step-tag">🚀 Day 3</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ ANALYTICS DEEP DIVE ════ */}
      <section id="sec-analytics" aria-labelledby="analytics-heading">
        <div className="container">
          <div className="analytics-grid">
            <div className="reveal">
              <div className="analytics-visual">
                <div className="av-topbar">
                  <div className="av-dots">
                    <div className="av-dot" style={{ background: 'rgba(255,92,92,0.6)' }}></div>
                    <div className="av-dot" style={{ background: 'rgba(255,185,56,0.6)' }}></div>
                    <div className="av-dot" style={{ background: 'rgba(52,211,153,0.6)' }}></div>
                  </div>
                  <div className="av-title">nemora analytics · this week</div>
                </div>
                <div className="av-body">
                  <div className="av-stat-row">
                    <div className="av-stat">
                      <div className="av-stat-val accent">847</div>
                      <div className="av-stat-lbl">Conversations</div>
                    </div>
                    <div className="av-stat">
                      <div className="av-stat-val green">0.8s</div>
                      <div className="av-stat-lbl">Avg response</div>
                    </div>
                    <div className="av-stat">
                      <div className="av-stat-val">98%</div>
                      <div className="av-stat-lbl">Resolution rate</div>
                    </div>
                  </div>
                  <div className="av-chart-label">Conversations per day (last 7 days)</div>
                  <div className="av-bar-chart">
                    <div className="av-bar" style={{ height: '45%' }}></div>
                    <div className="av-bar" style={{ height: '62%' }}></div>
                    <div className="av-bar" style={{ height: '54%' }}></div>
                    <div className="av-bar" style={{ height: '78%' }}></div>
                    <div className="av-bar" style={{ height: '66%' }}></div>
                    <div className="av-bar hi" style={{ height: '91%' }}></div>
                    <div className="av-bar hi" style={{ height: '85%' }}></div>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ flex: '1' }}>
                      <div style={{ fontSize: '10.5px', color: 'var(--text-4)', marginBottom: '6px' }}>Top query type</div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-1)' }}>Appointment booking</div>
                      <div style={{ height: '4px', background: 'var(--ink-4)', borderRadius: '2px', marginTop: '6px' }}>
                        <div style={{ width: '71%', height: '100%', background: 'var(--accent)', borderRadius: '2px' }}></div>
                      </div>
                      <div style={{ fontSize: '10px', color: 'var(--text-4)', marginTop: '3px' }}>71% of conversations</div>
                    </div>
                    <div style={{ flex: '1' }}>
                      <div style={{ fontSize: '10.5px', color: 'var(--text-4)', marginBottom: '6px' }}>Conversion rate</div>
                      <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-1)' }}>Chat → Booking</div>
                      <div style={{ height: '4px', background: 'var(--ink-4)', borderRadius: '2px', marginTop: '6px' }}>
                        <div style={{ width: '38%', height: '100%', background: 'var(--emerald)', borderRadius: '2px' }}></div>
                      </div>
                      <div style={{ fontSize: '10px', color: 'var(--text-4)', marginTop: '3px' }}>38% conversion (up 2.4×)</div>
                    </div>
                  </div>
                  <div className="av-insight">
                    <div className="av-insight-dot"></div>
                    Insight: Saturday morning is your highest-traffic window — 34% of bookings happen before 10 AM.
                  </div>
                </div>
              </div>
            </div>
      
            <div className="reveal reveal-delay-2">
              <div className="sec-eyebrow">
                <div className="sec-eyebrow-line"></div>
                Analytics
              </div>
              <h2 className="sec-h2">See what's working.<br /><em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Fix what isn't.</em></h2>
              <p className="sec-sub" style={{ marginBottom: '28px' }}>Every conversation is logged, categorised, and surfaced as actionable insight. You'll know your busiest hours, top queries, and conversion rates without opening a spreadsheet.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'var(--ink-2)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '16px 18px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(110,86,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 12L6 8L9 11L14 5" stroke="#6E56FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-1)', marginBottom: '2px' }}>Real-time dashboard</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>Live conversation feed, queue depth, and response times</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'var(--ink-2)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '16px 18px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v4M8 10v4M2 8h4M10 8h4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-1)', marginBottom: '2px' }}>Weekly digest email</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>Automated performance summary sent every Monday morning</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'var(--ink-2)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '16px 18px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3h10v10H3V3Z" stroke="#F59E0B" strokeWidth="1.5" rx="2" /><path d="M6 7h4M6 10h2" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: '700', color: 'var(--text-1)', marginBottom: '2px' }}>Conversation transcripts</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>Full searchable log of every interaction, filterable by channel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ SETUP TIMELINE ════ */}
      <section id="sec-setup" aria-labelledby="setup-heading">
        <div className="container">
          <div className="setup-header">
            <div className="sec-eyebrow reveal">
              <div className="sec-eyebrow-line"></div>
              What You Get
            </div>
            <h2 id="setup-heading" className="sec-h2 reveal reveal-delay-1">Everything included.<br /><em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>Nothing to build yourself.</em></h2>
            <p className="sec-sub reveal reveal-delay-2">Every Nemora engagement comes fully built, tested, and monitored. Here's what's in every deployment.</p>
          </div>
          <div className="setup-timeline">
            <div className="setup-step reveal">
              <div className="setup-step-num">
                Core Systems
                <span className="setup-step-hour">Always included</span>
              </div>
              <div className="setup-step-title">Intelligence Layer</div>
              <div className="setup-step-desc">The brain behind every channel — trained on your business data and ready to answer in your voice.</div>
              <div className="setup-step-list">
                <div className="setup-step-item">
                  <div className="setup-step-check"><svg viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
                  Structured knowledge base (Notion)
                </div>
                <div className="setup-step-item">
                  <div className="setup-step-check"><svg viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
                  Custom GPT or Claude agent
                </div>
                <div className="setup-step-item">
                  <div className="setup-step-check"><svg viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
                  Brand voice training & testing
                </div>
                <div className="setup-step-item">
                  <div className="setup-step-check"><svg viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
                  100+ scenario stress testing
                </div>
              </div>
            </div>
            <div className="setup-step reveal reveal-delay-1">
              <div className="setup-step-num">
                Channel Setup
                <span className="setup-step-hour">Your choice</span>
              </div>
              <div className="setup-step-title">Live Deployments</div>
              <div className="setup-step-desc">The channels that go live — configured, integrated, and production-ready.</div>
              <div className="setup-step-list">
                <div className="setup-step-item">
                  <div className="setup-step-check"><svg viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
                  WhatsApp Business Bot (clinic/coach)
                </div>
                <div className="setup-step-item">
                  <div className="setup-step-check"><svg viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
                  Website FAQ chatbot (Voiceflow/Tidio)
                </div>
                <div className="setup-step-item">
                  <div className="setup-step-check"><svg viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
                  Email welcome sequence
                </div>
                <div className="setup-step-item">
                  <div className="setup-step-check"><svg viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
                  Escalation & handoff logic
                </div>
              </div>
            </div>
            <div className="setup-step reveal reveal-delay-2">
              <div className="setup-step-num">
                Ongoing
                <span className="setup-step-hour">Monthly retainer</span>
              </div>
              <div className="setup-step-title">Maintenance & Growth</div>
              <div className="setup-step-desc">Optional maintenance retainer to keep everything sharp as your business evolves.</div>
              <div className="setup-step-list">
                <div className="setup-step-item">
                  <div className="setup-step-check"><svg viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
                  Monthly knowledge base updates
                </div>
                <div className="setup-step-item">
                  <div className="setup-step-check"><svg viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
                  Conversation review & tuning
                </div>
                <div className="setup-step-item">
                  <div className="setup-step-check"><svg viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
                  Weekly performance digest
                </div>
                <div className="setup-step-item">
                  <div className="setup-step-check"><svg viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
                  Priority support (₹5k–8k/mo)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ════ METRICS ════ */}
      <section id="sec-metrics" aria-label="Platform metrics">
        <div className="container">
          <div className="metrics-grid" role="list">
            <div className="metric-cell reveal" role="listitem">
              <div className="metric-num" data-target="4.9" data-suffix="★" data-decimals="1">4.9★</div>
              <div className="metric-desc">Average customer satisfaction rating across all Nemora deployments</div>
              <div className="metric-tag">
                <svg viewBox="0 0 12 12" fill="none"><path d="M2 9L5 6L7 8L10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Verified ratings
              </div>
            </div>
            <div className="metric-cell reveal reveal-delay-1" role="listitem">
              <div className="metric-num" data-target="40" data-suffix="+">40+</div>
              <div className="metric-desc">Businesses running on Nemora intelligence in Chennai and beyond</div>
              <div className="metric-tag">
                <svg viewBox="0 0 12 12" fill="none"><path d="M2 9L5 6L7 8L10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                And growing
              </div>
            </div>
            <div className="metric-cell reveal reveal-delay-2" role="listitem">
              <div className="metric-num" data-target="0.8" data-suffix="s" data-decimals="1">0.8s</div>
              <div className="metric-desc">Average response time across all active Nemora chat deployments</div>
              <div className="metric-tag">
                <svg viewBox="0 0 12 12" fill="none"><path d="M2 9L5 6L7 8L10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                vs 4.2h manual
              </div>
            </div>
            <div className="metric-cell reveal reveal-delay-3" role="listitem">
              <div className="metric-num" data-target="72" data-suffix="hrs">72hrs</div>
              <div className="metric-desc">From discovery call to your AI going fully live — no exceptions</div>
              <div className="metric-tag">
                <svg viewBox="0 0 12 12" fill="none"><path d="M2 9L5 6L7 8L10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Guaranteed delivery
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
            <h2 id="cta-heading" className="cta-h2 reveal reveal-delay-1">Ready to see<br />Nemora live<br />in your business?</h2>
            <p className="cta-sub reveal reveal-delay-2">Book a 30-minute demo and see your custom AI agent built in real time — handling real queries, in your brand voice.</p>
            <div className="cta-buttons reveal reveal-delay-3">
              <button className="cta-btn-primary" onClick={() => router.push('/contact')}>
                Book a free demo
              </button>
              <button className="cta-btn-secondary" onClick={() => router.push('/pricing')}>See pricing →</button>
            </div>
            <div className="cta-note reveal reveal-delay-4">No commitment required · Cancel anytime · Setup included</div>
          </div>
        </div>
      </section>
      
      {/* ════ FOOTER ════ */}
    </div>
  );
}
