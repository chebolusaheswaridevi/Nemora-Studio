// Shared SEO constants used across page metadata, JSON-LD, and next-sitemap config.
// Canonical base per site policy: https://nemorastudio.com (no www, no trailing slash).
export const SITE_URL = 'https://nemorastudio.com';
export const SITE_NAME = 'Nemora';
export const TWITTER_HANDLE = '@nemorastudio';
// TODO: /public/og-image.png does not exist yet — generate a real 1200x630 share
// image and drop it in /public, or these tags will reference a 404.
export const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
};
