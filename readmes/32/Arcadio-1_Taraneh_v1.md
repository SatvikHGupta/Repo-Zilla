````markdown
# Taraneh v1 ☕

A modern **Next.js 14** e-commerce PWA focused on coffee drinks & tools.

Taraneh v1 includes:

- Full product browsing (drinks & equipment)
- Cart and checkout flow
- Orders & order details
- User account area (profile, addresses, personal info)
- Admin dashboard for products
- Authentication (phone/OTP, password, and optional Google OAuth)
- PWA support with offline capabilities

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [1. Prerequisites](#1-prerequisites)
  - [2. Installation](#2-installation)
  - [3. Environment Variables](#3-environment-variables)
  - [4. Database Setup (Prisma + MongoDB)](#4-database-setup-prisma--mongodb)
  - [5. Running the App](#5-running-the-app)
- [Core Architecture](#core-architecture)
  - [Routing & Layouts](#routing--layouts)
  - [Authentication & Sessions](#authentication--sessions)
  - [Cart, Orders & Checkout](#cart-orders--checkout)
  - [UI & Styling](#ui--styling)
  - [PWA & Offline Support](#pwa--offline-support)
- [Development](#development)
  - [Scripts](#scripts)
  - [Code Style & Linting](#code-style--linting)
- [Customization](#customization)
- [Deployment](#deployment)
- [Security Notes](#security-notes)
- [License](#license)

---

## Features

- ⚛️ **Next.js 14 App Router**
  - App Router architecture under `src/app` with route groups for:
    - Public storefront (home, products, search)
    - Auth & checkout flows
    - User profile portal
    - Admin dashboard

- 🔐 **Authentication**
  - Credentials / password-based login
  - Phone & **OTP** login flow
  - Optional **Google OAuth** (if you configure Google client credentials)
  - Session handling via **NextAuth**

- 🛒 **E-commerce Flow**
  - Add to cart, update quantities, remove items
  - Guest cart with local cart ID, merge with user cart
  - Checkout with:
    - Shipping information
    - Delivery date selection
    - Payment step
    - Success payment screen
  - Order listing and order details (status, items, tracking info)

- 👤 **User Account**
  - Profile dashboard
  - Order history with order detail view
  - Address book management
  - Personal info (name, national code, etc.)
  - Phone change flow (with redis-backed OTP)
  - Add email and password

- 📦 **Product & Catalog**
  - Product detail pages with:
    - Gallery and sub images
    - Specifications and attributes
    - Introduction text
    - Reviews, likes/dislikes
    - Similar products slider
  - Category pages:
    - Drinks
    - Tools
  - Search/filter pages:
    - Drinks search
    - Tools search
    - Brand/category/price filters

- 📊 **Admin Dashboard**
  - Products table and pagination
  - Overview components ready for extension
  - Utility functions for chart data

- 📱 **PWA-Ready**
  - Service worker and manifest configured via **next-pwa**
  - PWA icons for installable experience
  - Runtime caching strategy

- 🎨 **Rich UI**
  - TailwindCSS + DaisyUI theme
  - Shadcn/Radix UI components
  - Custom icon set
  - Hero sliders, product sliders, and advertising banners
  - Loading skeletons and smooth transitions

- 🌐 **Persian / RTL Friendly**
  - Persian fonts: IRANSans, IRANYekan, Yekan
  - Number translation helpers
  - Persian-friendly layout and design

---

## Tech Stack

**Frontend**

- [Next.js](https://nextjs.org/) `^14.2.3` (App Router)
- [React](https://react.dev/) `^18.2.0`
- [TypeScript](https://www.typescriptlang.org/) `5.1.6`
- TailwindCSS `^3.4.1`
- DaisyUI `^3.5.0`
- Shadcn-style components + Radix UI
- MUI (`@mui/material`, icons, base)
- Swiper, Embla Carousel, PhotoSwipe for carousels/galleries

**Backend & Data**

- Prisma ORM `^5.8.1`
- **MongoDB** (via Prisma) – configured through `DATABASE_URL`
- Upstash Redis (`@upstash/redis`) for OTP and temporary state
- JSON mock data and local images for products

**Auth & Security**

- `next-auth` `^4.24.5`
- Optional Google OAuth (`GOOGLE_CLIENT_ID/SECRET`)
- `bcrypt` / `argon2` for password hashing
- `jsonwebtoken` for token handling
- Custom crypto utilities

**State & Data Fetching**

- TanStack React Query (`@tanstack/react-query`)
- Legacy `react-query` v3
- `swr` for lightweight fetching

**Tooling**

- ESLint (`next/core-web-vitals`)
- Prettier + `prettier-plugin-tailwindcss`
- PostCSS + Autoprefixer
- `next-pwa`
- Netlify Next.js plugin (optional deployment target)

---

## Project Structure

High-level structure:

```text
.
├── prisma/                     # Prisma schema & metadata
├── public/
│   ├── image/                  # Public product/category assets
│   ├── pwa_icons/              # PWA icons
│   ├── manifest.json           # PWA manifest
│   ├── service-worker.js       # Service worker entry
│   └── ...                     # Default Next.js public files
├── src/
│   ├── actions/                # Server actions (auth, OTP, cart, orders, user info, products)
│   ├── app/                    # Next.js App Router
│   │   ├── (main_root)/        # User-facing routes
│   │   │   ├── (with_footer)/  # Home, products, search, checkout, etc.
│   │   │   └── (without_footer)/# Profile area
│   │   ├── (focus)/            # Login, shipping, payment, success flows
│   │   ├── (dash)/             # Admin dashboard
│   │   └── api/                # API routes (auth, products)
│   ├── assets/                 # Images & static content (non-public)
│   ├── components/             # UI components
│   │   ├── Pages/              # Page / route-specific components
│   │   └── Util/               # Layouts, shadcn ui, icons, product cards, sliders
│   ├── constants/              # Shared constants & configuration
│   ├── hook/                   # Custom React hooks
│   ├── lib/                    # Auth, DB, Redis and common utilities
│   ├── style/                  # Global styles & fonts
│   ├── types_validation/       # Env & schema validation (zod)
│   └── util_functions/         # Pure helper functions
├── .vscode/                    # Editor configuration
├── next.config.js              # Next.js + PWA configuration
├── tailwind.config.js          # Tailwind theme & DaisyUI config
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
````

---

## Getting Started

### 1. Prerequisites

* **Node.js** ≥ 18
* **npm** / **yarn** / **pnpm** (examples use `npm`)
* A **MongoDB** database (local or hosted, e.g. MongoDB Atlas)
* An **Upstash Redis** instance (or any compatible HTTP Redis) if you want OTP / phone flows
* (Optional) Google Cloud project with OAuth 2.0 credentials (for Google login)

---

### 2. Installation

```bash
# Clone the repository
git clone <your-repo-url> taraneh-v1
cd taraneh-v1

# Install dependencies
npm install
```

> `postinstall` will automatically run `prisma generate`.

---

### 3. Environment Variables

Create a `.env` file in the project root.

> ⚠️ **Never commit `.env` to version control.**
> The `.gitignore` is already configured to ignore `.env` and `.env*.local`.

Use this as a template (replace all placeholder values with your own):

```env
# ===== Database (MongoDB via Prisma) =====
DATABASE_URL="YOUR_MONGODB_CONNECTION_STRING"
# Example (do NOT use in production):
# mongodb+srv://user:password@cluster.mongodb.net/taraneh_db?retryWrites=true&w=majority

# ===== Google OAuth (optional; used by NextAuth) =====
GOOGLE_CLIENT_ID="YOUR_GOOGLE_OAUTH_CLIENT_ID"
GOOGLE_CLIENT_SECRET="YOUR_GOOGLE_OAUTH_CLIENT_SECRET"

# ===== NextAuth configuration =====
# Base URL of your app (in development, keep localhost)
NEXTAUTH_URL="http://localhost:3000"
# Strong random secret (e.g., `openssl rand -base64 32`)
NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET"

# ===== Custom crypto / application secrets =====
# Used by internal crypto utilities for encryption/decryption
CRYPT_SECRET="YOUR_STRONG_CRYPTO_SECRET"

# Used for payment / external API integration (e.g., Meli gateway)
MELI_KEY="YOUR_MELI_API_KEY"

# ===== Redis (Upstash) for OTP & temporary state =====
REDIS_URL="YOUR_UPSTASH_REDIS_REST_URL"
REDIS_TOKEN="YOUR_UPSTASH_REDIS_REST_TOKEN"
```

Additional required or optional environment variables may be validated in:

```text
src/types_validation/env.ts
```

If the app logs an error about missing env vars, check that file and add any missing keys to `.env`.

---

### 4. Database Setup (Prisma + MongoDB)

This project uses Prisma with a **MongoDB** provider.

1. Ensure `DATABASE_URL` in `.env` points to a valid MongoDB database.

2. Open `prisma/schema.prisma` and confirm the datasource is configured for MongoDB, for example:

   ```prisma
   datasource db {
     provider = "mongodb"
     url      = env("DATABASE_URL")
   }
   ```

3. Push the schema to the database:

   ```bash
   npx prisma db push
   ```

4. (Optional) Inspect data using Prisma Studio:

   ```bash
   npx prisma studio
   ```

---

### 5. Running the App

#### Development

```bash
npm run dev
```

Then open: [http://localhost:3000](http://localhost:3000)

#### Production Build

```bash
npm run build
npm start
```

Use production mode to properly test PWA features (service worker, offline caching, install prompt, etc.).

---

## Core Architecture

### Routing & Layouts

The app uses the Next.js **App Router**.

Key entry points:

* `src/app/layout.tsx`
  Global layout: fonts, `<html>` and `<body>`, theme, providers.

* `src/app/(main_root)/(with_footer)/`
  Public storefront with footer:

  * `page.tsx` – home page
  * `drinks/page.tsx` – drinks listing
  * `tools/page.tsx` – tools listing
  * `product/[...slug]/page.tsx` – product details
  * `checkout/page.tsx` – checkout
  * `search/*` – search & filter pages

* `src/app/(main_root)/(without_footer)/profile/*`
  User profile portal:

  * Dashboard
  * Orders & order details
  * Addresses
  * Personal info

* `src/app/(focus)/`
  Focused flows with specialized layout:

  * `users/login/*` – login, OTP, password forms
  * `shipping/page.tsx` – shipping step
  * `payment/page.tsx` – payment step
  * `successPayment/page.tsx` – payment success

* `src/app/(dash)/dashboard/*`
  Admin dashboard with products table and overview.

* SEO & Infra:

  * `src/app/robots.ts` – robots.txt generator
  * `src/app/sitemap.ts` – sitemap generator
  * `src/app/not-found.tsx` – 404 page
  * `src/app/loading.tsx` – root loading state

---

### Authentication & Sessions

* **NextAuth configuration**

  * `src/lib/auth/authOptions.ts` – providers, callbacks, session strategy
  * `src/app/api/auth/[...nextauth]/route.ts` – NextAuth API route

* **Session provider**

  * `src/app/SessionProvider.ts` wraps the app with `<SessionProvider>` for client components.

* **Login flows (UI)**

  * `src/components/Pages/Login_page/*`

    * `LoginForm.tsx`
    * `PhoneForm.tsx`
    * `OtpForm.tsx`
    * `PasswordForm.tsx`

* **OTP & phone logic**

  * `src/actions/OTP/sendOtp.ts`
  * `src/actions/OTP/redisActions/*`
  * `src/actions/userInfo/changePhone/*`

* **User checks**

  * `src/actions/util/checkUser.ts`
  * `src/actions/util/getUserPhone.ts`

Protected routes typically rely on `next-auth` session checks and these helpers.

---

### Cart, Orders & Checkout

* **Cart**

  * `src/actions/ordering/cart/*`

    * Create, get, delete cart
    * Local cart ID helpers: `functions/getLocalCartId.ts`, `setLocalCartId.ts`, `deleteLocalCartId.ts`

* **Cart items**

  * `src/actions/ordering/cart_item/*`

    * Add/update/remove items
    * Clear cart
    * Merge carts on login

* **Orders**

  * `src/actions/ordering/order/*`

    * `createOrder.ts`
    * `getOrders.ts`
    * `getOrder.ts`
    * `cancelOrder.ts`

* **Checkout UI**

  * `src/components/Pages/CheckOut_page/*`
  * `src/components/Pages/Shipping_page/*`
  * `src/components/Pages/Payment_page/*`
  * `src/components/Pages/SuccessPayment_page/Success_payment.tsx`

These actions are used by page components under `src/app/(main_root)/(with_footer)/checkout`, `shipping`, and `payment`.

---

### UI & Styling

* **Global styles**

  * `src/style/globals.scss`

* **Tailwind configuration**

  * `tailwind.config.js`

    * Custom color palette: success/error/info, multiple gray scales, brand palettes (`g1_*`, `g2_*`, `g3_*`).
    * Custom fonts: `iransans`, `iransansnum`, `iranyekan`, `yekan`.
    * Screens: `xs`, `sm`, `md`, `lg`, `xl`, `xxl`.
    * Animations: accordion open/close.
    * DaisyUI theme `lightTheme`.

* **Layout**

  * Header:

    * `src/components/Util/layouts/header/Header.tsx`
    * `components` for navigation, cart menu, mobile menu, user menu
  * Footer:

    * `src/components/Util/layouts/footer/Footer.tsx`
    * Info, social links, newsletter, advantages

* **Component libraries**

  * Shadcn UI components in:

    * `src/components/Util/shadcn/ui/*` (button, dialog, tooltip, toast, table, etc.)
  * Custom icon set:

    * `src/components/Util/ui/icons/*`

* **Product cards & sliders**

  * Grid & slide variants:

    * `src/components/Util/product_card/*`
  * Home page sections:

    * `src/components/Pages/Home_page/*`
  * Ad and hero sliders:

    * `src/components/Util/components/ad_slider/*`
    * `src/components/Pages/Home_page/MainCatsSlider/*`

---

### PWA & Offline Support

PWA is configured using **next-pwa** in `next.config.js`:

* Service worker target: `dest: "public"`
* `disable: process.env.NODE_ENV === "development"`
  → PWA is disabled in dev, enabled in production.

Key files:

* `next.config.js`
* `public/manifest.json`
* `public/service-worker.js`
* `public/pwa_icons/*`

To test PWA:

1. Build and start in production mode:

   ```bash
   npm run build
   npm start
   ```

2. Open the site in Chrome.

3. Check **Application → Manifest / Service Workers** in DevTools.

4. You should see installable PWA information and an active service worker.

---

## Development

### Scripts

From `package.json`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "postinstall": "prisma generate"
}
```

* `npm run dev` – Start Next.js development server.
* `npm run build` – Build for production.
* `npm start` – Run the production build.
* `npm run lint` – Run ESLint checks.

---

### Code Style & Linting

* **ESLint**

  * Config: `.eslintrc.json`
  * Extends: `next/core-web-vitals`

* **Prettier**

  * Config: `prettier.config.js`
  * Plugin: `prettier-plugin-tailwindcss` (auto-sorts Tailwind classes)

* **Tailwind**

  * Purges classes from:

    * `./src/pages/**/*.{js,ts,jsx,tsx,mdx}`
    * `./src/components/**/*.{js,ts,jsx,tsx,mdx}`
    * `./src/app/**/*.{js,ts,jsx,tsx,mdx}`
    * `./src/**/*.{ts,tsx}`

---

## Customization

You can customize almost every part of the app:

* **Branding & colors**

  * Edit `colors` and `daisyui.themes` in `tailwind.config.js` to match your brand.

* **Fonts & typography**

  * Replace or extend fonts under:

    * `src/style/fonts/iransans`
    * `src/style/fonts/iranyekan`
  * Update `fontFamily` in `tailwind.config.js`.

* **Categories & images**

  * Category images in:

    * `src/assets/images/categories/*`
    * `public/image/categories/*`
  * Hero images:

    * Home: `src/components/Pages/Home_page/hero/Hero.tsx`
    * Drinks/Tools: `src/components/Pages/DrinkAndTools_page/*`

* **Copy & static text**

  * Update `src/assets/json/base.json` and text inside page components under `src/components/Pages/*`.

* **Business logic**

  * Adjust cart/order behavior in `src/actions/ordering/*`.
  * Modify OTP / phone / user management in `src/actions/userInfo/*` and `src/actions/OTP/*`.
  * Customize product introduction/specification/review logic in `src/actions/product/*`.

---

## Deployment

You can deploy this Next.js app to any platform that supports Node.js, such as **Vercel** or **Netlify**.

### Vercel

1. Push your repository to GitHub/GitLab/Bitbucket.
2. Import the project into Vercel.
3. Set environment variables in the Vercel dashboard (copy from your local `.env`, but never copy secrets into public places).
4. Vercel will automatically run `npm install`, `npm run build`, and start the app.
5. Update `NEXTAUTH_URL` to your production URL (e.g. `https://your-domain.com`).

### Netlify

The project includes `@netlify/plugin-nextjs` in `devDependencies`.

1. Connect the repo to Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add plugin configuration in `netlify.toml` if needed for SSR and advanced routing.

---

## Security Notes

* **Never** commit `.env` or any secrets to version control.
* Use **different secrets** for development and production.
* Rotate credentials immediately if they are ever exposed.
* Review any **obfuscated or unfamiliar code** in configuration files (for example, at the bottom of `next.config.js`) before deploying to production. If you do not know why a code block is there, remove it or replace the file with a clean version.
* Restrict database and Redis access by IP / network rules where possible.
* Always serve your production app over HTTPS.

---

## License

Specify your license here (for example, MIT):

```text
MIT License
Copyright (c) <year> <your-name>
```

Create a `LICENSE` file in the project root to make it explicit.

---

