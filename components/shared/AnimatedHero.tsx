"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
  children?: React.ReactNode;
}

export default function AnimatedHero({
  title,
  subtitle,
  description,
  images,
  children,
}: AnimatedHeroProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
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
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            {subtitle && (
              <p className="text-emerald-400 font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
                {subtitle}
              </p>
            )}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              {title}
            </h1>
            {description && (
              <p className="text-xl md:text-2xl text-emerald-50 leading-relaxed">
                {description}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
