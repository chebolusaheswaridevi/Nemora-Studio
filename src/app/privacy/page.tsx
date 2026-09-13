import type { Metadata } from 'next';
import { SITE_NAME, TWITTER_HANDLE, OG_IMAGE } from '@/lib/seo';
import './privacy.scoped.css';

const TITLE = 'Privacy Policy | Nemora';
const DESCRIPTION = 'How Nemora collects, uses, and protects your data.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/privacy',
    siteName: SITE_NAME,
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Page() {
  return (
    <div className="page-privacy">
      <section id="legal-hero">
        <div className="legal-grid-bg" aria-hidden="true" />
        <div className="container">
          <div className="sec-eyebrow">
            <div className="sec-eyebrow-line" />
            Legal
          </div>
          <h1 className="sec-h2">Privacy Policy</h1>
          <p className="legal-updated">Last updated: September 2026</p>
        </div>
      </section>

      <section id="legal-main">
        <div className="container">
          <div className="legal-prose">
            <p>
              Nemora Studio (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates nemorastudio.com. This
              policy explains what data we collect, why, and how we protect it — in plain English.
            </p>

            <h2>What We Collect</h2>
            <ul>
              <li>Contact form submissions: name, email, business name, message</li>
              <li>Usage data: pages visited, time on site (via analytics)</li>
              <li>Communication data: emails and WhatsApp messages you send us</li>
            </ul>

            <h2>Why We Collect It</h2>
            <ul>
              <li>To respond to your enquiries and demo requests</li>
              <li>To send service updates (only if you opt in)</li>
              <li>To improve the website</li>
            </ul>

            <h2>What We Don&apos;t Do</h2>
            <ul>
              <li>We do not sell your data to anyone.</li>
              <li>We do not share your data with third parties except to operate our services (e.g. email delivery).</li>
            </ul>

            <h2>Data Storage</h2>
            <p>
              Your data is stored securely. Contact form submissions are delivered to our team email and not stored
              long-term on third-party servers.
            </p>

            <h2>Your Rights</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any time by emailing{' '}
              <a href="mailto:hello@nemorastudio.com">hello@nemorastudio.com</a>.
            </p>

            <h2>Contact</h2>
            <p>
              Nemora Studio, Chennai, Tamil Nadu, India
              <br />
              <a href="mailto:hello@nemorastudio.com">hello@nemorastudio.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
