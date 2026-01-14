"use client";

import Link from "next/link";
import { services } from "@/lib/data/services";
import { useEffect, useRef, useState } from "react";

export default function ServicesOverview() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            services.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // Reduced vertical padding from py-24 to py-12
    <section ref={sectionRef} className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Reduced bottom margin from mb-20 to mb-10 */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional transportation solutions for every journey
          </p>
        </div>

        {/* Reduced gap from 10 to 6, adjusted grid for better density */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              // Reduced internal padding from p-10 to p-6 (md:p-8)
              className={`bg-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300 ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Icon: Reduced text size and margin */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>

              {/* Description: Tighter line height and margin */}
              <p className="text-gray-600 mb-5 leading-relaxed text-base">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 text-sm"
                  >
                    <svg
                      className="w-5 h-5 text-emerald-500 mr-2.5 flex-shrink-0"
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
          ))}
        </div>

        {/* Bottom CTA: Reduced top margin from mt-20 to mt-10 */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold text-lg group transition-all"
          >
            View All Services
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
