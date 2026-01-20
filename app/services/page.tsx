import { Metadata } from "next";
import Link from "next/link";
import AnimatedHero from "@/components/shared/AnimatedHero";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Services - Transportation Solutions Across Sri Lanka",
  description:
    "Explore our comprehensive range of services including airport transfers, one-day tours, multi-day round tours, city tours, and more. Available 24/7 across Sri Lanka.",
  keywords: [
    "Sri Lanka transportation services",
    "airport transfer service",
    "one day tours Sri Lanka",
    "multi-day tours",
    "city tours Colombo",
    "wedding transport Sri Lanka",
    "corporate transport",
    "24/7 cab service",
  ],
  openGraph: {
    title: "Our Services | YasiruCeylonTours",
    description:
      "Professional transportation services across Sri Lanka. Airport transfers, tours, and custom packages.",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/services`,
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: "airport-transfers",
      title: "Airport Transfers – 24/7",
      badge: "⭐ Most Popular Service",
      description:
        "Seamless airport pickup and drop-off services available day and night. Our professional drivers monitor flight schedules to ensure timely arrivals and stress-free transfers.",
      icon: "✈️",
      features: [
        "24/7 airport transfer service",
        "Real-time flight tracking",
        "Meet & greet at arrivals",
        "Luggage assistance",
        "Fixed pricing with no hidden charges",
        "Coverage for all major Sri Lankan airports",
      ],
    },
    {
      id: "one-day-tours",
      title: "One-Day Tours",
      description:
        "Make the most of your time in Sri Lanka with our carefully planned one-day tour experiences. Ideal for travelers looking to explore top attractions within a limited timeframe.",
      icon: "🗺️",
      features: [
        "Sigiriya Rock & Dambulla Cave Temple tours",
        "Kandy cultural and heritage visits",
        "Galle Fort & southern coastal attractions",
        "Ella & Nine Arch Bridge experience",
        "Colombo city highlights",
        "Flexible and customizable itineraries",
      ],
    },
    {
      id: "round-tours",
      title: "Round Tours (Multi-Day Tours)",
      description:
        "Explore Sri Lanka in depth with our multi-day round tours. From ancient cities to scenic hill country and tropical beaches, experience the island at your own pace.",
      icon: "🚐",
      features: [
        "3 to 14-day tour packages",
        "Cultural Triangle exploration",
        "Hill Country destinations (Ella, Nuwara Eliya)",
        "Beach destinations & relaxation stays",
        "Optional wildlife safaris",
        "Assistance with accommodation planning",
      ],
    },
    {
      id: "city-tours",
      title: "City Tours",
      description:
        "Discover Sri Lanka's major cities with guided city tours that combine culture, history, shopping, and local cuisine.",
      icon: "🏙️",
      features: [
        "Colombo city sightseeing",
        "Kandy Temple of the Tooth Relic & lake tour",
        "Galle Dutch Fort walking tour",
        "Shopping and market visits",
        "Local restaurant recommendations",
        "Half-day and full-day tour options",
      ],
    },
    {
      id: "pickup-drop",
      title: "Pickup & Drop Services",
      description:
        "Convenient point-to-point transportation for all travel needs. Whether for work, leisure, or personal errands, we ensure reliable and timely service.",
      icon: "🚗",
      features: [
        "Hotel-to-hotel transfers",
        "Business and corporate travel",
        "Railway station pickups and drops",
        "Event and function transportation",
        "Hospital and medical appointment travel",
        "Shopping mall and personal trips",
      ],
    },
    {
      id: "group-travel",
      title: "Group Travel Services",
      description:
        "Travel together comfortably with our spacious vehicles designed for families, groups, and corporate teams.",
      icon: "👥",
      features: [
        "Vehicles accommodating 4 to 15 passengers",
        "Comfortable seating and air-conditioning",
        "Ample luggage capacity",
        "Group tour and excursion packages",
        "Corporate and team transport",
        "Special pricing for group bookings",
      ],
    },
  ];

  const whyChooseUs = [
    {
      title: "Always On Time",
      description:
        "We value your time. Our drivers ensure punctual pickups and drop-offs so your plans stay on schedule.",
      icon: "⏰",
    },
    {
      title: "Safe & Secure Travel",
      description:
        "All drivers are verified and experienced. Vehicles are regularly serviced to meet safety standards.",
      icon: "🛡️",
    },
    {
      title: "Well-Maintained Fleet",
      description:
        "Clean, modern, air-conditioned vehicles designed for comfort on short and long journeys.",
      icon: "🚙",
    },
    {
      title: "Professional & Friendly Drivers",
      description:
        "Courteous drivers with excellent local knowledge who ensure a smooth and pleasant experience.",
      icon: "👨‍✈️",
    },
    {
      title: "Island-Wide Coverage",
      description:
        "We operate across Sri Lanka, including major cities and tourist destinations.",
      icon: "🗺️",
    },
    {
      title: "Customized Travel Packages",
      description:
        "Flexible tour itineraries tailored to your interests, schedule, and budget. We create personalized experiences to suit your needs.",
      icon: "🎯",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const popularDestinations = [
    "Colombo",
    "Kandy",
    "Galle",
    "Ella",
    "Sigiriya",
    "Bentota",
    "Nuwara Eliya",
    "Arugam Bay",
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const specialPackages = [
    "Customized tour itineraries based on your interests",
    "Multi-day packages with accommodation assistance",
    "Corporate transportation solutions",
    "Wedding and special event transportation",
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedHero
        title="Our Services"
        description="Reliable transportation solutions across Sri Lanka, designed for comfort, safety, and convenience. From airport transfers to island-wide tours, we are your trusted travel partner every step of the journey."
        images={[
          {
            src: "https://images.unsplash.com/photo-1686136188013-a930c4dc5f38?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Sri Lanka road trip and travel services",
          },
          {
            src: "https://images.unsplash.com/photo-1701889052366-931ac640089c?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Professional cab and taxi services",
          },
          {
            src: "https://images.unsplash.com/photo-1753938837788-a9c5f0aaf439?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Airport transfer and tour services",
          },
        ]}
      />

      {/* Services Section - Multi-Column Layout */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <div
                  id={service.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow scroll-mt-24 flex flex-col min-h-[370px] h-full animate-fadeInUp"
                  style={{ minHeight: 370, height: "100%" }}
                >
                  <div className="p-6 md:p-8 flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h2 className="text-2xl font-bold text-gray-900">
                            {service.title}
                          </h2>
                          {service.badge && (
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                              {service.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex-1 flex flex-col">
                      <p className="text-base text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      <h3 className="text-base font-bold text-gray-900 mb-3 mt-4">
                        Key Features:
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <svg
                              className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
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
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose YasiruCeylonTours?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow flex flex-col h-full min-h-[260px]">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Ride?
            </h2>
            <p className="text-xl text-emerald-50 mb-8">
              Get in touch with us today for a personalized quote and reliable
              transportation services. We&apos;re available 24/7 for your
              convenience.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link
                href="/#booking"
                className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center gap-2 shadow-lg"
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Book via WhatsApp
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center gap-2 border border-white/20"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Contact Us
              </Link>
            </div>
            <p className="text-emerald-100">📞 Call Us: +94 71 118 3257</p>
          </div>
        </div>
      </section>
    </main>
  );
}
