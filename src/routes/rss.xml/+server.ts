import { getAllDeals } from '$lib/utils/deals';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const deals = getAllDeals();
  const baseUrl = 'https://kcevadaily.com'; // Update with your actual domain
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kceva AI Daily - AI Tools & Deals</title>
    <link>${baseUrl}</link>
    <description>Your trusted source for the best AI tools and exclusive deals</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${deals
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 20)
      .map(
        (deal) => `
    <item>
      <title>${escapeXml(deal.title)}</title>
      <link>${baseUrl}/deal/${deal.slug}</link>
      <description>${escapeXml(deal.description)}</description>
      <category>${escapeXml(deal.category)}</category>
      <pubDate>${new Date(deal.publishedAt).toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/deal/${deal.slug}</guid>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;
  
  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600'
    }
  });
};

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
