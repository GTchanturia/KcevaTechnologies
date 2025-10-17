<script lang="ts">
  import { page } from '$app/stores';
  import type { SEOMetadata } from '$lib/utils/seo';
  
  interface Props {
    metadata: SEOMetadata;
  }
  
  let { metadata }: Props = $props();
  
  const baseUrl = $page.url.origin;
  const canonicalUrl = metadata.canonical || `${baseUrl}${$page.url.pathname}`;
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  {#if metadata.keywords}
    <meta name="keywords" content={metadata.keywords} />
  {/if}
  
  <!-- Open Graph -->
  <meta property="og:title" content={metadata.ogTitle || metadata.title} />
  <meta property="og:description" content={metadata.ogDescription || metadata.description} />
  <meta property="og:type" content={metadata.ogType || 'website'} />
  <meta property="og:url" content={canonicalUrl} />
  {#if metadata.ogImage}
    <meta property="og:image" content={`${baseUrl}${metadata.ogImage}`} />
  {/if}
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content={metadata.twitterCard || 'summary_large_image'} />
  <meta name="twitter:title" content={metadata.ogTitle || metadata.title} />
  <meta name="twitter:description" content={metadata.ogDescription || metadata.description} />
  {#if metadata.ogImage}
    <meta name="twitter:image" content={`${baseUrl}${metadata.ogImage}`} />
  {/if}
  
  <!-- Canonical -->
  <link rel="canonical" href={canonicalUrl} />
  
  <!-- Structured Data -->
  {#if metadata.structuredData}
    {@html `<script type="application/ld+json">${JSON.stringify(metadata.structuredData)}<\/script>`}
  {/if}
</svelte:head>
