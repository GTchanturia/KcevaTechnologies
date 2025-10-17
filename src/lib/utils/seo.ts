export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
  structuredData?: any;
}

export function generateSEOMetadata(metadata: SEOMetadata): string {
  const tags: string[] = [];

  // Basic meta tags
  tags.push(`<title>${metadata.title}</title>`);
  tags.push(`<meta name="description" content="${metadata.description}" />`);
  if (metadata.keywords) {
    tags.push(`<meta name="keywords" content="${metadata.keywords}" />`);
  }

  // Open Graph tags
  tags.push(`<meta property="og:title" content="${metadata.ogTitle || metadata.title}" />`);
  tags.push(`<meta property="og:description" content="${metadata.ogDescription || metadata.description}" />`);
  tags.push(`<meta property="og:type" content="${metadata.ogType || 'website'}" />`);
  if (metadata.ogImage) {
    tags.push(`<meta property="og:image" content="${metadata.ogImage}" />`);
  }

  // Twitter Card tags
  tags.push(`<meta name="twitter:card" content="${metadata.twitterCard || 'summary_large_image'}" />`);
  tags.push(`<meta name="twitter:title" content="${metadata.ogTitle || metadata.title}" />`);
  tags.push(`<meta name="twitter:description" content="${metadata.ogDescription || metadata.description}" />`);
  if (metadata.ogImage) {
    tags.push(`<meta name="twitter:image" content="${metadata.ogImage}" />`);
  }

  // Canonical URL
  if (metadata.canonical) {
    tags.push(`<link rel="canonical" href="${metadata.canonical}" />`);
  }

  // Structured data
  if (metadata.structuredData) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(metadata.structuredData)}</script>`);
  }

  return tags.join('\n');
}
