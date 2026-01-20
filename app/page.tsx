import dynamic from "next/dynamic";
import type { Metadata } from "next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { createClient } from "@/lib/supabase/server";
import { Review } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { generateBreadcrumbSchema } from "@/lib/schemas/structuredData";
import { loadGalleryImages } from "@/lib/utils/galleryLoader";

// Lazy load all client components for optimal code splitting
const Hero = dynamic(() => import("@/components/home/Hero"), {
  ssr: true,
  loading: () => (
    <div className="h-screen bg-gradient-to-br from-gray-900 to-gray-800 animate-pulse" />
  ),
});
const ServicesOverview = dynamic(
  () => import("@/components/home/ServicesOverview"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  }
);
const PopularDestinations = dynamic(
  () => import("@/components/home/PopularDestinations"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  }
);
const BookingForm = dynamic(() => import("@/components/home/BookingForm"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});
const CustomerReviews = dynamic(
  () => import("@/components/home/CustomerReviews"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  }
);

// ISR - Revalidate every 30 minutes
export const revalidate = 1800;

// SEO metadata
export const metadata: Metadata = {
  title: "Home",
  description:
    "Book reliable cab services in Sri Lanka with YasiruCeylonTours. Airport transfers, city tours, and custom travel packages. Professional drivers, modern fleet, 24/7 service across Colombo, Kandy, Galle, and beyond.",
  keywords: [
    "Sri Lanka cab booking",
    "airport transfer Colombo",
    "Sri Lanka tours",
    "taxi service Sri Lanka",
    "Kandy cab service",
    "Galle taxi",
    "Sri Lanka transportation",
    "tour packages Sri Lanka",
  ],
  openGraph: {
    title: "YasiruCeylonTours - Your Trusted Travel Partner in Sri Lanka",
    description:
      "Experience Sri Lanka with comfort and style. Professional cab services and custom tours across the island.",
    type: "website",
    images: [
      {
        url: "/images/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "YasiruCeylonTours - Premium Transportation in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YasiruCeylonTours - Premium Cab Service Sri Lanka",
    description:
      "Book reliable transportation across Sri Lanka. Airport transfers, tours, and more.",
    images: ["/images/hero/hero-1.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default async function HomePage() {
  // Fetch approved reviews from database (gracefully handle errors if Supabase not configured)
  let reviews: Review[] | null = null;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .limit(6);

    if (!error && data) {
      reviews = data as Review[];
    }
  } catch {
    console.log("Supabase not configured yet - reviews will be empty");
  }

  // Load gallery images and select first 8 for preview
  const allGalleryImages = loadGalleryImages();
  const galleryPreview =
    allGalleryImages.length > 0
      ? allGalleryImages.slice(0, 8) // Take first 8
      : [
          // Fallback images if no gallery images exist
          {
            src: "https://images.unsplash.com/photo-1609681980718-340e7f4b11d7?q=80&w=840&auto=format&fit=crop",
            alt: "Sigiriya Rock Fortress",
          },
          {
            src: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=800&q=80",
            alt: "Temple of the Tooth",
          },
          {
            src: "https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=800&q=80",
            alt: "Sri Lankan beaches",
          },
          {
            src: "https://images.unsplash.com/photo-1642095012245-bda8033e8ee3?w=800&q=80",
            alt: "Nine Arches Bridge",
          },
          {
            src: "https://images.pexels.com/photos/33983455/pexels-photo-33983455.jpeg?w=800&q=80",
            alt: "Tea estates",
          },
          {
            src: "https://images.unsplash.com/photo-1608748010899-18f300247112?w=800&q=80",
            alt: "Galle Fort",
          },
          {
            src: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=800&q=80",
            alt: "Wildlife safari",
          },
          {
            src: "https://images.pexels.com/photos/31154120/pexels-photo-31154120.jpeg?w=800&q=80",
            alt: "Ancient temples",
          },
        ];

  // Generate structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Hero />
      <ServicesOverview />
      <PopularDestinations />

      {/* Fleet Preview Section */}
      <section
        aria-labelledby="fleet-heading"
        className="py-8 sm:py-12 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <h2
                id="fleet-heading"
                className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                Our Fleet
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Choose from our diverse range of well-maintained vehicles for
                your perfect journey
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              {
                category: "Vans",
                image: "/images/fleet/van-preview.jpg",
                description: "Toyota HiAce models for large groups",
                capacity: "10-14 Passengers",
                features: ["Spacious Interior", "AC", "Long Distance Tours"],
                models: "4 Models Available",
              },
              {
                category: "Sedans",
                image: "/images/fleet/sedan-preview.jpg",
                description: "Comfortable cars for families",
                capacity: "4-5 Passengers",
                features: ["Fuel Efficient", "Comfortable", "City Tours"],
                models: "3 Models Available",
              },
              {
                category: "Small Cars",
                image: "/images/fleet/compact-preview.jpg",
                description: "Compact cars for solo travelers",
                capacity: "4 Passengers",
                features: ["Ultra Compact", "Budget Friendly", "City Friendly"],
                models: "4 Models Available",
              },
            ].map((vehicle, index) => (
              <ScrollReveal key={vehicle.category} delay={index * 0.1}>
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.category}
                      fill
                      quality={65}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <p className="text-gray-900 text-sm font-semibold">
                          {vehicle.capacity}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {vehicle.category}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {vehicle.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-base font-bold text-emerald-600">
                        {vehicle.models}
                      </p>
                    </div>
                    <div className="space-y-2">
                      {vehicle.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <svg
                            className="w-4 h-4 text-emerald-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <a
                href="/fleet"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg group transition-all"
              >
                View Full Fleet
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Preview - Moments from Our Tours */}
      <section
        aria-labelledby="gallery-heading"
        className="py-8 sm:py-12 bg-white"
      >
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2
                id="gallery-heading"
                className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                Moments from Our Tours
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Capturing the beauty and unforgettable experiences of Sri Lanka
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto mb-10">
            {galleryPreview.map((photo, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    quality={60}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold text-lg">
                        {photo.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg group transition-all"
              >
                View Full Gallery
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BookingForm />

      {reviews && reviews.length > 0 && <CustomerReviews reviews={reviews} />}
    </>
  );
}
