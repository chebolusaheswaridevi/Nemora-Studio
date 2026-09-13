import type { Metadata } from 'next';
import { SITE_NAME, TWITTER_HANDLE, OG_IMAGE } from '@/lib/seo';
import PlatformClient from './PlatformClient';

const TITLE = 'AI Automation Platform — Voice, WhatsApp & Chat | Nemora';
const DESCRIPTION =
  'One platform for AI voice agents, WhatsApp automation, live chat, and email workflows. Built for small and mid-size businesses that can’t afford to miss a customer.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/platform' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/platform',
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
  return <PlatformClient />;
}
