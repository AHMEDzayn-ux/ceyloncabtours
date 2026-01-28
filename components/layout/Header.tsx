"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-white/10 py-2.5 shadow-lg" // Very compact when scrolled
          : "bg-transparent border-transparent py-3 md:py-4" // Standard slim height when top
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-white rounded-lg p-1.5">
              <Image
                src="/images/logo.svg"
                alt="YasiruCeylonTours Logo"
                fill
                className="object-contain group-hover:opacity-90 transition-opacity p-0.5"
                priority
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:opacity-90 transition-opacity">
              Yasiru<span className="text-emerald-500">CeylonTours</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-base font-medium text-gray-300">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Destinations", href: "/destinations" },
                { name: "Fleet", href: "/fleet" },
                { name: "Gallery", href: "/gallery" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="py-2 hover:text-emerald-400 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-emerald-400 after:transition-all hover:after:w-full"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-emerald-400 transition-colors relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-0.5 bg-current origin-center"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full h-0.5 bg-current"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-0.5 bg-current origin-center"
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Destinations", href: "/destinations" },
                { name: "Fleet", href: "/fleet" },
                { name: "Gallery", href: "/gallery" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="text-lg font-medium text-gray-300 hover:text-emerald-400 transition-colors border-b border-white/5 pb-3 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
              >
                <Link
                  href="/#booking"
                  className="mt-2 bg-emerald-500 text-white text-center py-3 rounded-lg font-bold text-lg hover:bg-emerald-600 transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
