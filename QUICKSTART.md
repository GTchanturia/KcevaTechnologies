# ⚡ Quick Start - Get Live in 10 Minutes!

## Step 1: Test Locally (2 minutes)

```bash
# You're already in the project directory
cd /app

# Install dependencies (if not already installed)
npm install

# Start dev server
npm run dev

# Open in browser: http://localhost:5173
```

**Check these pages:**
- Home: http://localhost:5173
- Tools: http://localhost:5173/tools
- MGX Deal: http://localhost:5173/deal/mgx-meta-gpt-x
- Extension: http://localhost:5173/extension

**Test MGX affiliate link:**
- Click "Get Deal" on MGX page
- Should redirect to: https://mgx.dev/?via=KcevaDailyNews ✓

---

## Step 2: Push to GitHub (3 minutes)

```bash
cd /app

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "🚀 Kceva AI Daily - Production ready affiliate site"

# Create new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/kceva-ai-daily.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy to Vercel (5 minutes)

### Option A: Web Interface (Easiest)
1. Go to https://vercel.com/new
2. Sign in with GitHub
3. Click "Import Project"
4. Select your `kceva-ai-daily` repository
5. Click "Deploy" (Vercel auto-detects SvelteKit)
6. Wait 2 minutes... Done! 🎉

### Option B: CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## Step 4: Post-Deployment (Optional)

### A. Add Custom Domain
1. Vercel Dashboard → Your Project → Settings → Domains
2. Add domain: `kcevadaily.com`
3. Update DNS (follow Vercel instructions)
4. Update URLs in code:
   - `/app/src/routes/rss.xml/+server.ts` (line 7)
   - `/app/src/routes/sitemap.xml/+server.ts` (line 7)

### B. Enable Analytics
Edit `/app/src/routes/+layout.svelte`:
```html
<!-- Uncomment this line (around line 14) -->
<script defer data-domain="your-domain.com" src="https://plausible.io/js/script.js"></script>
```

### C. Submit to Search Engines
1. Google Search Console: https://search.google.com/search-console
2. Add property (your domain)
3. Verify ownership
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

---

## That's It! 🎉

Your site is now live and ready to earn commissions!

### What You Have:
✅ 15 AI tool deals (including MGX with your affiliate link)
✅ Fully functional website
✅ SEO optimized
✅ Mobile responsive
✅ Dark mode
✅ FTC compliant
✅ $0 hosting cost

### Next Steps:
1. **Add more deals** - Edit `data/deals.json`
2. **Replace images** - Add real product images
3. **Customize content** - Update About page
4. **Market it** - Social media, Product Hunt, etc.

---

## Quick Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:5173)
npm run build            # Build for production
npm run preview          # Preview production build

# Add a new deal
# Edit: data/deals.json (use existing deals as template)

# Deploy
git add .
git commit -m "Update deals"
git push                 # Auto-deploys on Vercel
```

---

## Need Help?

- **Full Documentation**: `/app/README.md`
- **Deployment Guide**: `/app/DEPLOYMENT.md`
- **Project Summary**: `/app/PROJECT_SUMMARY.md`

---

## Test Your Affiliate Link

Visit your deployed site:
1. Go to Tools page
2. Find "MGX (MetaGPT X)"
3. Click "View Deal"
4. Click "Get Deal"
5. Should redirect to: `https://mgx.dev/?via=KcevaDailyNews`

If it works, you're all set! 🚀

---

**Happy earning! 💰**
