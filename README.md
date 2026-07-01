# Spooner Kitchenware

Modern ecommerce storefront for Spooner Kitchenware, built with Next.js and prepared for Supabase, Stripe, and Vercel deployment.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Brand Assets

The current logo lives at `public/logo.svg`. Replace that file with the uploaded Spooner Kitchenware logo when available, or update the header/footer logo path.

Generated catalog images are stored in `public/images`.

## Environment Variables

Create `.env.local` before connecting live services:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Database tables are drafted in `supabase/schema.sql`.
