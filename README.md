# Sibou Agro Ltd – marketing site

Next.js (App Router), TypeScript, Tailwind CSS v4. No database, no CMS, no backend. Quote requests go through email, phone and WhatsApp.

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Optional. Full site URL for SEO, sitemap and share images. Set it only after your custom domain is live; otherwise the Vercel URL is used |

## Things to edit

- **Company details** (phone, WhatsApp number, email, LinkedIn): `lib/site.ts`
- **Products**: add an object to `lib/products.ts`. The card updates automatically
- **"Why work with us" points**: `lib/why.ts`
- **Images**: replace the files in `public/images/` (and update the paths in `lib/products.ts` if you change the file names, e.g. to `.jpg`). Use 4:3 photos for products. For the social share image, add a 1200x630 JPG/PNG and point `openGraph.images` in `app/layout.tsx` to it
- **About text**: `components/About.tsx`

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project**, import the repo (framework is detected as Next.js).
3. Under **Environment Variables**, add the variable above, then **Deploy**.

## Connect your custom domain

1. In Vercel: **Project → Settings → Domains → Add**, enter `sibouagro.com`.
2. At your domain registrar add the DNS records Vercel shows (usually an `A` record `76.76.21.21` for the root domain and a `CNAME` for `www`; use the exact values Vercel displays).
3. Wait for DNS to propagate. Vercel issues the HTTPS certificate automatically.
4. Set `NEXT_PUBLIC_SITE_URL=https://sibouagro.com` and redeploy.
