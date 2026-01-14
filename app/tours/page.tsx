import Link from "next/link";
import { tours } from "@/lib/data/tours";
import { generateMetadata as genMeta } from "@/lib/utils/seo";
import SectionHeading from "@/components/shared/SectionHeading";
import TourCard from "@/components/tours/TourCard";
import { generateTourInquiryURL } from "@/lib/utils/whatsapp";
import AnimatedHero from "@/components/shared/AnimatedHero";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata = genMeta({
  title: "Sri Lanka Tours & Destinations",
  description:
    "Explore customized tour packages across Sri Lanka. Visit cultural sites, wildlife parks, beaches, and hill country with professional drivers.",
  keywords: [
    "Sri Lanka tours",
    "Ceylon tours",
    "Sigiriya tour",
    "Kandy tour",
    "Ella tour",
    "Yala safari",
  ],
});

// ISR - Revalidate every hour
export const revalidate = 3600;

export default async function ToursPage() {
  const culturalTours = tours.filter((t) => t.category === "cultural");
  const natureTours = tours.filter((t) => t.category === "nature");
  const wildlifeTours = tours.filter((t) => t.category === "wildlife");
  const adventureTours = tours.filter((t) => t.category === "adventure");

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <AnimatedHero
        title="Explore Sri Lanka Tours"
        subtitle="Discover Paradise"
        description="Custom tour packages designed for your perfect Sri Lankan adventure. All itineraries are flexible and can be tailored to your preferences."
        images={[
          {
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
            alt: "Ancient city tours in Sri Lanka",
          },
          {
            src: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=1600&q=80",
            alt: "Cultural heritage sites",
          },
          {
            src: "https://images.pexels.com/photos/33983455/pexels-photo-33983455.jpeg?w=1600&q=80",
            alt: "Hill country tea plantations",
          },
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Cultural Tours */}
        {culturalTours.length > 0 && (
          <section className="mb-16">
            <ScrollReveal>
              <SectionHeading
                title="Cultural & Heritage Tours"
                subtitle="Discover ancient cities and spiritual landmarks"
              />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {culturalTours.map((tour, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <TourCard tour={tour} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* Nature Tours */}
        {natureTours.length > 0 && (
          <section className="mb-16">
            <ScrollReveal>
              <SectionHeading
                title="Nature & Hill Country Tours"
                subtitle="Experience breathtaking landscapes and tea plantations"
              />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {natureTours.map((tour, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <TourCard tour={tour} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* Wildlife Tours */}
        {wildlifeTours.length > 0 && (
          <section className="mb-16">
            <ScrollReveal>
              <SectionHeading
                title="Wildlife & Safari Tours"
                subtitle="Encounter leopards, elephants, and exotic birds"
              />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wildlifeTours.map((tour, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <TourCard tour={tour} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* Adventure Tours */}
        {adventureTours.length > 0 && (
          <section className="mb-16">
            <ScrollReveal>
              <SectionHeading
                title="Adventure Tours"
                subtitle="Thrilling experiences and marine adventures"
              />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {adventureTours.map((tour, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <TourCard tour={tour} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {/* Custom Tours CTA */}
        <section className="bg-white rounded-2xl p-12 text-center mt-16 shadow-md border border-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need a Custom Itinerary?
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            We specialize in personalized tours. Tell us your interests, budget,
            and duration – we'll create the perfect Sri Lankan adventure for
            you.
          </p>
          <a
            href={generateTourInquiryURL("Custom Tour Package")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 text-white px-8 py-4 rounded-lg hover:bg-emerald-600 transition font-bold shadow"
          >
            Request Custom Tour
          </a>
        </section>
      </div>
    </div>
  );
}
