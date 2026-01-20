import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact YasiruCeylonTours for inquiries, bookings, or support. Visit our offices in Kandy and Badulla. Available 24/7 via phone and WhatsApp.",
  keywords: [
    "contact Yasiru Ceylon Tours",
    "cab booking Sri Lanka",
    "taxi inquiry Sri Lanka",
    "Yasiru Ceylon Tours phone",
    "Yasiru Ceylon Tours WhatsApp",
    "Kandy office",
    "Badulla office",
  ],
  openGraph: {
    title: "Contact Us | YasiruCeylonTours",
    description:
      "Get in touch with YasiruCeylonTours. 24/7 service across Sri Lanka.",
    type: "website",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
