<script lang="ts">
  interface Props {
    onSearch: (query: string) => void;
  }
  
  let { onSearch }: Props = $props();
  
  let searchQuery = $state('');
  
  function handleSearch() {
    onSearch(searchQuery);
  }
  
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }
</script>

<div class="relative">
  <input
    type="text"
    bind:value={searchQuery}
    onkeydown={handleKeydown}
    placeholder="Search AI tools..."
    class="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent"
  />
  <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
    <svg class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <button
    onclick={handleSearch}
    class="absolute right-2 top-1/2 transform -translate-y-1/2 btn-primary py-2 text-sm"
  >
    Search
  </button>
</div>
