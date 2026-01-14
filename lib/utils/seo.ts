import { Metadata } from 'next';

/**
 * SEO Utilities
 * Generate metadata, OpenGraph, and structured data
 */

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const SITE_NAME = 'Ceylon Cabs';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ceyloncabs.lk';
const DEFAULT_IMAGE = '/images/hero/hero-1.jpg';

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    image = DEFAULT_IMAGE,
    url = SITE_URL,
    type = 'website',
  } = config;

  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_LK',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generatePageTitle(title: string): string {
  return `${title} | ${SITE_NAME}`;
}

export function generateCanonicalURL(path: string): string {
  return `${SITE_URL}${path}`;
}
