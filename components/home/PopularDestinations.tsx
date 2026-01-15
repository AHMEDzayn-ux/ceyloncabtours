"use client";

import Link from "next/link";
import { tours } from "@/lib/data/tours";
import DestinationCard from "./DestinationCard";
import { useEffect, useRef, useState } from "react";

export default function PopularDestinations() {
  const featuredTours = tours
    .filter((t) => t.featured)
    .concat(tours.filter((t) => !t.featured))
    .slice(0, 6);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in when scrolling into view
            featuredTours.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 100);
            });
          } else {
            // Reset animation state when scrolling out of view
            setVisibleCards([]);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the beauty of Sri Lanka with our curated tour packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredTours.map((tour, index) => (
            <div
              key={tour.title}
              className={`transition-all duration-700 transform ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <DestinationCard tour={tour} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg group transition-all"
          >
            View All Destinations
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
      </div>
    </section>
  );
}
