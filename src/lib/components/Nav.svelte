<script lang="ts">
  import { page } from '$app/stores';
  
  let mobileMenuOpen = $state(false);
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Extension', href: '/extension' },
    { label: 'About', href: '/about' }
  ];
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
</script>

<nav class="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <a href="/" class="flex items-center space-x-2">
          <img src="/logo.svg" alt="Kceva AI Daily" class="h-8 w-8" />
          <span class="text-xl font-bold text-brand-blue">Kceva AI Daily</span>
        </a>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navItems as item}
          <a
            href={item.href}
            class="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue transition-colors"
            class:text-brand-blue={$page.url.pathname === item.href}
            class:font-semibold={$page.url.pathname === item.href}
          >
            {item.label}
          </a>
        {/each}
        <a href="/extension" class="btn-primary text-sm">
          Get Extension
        </a>
      </div>
      
      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
        <button
          onclick={toggleMobileMenu}
          class="text-gray-700 dark:text-gray-300 hover:text-brand-blue"
          aria-label="Toggle menu"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {#if mobileMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>
  
  <!-- Mobile menu -->
  {#if mobileMenuOpen}
    <div class="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div class="px-2 pt-2 pb-3 space-y-1">
        {#each navItems as item}
          <a
            href={item.href}
            class="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            class:bg-gray-100={$page.url.pathname === item.href}
            class:dark:bg-gray-700={$page.url.pathname === item.href}
            onclick={() => mobileMenuOpen = false}
          >
            {item.label}
          </a>
        {/each}
        <a href="/extension" class="block px-3 py-2 btn-primary text-center">
          Get Extension
        </a>
      </div>
    </div>
  {/if}
</nav>
