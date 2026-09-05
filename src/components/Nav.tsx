'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/demo', label: 'Live Demo' },
  { href: '/customers', label: 'Customers' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
];

const CHANNEL_ITEMS = [
  {
    href: '/platform#voice',
    color: 'rgba(110,86,255,0.12)',
    title: 'Voice Intelligence',
    sub: 'Human-calibre conversation',
    path: 'M7.5 1.5a6 6 0 100 12 6 6 0 000-12zM5 7.5C5 6.12 6.12 5 7.5 5S10 6.12 10 7.5 8.88 10 7.5 10 5 8.88 5 7.5z',
    stroke: '#6E56FF',
    fill: true,
  },
  {
    href: '/platform#chat',
    color: 'rgba(16,185,129,0.12)',
    title: 'Conversational Chat',
    sub: 'Context-aware, always on-brand',
    path: 'M2 3h11v8H2zM5 11v2M10 11v2',
    stroke: '#10B981',
    fill: false,
  },
  {
    href: '/platform#email',
    color: 'rgba(245,158,11,0.12)',
    title: 'Email Orchestration',
    sub: 'Contextual resolutions',
    path: 'M1.5 5l6 4 6-4',
    stroke: '#F59E0B',
    fill: false,
  },
];

const CAPABILITY_COLS = [
  {
    head: 'Build',
    items: [
      { title: 'Adaptive Workflows', sub: 'AI-native automation', color: 'rgba(110,86,255,0.1)', stroke: '#6E56FF' },
      { title: 'Deep Integrations', sub: 'Every tool connected', color: 'rgba(110,86,255,0.1)', stroke: '#6E56FF' },
    ],
  },
  {
    head: 'Optimise',
    items: [
      { title: 'Live Experimentation', sub: 'A/B test every touchpoint', color: 'rgba(16,185,129,0.1)', stroke: '#10B981' },
      { title: 'Quality Assurance', sub: 'Simulations at scale', color: 'rgba(16,185,129,0.1)', stroke: '#10B981' },
    ],
  },
  {
    head: 'Scale',
    items: [
      { title: 'Revenue Intelligence', sub: 'Voice of the customer', color: 'rgba(245,158,11,0.1)', stroke: '#F59E0B' },
      { title: 'Watchtower', sub: 'Always-on monitoring', color: 'rgba(245,158,11,0.1)', stroke: '#F59E0B' },
    ],
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Nav links are hidden below 768px (see globals.css) with no other way to
  // reach them, so this panel is the only mobile navigation path.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <nav id="nav" role="navigation" aria-label="Main navigation" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo" aria-label="Nemora home">
          <span className="logo-ne">ne</span>
          <span className="logo-mora">mora</span>
        </Link>

        <div className="nav-links" role="menubar">
          <div className="nav-dropdown-wrap" role="menuitem" aria-haspopup="true">
            <Link href="/platform" className={`nav-link ${pathname === '/platform' ? 'active' : ''}`} tabIndex={0}>
              Product
              <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="nav-dropdown" role="menu" aria-label="Product menu">
              <div className="dd-header">
                <div className="dd-header-title">Platform Overview</div>
                <div className="dd-header-sub">
                  See how Nemora orchestrates your entire client lifecycle in one unified intelligence layer.
                </div>
              </div>
              <div className="dd-label">Channels</div>
              <div className="dd-grid">
                {CHANNEL_ITEMS.map((item) => (
                  <Link key={item.title} href={item.href} className="dd-item" role="menuitem" tabIndex={0}>
                    <div className="dd-icon" style={{ background: item.color }}>
                      <svg viewBox="0 0 15 15" fill="none" aria-hidden="true">
                        <path
                          d={item.path}
                          fill={item.fill ? item.stroke : 'none'}
                          stroke={item.fill ? 'none' : item.stroke}
                          strokeWidth="1.3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="dd-item-title">{item.title}</div>
                      <div className="dd-item-sub">{item.sub}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="dd-divider" />
              <div className="dd-label">Platform Capabilities</div>
              <div className="dd-cols">
                {CAPABILITY_COLS.map((col) => (
                  <div key={col.head}>
                    <div className="dd-col-head">{col.head}</div>
                    {col.items.map((item) => (
                      <Link key={item.title} href="/platform" className="dd-item sm" role="menuitem" tabIndex={0}>
                        <div className="dd-icon" style={{ background: item.color }}>
                          <svg viewBox="0 0 13 13" fill="none" aria-hidden="true">
                            <circle cx="6.5" cy="6.5" r="4.5" stroke={item.stroke} strokeWidth="1.2" />
                          </svg>
                        </div>
                        <div>
                          <div className="dd-item-title">{item.title}</div>
                          <div className="dd-item-sub">{item.sub}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              tabIndex={0}
              role="menuitem"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <a href="https://cal.com/nemora-studio/discovery-call" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Book a call
          </a>
          <Link href="/contact" className="btn-cta">
            Get a demo
          </Link>
        </div>

        <button
          className="nav-hamburger"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="nav-mobile-panel"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="nav-mobile-panel" className={`nav-mobile-panel ${mobileOpen ? 'open' : ''}`} role="menu" aria-label="Mobile navigation">
        <Link href="/platform" className={`nav-mobile-link ${pathname === '/platform' ? 'active' : ''}`} role="menuitem">
          Platform
        </Link>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-mobile-link ${pathname === link.href ? 'active' : ''}`}
            role="menuitem"
          >
            {link.label}
          </Link>
        ))}
        <div className="nav-mobile-actions">
          <a href="https://cal.com/nemora-studio/discovery-call" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Book a call
          </a>
          <Link href="/contact" className="btn-cta">
            Get a demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
