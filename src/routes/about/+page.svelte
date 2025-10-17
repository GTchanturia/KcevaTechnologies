<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  
  const seoMetadata = {
    title: 'About Us — Kceva AI Daily',
    description: 'Learn about Kceva AI Daily, your trusted source for AI tools and exclusive deals.'
  };
</script>

<SEO metadata={seoMetadata} />

<div class="bg-gray-50 dark:bg-gray-900 py-12">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Kceva AI Daily</h1>
    
    <div class="card p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">
        At Kceva AI Daily, we're on a mission to make AI tools accessible and affordable for everyone. We curate the best AI software deals and discounts so you can leverage cutting-edge technology without breaking the bank.
      </p>
      <p class="text-gray-700 dark:text-gray-300">
        Every day, our team handpicks and verifies exclusive deals from trusted AI tool providers. We negotiate special discounts and early access opportunities to ensure you always get the best value.
      </p>
    </div>
    
    <div class="card p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">What We Do</h2>
      <ul class="space-y-3 text-gray-700 dark:text-gray-300">
        <li class="flex items-start">
          <span class="text-brand-blue mr-2">✓</span>
          <span>Curate and verify exclusive AI tool deals daily</span>
        </li>
        <li class="flex items-start">
          <span class="text-brand-blue mr-2">✓</span>
          <span>Negotiate special discounts with AI software providers</span>
        </li>
        <li class="flex items-start">
          <span class="text-brand-blue mr-2">✓</span>
          <span>Provide transparent affiliate partnerships</span>
        </li>
        <li class="flex items-start">
          <span class="text-brand-blue mr-2">✓</span>
          <span>Keep you updated with the latest AI tool launches</span>
        </li>
        <li class="flex items-start">
          <span class="text-brand-blue mr-2">✓</span>
          <span>Offer a browser extension for real-time deal notifications</span>
        </li>
      </ul>
    </div>
    
    <div class="card p-8 mb-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Trust Us?</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">
        <strong>Transparency:</strong> We clearly disclose all affiliate relationships. When you click on our links and make a purchase, we may earn a commission. This helps us keep the site running and continue finding great deals for you.
      </p>
      <p class="text-gray-700 dark:text-gray-300 mb-4">
        <strong>Quality First:</strong> We only promote tools and services we believe in. Every deal is manually reviewed to ensure it provides real value.
      </p>
      <p class="text-gray-700 dark:text-gray-300">
        <strong>No Hidden Costs:</strong> Using our affiliate links never increases your price. In fact, many of our exclusive deals offer better prices than going directly to the provider.
      </p>
    </div>
    
    <div class="card p-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">
        Have questions, suggestions, or want to partner with us? We'd love to hear from you!
      </p>
      <p class="text-gray-700 dark:text-gray-300">
        Email: <a href="mailto:hello@kcevadaily.com" class="text-brand-blue hover:underline">hello@kcevadaily.com</a>
      </p>
    </div>
  </div>
</div>
