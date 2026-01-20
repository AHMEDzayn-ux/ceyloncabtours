import { Metadata } from "next";
import Link from "next/link";
import AnimatedHero from "@/components/shared/AnimatedHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { loadGalleryImages } from "@/lib/utils/galleryLoader";

export const metadata: Metadata = {
  title: "Photo Gallery - Explore Sri Lanka's Beauty",
  description:
    "View stunning photos from our tours across Sri Lanka. See beautiful destinations, happy customers, and memorable moments from YasiruCeylonTours.",
  keywords: [
    "Sri Lanka photos",
    "Sri Lanka tourism",
    "cultural heritage Sri Lanka",
    "Sri Lanka beaches",
    "wildlife Sri Lanka",
    "natural beauty Sri Lanka",
    "travel photography Sri Lanka",
    "Sigiriya photos",
    "Kandy temple photos",
  ],
  openGraph: {
    title: "Photo Gallery | YasiruCeylonTours",
    description:
      "Discover Sri Lanka's stunning beauty through our curated photo gallery.",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/gallery`,
  },
};

export default function GalleryPage() {
  // Load all images from the gallery directory
  const images = loadGalleryImages();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <AnimatedHero
        title="Photo Gallery"
        subtitle="Discover the beauty of Sri Lanka through our lens"
        images={[
          {
            src: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=928&auto=format&fit=crop",
            alt: "Nine arch bridge",
          },
          {
            src: "https://images.unsplash.com/photo-1645839449907-72c4d3cb8fb3?q=80&w=1032&auto=format&fit=crop",
            alt: "Unawatuna beach",
          },
          {
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
            alt: "Sigiriya",
          },
        ]}
      />

      {/* Gallery Section */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            Our Journey Through Sri Lanka
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore stunning landscapes, cultural heritage, and unforgettable
            moments captured during our tours across the pearl of the Indian
            Ocean
          </p>
          <div className="w-16 sm:w-20 h-1 bg-emerald-500 rounded-full mx-auto mt-4 sm:mt-6"></div>
        </div>

        {images.length > 0 ? (
          <GalleryGrid images={images} />
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-base sm:text-xl font-semibold text-gray-700 mb-2">
              No images yet
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">
              Gallery images will appear here once added
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 py-12 sm:py-16 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Want to Create Your Own Memories?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-emerald-50 max-w-2xl mx-auto">
            Book your Sri Lankan adventure today and experience these beautiful
            destinations
          </p>
          <Link
            href="/#booking"
            className="inline-block bg-white text-emerald-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-emerald-50 transition-all duration-300 font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book Your Tour
          </Link>
        </div>
      </section>
    </div>
  );
}
