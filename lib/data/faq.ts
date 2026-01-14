import { FAQItem } from '@/types';

/**
 * Static FAQ Data
 */

export const faqs: FAQItem[] = [
  {
    question: 'How do I book a cab?',
    answer: 'Booking a cab with us is quick and convenient. You can place a booking through our website or contact us directly. Simply provide your pickup location, destination, travel date, and preferred vehicle, and our team will confirm your ride promptly.',
    category: 'booking'
  },
  {
    question: 'What are your operating hours?',
    answer: 'We operate 24 hours a day, 7 days a week, including weekends and public holidays. Our cab service is available whenever you need reliable transportation.',
    category: 'general'
  },
  {
    question: 'Do you provide airport transfer services in Sri Lanka?',
    answer: 'Yes, we offer professional airport pickup and drop-off services to and from Bandaranaike International Airport and other major locations. Our drivers ensure timely arrivals and smooth transfers.',
    category: 'booking'
  },
  {
    question: 'How much does a cab service cost?',
    answer: 'Cab fares depend on distance, travel duration, and vehicle type. We follow transparent pricing policies, with no hidden charges. Final pricing details are shared clearly before confirmation.',
    category: 'payment'
  },
  {
    question: 'Can I rent a cab for multiple days?',
    answer: 'Yes. We provide multi-day cab rentals and long-distance travel services, ideal for tours, business trips, and family vacations across Sri Lanka.',
    category: 'tours'
  },
  {
    question: 'Are your drivers experienced and licensed?',
    answer: 'Absolutely. All our drivers are licensed, professionally trained, and experienced, with excellent knowledge of Sri Lankan roads and tourist destinations. Customer safety and comfort are our top priorities.',
    category: 'general'
  },
  {
    question: 'What types of vehicles are available?',
    answer: 'Our fleet includes sedans, SUVs, vans, and luxury vehicles, suitable for solo travelers, families, groups, and corporate travel. All vehicles are clean, comfortable, and well-maintained.',
    category: 'general'
  },
  {
    question: 'Do you offer tour packages in Sri Lanka?',
    answer: 'Yes. We offer customizable tour services covering popular destinations such as Ella, Kandy, Sigiriya, Galle, and more. Tours can be tailored to your schedule and interests.',
    category: 'tours'
  },
  {
    question: 'Is advance booking required?',
    answer: 'Advance booking is recommended to ensure availability, especially during peak travel seasons. However, we also accommodate last-minute bookings whenever possible.',
    category: 'booking'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We follow a customer-friendly cancellation policy. Early cancellations are generally free of charge. Please contact us for detailed cancellation terms.',
    category: 'booking'
  },
  {
    question: 'Do you provide child seats?',
    answer: 'Yes, child safety seats are available upon request. Kindly inform us during booking so we can arrange them in advance.',
    category: 'general'
  },
  {
    question: 'Are your vehicles insured and safe?',
    answer: 'Yes. All our vehicles are fully insured, regularly serviced, and safety-checked, ensuring a secure and worry-free travel experience.',
    category: 'general'
  },
  {
    question: 'Why choose your cab service?',
    answer: 'We provide reliable, safe, and professional cab services in Sri Lanka, with experienced drivers, flexible bookings, transparent pricing, and excellent customer support.',
    category: 'general'
  },
];

/**
 * Get FAQs by category
 */
export function getFAQsByCategory(category: FAQItem['category']): FAQItem[] {
  return faqs.filter((faq) => faq.category === category);
}

/**
 * Get all FAQ categories
 */
export function getFAQCategories(): FAQItem['category'][] {
  return ['booking', 'payment', 'tours', 'general'];
}
