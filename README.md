# Spooner Kitchenware

Modern ecommerce storefront for Spooner Kitchenware, built with Next.js and prepared for Supabase, Stripe, and Vercel deployment.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Brand Assets

The active logo lives at `public/logo.jpg`.

Generated catalog images are stored in `public/images`.

## Environment Variables

Create `.env.local` before connecting live services:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Database tables are drafted in `supabase/schema.sql`.
