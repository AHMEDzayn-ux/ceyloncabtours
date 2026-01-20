"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

function GalleryItem({
  image,
  index,
  onClick,
}: {
  image: GalleryImage;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.05, 0.5),
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="break-inside-avoid mb-3 sm:mb-4"
    >
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl cursor-pointer group bg-gray-100"
        onClick={onClick}
      >
        <div className="relative w-full">
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            loading="lazy"
            quality={80}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col items-center justify-center gap-2 sm:gap-3"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileHover={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.3, ease: "backOut" }}
              className="bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4"
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Mobile Tap Indicator */}
          <div className="absolute bottom-2 right-2 sm:hidden bg-black/60 backdrop-blur-sm rounded-full p-1.5">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    // Prevent scroll when lightbox is open
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Handle swipe gestures on mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  return (
    <>
      {/* Gallery Grid - Responsive Masonry Layout */}
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 sm:gap-4">
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            image={image}
            index={index}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence mode="wait">
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/80 hover:text-white z-50 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full p-2 sm:p-2.5 transition-all"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            {/* Image Counter */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2 }}
              className="absolute top-3 left-1/2 -translate-x-1/2 sm:top-4 text-white/90 text-xs sm:text-sm font-medium z-50 bg-black/40 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full"
            >
              {selectedImage + 1} / {images.length}
            </motion.div>

            {/* Previous Button */}
            {selectedImage > 0 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.2 }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-50 p-2 sm:p-3 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                aria-label="Previous image"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>
            )}

            {/* Next Button */}
            {selectedImage < images.length - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.2 }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-50 p-2 sm:p-3 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next image"
              >
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            )}

            {/* Image with Smooth Transition */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative max-w-7xl max-h-[85vh] sm:max-h-[90vh] w-full h-full flex items-center justify-center px-12 sm:px-16 py-16 sm:py-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={1920}
                height={1080}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
                quality={95}
                priority
                sizes="100vw"
              />
            </motion.div>

            {/* Image Caption */}
            {images[selectedImage].alt && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:bottom-6 text-white/95 text-center bg-black/60 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl max-w-[90%] sm:max-w-2xl text-xs sm:text-sm font-medium"
              >
                {images[selectedImage].alt}
              </motion.div>
            )}

            {/* Swipe Indicator for Mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 text-white/40 text-xs sm:hidden flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span>Swipe to navigate</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
