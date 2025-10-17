<script lang="ts">
  let { variant = 'default' }: { variant?: 'default' | 'compact' } = $props();
</script>

{#if variant === 'compact'}
  <div class="bg-brand-blue text-white rounded-lg p-6 text-center">
    <h3 class="text-xl font-bold mb-2">Get Deals Automatically</h3>
    <p class="mb-4">Install our browser extension and never miss a deal</p>
    <a href="/extension" class="inline-block bg-white text-brand-blue hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-colors">
      Install Extension
    </a>
  </div>
{:else}
  <div class="bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-xl p-8 md:p-12 text-center shadow-xl">
    <div class="max-w-2xl mx-auto">
      <svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"/>
      </svg>
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Never Miss a Deal</h2>
      <p class="text-lg text-blue-100 mb-6">
        Install our browser extension to get real-time notifications about the best AI tool deals.
        Free forever, works with Chrome, Edge, and Brave.
      </p>
      <a href="/extension" class="inline-block bg-accent-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
        Install Extension - It's Free
      </a>
      <p class="text-sm text-blue-200 mt-4">
        ⭐ Trusted by 10,000+ users • No credit card required
      </p>
    </div>
  </div>
{/if}
