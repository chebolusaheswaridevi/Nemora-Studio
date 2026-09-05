import Link from 'next/link';

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Platform Overview', href: '/platform' },
      { label: 'Voice Intelligence', href: '/platform#voice' },
      { label: 'Conversational Chat', href: '/platform#chat' },
      { label: 'Email Orchestration', href: '/platform#email' },
      { label: 'Analytics', href: '/platform#analytics' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Clinics & Health', href: '/customers?filter=clinics' },
      { label: 'Coaching', href: '/customers?filter=coaches' },
      { label: 'E-commerce', href: '/customers?filter=ecommerce' },
      { label: 'Interior Design', href: '/customers' },
      { label: 'Professional Services', href: '/customers?filter=service' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Live Demos', href: '/demo' },
      { label: 'Case Studies', href: '/customers' },
      { label: 'Blog', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Contact Sales', href: '/contact' },
    ],
  },
];

const SOCIALS = [
  {
    label: 'Twitter',
    path: 'M13 2L8.5 7.5M13 2H10M13 2L8.5 7.5L13 13H10L7.5 9.5M8.5 7.5L2 2H5L7.5 5.5M8.5 7.5L7.5 9.5M7.5 9.5L2 13H5',
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-ne" style={{ fontSize: 20, fontWeight: 900, color: '#fff' }}>
                ne
              </span>
              <span className="logo-mora" style={{ fontSize: 20, fontWeight: 900, color: '#A594FF' }}>
                mora
              </span>
            </div>
            <div className="footer-tagline">AI-native client intelligence for businesses that refuse to miss a lead.</div>
            <div className="footer-socials">
              <div className="footer-social" role="link" tabIndex={0} aria-label="Twitter">
                <svg viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path
                    d={SOCIALS[0].path}
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="footer-social" role="link" tabIndex={0} aria-label="LinkedIn">
                <svg viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <rect x="1.5" y="1.5" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M5 6v5M5 4v.5M8 11V8c0-1.1.9-2 2-2s2 .9 2 2v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="footer-social" role="link" tabIndex={0} aria-label="Instagram">
                <svg viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="7.5" cy="7.5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="11" cy="4" r="0.6" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map((link) => (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nemora. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Security</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
