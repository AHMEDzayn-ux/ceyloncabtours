import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedHero from "@/components/shared/AnimatedHero";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Photo Gallery - Explore Sri Lanka's Beauty",
  description:
    "View stunning photos from our tours across Sri Lanka. See beautiful destinations, happy customers, and memorable moments from CeylonCabTours.",
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
    title: "Photo Gallery | CeylonCabTours",
    description:
      "Discover Sri Lanka's stunning beauty through our curated photo gallery.",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/gallery`,
  },
};

// Static gallery data - organized by category
const galleryCategories = [
  {
    name: "Cultural Heritage",
    description: "Ancient cities and sacred temples",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        caption: "Sigiriya Rock Fortress",
      },
      {
        url: "https://images.unsplash.com/photo-1588497859490-85d1c17db96d?w=800&q=80",
        caption: "Temple of the Tooth - Kandy",
      },
      {
        url: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=800&q=80",
        caption: "Dambulla Cave Temple",
      },
      {
        url: "https://images.unsplash.com/photo-1608109661250-17ee1a5db05b?w=800&q=80",
        caption: "Ancient Buddhist Stupa",
      },
      {
        url: "https://images.unsplash.com/photo-1633203319832-c32d2a2f5c0e?w=800&q=80",
        caption: "Traditional Architecture",
      },
      {
        url: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80",
        caption: "Cultural Landmark",
      },
    ],
  },
  {
    name: "Natural Beauty",
    description: "Hill country, tea plantations, and scenic landscapes",
    images: [
      {
        url: "https://images.unsplash.com/photo-1642095012245-bda8033e8ee3?w=800&q=80",
        caption: "Nine Arch Bridge - Ella",
      },
      {
        url: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?w=800&q=80",
        caption: "Tea Plantations",
      },
      {
        url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
        caption: "Misty Mountains",
      },
      {
        url: "https://images.unsplash.com/photo-1601220225528-99aeea4d0d94?w=800&q=80",
        caption: "Lush Green Hills",
      },
      {
        url: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
        caption: "Waterfall Paradise",
      },
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
        caption: "Scenic Valley",
      },
    ],
  },
  {
    name: "Beaches & Coast",
    description: "Golden beaches and coastal beauty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=800&q=80",
        caption: "Pristine Beach",
      },
      {
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
        caption: "Galle Fort",
      },
      {
        url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
        caption: "Tropical Paradise",
      },
      {
        url: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&q=80",
        caption: "Coastal Sunset",
      },
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        caption: "Beach Views",
      },
      {
        url: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80",
        caption: "Ocean Horizon",
      },
    ],
  },
  {
    name: "Wildlife & Safari",
    description: "Elephants, leopards, and exotic wildlife",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
        caption: "Wild Elephant",
      },
      {
        url: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&q=80",
        caption: "Sri Lankan Leopard",
      },
      {
        url: "https://images.unsplash.com/photo-1583799331119-9a3c1c1d87f0?w=800&q=80",
        caption: "Safari Experience",
      },
      {
        url: "https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=800&q=80",
        caption: "Wildlife Encounter",
      },
      {
        url: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800&q=80",
        caption: "National Park",
      },
      {
        url: "https://images.unsplash.com/photo-1615963244664-5b845b2025ee?w=800&q=80",
        caption: "Exotic Birds",
      },
    ],
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedHero
        title="Photo Gallery"
        subtitle="Captured Moments"
        description="Beautiful memories from our tours across Sri Lanka"
        images={[
          {
            src: "https://images.unsplash.com/photo-1609681980718-340e7f4b11d7?q=80&w=840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Geradigini ella",
          },
          {
            src: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "nine arch bridges",
          },
          {
            src: "https://images.unsplash.com/photo-1645839449907-72c4d3cb8fb3?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Unawatuna beach",
          },
        ]}
      />

      <div className="container mx-auto px-6 py-16">
        {galleryCategories.map((category, categoryIndex) => (
          <ScrollReveal key={category.name} delay={categoryIndex * 0.1}>
            <section className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h2>
                <p className="text-lg text-gray-600">{category.description}</p>
                <div className="w-20 h-1 bg-emerald-500 rounded-full mx-auto mt-4"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.05}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                      <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-teal-100 overflow-hidden">
                        <Image
                          src={image.url}
                          alt={image.caption}
                          fill
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      {image.caption && (
                        <div className="p-4 bg-white">
                          <p className="text-gray-700 text-sm font-medium text-center">
                            {image.caption}
                          </p>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 py-16 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Create Your Own Memories?
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Book your Sri Lankan adventure today and experience these beautiful
            destinations
          </p>
          <Link
            href="/#booking"
            className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-lg hover:bg-emerald-50 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            Book Your Tour
          </Link>
        </div>
      </section>
    </div>
  );
}
