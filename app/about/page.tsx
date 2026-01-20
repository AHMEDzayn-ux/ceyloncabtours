import { Metadata } from "next";
import Link from "next/link";
import AnimatedHero from "@/components/shared/AnimatedHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { aboutContent } from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About Us - YasiruCeylonTours | Trusted Sri Lanka Transportation",
  description:
    "Learn about YasiruCeylonTours - Sri Lanka's trusted cab service with over a decade of experience. Professional drivers, modern fleet, and 24/7 service.",
  keywords: [
    "about YasiruCeylonTours",
    "Sri Lanka taxi service",
    "professional drivers Sri Lanka",
    "cab service history",
    "transportation company Sri Lanka",
  ],
  openGraph: {
    title: "About YasiruCeylonTours | Your Trusted Travel Partner",
    description:
      "Professional cab and tour services across Sri Lanka with experienced drivers and modern vehicles.",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedHero
        title="About YasiruCeylonTours"
        subtitle="Your Trusted Travel Partner"
        description="Professional cab and tour services across Sri Lanka with customer satisfaction at our core"
        images={[
          {
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
            alt: "Professional team meeting",
          },
          {
            src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop",
            alt: "Customer service excellence",
          },
          {
            src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1000&auto=format&fit=crop",
            alt: "Quality transportation service",
          },
        ]}
      />

      {/* Mission & Vision Section */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-4 sm:p-8 shadow-lg">
                <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">🎯</div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                  Our Mission
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  {aboutContent.mission}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-8 shadow-lg">
                <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">👁️</div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                  Our Vision
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  {aboutContent.vision}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-8 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                Our Story
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-emerald-500 rounded-full mx-auto"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl p-4 sm:p-8 md:p-12 shadow-lg">
              <p className="text-xs sm:text-sm md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                At YasiruCeylonTours, customer satisfaction is at the heart of
                everything we do. We take pride in delivering exceptional
                transportation experiences that exceed expectations. Our journey
                has been shaped by countless positive feedback from travelers
                who have trusted us with their Sri Lankan adventures.
              </p>
              <p className="text-xs sm:text-sm md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                We&apos;ve had the privilege of serving hundreds of satisfied
                customers - from solo travelers discovering ancient ruins and
                wildlife sanctuaries, to families creating unforgettable
                memories on pristine beaches, and business executives who rely
                on our punctual airport transfers. Every positive review and
                repeat customer reinforces our commitment to excellence.
              </p>
              <p className="text-xs sm:text-sm md:text-lg text-gray-700 leading-relaxed">
                Our success is measured by the smiles of our customers, the
                seamless journeys we provide, and the trust we&apos;ve built
                over the years. With a modern fleet of well-maintained vehicles
                and experienced drivers who know every corner of Sri Lanka, we
                continue to set the standard for quality transportation services
                while maintaining the personal touch that makes each journey
                special.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                Why Choose YasiruCeylonTours
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-emerald-500 rounded-full mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                icon: "👨‍✈️",
                title: "Professional Drivers",
                description:
                  "Licensed, experienced drivers with extensive knowledge of Sri Lankan roads and tourist destinations.",
              },
              {
                icon: "🚗",
                title: "Modern Fleet",
                description:
                  "Well-maintained vehicles ranging from compact cars to luxury vans, all equipped with AC and comfort features.",
              },
              {
                icon: "🕐",
                title: "24/7 Service",
                description:
                  "Round-the-clock availability for airport transfers, emergency trips, and last-minute bookings.",
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                description:
                  "No hidden charges. Clear pricing structure with competitive rates for all services.",
              },
              {
                icon: "🛡️",
                title: "Safety First",
                description:
                  "Comprehensive insurance coverage, regular vehicle maintenance, and strict safety protocols.",
              },
              {
                icon: "🗺️",
                title: "Island-Wide Coverage",
                description:
                  "Services available across Sri Lanka - from Colombo to Jaffna, and everywhere in between.",
              },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-3xl sm:text-5xl mb-2 sm:mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-8 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                Our Offices
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-emerald-500 rounded-full mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
            {aboutContent.offices.map((office, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl">📍</span>
                    {office.location} Office
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 flex-shrink-0 mt-0.5 sm:mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">
                          Address
                        </p>
                        <p className="text-gray-600">{office.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">
                          Phone
                        </p>
                        <p className="text-emerald-600 font-medium">
                          {office.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-gray-700 mb-1">
                          Operating Hours
                        </p>
                        <p className="text-gray-600">{office.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
              Ready to Experience the Best in Sri Lankan Transportation?
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-emerald-50/90 mb-6 sm:mb-8">
              Book your ride today and discover why thousands of travelers trust
              YasiruCeylonTours for their journeys.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/#booking"
                className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 bg-white text-emerald-700 rounded-full font-bold text-sm sm:text-base hover:bg-emerald-50 transition-all hover:scale-105 shadow-lg"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="inline-block px-6 py-2.5 sm:px-8 sm:py-3 bg-transparent border-2 border-white text-white rounded-full font-bold text-sm sm:text-base hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
