<script lang="ts">
  interface Props {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
  }
  
  let { categories, selectedCategory, onSelectCategory }: Props = $props();
</script>

<div class="flex flex-wrap gap-2">
  <button
    onclick={() => onSelectCategory('')}
    class="px-4 py-2 rounded-lg transition-colors"
    class:bg-brand-blue={selectedCategory === ''}
    class:text-white={selectedCategory === ''}
    class:bg-gray-200={selectedCategory !== ''}
    class:dark:bg-gray-700={selectedCategory !== ''}
    class:text-gray-700={selectedCategory !== ''}
    class:dark:text-gray-300={selectedCategory !== ''}
  >
    All
  </button>
  
  {#each categories as category}
    <button
      onclick={() => onSelectCategory(category)}
      class="px-4 py-2 rounded-lg transition-colors"
      class:bg-brand-blue={selectedCategory === category}
      class:text-white={selectedCategory === category}
      class:bg-gray-200={selectedCategory !== category}
      class:dark:bg-gray-700={selectedCategory !== category}
      class:text-gray-700={selectedCategory !== category}
      class:dark:text-gray-300={selectedCategory !== category}
    >
      {category}
    </button>
  {/each}
</div>
