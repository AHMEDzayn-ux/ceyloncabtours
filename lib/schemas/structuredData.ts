import { Tour } from '@/types';

/**
 * JSON-LD Structured Data Generators
 * For enhanced SEO and rich search results
 */

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ceylon Cabs',
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/hero/hero-1.jpg`,
    '@id': process.env.NEXT_PUBLIC_SITE_URL,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    telephone: ['+94771183257', '+94779876543'],
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL,
    priceRange: 'Custom Pricing',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Colombo',
        addressLocality: 'Colombo',
        addressCountry: 'LK',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Badulla',
        addressLocality: 'Badulla',
        addressCountry: 'LK',
      },
    ],
    geo: [
      {
        '@type': 'GeoCoordinates',
        latitude: 6.9271,
        longitude: 79.8612,
      },
      {
        '@type': 'GeoCoordinates',
        latitude: 6.9934,
        longitude: 81.0550,
      },
    ],
    sameAs: [
      // Add social media links when available
      // 'https://facebook.com/ceyloncabs',
      // 'https://instagram.com/ceyloncabs',
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  };
}

export function generateTourSchema(tour: Tour) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title,
    description: tour.shortDescription,
    duration: tour.duration,
    touristType: 'Leisure',
    itinerary: {
      '@type': 'ItemList',
      itemListElement: tour.highlights.map((highlight, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: highlight,
      })),
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Ceylon Cabs',
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
    image: `${process.env.NEXT_PUBLIC_SITE_URL}${tour.heroImage}`,
  };
}

export function generateReviewSchema(reviews: { name: string; content: string; rating: number }[]) {
  if (!reviews.length) return null;

  const aggregateRating = {
    '@type': 'AggregateRating',
    ratingValue: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ceylon Cabs',
    aggregateRating,
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.content,
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${process.env.NEXT_PUBLIC_SITE_URL}${item.url}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
