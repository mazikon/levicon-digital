export const WHATSAPP_NUMBER_DISPLAY = "0814 945 5870";
export const WHATSAPP_NUMBER_RAW = "2348149455870";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER_RAW}`;

export function buildWhatsAppLink(message) {
  if (!message) return WHATSAPP_BASE_URL;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
