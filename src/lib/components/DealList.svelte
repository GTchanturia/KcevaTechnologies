<script lang="ts">
  import type { Deal } from '$lib/types/deal';
  import DealCard from './DealCard.svelte';
  
  interface Props {
    deals: Deal[];
    title?: string;
  }
  
  let { deals, title }: Props = $props();
</script>

<div class="py-8">
  {#if title}
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">{title}</h2>
  {/if}
  
  {#if deals.length === 0}
    <div class="text-center py-12">
      <p class="text-gray-600 dark:text-gray-400">No deals found. Check back soon!</p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each deals as deal (deal.id)}
        <DealCard {deal} />
      {/each}
    </div>
  {/if}
</div>
