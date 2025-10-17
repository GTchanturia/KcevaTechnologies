<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import DealList from '$lib/components/DealList.svelte';
  import InstallCTA from '$lib/components/InstallCTA.svelte';
  import CategoryFilter from '$lib/components/CategoryFilter.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getFeaturedDeals, getCategories } from '$lib/utils/deals';
  import type { Deal } from '$lib/types/deal';
  
  const featuredDeals = getFeaturedDeals(6);
  const categories = getCategories();
  
  let selectedCategory = $state('');
  let displayedDeals = $derived(
    selectedCategory 
      ? featuredDeals.filter(deal => deal.category === selectedCategory)
      : featuredDeals
  );
  
  const seoMetadata = {
    title: 'Kceva AI Daily — Best AI Tools & Exclusive Deals',
    description: 'Discover the best AI tools and exclusive deals daily. Save smarter with Kceva AI Daily - your trusted source for AI tool discounts and offers.',
    keywords: 'AI tools, AI deals, artificial intelligence, AI discounts, AI software, machine learning tools',
    ogImage: '/images/og-home.jpg',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Kceva AI Daily',
      url: 'https://kcevadaily.com',
      description: 'Your trusted source for the best AI tools and exclusive deals',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://kcevadaily.com/tools?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  };
</script>

<SEO metadata={seoMetadata} />

<Hero
  title="Daily AI Tools & Deals — Save Smarter with Kceva AI Daily"
  subtitle="Discover the best AI tools with exclusive deals and discounts. Never overpay for AI software again."
  ctaText="Browse All Deals"
  ctaLink="/tools"
/>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <!-- Featured Deals Section -->
  <section class="mb-12">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Featured Deals</h2>
        <p class="text-gray-600 dark:text-gray-400">Hand-picked exclusive offers updated daily</p>
      </div>
      <a href="/tools" class="text-brand-blue hover:text-blue-700 font-semibold flex items-center mt-4 md:mt-0">
        View All Deals
        <svg class="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
    
    <div class="mb-6">
      <CategoryFilter
        {categories}
        {selectedCategory}
        onSelectCategory={(cat) => selectedCategory = cat}
      />
    </div>
    
    <DealList deals={displayedDeals} />
  </section>
  
  <!-- Install CTA -->
  <section class="mb-12">
    <InstallCTA />
  </section>
  
  <!-- Categories Overview -->
  <section class="mb-12">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Browse by Category</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each categories as category}
        <a
          href="/tools?category={encodeURIComponent(category)}"
          class="card p-6 text-center hover:shadow-xl transition-shadow"
        >
          <h3 class="font-semibold text-gray-900 dark:text-white">{category}</h3>
        </a>
      {/each}
    </div>
  </section>
  
  <!-- Value Proposition -->
  <section class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 md:p-12">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Kceva AI Daily?</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <div class="text-4xl mb-4">🎯</div>
          <h3 class="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Curated Selection</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            We handpick the best AI tools and verify every deal
          </p>
        </div>
        <div>
          <div class="text-4xl mb-4">💰</div>
          <h3 class="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Exclusive Discounts</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            Access special deals you won't find anywhere else
          </p>
        </div>
        <div>
          <div class="text-4xl mb-4">🔔</div>
          <h3 class="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Real-time Updates</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            Get notified instantly with our browser extension
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
