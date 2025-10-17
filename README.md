# Kceva AI Daily - AI Tools & Deals Platform

A production-ready SvelteKit website for curating and promoting AI tools with exclusive deals and affiliate links. Built with TypeScript, Tailwind CSS, and optimized for SEO and performance.

## 🚀 Features

- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, schema.org markup
- **RSS & Sitemap**: Automatic generation for search engines
- **Deal Management**: JSON-based deal storage with easy updates
- **Affiliate Tracking**: UTM parameters and redirect tracking
- **Browser Extension Ready**: Remote config support for Chrome extension
- **Responsive Design**: Mobile-first with dark mode support
- **Performance**: Static site generation with SSR for deal pages
- **Analytics Ready**: Placeholder integrations for Plausible, GA, FB Pixel, X Pixel

## 🏃 Quick Start

### Prerequisites

- Node.js 18+ 
- npm
- Git

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# Visit http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
/app/
├── data/
│   ├── deals.json              # Main deals database (15 seed deals included)
│   └── countryTags.json        # Extension config
├── src/
│   ├── lib/
│   │   ├── components/         # Svelte components
│   │   ├── types/              # TypeScript types
│   │   └── utils/              # Helper functions
│   ├── routes/
│   │   ├── +page.svelte        # Home page
│   │   ├── +layout.svelte      # Main layout
│   │   ├── tools/              # All deals page
│   │   ├── deal/[slug]/        # Deal detail pages (SSR)
│   │   ├── extension/          # Extension landing
│   │   ├── about/              # About page
│   │   ├── privacy/            # Privacy policy
│   │   ├── terms/              # Terms of service
│   │   ├── affiliate-disclosure/ # Affiliate disclosure
│   │   ├── api/deals/          # Deals API endpoint
│   │   ├── r/[id]/             # Redirect tracking
│   │   ├── rss.xml/            # RSS feed
│   │   └── sitemap.xml/        # Sitemap
│   └── app.css                 # Global styles
├── static/
│   ├── logo.svg                # Brand logo
│   └── images/                 # Images and assets
├── scripts/
│   ├── fetch_and_transform.js  # Deal fetching automation
│   └── generate-og.js          # OG image generation
├── .github/workflows/
│   ├── fetch_deals.yml         # Auto-fetch deals
│   └── deploy.yml              # Deploy to Vercel
├── tailwind.config.js          # Tailwind configuration
├── svelte.config.js            # SvelteKit configuration
└── package.json                # Dependencies
```

## 📝 Adding Deals

### Manual Method

Edit `/data/deals.json`:

```json
{
  "id": "unique-deal-id",
  "title": "Product Name",
  "slug": "product-name",
  "description": "Short 1-2 line description",
  "excerpt": "Longer description for detail page",
  "price": 49,
  "oldPrice": 99,
  "currency": "USD",
  "affiliateLink": "https://product.com/?via=KcevaDailyNews",
  "image": "/images/deals/product.jpg",
  "category": "Category Name",
  "tags": ["AI", "Tool", "Category"],
  "region": ["GLOBAL"],
  "publishedAt": "2025-01-17T10:00:00Z",
  "expiresAt": null
}
```

**15 seed deals are already included**, including MGX with your affiliate link!

## 🚀 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect SvelteKit
   - Click "Deploy"

3. **Configure Domain** (optional)
   - Settings → Domains
   - Add your custom domain

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📊 Analytics Setup (Optional)

### Plausible Analytics

1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain
3. Edit `/src/routes/+layout.svelte` and uncomment:
   ```html
   <script defer data-domain="your-domain.com" src="https://plausible.io/js/script.js"></script>
   ```

### Google Analytics, Facebook Pixel, Twitter Pixel

All placeholder code is in `/src/routes/+layout.svelte` with instructions to enable.

## 🤖 Automation with GitHub Actions

Two workflows are included:

### 1. Fetch Deals (Optional)
Runs every 6 hours to fetch deals from Airtable/RSS.

**Setup:**
1. Go to GitHub Settings → Secrets → Actions
2. Add:
   - `AIRTABLE_API_KEY`
   - `AIRTABLE_BASE_ID`

### 2. Auto-Deploy to Vercel
Triggers on every push to `main` branch.

## ⚙️ Configuration

### Update Base URL

Change these files for production:
- `/src/routes/rss.xml/+server.ts` - Line 7: `const baseUrl = 'https://your-domain.com';`
- `/src/routes/sitemap.xml/+server.ts` - Line 7: `const baseUrl = 'https://your-domain.com';`

### Brand Colors

Configured in `tailwind.config.js`:
- Brand Blue: `#0b74de`
- Accent Green: `#22c55e`

## ⚖️ Legal & Compliance

✅ **Affiliate Disclosure** - Present on all pages
✅ **Privacy Policy** - `/privacy`
✅ **Terms of Service** - `/terms`
✅ **FTC Compliant** - Clear disclosures
✅ **No Link Cloaking** - Transparent redirects with visible notice

## 📅 14-Day Launch Checklist

### Days 1-3: Deploy & Setup
- [ ] Deploy to Vercel
- [ ] Configure custom domain
- [ ] Test all pages and links
- [ ] Set up analytics
- [ ] Submit sitemap to Google Search Console

### Days 4-7: Content
- [ ] Add more deals (aim for 25-30)
- [ ] Update About page with your story
- [ ] Create social media accounts
- [ ] Optimize meta descriptions

### Week 2: Growth
- [ ] Set up Airtable (optional)
- [ ] Configure GitHub Actions
- [ ] Launch on Product Hunt
- [ ] Reach out to AI tool companies
- [ ] Monitor analytics

### Ongoing
- [ ] Add 2-3 deals daily
- [ ] Update expired deals
- [ ] Check affiliate links monthly
- [ ] Respond to feedback

## 🎯 Quick Command Reference

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview build

# Scripts
node scripts/fetch_and_transform.js    # Fetch deals (requires Airtable setup)

# Deployment
vercel                   # Deploy to Vercel
```

## 🔧 Extension Config

The extension can fetch remote config from:
```
https://your-domain.com/data/countryTags.json
```

Config is already set up and ready to use.

## 📦 What's Included

✅ 15 seed deals (including MGX with your affiliate link)
✅ Full-featured pages (home, tools, deal details, extension, about, legal)
✅ SEO optimization (meta tags, OG, Twitter cards, JSON-LD)
✅ RSS feed and sitemap
✅ Affiliate tracking with UTM parameters
✅ Responsive design with dark mode
✅ TypeScript throughout
✅ Tailwind CSS styling
✅ GitHub Actions workflows
✅ Comprehensive documentation

## 🚀 Next Steps

1. **Run locally**: `npm install && npm run dev`
2. **Test everything**: Browse all pages, check links
3. **Deploy to Vercel**: Connect GitHub or use CLI
4. **Add your deals**: Edit `data/deals.json`
5. **Configure domain**: Set up custom domain in Vercel
6. **Enable analytics**: Uncomment Plausible script
7. **Submit to search engines**: Google Search Console + Bing
8. **Start marketing**: Social media, Product Hunt, partnerships

## 📞 Support

For questions or issues, refer to:
- This README
- SvelteKit docs: https://kit.svelte.dev/docs
- Tailwind CSS docs: https://tailwindcss.com/docs

## 📄 License

© 2025 Kceva AI Daily. All rights reserved.

---

**Ready to launch!** Your affiliate site is production-ready and can be deployed to Vercel for $0/month on the free tier.

Built with ❤️ using SvelteKit, Tailwind CSS, and TypeScript
