import { getAllDeals } from '$lib/utils/deals';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const deals = getAllDeals();
  const baseUrl = 'https://kcevadaily.com'; // Update with your actual domain
  
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/tools', priority: '0.9', changefreq: 'daily' },
    { url: '/extension', priority: '0.8', changefreq: 'weekly' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.5', changefreq: 'monthly' },
    { url: '/terms', priority: '0.5', changefreq: 'monthly' },
    { url: '/affiliate-disclosure', priority: '0.5', changefreq: 'monthly' }
  ];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
  ${deals
    .map(
      (deal) => `
  <url>
    <loc>${baseUrl}/deal/${deal.slug}</loc>
    <lastmod>${new Date(deal.publishedAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
</urlset>`;
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600'
    }
  });
};
