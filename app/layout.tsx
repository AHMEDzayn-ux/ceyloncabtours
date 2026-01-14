import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { generateLocalBusinessSchema } from "@/lib/schemas/structuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Ceylon Cabs | Premium Cab Service & Tours in Sri Lanka",
  description: "Reliable cab service for airport transfers, city rides, and custom tours across Sri Lanka. Professional drivers, comfortable vehicles, and personalized service.",
  keywords: ["Sri Lanka cab service", "airport transfer Sri Lanka", "Colombo taxi", "Sri Lanka tours", "Ceylon Cabs"],
  authors: [{ name: "Ceylon Cabs" }],
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Ceylon Cabs",
    title: "Ceylon Cabs | Premium Cab Service & Tours in Sri Lanka",
    description: "Explore Sri Lanka in comfort and style with Ceylon Cabs",
    images: [
      {
        url: "/images/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Ceylon Cabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceylon Cabs | Premium Cab Service Sri Lanka",
    description: "Reliable transportation and custom tours across Sri Lanka",
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
