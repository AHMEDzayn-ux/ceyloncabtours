"use client";

import { FormEvent } from "react";
import AnimatedHero from "@/components/shared/AnimatedHero";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { aboutContent } from "@/lib/data/about";
import { WHATSAPP_NUMBERS } from "@/lib/utils/whatsapp";

export default function ContactPage() {
  const handleWhatsAppSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const whatsappMessage = `Hello! I'm ${name}.\n\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const whatsappURL = `https://wa.me/${
      WHATSAPP_NUMBERS.kandy
    }?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AnimatedHero
        title="Contact Us"
        subtitle="Get in Touch"
        description="Get in touch with us for bookings, inquiries, or any assistance you need"
        images={[
          {
            src: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80",
            alt: "Contact YasiruCeylonTours",
          },
          {
            src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1600&q=80",
            alt: "Customer service",
          },
          {
            src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
            alt: "Professional support",
          },
        ]}
      />

      {/* Contact Information Section */}
      <section className="py-8 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                Get In Touch
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-emerald-500 rounded-full mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
            {/* Kandy Office */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl">🏢</span>
                  Kandy Office
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 flex-shrink-0 mt-0.5 sm:mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-0.5 sm:mb-1">
                        Address
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {aboutContent.offices[0].address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 flex-shrink-0 mt-0.5 sm:mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-0.5 sm:mb-1">
                        Phone
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        <a
                          href="tel:+94711372105"
                          className="text-xs sm:text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                        >
                          +94 71 137 2105
                        </a>
                        <span className="text-xs sm:text-sm text-gray-600">
                          /
                        </span>
                        <a
                          href="tel:+94719383193"
                          className="text-xs sm:text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                        >
                          +94 71 938 3193
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Badulla Office */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl">🏢</span>
                  Badulla Office
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 flex-shrink-0 mt-0.5 sm:mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-0.5 sm:mb-1">
                        Address
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {aboutContent.offices[1].address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 flex-shrink-0 mt-0.5 sm:mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-0.5 sm:mb-1">
                        Phone
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        <a
                          href="tel:+94771183257"
                          className="text-xs sm:text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                        >
                          +94 77 118 3257
                        </a>
                        <span className="text-xs sm:text-sm text-gray-600">
                          /
                        </span>
                        <a
                          href="tel:+94728242758"
                          className="text-xs sm:text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                        >
                          +94 72 824 2758
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WhatsApp Quick Response */}
      <section className="py-8 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                Quick Response via WhatsApp
              </h2>
              <p className="text-sm sm:text-lg text-gray-600">
                Get instant responses to your queries by contacting us on
                WhatsApp
              </p>
              <div className="w-16 sm:w-20 h-1 bg-emerald-500 rounded-full mx-auto mt-3 sm:mt-4"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBERS.kandy}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 sm:w-7 sm:h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                Send us a Message
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-emerald-500 rounded-full mx-auto"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-8 md:p-10">
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+94 75 123 4567"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none text-sm sm:text-base"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 sm:py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Send Message via WhatsApp
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
