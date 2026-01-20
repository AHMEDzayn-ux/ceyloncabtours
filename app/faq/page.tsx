import { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/lib/data/faq";
import AnimatedHero from "@/components/shared/AnimatedHero";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "FAQ - Your Questions Answered",
  description:
    "Find answers to common questions about our cab services, bookings, tours, and more. Learn about our transparent pricing, professional drivers, and 24/7 availability.",
  keywords: [
    "Sri Lanka cab FAQ",
    "YasiruCeylonTours questions",
    "booking information",
    "pricing questions",
    "travel FAQ Sri Lanka",
    "cab service help",
    "taxi booking help",
  ],
  openGraph: {
    title: "FAQ | YasiruCeylonTours",
    description:
      "Common questions about our services, pricing, and booking process.",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/faq`,
  },
};

export default function FAQPage() {
  const categories = {
    booking: "Booking & Reservations",
    payment: "Pricing & Payment",
    tours: "Tours & Multi-Day Rentals",
    general: "General Information",
  };

  const categoryDescriptions = {
    booking: "Everything you need to know about booking your ride",
    payment: "Transparent pricing and payment information",
    tours: "Tour packages and multi-day travel services",
    general: "About our services, vehicles, and drivers",
  };

  const categoryIcons = {
    booking: (
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    payment: (
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    tours: (
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    general: (
      <svg
        className="w-6 h-6 sm:w-8 sm:h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  const faqsByCategory = {
    booking: faqs.filter((f) => f.category === "booking"),
    payment: faqs.filter((f) => f.category === "payment"),
    tours: faqs.filter((f) => f.category === "tours"),
    general: faqs.filter((f) => f.category === "general"),
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedHero
        title="Frequently Asked Questions"
        subtitle="We're Here to Help"
        description="Everything you need to know about our cab services, tours, and bookings"
        images={[
          {
            src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80",
            alt: "Customer service and support",
          },
          {
            src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80",
            alt: "Questions and answers about our services",
          },
        ]}
      >
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
          <Link
            href="#booking"
            className="px-3 py-2 sm:px-6 sm:py-3 bg-white text-emerald-600 rounded-lg font-semibold text-xs sm:text-base hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Booking
          </Link>
          <Link
            href="#payment"
            className="px-3 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur text-white rounded-lg font-semibold text-xs sm:text-base hover:bg-white/20 transition-colors border border-white/20"
          >
            Payment
          </Link>
          <Link
            href="#tours"
            className="px-3 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur text-white rounded-lg font-semibold text-xs sm:text-base hover:bg-white/20 transition-colors border border-white/20"
          >
            Tours
          </Link>
          <Link
            href="#general"
            className="px-3 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur text-white rounded-lg font-semibold text-xs sm:text-base hover:bg-white/20 transition-colors border border-white/20"
          >
            General
          </Link>
        </div>
      </AnimatedHero>

      {/* FAQ Categories */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          {Object.entries(faqsByCategory).map(
            ([category, categoryFaqs], catIndex) => (
              <ScrollReveal key={category} delay={catIndex * 0.1}>
                <div id={category} className="mb-10 sm:mb-16 scroll-mt-24">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-8">
                    <div className="p-2 sm:p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                      {categoryIcons[category as keyof typeof categoryIcons]}
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                        {categories[category as keyof typeof categories]}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                        {
                          categoryDescriptions[
                            category as keyof typeof categoryDescriptions
                          ]
                        }
                      </p>
                    </div>
                  </div>

                  {/* FAQ Items */}
                  <div className="space-y-3 sm:space-y-4">
                    {categoryFaqs.map((faq, index) => (
                      <details
                        key={index}
                        className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <summary className="flex items-center justify-between cursor-pointer p-3 sm:p-6 font-semibold text-sm sm:text-base md:text-lg text-gray-900 list-none">
                          <span className="flex items-start gap-2 sm:gap-3 flex-1">
                            <svg
                              className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>{faq.question}</span>
                          </span>
                          <svg
                            className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180 flex-shrink-0 ml-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-3 pb-3 sm:px-6 sm:pb-6">
                          <div className="pl-7 sm:pl-9 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4">
              Still Have Questions?
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-emerald-50 mb-6 sm:mb-8">
              Our team is here to help you 24/7. Get in touch with us for
              personalized assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="px-4 py-2.5 sm:px-8 sm:py-4 bg-white text-emerald-600 rounded-lg font-semibold text-sm sm:text-base hover:bg-emerald-50 transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us
              </Link>
              <Link
                href="/"
                className="px-4 py-2.5 sm:px-8 sm:py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-white/20 transition-colors inline-flex items-center gap-2 border border-white/20"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
