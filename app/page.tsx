import Hero from "@/components/home/Hero";
import BookingForm from "@/components/home/BookingForm";
import ServicesOverview from "@/components/home/ServicesOverview";
import PopularDestinations from "@/components/home/PopularDestinations";
import CustomerReviews from "@/components/home/CustomerReviews";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { createClient } from "@/lib/supabase/server";
import { Review } from "@/types";
import Link from "next/link";
import Image from "next/image";

// ISR - Revalidate every 30 minutes
export const revalidate = 1800;

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
  } catch (error) {
    console.log("Supabase not configured yet - reviews will be empty");
  }

  return (
    <>
      <Hero />
      <ServicesOverview />
      <PopularDestinations />

      {/* Fleet Preview Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Fleet
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Choose from our diverse range of well-maintained vehicles for
                your perfect journey
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                category: "Vans",
                icon: "🚐",
                description: "Toyota HiAce models for large groups",
                capacity: "10-14 Passengers",
                features: ["Spacious Interior", "AC", "Long Distance Tours"],
                models: "4 Models Available",
              },
              {
                category: "Sedans & Wagons",
                icon: "🚗",
                description: "Comfortable cars for families",
                capacity: "4-5 Passengers",
                features: ["Fuel Efficient", "Comfortable", "City Tours"],
                models: "3 Models Available",
              },
              {
                category: "Small Cars",
                icon: "🚙",
                description: "Compact cars for solo travelers",
                capacity: "4 Passengers",
                features: ["Ultra Compact", "Budget Friendly", "City Friendly"],
                models: "4 Models Available",
              },
            ].map((vehicle, index) => (
              <ScrollReveal key={vehicle.category} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-center">
                    <div className="text-7xl mb-3 group-hover:scale-110 transition-transform">
                      {vehicle.icon}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                      <p className="text-white text-sm font-semibold">
                        {vehicle.capacity}
                      </p>
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
                      <p className="text-xs font-semibold text-emerald-600 mb-2">
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
                </div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Moments from Our Tours
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Capturing the beauty and unforgettable experiences of Sri Lanka
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto mb-10">
            {[
              {
                src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
                alt: "Sigiriya Rock Fortress",
                title: "Sigiriya",
              },
              {
                src: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=800&q=80",
                alt: "Temple of the Tooth",
                title: "Kandy",
              },
              {
                src: "https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=800&q=80",
                alt: "Sri Lankan beaches",
                title: "Beaches",
              },
              {
                src: "https://images.unsplash.com/photo-1642095012245-bda8033e8ee3?w=800&q=80",
                alt: "Nine Arches Bridge",
                title: "Ella",
              },
              {
                src: "https://images.pexels.com/photos/33983455/pexels-photo-33983455.jpeg?w=800&q=80",
                alt: "Tea estates",
                title: "Tea Country",
              },
              {
                src: "https://images.unsplash.com/photo-1608748010899-18f300247112?w=800&q=80",
                alt: "Galle Fort",
                title: "Galle Fort",
              },
              {
                src: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=800&q=80",
                alt: "Wildlife safari",
                title: "Wildlife",
              },
              {
                src: "https://images.pexels.com/photos/31154120/pexels-photo-31154120.jpeg?w=800&q=80",
                alt: "Ancient temples",
                title: "Heritage",
              },
            ].map((photo, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold text-lg">
                        {photo.title}
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
