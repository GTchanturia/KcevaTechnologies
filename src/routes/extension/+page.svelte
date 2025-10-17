<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  
  const seoMetadata = {
    title: 'Browser Extension — Kceva AI Daily',
    description: 'Install the Kceva AI Daily browser extension and never miss a deal. Get real-time notifications about the best AI tool offers.'
  };
</script>

<SEO metadata={seoMetadata} />

<div class="bg-gray-50 dark:bg-gray-900 py-12">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Kceva AI Daily Extension</h1>
      <p class="text-xl text-gray-600 dark:text-gray-400">Never miss a deal with our browser extension</p>
    </div>
    
    <div class="card p-8 mb-8">
      <div class="text-center mb-8">
        <img src="/logo.svg" alt="Extension" class="w-24 h-24 mx-auto mb-4" />
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get Real-Time Deal Notifications</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Our extension alerts you instantly when new exclusive AI tool deals are available.
        </p>
        <a href="#install" class="btn-primary text-lg py-3 px-8">
          Install Now — It's Free
        </a>
      </div>
      
      <div class="border-t border-gray-200 dark:border-gray-700 pt-8">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Features</h3>
        <ul class="space-y-4">
          <li class="flex items-start">
            <svg class="w-6 h-6 text-accent-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <div>
              <strong class="text-gray-900 dark:text-white">Instant Notifications</strong>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Get notified the moment new deals go live</p>
            </div>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-accent-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <div>
              <strong class="text-gray-900 dark:text-white">Smart Filtering</strong>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Filter deals by category, price range, and region</p>
            </div>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-accent-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <div>
              <strong class="text-gray-900 dark:text-white">Privacy First</strong>
              <p class="text-gray-600 dark:text-gray-400 text-sm">No tracking, no data collection, completely private</p>
            </div>
          </li>
          <li class="flex items-start">
            <svg class="w-6 h-6 text-accent-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <div>
              <strong class="text-gray-900 dark:text-white">One-Click Access</strong>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Access all deals directly from your browser toolbar</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
    <div id="install" class="card p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Installation Instructions</h2>
      
      <div class="space-y-6">
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Step 1: Download the Extension</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-3">Currently available for Chrome, Edge, and Brave browsers.</p>
          <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p class="text-sm text-blue-800 dark:text-blue-200">
              🚧 <strong>Coming Soon!</strong> The extension is currently in development. Sign up for early access below.
            </p>
          </div>
        </div>
        
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Step 2: Configure Settings</h3>
          <p class="text-gray-600 dark:text-gray-400">Customize your notification preferences and select your favorite categories.</p>
        </div>
        
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Step 3: Start Saving</h3>
          <p class="text-gray-600 dark:text-gray-400">That's it! You'll now receive notifications about the best AI tool deals.</p>
        </div>
      </div>
    </div>
    
    <div class="card p-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Remote Configuration</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        The extension uses remote configuration to stay updated with the latest country tags and settings.
      </p>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm">
        <code>Config URL: https://kcevadaily.com/data/countryTags.json</code>
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
        <strong>Affiliate Disclosure:</strong> This extension helps you find the best deals. When you click on affiliate links, we may earn a commission at no extra cost to you.
      </p>
    </div>
  </div>
</div>
