import { Vehicle } from '@/types';

/**
 * Static Fleet Data
 * All vehicle information defined here
 */

export const fleet: Vehicle[] = [
  {
    id: 'toyota-axio',
    name: 'Toyota Axio',
    type: 'Sedan',
    capacity: 3,
    features: [
      'Air conditioning',
      'Comfortable seating',
      'Fuel efficient',
      'Perfect for couples',
      'City & highway suitable',
      'Professional driver'
    ],
    image: '/images/fleet/toyota-axio.jpg',
    category: 'sedan'
  },
  {
    id: 'suzuki-wagon-r',
    name: 'Suzuki Wagon R',
    type: 'Compact Car',
    capacity: 3,
    features: [
      'Air conditioning',
      'Economical choice',
      'City-friendly',
      'Smooth ride',
      'Luggage space',
      'Budget-friendly'
    ],
    image: '/images/fleet/wagon-r.jpg',
    category: 'sedan'
  },
  {
    id: 'toyota-kdh-van',
    name: 'Toyota KDH Van',
    type: 'Van',
    capacity: 10,
    features: [
      'Spacious interior',
      'Air conditioning',
      'Group travel',
      'Ample luggage space',
      'Reclining seats',
      'Ideal for families'
    ],
    image: '/images/fleet/kdh-van.jpg',
    category: 'van'
  },
  {
    id: 'toyota-hiace',
    name: 'Toyota Hiace',
    type: 'Mini Bus',
    capacity: 14,
    features: [
      'Extra spacious',
      'Air conditioning',
      'Corporate groups',
      'Comfortable seats',
      'Large luggage capacity',
      'Entertainment system'
    ],
    image: '/images/fleet/hiace.jpg',
    category: 'van'
  },
  {
    id: 'toyota-prius',
    name: 'Toyota Prius',
    type: 'Hybrid Sedan',
    capacity: 3,
    features: [
      'Eco-friendly hybrid',
      'Premium comfort',
      'Silent operation',
      'Fuel efficient',
      'Modern features',
      'Luxury experience'
    ],
    image: '/images/fleet/prius.jpg',
    category: 'luxury'
  },
  {
    id: 'nissan-caravan',
    name: 'Nissan Caravan',
    type: 'Van',
    capacity: 8,
    features: [
      'Comfortable seating',
      'Air conditioning',
      'Family-friendly',
      'Good luggage space',
      'Smooth ride',
      'Reliable performance'
    ],
    image: '/images/fleet/caravan.jpg',
    category: 'van'
  },
];

/**
 * Get vehicle by ID
 */
export function getVehicleById(id: string): Vehicle | undefined {
  return fleet.find((vehicle) => vehicle.id === id);
}

/**
 * Get vehicles by category
 */
export function getVehiclesByCategory(category: Vehicle['category']): Vehicle[] {
  return fleet.filter((vehicle) => vehicle.category === category);
}
