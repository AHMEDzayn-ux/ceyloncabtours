# Ceylon Cabs - Sri Lankan Cab Service & Tours Website

A modern, SEO-optimized Next.js website for a Sri Lankan cab service and travel agency. Features include airport transfers, city rides, custom tour packages, and an admin panel for managing gallery and reviews.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Storage:** Supabase Storage
- **Deployment:** Vercel
- **Image Compression:** browser-image-compression

## 📋 Features

### Public Features

- ✅ SEO-optimized pages with metadata, OpenGraph, and JSON-LD
- ✅ WhatsApp booking integration
- ✅ Static tours/services/fleet data (zero database queries)
- ✅ Dynamic gallery with ISR
- ✅ Customer reviews with admin approval
- ✅ Responsive mobile-first design
- ✅ Fast loading with excellent Core Web Vitals

### Admin Features

- ✅ Secure authentication via Supabase Auth
- ✅ Gallery CRUD (upload, edit, delete tour photos)
- ✅ Review moderation (approve/reject)
- ✅ Client-side image compression before upload

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
cd cab-service
npm install
```

### 2. Configure Supabase

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL schema in your Supabase SQL editor:
   - Open `supabase-schema.sql`
   - Copy and execute the entire SQL script
3. Get your Supabase credentials:
   - Project URL
   - Anon/public key
   - Service role key (for admin operations)

### 3. Environment Variables

Create a `.env.local` file (use `.env.example` as template):

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Business Configuration
NEXT_PUBLIC_WHATSAPP_COLOMBO=94771234567
NEXT_PUBLIC_WHATSAPP_BADULLA=94779876543
NEXT_PUBLIC_BUSINESS_EMAIL=info@ceyloncabs.lk
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
