<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import DealCard from '$lib/components/DealCard.svelte';
  import InstallCTA from '$lib/components/InstallCTA.svelte';
  import { formatPrice, calculateSavingsPercentage, calculateSavings, isExpired } from '$lib/utils/deals';
  import type { PageData } from './$types';
  
  let { data }: { data: PageData } = $props();
  
  const { deal, relatedDeals } = data;
  const savings = calculateSavings(deal);
  const savingsPercentage = calculateSavingsPercentage(deal);
  const expired = isExpired(deal);
  
  const seoMetadata = {
    title: `${deal.title} — Kceva AI Daily`,
    description: `${deal.description} Find the best price and exclusive deal on ${deal.title}. ${deal.oldPrice ? `Save ${savingsPercentage}%` : 'Special offer available'}.`,
    keywords: deal.tags.join(', '),
    ogImage: deal.image,
    ogType: 'product',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: deal.title,
      description: deal.description,
      image: deal.image,
      brand: {
        '@type': 'Brand',
        name: deal.title.split(' ')[0]
      },
      offers: {
        '@type': 'Offer',
        url: deal.affiliateLink,
        priceCurrency: deal.currency,
        price: deal.price,
        availability: expired ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
        priceValidUntil: deal.expiresAt || undefined
      }
    }
  };
</script>

<SEO metadata={seoMetadata} />

<div class="bg-gray-50 dark:bg-gray-900 py-12">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Breadcrumb -->
    <nav class="mb-6 text-sm">
      <a href="/" class="text-brand-blue hover:underline">Home</a>
      <span class="mx-2 text-gray-400">/</span>
      <a href="/tools" class="text-brand-blue hover:underline">Tools</a>
      <span class="mx-2 text-gray-400">/</span>
      <span class="text-gray-600 dark:text-gray-400">{deal.title}</span>
    </nav>
    
    <div class="card overflow-hidden">
      <div class="grid md:grid-cols-2 gap-8 p-8">
        <!-- Image -->
        <div>
          <div class="relative">
            <img
              src={deal.image}
              alt={deal.title}
              class="w-full rounded-lg"
              onerror={(e) => e.currentTarget.src = '/images/placeholder.jpg'}
            />
            {#if savingsPercentage}
              <div class="absolute top-4 right-4 bg-accent-green text-white px-4 py-2 rounded-full text-lg font-bold">
                Save {savingsPercentage}%
              </div>
            {/if}
            {#if expired}
              <div class="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                Expired
              </div>
            {/if}
          </div>
        </div>
        
        <!-- Details -->
        <div class="flex flex-col">
          <div class="mb-2">
            <span class="text-sm text-brand-blue font-semibold">{deal.category}</span>
          </div>
          
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{deal.title}</h1>
          
          <p class="text-gray-600 dark:text-gray-400 mb-6">{deal.excerpt}</p>
          
          <!-- Price -->
          <div class="mb-6">
            {#if deal.oldPrice}
              <div class="flex items-baseline gap-3">
                <span class="text-4xl font-bold text-gray-900 dark:text-white">
                  {formatPrice(deal.price, deal.currency)}
                </span>
                <span class="text-2xl text-gray-500 line-through">
                  {formatPrice(deal.oldPrice, deal.currency)}
                </span>
              </div>
              {#if savings}
                <p class="text-accent-green font-semibold mt-2">
                  You save {formatPrice(savings, deal.currency)} ({savingsPercentage}%)
                </p>
              {/if}
            {:else}
              <span class="text-4xl font-bold text-gray-900 dark:text-white">
                {formatPrice(deal.price, deal.currency)}
              </span>
            {/if}
          </div>
          
          <!-- CTA Button -->
          <a
            href="/r/{deal.id}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary text-center text-lg py-4 mb-4 block"
            class:opacity-50={expired}
            class:cursor-not-allowed={expired}
          >
            {expired ? 'Deal Expired' : 'Get Deal — Open in new tab'}
          </a>
          
          <p class="text-xs text-gray-500 text-center">
            ⚠️ We may earn a commission when you use this link. <a href="/affiliate-disclosure" class="underline">Learn more</a>
          </p>
          
          <!-- Tags -->
          <div class="mt-6 flex flex-wrap gap-2">
            {#each deal.tags as tag}
              <span class="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                {tag}
              </span>
            {/each}
          </div>
          
          <!-- Availability -->
          {#if deal.expiresAt}
            <div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p class="text-sm text-yellow-800 dark:text-yellow-200">
                ⏰ Limited time offer — Expires on {new Date(deal.expiresAt).toLocaleDateString()}
              </p>
            </div>
          {/if}
        </div>
      </div>
      
      <!-- Full Description -->
      <div class="border-t border-gray-200 dark:border-gray-700 p-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">About {deal.title}</h2>
        <div class="prose dark:prose-invert max-w-none">
          <p class="text-gray-700 dark:text-gray-300">{deal.description}</p>
        </div>
      </div>
    </div>
    
    <!-- Related Deals -->
    {#if relatedDeals.length > 0}
      <div class="mt-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Similar Deals</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {#each relatedDeals as relatedDeal}
            <DealCard deal={relatedDeal} />
          {/each}
        </div>
      </div>
    {/if}
    
    <!-- Extension CTA -->
    <div class="mt-12">
      <InstallCTA variant="compact" />
    </div>
  </div>
</div>
