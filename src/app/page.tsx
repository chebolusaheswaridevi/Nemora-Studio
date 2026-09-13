import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME, TWITTER_HANDLE, OG_IMAGE } from '@/lib/seo';
import HomeClient from './HomeClient';

const TITLE = 'AI Business Automation for Small Businesses | Nemora';
const DESCRIPTION =
  'Nemora automates voice calls, WhatsApp, chat, and email for small businesses — so you never miss a lead. AI-powered 24/7 front desk for clinics, coaches, and ecommerce brands.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/',
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

// TODO: /public/logo.png does not exist yet — add a real logo file or this
// schema field will point at a 404.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Nemora',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    'AI business automation platform for small businesses — voice, WhatsApp, chat, and email.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'support@nemorastudio.com',
  },
  sameAs: [
    'https://linkedin.com/company/nemorastudio',
    'https://instagram.com/nemorastudio',
    'https://twitter.com/nemorastudio',
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HomeClient />
    </>
  );
}
