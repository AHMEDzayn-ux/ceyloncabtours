"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// SEO Optimized: Array of objects with Alt text for accessibility and search indexing
const heroImages = [
  {
    src: "https://images.pexels.com/photos/31154120/pexels-photo-31154120.jpeg",
    alt: "Sigiriya Rock Fortress ancient palace in Sri Lanka",
  },
  {
    src: "https://images.unsplash.com/photo-1642095012245-bda8033e8ee3?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "nine arche bridge",
  },
  {
    src: "https://images.unsplash.com/photo-1646894232861-a0ad84f1ad5d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Srilankan tropical beaches",
  },
  {
    src: "https://images.pexels.com/photos/33983455/pexels-photo-33983455.jpeg?_gl=1*i9w7nu*_ga*MjYzOTkyNzM2LjE3Njc2NDc4OTE.*_ga_8JE65Q40S6*czE3Njg0MDc3ODkkbzckZzEkdDE3Njg0MDc4ODgkajM5JGwwJGgw",
    alt: "Srilankan tea estates",
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-label="Hero Section"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* --- Background Slideshow (Optimized with next/image) --- */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <motion.div
            key={img.src}
            className="absolute inset-0"
            initial={{ x: "100%" }}
            animate={{
              x: index === currentImage ? "0%" : "-100%",
              opacity: index === currentImage ? 1 : 0,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
              style={{
                objectPosition: "center 60%",
              }}
            />
          </motion.div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none" />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-center pt-20 sm:pt-0">
        {/* Adjusted spacing for mobile */}
        <div className="max-w-5xl w-full mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 py-6 sm:py-10">
          {/* Title Section */}
          <div
            className={`transition-all duration-1000 ease-out transform ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white tracking-tight drop-shadow-2xl px-2">
              Your Trusted Cab Service
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                In Sri Lanka
              </span>
            </h1>
          </div>

          {/* Description */}
          <div
            className={`w-full flex justify-center transition-all duration-1000 delay-200 ease-out transform ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <p className="text-center text-sm sm:text-base md:text-xl text-gray-200 max-w-2xl leading-relaxed font-light px-6 sm:px-4">
              Sri Lanka&apos;s most{" "}
              <span className="font-medium text-white">
                trusted cab and taxi service
              </span>
              . Specializing in reliable{" "}
              <span className="text-emerald-300 font-medium">
                airport transfers
              </span>
              , safe city tours, and seamless island-wide travel.
            </p>
          </div>

          {/* CTA Buttons - Optimized for Mobile */}
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center mt-4 sm:mt-8 mb-4 sm:mb-8 px-4 transition-all duration-1000 delay-300 ease-out transform ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {/* Primary Action */}
            <div className="relative group">
              <Link
                href="/#booking"
                title="Book a taxi in Sri Lanka"
                className="
                  relative flex items-center justify-center 
                  /* Responsive Padding */
                  px-8 py-3 sm:px-8 sm:py-4 min-w-[200px]
                  
                  /* Styling */
                  bg-emerald-500 hover:bg-emerald-600 text-white 
                  rounded-full font-bold text-base sm:text-lg
                  
                  /* Animation */
                  animate-beat
                  
                  /* Transitions */
                  transition-colors duration-300
                "
              >
                Book Your Ride
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
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

            {/* Secondary Action */}
            <Link
              href="/tours"
              title="View Sri Lanka Tour Packages"
              className="
                /* Responsive Padding */
                px-8 py-3 sm:px-8 sm:py-4 min-w-[200px] text-center
                
                /* Glass Style */
                bg-white/5 hover:bg-white/10 backdrop-blur-md 
                border border-white/20 hover:border-emerald-400/50 
                
                /* Typography */
                text-white hover:text-emerald-300 
                rounded-full font-semibold text-base sm:text-lg
                
                /* Transitions */
                transition-all duration-300 hover:-translate-y-1
              "
            >
              Explore Tours
            </Link>
          </div>

          {/* Features Grid - Mobile Optimized */}
          <ul
            className={`grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 max-w-5xl mx-auto mt-4 sm:mt-8 px-2 transition-all duration-1000 delay-500 ease-out transform ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                ),
                title: "Airport Transfers",
                desc: "24/7 Pickup",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
                title: "City Tours",
                desc: "Local Guides",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                ),
                title: "Island Tours",
                desc: "Multi-day Trips",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Safe & Secure",
                desc: "Verified Drivers",
              },
            ].map((feature, index) => (
              <li
                key={index}
                className="group flex items-start gap-2 sm:gap-3 text-left"
              >
                <div className="flex-shrink-0 mt-0.5 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-sm sm:text-base font-semibold mb-0.5 group-hover:text-emerald-100 transition-colors">
                    {feature.title}
                  </h3>
                  <span className="text-gray-400 text-xs sm:text-sm">
                    {feature.desc}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] text-white/50 uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(8px);
            opacity: 0;
          }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
