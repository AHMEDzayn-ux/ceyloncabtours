import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import { generateLocalBusinessSchema } from "@/lib/schemas/structuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "CeylonCabTours | Premium Cab Service & Tours in Sri Lanka",
    template: "%s | CeylonCabTours",
  },
  description:
    "Reliable cab service for airport transfers, city rides, and custom tours across Sri Lanka. Professional drivers, comfortable vehicles, and personalized service.",
  keywords: [
    "Sri Lanka cab service",
    "airport transfer Sri Lanka",
    "Colombo taxi",
    "Sri Lanka tours",
    "CeylonCabTours",
    "Sri Lanka transportation",
    "Kandy taxi service",
    "Galle cab service",
    "Sri Lanka travel",
    "private driver Sri Lanka",
    "tour packages Sri Lanka",
    "airport pickup Colombo",
  ],
  authors: [{ name: "CeylonCabTours" }],
  creator: "CeylonCabTours",
  publisher: "CeylonCabTours",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "CeylonCabTours",
    title: "CeylonCabTours | Premium Cab Service & Tours in Sri Lanka",
    description:
      "Explore Sri Lanka in comfort and style with CeylonCabTours. Professional transportation and custom tours.",
    images: [
      {
        url: "/images/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "CeylonCabTours - Premium Transportation in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CeylonCabTours | Premium Cab Service Sri Lanka",
    description: "Reliable transportation and custom tours across Sri Lanka",
    images: ["/images/hero/hero-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = generateLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#10b981" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="CeylonCabTours" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
