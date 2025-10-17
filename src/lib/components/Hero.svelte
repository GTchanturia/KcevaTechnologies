<script lang="ts">
  let { title, subtitle, ctaText, ctaLink }: { title: string; subtitle: string; ctaText: string; ctaLink: string } = $props();
</script>

<div class="bg-gradient-to-r from-brand-blue to-blue-600 text-white py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
      {title}
    </h1>
    <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
      {subtitle}
    </p>
    <a href={ctaLink} class="inline-block bg-accent-green hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
      {ctaText}
    </a>
  </div>
</div>
