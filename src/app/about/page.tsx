import type { Metadata } from 'next';
import { SITE_NAME, TWITTER_HANDLE, OG_IMAGE } from '@/lib/seo';
import AboutClient from './AboutClient';

const TITLE = 'About Nemora — AI Automation Agency Based in Chennai';
const DESCRIPTION =
  'Nemora was founded after watching a family clinic in Adyar lose bookings to missed calls. We build AI systems so small businesses stop losing revenue to manual processes.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/about' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/about',
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
  return <AboutClient />;
}
