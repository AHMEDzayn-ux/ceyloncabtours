"use client";

import { useState, FormEvent } from "react";
import { generateWhatsAppURL } from "@/lib/utils/whatsapp";
import { BookingFormData } from "@/types";

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    pickup: "",
    destination: "",
    date: "",
    passengers: 1,
    notes: "",
    office: "kandy",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappURL = generateWhatsAppURL(formData, formData.office);
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4 md:mb-6">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-4">
              Share your details and we&apos;ll connect with you via WhatsApp to
              discuss your travel plans
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition text-gray-900 text-sm sm:text-base"
                  placeholder="John Smith"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition text-gray-900 text-sm sm:text-base"
                  placeholder="+94 77 123 4567"
                />
              </div>

              {/* Pickup Location */}
              <div>
                <label
                  htmlFor="pickup"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
                >
                  Pickup Location (Optional)
                </label>
                <input
                  type="text"
                  id="pickup"
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition text-gray-900 text-sm sm:text-base"
                  placeholder="e.g., Colombo Airport"
                />
              </div>

              {/* Destination */}
              <div>
                <label
                  htmlFor="destination"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
                >
                  Destination (Optional)
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition text-gray-900 text-sm sm:text-base"
                  placeholder="e.g., Kandy, Ella"
                />
              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
                >
                  Travel Date (Optional)
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition text-gray-900 text-sm sm:text-base"
                />
              </div>

              {/* Passengers */}
              <div>
                <label
                  htmlFor="passengers"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
                >
                  Number of Passengers (Optional)
                </label>
                <select
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition text-gray-900 text-sm sm:text-base"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                    (num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Person" : "People"}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label
                  htmlFor="notes"
                  className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2"
                >
                  Your Travel Plans or Questions (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition resize-none text-gray-900 text-sm sm:text-base"
                  placeholder="Tell us about your travel plans, tour interests, or any questions you have..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 sm:mt-8 bg-emerald-500 hover:bg-emerald-600 text-white py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg transition shadow-lg"
            >
              Continue to WhatsApp
            </button>

            <p className="text-center text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm">
              You&apos;ll be redirected to WhatsApp to discuss your travel plans
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
