import type { Metadata } from 'next';
import { SITE_NAME, TWITTER_HANDLE, OG_IMAGE } from '@/lib/seo';
import PricingClient from './PricingClient';

const TITLE = 'Nemora Pricing — AI Automation Plans for Small Business';
const DESCRIPTION =
  'Transparent pricing for AI business automation. Plans for private clinics, coaches, and ecommerce brands. No hidden fees. Cancel anytime.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/pricing',
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

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Nemora',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'AI automation platform for small businesses — voice agents, WhatsApp bots, and email automation.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <PricingClient />
    </>
  );
}
