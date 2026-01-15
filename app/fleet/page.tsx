import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedHero from "@/components/shared/AnimatedHero";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Fleet - Premium Vehicles for Every Journey",
  description:
    "Explore our diverse fleet of well-maintained vehicles. From spacious vans to comfortable sedans and compact cars - perfect for your Sri Lankan adventure.",
  keywords: [
    "Sri Lanka rental vehicles",
    "luxury cars Sri Lanka",
    "SUV rental Sri Lanka",
    "sedan hire Colombo",
    "mini van rental",
    "premium vehicles Sri Lanka",
    "wedding cars Sri Lanka",
    "Toyota KDH rental",
  ],
  openGraph: {
    title: "Our Fleet | CeylonCabTours",
    description:
      "Premium vehicles for every journey. Sedans, SUVs, vans, and luxury cars available.",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/fleet`,
  },
};

const fleetData = {
  vans: [
    {
      name: "Toyota KDH",
      variant: "High Roof",
      capacity: "14 Passengers",
      features: [
        "Spacious Interior",
        "Air Conditioning",
        "Luggage Space",
        "Comfortable Seating",
      ],
      description:
        "The premium choice for luxury travel, VIP guests, and long-distance tours. Offers the most headroom and legroom in its class.",
      image: "/images/fleet/toyota-kdh-highroof.jpg",
    },
    {
      name: "Toyota KDH",
      variant: "Flat Roof",
      capacity: "10-12 Passengers",
      features: [
        "Air Conditioning",
        "Fuel Efficient",
        "Reliable",
        "Smooth Ride",
      ],
      description:
        "Ideal for group travel with excellent fuel economy and comfort.",
      image: "/images/fleet/toyota-kdh-flatroof.png",
    },
    {
      name: 'Toyota HiAce "Dolphin"',
      variant: "High Roof",
      capacity: "10-14 Passengers",
      features: ["Extra Headroom", "Modern Design", "AC", "Premium Comfort"],
      description:
        "Modern van with enhanced comfort for extended tours across Sri Lanka.",
      image: "/images/fleet/hiace-dolphin-highroof.jpg",
    },
    {
      name: 'Toyota HiAce "Dolphin"',
      variant: "Flat Roof",
      capacity: "10-12 Passengers",
      features: ["Reliable", "Comfortable", "Air Conditioning", "Spacious"],
      description:
        "Dependable group transport for tours and airport transfers.",
      image: "/images/fleet/hiace-dolphin-flatroof.jpg",
    },
  ],
  sedansWagons: [
    {
      name: "Honda Fit Shuttle",
      variant: "Hybrid Wagon",
      capacity: "5 Passengers",
      features: ["Hybrid Engine", "Spacious Boot", "Fuel Efficient", "Modern"],
      description:
        "Eco-friendly wagon with excellent fuel economy and extra luggage space.",
      image: "/images/fleet/honda-fit-shuttle.jpg",
    },
    {
      name: "Perodua Bezza",
      variant: "Compact Sedan",
      capacity: "4 Passengers",
      features: [
        "Fuel Efficient",
        "Air Conditioning",
        "Comfortable",
        "Affordable",
      ],
      description: "Modern compact sedan ideal for couples and small families.",
      image: "/images/fleet/perodua-bezza.jpg",
    },
    {
      name: "Toyota Prius",
      variant: "Hybrid Sedan",
      capacity: "4 Passengers",
      features: [
        "Eco-Friendly Hybrid",
        "Premium Comfort",
        "Silent Operation",
        "Modern Technology",
      ],
      description:
        "Luxury hybrid sedan offering premium comfort and exceptional fuel efficiency.",
      image: "/images/fleet/toyota-prius.jpg",
    },
  ],
  smallCars: [
    {
      name: "Suzuki Wagon R FX",
      variant: "Standard Face",
      capacity: "4 Passengers",
      features: ["Compact", "Fuel Efficient", "Easy Parking", "City Friendly"],
      description:
        "Perfect city car for short trips and exploring urban areas.",
      image: "/images/fleet/suzuki-wagonr-fx.jpg",
    },
    {
      name: "Suzuki Wagon R Stingray",
      variant: "Sportier Face",
      capacity: "4 Passengers",
      features: ["Sporty Design", "Compact", "Efficient", "Modern"],
      description:
        "Stylish compact car with a sporty touch for city exploration.",
      image: "/images/fleet/suzuki-wagonr-stingray.jpg",
    },
    {
      name: "Suzuki Alto",
      variant: "Kei Car",
      capacity: "4 Passengers",
      features: [
        "Ultra Compact",
        "Very Fuel Efficient",
        "Easy Maneuver",
        "Budget Friendly",
      ],
      description: "Ultra-economical choice for solo travelers and couples.",
      image: "/images/fleet/suzuki-alto.jpg",
    },
    {
      name: "Tata Nano",
      variant: "Micro Car",
      capacity: "4 Passengers",
      features: ["Very Compact", "Budget Option", "City Car", "Basic Comfort"],
      description: "The most economical option for short city trips.",
      image: "/images/fleet/tata-nano.jpg",
    },
  ],
};

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedHero
        title="Our Fleet"
        subtitle="Well-Maintained Vehicles"
        description="Choose from our diverse range of well-maintained vehicles for your perfect Sri Lankan journey"
        images={[
          {
            src: "https://images.unsplash.com/photo-1654554584641-1266def1cd14?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Modern vehicle fleet for Sri Lanka tours",
          },
          {
            src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1600&q=80",
            alt: "Comfortable vans for group travel",
          },
          {
            src: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1600&q=80",
            alt: "Professional cab services in Sri Lanka",
          },
        ]}
      >
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <div className="bg-emerald-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-emerald-400/30">
            <p className="text-white text-sm font-semibold">
              11 Vehicle Models
            </p>
          </div>
          <div className="bg-emerald-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-emerald-400/30">
            <p className="text-white text-sm font-semibold">
              All Well-Maintained
            </p>
          </div>
          <div className="bg-emerald-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-emerald-400/30">
            <p className="text-white text-sm font-semibold">
              Professional Drivers
            </p>
          </div>
        </div>
      </AnimatedHero>

      {/* Vans Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Compact Section Header */}
          <div className="flex items-center gap-4 mb-8 border-b pb-4 border-gray-100">
            <div className="bg-emerald-100 p-3 rounded-2xl">
              <span className="text-3xl">🚐</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Luxury Vans
              </h2>
              <p className="text-sm text-gray-500">
                Spacious travel for groups &amp; families
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {fleetData.vans.map((vehicle, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                {/* h-full ensures all cards in the row are same height */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  <div className="relative h-48 bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center overflow-hidden">
                    {vehicle.image &&
                    vehicle.image.startsWith("/images/fleet/") ? (
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-6xl">🚐</span>
                    )}
                  </div>

                  {/* flex-grow pushes content to fill space, justify-between aligns bottom items */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="mb-3">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {vehicle.name}
                        </h3>
                        <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap">
                          {vehicle.capacity}
                        </span>
                      </div>
                      <p className="text-sm text-emerald-600 font-medium">
                        {vehicle.variant}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                      {vehicle.description}
                    </p>

                    <div className="border-t border-gray-100 pt-3 mt-auto">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Features
                      </p>
                      <div className="grid grid-cols-2 gap-y-1 gap-x-2">
                        {vehicle.features.slice(0, 4).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1.5 text-xs text-gray-600"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sedans Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8 border-b pb-4 border-gray-200">
            <div className="bg-blue-100 p-3 rounded-2xl">
              <span className="text-3xl">🚗</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Sedans & Wagons
              </h2>
              <p className="text-sm text-gray-500">
                Comfort for couples & business
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleetData.sedansWagons.map((vehicle, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center overflow-hidden">
                    {vehicle.image &&
                    vehicle.image.startsWith("/images/fleet/") ? (
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-6xl">🚗</span>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="mb-3">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {vehicle.name}
                        </h3>
                        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-lg whitespace-nowrap">
                          {vehicle.capacity}
                        </span>
                      </div>
                      <p className="text-sm text-blue-600 font-medium">
                        {vehicle.variant}
                      </p>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                      {vehicle.description}
                    </p>

                    <div className="border-t border-gray-100 pt-3 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 rounded-md bg-gray-50 text-xs text-gray-600 border border-gray-100"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Small Cars Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8 border-b pb-4 border-gray-100">
            <div className="bg-purple-100 p-3 rounded-2xl">
              <span className="text-3xl">🚙</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Small Cars
              </h2>
              <p className="text-sm text-gray-500">
                Economical city travel (Kei / Hatchbacks)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {fleetData.smallCars.map((vehicle, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                  <div className="relative h-40 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center overflow-hidden">
                    {vehicle.image &&
                    vehicle.image.startsWith("/images/fleet/") ? (
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-5xl">🚙</span>
                    )}
                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <div className="mb-2">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-base font-bold text-gray-900 leading-tight">
                          {vehicle.name}
                        </h3>
                        <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-lg whitespace-nowrap">
                          {vehicle.capacity}
                        </span>
                      </div>
                      <p className="text-xs text-purple-600 font-medium">
                        {vehicle.variant}
                      </p>
                    </div>

                    <p className="text-gray-500 text-xs leading-relaxed mb-3 flex-grow">
                      {vehicle.description}
                    </p>

                    <div className="grid grid-cols-2 gap-1 mt-auto">
                      {vehicle.features.slice(0, 2).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1 text-[10px] text-gray-500"
                        >
                          <span className="w-1 h-1 rounded-full bg-purple-400"></span>
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Book Your Ride?
            </h2>
            <p className="text-lg text-emerald-50/90 mb-8">
              Choose your preferred vehicle and let us know your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#booking"
                className="inline-block px-8 py-3 bg-white text-emerald-700 rounded-full font-bold hover:bg-emerald-50 transition-all hover:scale-105 shadow-lg"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all"
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
