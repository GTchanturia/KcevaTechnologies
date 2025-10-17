<script lang="ts">
  import { page } from '$app/stores';
  import DealList from '$lib/components/DealList.svelte';
  import CategoryFilter from '$lib/components/CategoryFilter.svelte';
  import Search from '$lib/components/Search.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import { getAllDeals, getCategories } from '$lib/utils/deals';
  import type { Deal } from '$lib/types/deal';
  
  const allDeals = getAllDeals();
  const categories = getCategories();
  
  let selectedCategory = $state($page.url.searchParams.get('category') || '');
  let searchQuery = $state($page.url.searchParams.get('q') || '');
  
  let filteredDeals = $derived.by(() => {
    let deals = allDeals;
    
    if (selectedCategory) {
      deals = deals.filter(deal => deal.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      deals = deals.filter(deal => 
        deal.title.toLowerCase().includes(query) ||
        deal.description.toLowerCase().includes(query) ||
        deal.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return deals;
  });
  
  function handleSearch(query: string) {
    searchQuery = query;
  }
  
  const seoMetadata = {
    title: 'All AI Tools & Deals — Kceva AI Daily',
    description: 'Browse our complete collection of AI tools and exclusive deals. Find the perfect AI solution for your needs.',
    keywords: 'AI tools directory, AI software deals, AI tool comparison'
  };
</script>

<SEO metadata={seoMetadata} />

<div class="bg-gray-50 dark:bg-gray-900 py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">All AI Tools & Deals</h1>
      <p class="text-lg text-gray-600 dark:text-gray-400">Discover {allDeals.length} handpicked AI tools with exclusive discounts</p>
    </div>
    
    <!-- Search -->
    <div class="mb-8">
      <Search onSearch={handleSearch} />
    </div>
    
    <!-- Category Filter -->
    <div class="mb-8">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filter by Category</h2>
      <CategoryFilter
        {categories}
        {selectedCategory}
        onSelectCategory={(cat) => selectedCategory = cat}
      />
    </div>
    
    <!-- Results -->
    <div class="mb-4">
      <p class="text-gray-600 dark:text-gray-400">
        Showing {filteredDeals.length} {filteredDeals.length === 1 ? 'result' : 'results'}
      </p>
    </div>
    
    <DealList deals={filteredDeals} />
  </div>
</div>
