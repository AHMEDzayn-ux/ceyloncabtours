import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact Ceylon Cabs for inquiries, bookings, or support. Visit our offices in Colombo, Kandy, or Galle. Available 24/7 via phone and WhatsApp.",
  keywords: [
    "contact Ceylon Cabs",
    "cab booking Sri Lanka",
    "taxi inquiry Sri Lanka",
    "Ceylon Cabs phone",
    "Ceylon Cabs WhatsApp",
    "Colombo office",
    "Kandy office",
    "Galle office",
  ],
  openGraph: {
    title: "Contact Us | Ceylon Cabs",
    description:
      "Get in touch with Ceylon Cabs. 24/7 service across Sri Lanka.",
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
