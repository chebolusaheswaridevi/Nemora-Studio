/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nemorastudio.com',
  generateRobotsTxt: false, // we handle robots.txt manually
  sitemapSize: 7000,
  exclude: ['/api/*'],
};
