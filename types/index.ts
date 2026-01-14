// =====================================================
// CORE TYPES
// =====================================================

export interface Tour {
  title: string;
  shortDescription: string;
  fullDescription?: string;
  seoTitle: string;
  seoDescription: string;
  featured: boolean;
  heroImage: string;
  category?: 'cultural' | 'nature' | 'adventure' | 'wildlife';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: number;
  features: string[];
  image: string;
  category: 'sedan' | 'suv' | 'van' | 'luxury';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'booking' | 'payment' | 'tours' | 'general';
}

// =====================================================
// DATABASE TYPES (Supabase)
// =====================================================

export interface GalleryImage {
  url: string;
  caption?: string;
  order: number;
}

export interface GalleryItem {
  id: string;
  tour_slug: string;
  tour_name: string;
  description: string | null;
  images: GalleryImage[];
  display_order: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  name: string;
  content: string;
  rating: number;
  location: string | null;
  approved: boolean;
  created_at: string;
  approved_at: string | null;
  approved_by: string | null;
}

// =====================================================
// FORM TYPES
// =====================================================

export interface BookingFormData {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  date: string;
  passengers: number;
  notes?: string;
  office?: 'colombo' | 'badulla';
}

export interface ReviewFormData {
  name: string;
  content: string;
  rating: number;
  location?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// =====================================================
// ADMIN TYPES
// =====================================================

export interface AdminGalleryFormData {
  tour_slug: string;
  tour_name: string;
  description: string;
  images: File[];
  is_featured: boolean;
  display_order: number;
}

export interface ImageUploadResult {
  url: string;
  error?: string;
}
