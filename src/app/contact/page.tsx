import type { Metadata } from 'next';
import { SITE_NAME, TWITTER_HANDLE, OG_IMAGE } from '@/lib/seo';
import ContactClient from './ContactClient';

const TITLE = 'Contact Nemora — AI Automation for Your Small Business';
const DESCRIPTION =
  'Get in touch with the Nemora team. We help small businesses in India automate voice, WhatsApp, chat, and email. Based in Chennai.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/contact',
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
  return <ContactClient />;
}
