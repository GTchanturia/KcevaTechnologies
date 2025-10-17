# Quick Deployment Guide for Kceva AI Daily

## Deploy to Vercel (5 minutes)

### Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Kceva AI Daily MVP"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/kceva-ai-daily.git
git branch -M main
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to https://vercel.com/new
2. Click "Import Project"
3. Select your GitHub repository
4. Framework Preset: **SvelteKit** (auto-detected)
5. Click **Deploy**

That's it! Your site will be live in ~2 minutes.

### Step 3: Add Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `kcevadaily.com`)
4. Follow DNS instructions
5. Update base URLs in:
   - `src/routes/rss.xml/+server.ts`
   - `src/routes/sitemap.xml/+server.ts`

## Environment Variables (Optional)

Add in Vercel Dashboard → Settings → Environment Variables:

```
PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com
AIRTABLE_API_KEY=your_key (if using automation)
AIRTABLE_BASE_ID=your_base_id (if using automation)
```

## Post-Deployment Checklist

- [ ] Site is live and accessible
- [ ] All pages load correctly
- [ ] Affiliate links work (test /r/mgx-meta-gpt-x)
- [ ] RSS feed accessible (/rss.xml)
- [ ] Sitemap accessible (/sitemap.xml)
- [ ] Update README with your live URL
- [ ] Submit sitemap to Google Search Console
- [ ] Test on mobile devices

## GitHub Actions (Optional)

If you want automated deal fetching:

1. Go to GitHub → Settings → Secrets → Actions
2. Add:
   - `AIRTABLE_API_KEY`
   - `AIRTABLE_BASE_ID`
   - `VERCEL_TOKEN` (get from Vercel settings)
   - `VERCEL_ORG_ID` (in Vercel settings)
   - `VERCEL_PROJECT_ID` (in Vercel settings)

The workflow will run every 6 hours automatically.

## Alternative: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## Alternative: Static Export

For pure static hosting (GitHub Pages, etc):

```bash
npm install -D @sveltejs/adapter-static
```

Update `svelte.config.js`:
```javascript
import adapter from '@sveltejs/adapter-static';
```

Then build and upload the `build` folder.

---

**Need help?** Check the main README.md or open an issue on GitHub.
