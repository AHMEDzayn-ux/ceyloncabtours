"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const heroImages = [
  {
    src: "https://images.pexels.com/photos/31154120/pexels-photo-31154120.jpeg",
    alt: "Sigiriya Rock Fortress ancient palace in Sri Lanka",
  },
  {
    src: "https://images.unsplash.com/photo-1642095012245-bda8033e8ee3?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Nine arch bridge",
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
    // Use setTimeout to avoid synchronous setState in effect
    const timer = setTimeout(() => setLoaded(true), 0);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      aria-label="Hero Section"
      // Changed h-screen to h-[100dvh] for better mobile browser support (handles address bar resizing)
      className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* --- Background Slideshow --- */}
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
                // Adjusted object position slightly for better mobile focal points
                objectPosition: "center center",
              }}
            />
          </motion.div>
        ))}

        {/* Gradient Overlay - Darker on bottom for text readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-black/30 to-black/90 pointer-events-none" />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-30 container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <div className="max-w-4xl w-full mx-auto text-center flex flex-col justify-center h-full pt-12 sm:pt-0">
          {/* Content Wrapper to vertically center visually */}
          <div className="space-y-6 sm:space-y-8">
            {/* Title Section */}
            <div
              className={`transition-all duration-1000 ease-out transform ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <h1 className="text-center font-bold text-white tracking-tight drop-shadow-2xl px-1">
                {/* Responsive Font Sizing: Smaller on mobile, massive on desktop */}
                <span className="block text-4xl sm:text-6xl md:text-7xl mb-2">
                  Your Trusted Cab Service
                </span>
                <span className="block text-4xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  In Sri Lanka
                </span>
              </h1>
            </div>

            {/* Description */}
            <div
              className={`w-full flex justify-center transition-all duration-1000 delay-200 ease-out transform ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <p className="text-center text-base sm:text-lg md:text-xl text-gray-200 max-w-lg leading-normal sm:leading-relaxed font-light px-4 opacity-90">
                Sri Lanka&apos;s most{" "}
                <span className="font-medium text-white">
                  trusted cab service
                </span>
                . Reliable{" "}
                <span className="text-emerald-300 font-medium">
                  airport transfers
                </span>
                , safe city tours, and island-wide travel.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center px-2 transition-all duration-1000 delay-300 ease-out transform ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {/* Primary Action */}
              <div className="w-full sm:w-auto relative group">
                <Link
                  href="/#booking"
                  className="relative flex items-center justify-center w-full sm:w-auto px-8 py-3.5 sm:px-8 sm:py-4 min-w-[200px] bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-base sm:text-lg animate-beat transition-colors duration-300 shadow-lg shadow-emerald-900/20"
                >
                  Book Your Ride
                  <svg
                    className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
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
              <div className="w-full sm:w-auto">
                <Link
                  href="/tours"
                  className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 sm:px-8 sm:py-4 min-w-[200px] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-emerald-400/50 text-white hover:text-emerald-300 rounded-full font-semibold text-base sm:text-lg transition-all duration-300"
                >
                  Explore Tours
                </Link>
              </div>
            </div>

            {/* Features Grid */}
            <ul
              className={`grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3 sm:gap-4 max-w-sm sm:max-w-3xl mx-auto pt-4 transition-all duration-1000 delay-500 ease-out transform ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  ),
                  title: "Airport Drops",
                  desc: "24/7 Pickup",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  ),
                  title: "City Tours",
                  desc: "Local Guides",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  ),
                  title: "Island Tours",
                  desc: "Multi-day Trips",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  ),
                  title: "Safe & Secure",
                  desc: "Verified Drivers",
                },
              ].map((feature, index) => (
                <li
                  key={index}
                  className="group flex flex-col items-center justify-start gap-1 sm:gap-2 text-center p-1 sm:p-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="flex-shrink-0 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-sm sm:text-base font-semibold group-hover:text-emerald-100 transition-colors">
                      {feature.title}
                    </h3>
                    <span className="text-gray-400 text-xs sm:text-sm block mt-0.5">
                      {feature.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned higher for mobile screens with gesture bars */}
      <div
        className={`absolute bottom-8 sm:bottom-6 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-1000 ${
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
    </section>
  );
}
