<script lang="ts">
  import type { Deal } from '$lib/types/deal';
  import { formatPrice, calculateSavingsPercentage, isExpired } from '$lib/utils/deals';
  
  interface Props {
    deal: Deal;
  }
  
  let { deal }: Props = $props();
  
  const savings = calculateSavingsPercentage(deal);
  const expired = isExpired(deal);
</script>

<div class="card overflow-hidden h-full flex flex-col">
  <a href="/deal/{deal.slug}" class="block">
    <div class="relative">
      <img
        src={deal.image}
        alt={deal.title}
        class="w-full h-48 object-cover"
        onerror="this.src='/images/placeholder.jpg'"
      />
      {#if savings}
        <div class="absolute top-2 right-2 bg-accent-green text-white px-3 py-1 rounded-full text-sm font-bold">
          Save {savings}%
        </div>
      {/if}
      {#if expired}
        <div class="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          Expired
        </div>
      {/if}
    </div>
  </a>
  
  <div class="p-4 flex-grow flex flex-col">
    <div class="mb-2">
      <span class="text-xs text-brand-blue font-semibold">{deal.category}</span>
    </div>
    
    <a href="/deal/{deal.slug}" class="block">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white hover:text-brand-blue transition-colors mb-2">
        {deal.title}
      </h3>
    </a>
    
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
      {deal.description}
    </p>
    
    <div class="flex items-center justify-between mt-auto">
      <div>
        {#if deal.oldPrice}
          <span class="text-lg font-bold text-gray-900 dark:text-white">
            {formatPrice(deal.price, deal.currency)}
          </span>
          <span class="text-sm text-gray-500 line-through ml-2">
            {formatPrice(deal.oldPrice, deal.currency)}
          </span>
        {:else}
          <span class="text-lg font-bold text-gray-900 dark:text-white">
            {formatPrice(deal.price, deal.currency)}
          </span>
        {/if}
      </div>
      
      <a
        href="/deal/{deal.slug}"
        class="text-brand-blue hover:text-blue-700 font-semibold text-sm flex items-center"
      >
        View Deal
        <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
    
    <div class="mt-3 flex flex-wrap gap-1">
      {#each deal.tags.slice(0, 3) as tag}
        <span class="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
          {tag}
        </span>
      {/each}
    </div>
  </div>
</div>
