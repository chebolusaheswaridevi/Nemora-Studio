import type { Metadata } from 'next';
import { SITE_NAME, TWITTER_HANDLE, OG_IMAGE } from '@/lib/seo';
import './terms.scoped.css';

const TITLE = 'Terms of Service | Nemora';
const DESCRIPTION = "Terms governing your use of Nemora Studio's website and services.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/terms' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/terms',
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
    <div className="page-terms">
      <section id="legal-hero">
        <div className="legal-grid-bg" aria-hidden="true" />
        <div className="container">
          <div className="sec-eyebrow">
            <div className="sec-eyebrow-line" />
            Legal
          </div>
          <h1 className="sec-h2">Terms of Service</h1>
          <p className="legal-updated">Last updated: September 2026</p>
        </div>
      </section>

      <section id="legal-main">
        <div className="container">
          <div className="legal-prose">
            <p>
              By using nemorastudio.com or engaging Nemora Studio for services, you agree to these terms.
            </p>

            <h2>Services</h2>
            <p>
              Nemora Studio provides AI automation services including voice agents, WhatsApp bots, chat automation,
              and email workflows for small and mid-size businesses.
            </p>

            <h2>Use of Website</h2>
            <p>
              You may use this website for lawful purposes only. You may not attempt to disrupt, hack, or
              reverse-engineer any part of the site or its underlying systems.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this site — copy, design, code, brand assets — is owned by Nemora Studio. You may not
              reproduce or reuse it without written permission.
            </p>

            <h2>Service Agreements</h2>
            <p>
              Paid services are governed by a separate client agreement signed before work begins. These terms cover
              website use only.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Nemora Studio is not liable for indirect or consequential damages arising from use of this website.
            </p>

            <h2>Governing Law</h2>
            <p>These terms are governed by the laws of India.</p>

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
