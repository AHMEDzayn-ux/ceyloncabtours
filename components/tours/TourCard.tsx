"use client";

import Link from "next/link";
import { Tour } from "@/types";
import { generateTourInquiryURL } from "@/lib/utils/whatsapp";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white flex flex-col">
      {/* Image with Overlay */}
      <div className="relative h-48 sm:h-80 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-end overflow-hidden">
        {tour.heroImage && (
          <div className="w-full h-full relative overflow-hidden">
            <img
              src={tour.heroImage}
              alt={tour.title}
              className={`object-cover w-full h-full rounded-t-2xl transition-transform duration-500 group-hover:scale-105 ${
                tour.title === "Colombo City Tour" ? "" : ""
              }`}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                maxWidth: "100%",
                maxHeight: "100%",
                objectPosition:
                  tour.title === "Colombo City Tour" ? "center 35%" : undefined,
              }}
            />
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 rounded-t-2xl" />
          </div>
        )}
        {/* Content Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 z-20">
          <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg text-left">
            {tour.title}
          </h3>
        </div>
      </div>
      {/* Description below image */}
      <div className="p-3 sm:p-6 flex-1 flex items-center">
        <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-0 min-h-[40px] sm:min-h-[56px] text-left w-full">
          {tour.shortDescription}
        </p>
      </div>
    </div>
  );
}
