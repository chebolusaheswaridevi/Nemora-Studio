import type { Metadata } from 'next';
import { SITE_NAME, TWITTER_HANDLE, OG_IMAGE } from '@/lib/seo';
import DemoClient from './DemoClient';

const TITLE = 'Book a Free Demo — See Nemora AI Automation in Action';
const DESCRIPTION =
  'Book a free 20-minute demo and see exactly how Nemora handles voice calls, WhatsApp messages, and lead follow-ups for your business — fully automated.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/demo' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/demo',
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
  return <DemoClient />;
}
