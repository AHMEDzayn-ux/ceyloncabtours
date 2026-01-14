import { BookingFormData } from '@/types';

/**
 * WhatsApp URL Builder
 * Generates pre-filled WhatsApp URLs for booking inquiries
 */

export const WHATSAPP_NUMBERS = {
  colombo: '94771183257',
  badulla: '94771183257',
};

export function generateWhatsAppURL(
  data: BookingFormData,
  office: 'colombo' | 'badulla' = 'colombo'
): string {
  const phoneNumber = WHATSAPP_NUMBERS[office];

  let message = `*New Inquiry*\n\nName: ${data.name}\nPhone: ${data.phone}`;
  
  if (data.pickup) {
    message += `\nPickup: ${data.pickup}`;
  }
  
  if (data.destination) {
    message += `\nDestination: ${data.destination}`;
  }
  
  if (data.date) {
    message += `\nTravel Date: ${data.date}`;
  }
  
  if (data.passengers && data.passengers > 1) {
    message += `\nPassengers: ${data.passengers}`;
  }
  
  if (data.notes) {
    message += `\n\nDetails:\n${data.notes}`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function generateTourInquiryURL(
  tourTitle: string,
  userName?: string,
  office: 'colombo' | 'badulla' = 'colombo'
): string {
  const phoneNumber = WHATSAPP_NUMBERS[office];

  let message = `*Tour Inquiry*\n\nTour: ${tourTitle}`;
  
  if (userName) {
    message += `\nName: ${userName}`;
  }
  
  message += `\n\nI'm interested in learning more about this tour. Please provide details about availability, pricing, and itinerary.\n\nThank you!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function generateGeneralInquiryURL(
  message: string,
  office: 'colombo' | 'badulla' = 'colombo'
): string {
  const phoneNumber = WHATSAPP_NUMBERS[office];
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
