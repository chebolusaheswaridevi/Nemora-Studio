import type { Metadata } from 'next';
import { SITE_NAME, TWITTER_HANDLE, OG_IMAGE } from '@/lib/seo';
import CustomersClient from './CustomersClient';

const TITLE = 'Client Results — Clinics, Coaches & Brands Using Nemora';
const DESCRIPTION =
  'See how private clinics, coaching businesses, and ecommerce brands use Nemora to automate customer communication and recover missed revenue.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Always points at the bare path — the ?filter= variants (clinics/coaches/
  // ecommerce/service) are the same content, just pre-filtered client-side,
  // so they must not be treated as separate canonical pages.
  alternates: { canonical: '/customers' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/customers',
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
  return <CustomersClient />;
}
