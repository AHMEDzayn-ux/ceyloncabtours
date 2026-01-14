"use client";

import { Tour } from "@/types";
import Image from "next/image";

export default function DestinationCard({ tour }: { tour: Tour }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
      {/* Image with Overlay */}
      <div className="relative h-80 bg-gradient-to-br from-blue-200 to-indigo-200">
        {tour.heroImage && (
          <Image
            src={tour.heroImage}
            alt={tour.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ zIndex: 1 }}
          />
        )}
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

        {/* Content Overlay at Bottom, transitions to description on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col items-start">
          <h3
            className={`text-2xl font-bold text-white mb-2 transition-all duration-500 ${"group-hover:mb-1"}`}
          >
            {tour.title}
          </h3>
          <p className="text-white/90 text-base opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 group-hover:mt-2 transition-all duration-500 overflow-hidden">
            {tour.shortDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
