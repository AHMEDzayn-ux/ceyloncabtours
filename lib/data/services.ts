import { Service } from '@/types';

/**
 * Static Service Data
 * All services are defined here - no database needed
 */

export const services: Service[] = [
  {
    id: 'airport-transfers',
    title: 'Airport Transfers',
    description: 'Reliable and comfortable airport pickup and drop-off services. Meet & greet service with professional drivers.',
    icon: '✈️',
    features: [
      'Flight monitoring',
      'Meet & greet service',
      'Fixed pricing',
      '24/7 availability',
      'All major airports covered',
      'Professional drivers'
    ]
  },
  {
    id: 'city-rides',
    title: 'City Rides',
    description: 'Convenient transportation within Colombo, Kandy, Galle, and other major cities across Sri Lanka.',
    icon: '🚗',
    features: [
      'Hourly or daily rental',
      'Local expert drivers',
      'Comfortable vehicles',
      'Flexible scheduling',
      'Business & leisure trips',
      'Multiple stops allowed'
    ]
  },
  {
    id: 'tour-packages',
    title: 'Custom Tour Packages',
    description: 'Fully customized multi-day tours covering cultural sites, wildlife, beaches, and hill country destinations.',
    icon: '🗺️',
    features: [
      'Personalized itineraries',
      'Experienced tour guides',
      'Flexible duration (1-14 days)',
      'All inclusive options',
      'Hotel recommendations',
      'Photography stops'
    ]
  },
  {
    id: 'group-travel',
    title: 'Group Travel',
    description: 'Spacious vans and vehicles for family trips, corporate events, and group tours with professional drivers.',
    icon: '👥',
    features: [
      'Mini vans & buses',
      'Capacity up to 14 passengers',
      'Corporate events',
      'Family vacations',
      'Wedding transportation',
      'Conference shuttles'
    ]
  },
];

/**
 * Get service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
