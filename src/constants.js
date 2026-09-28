export const WHATSAPP_NUMBER_DISPLAY = "0814 945 5870";
export const WHATSAPP_NUMBER_RAW = "2348149455870";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER_RAW}`;

/**
 * Pre-filled message copy for each enquiry type. Encoded into a wa.me URL by
 * buildWhatsAppLink, so these stay readable here and URL-safe on the wire.
 */
export const WHATSAPP_MESSAGES = {
  general:
    "Hello LEVICON DIGITAL, I'd like to know more about your Business Online Setup service.",
  websiteSetup:
    "Hello LEVICON DIGITAL, I'm interested in your business website setup service.",
  googleBusinessProfile:
    "Hello LEVICON DIGITAL, I'd like help with my Google Business Profile.",
  whatsappBusiness:
    "Hello LEVICON DIGITAL, I'd like help setting up my WhatsApp Business.",
  businessOnlineSetup:
    "Hello LEVICON DIGITAL, I'm interested in the Business Online Setup package.",
};

export function buildWhatsAppLink(message) {
  if (!message) return WHATSAPP_BASE_URL;
  /* encodeURIComponent leaves ' ( ) unescaped, so the message is still a legal
     URL, but the apostrophes in this copy come out raw. Escape them too so the
     link matches the canonical wa.me form byte for byte. */
  const encoded = encodeURIComponent(message)
    .replace(/'/g, "%27")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29");
  return `${WHATSAPP_BASE_URL}?text=${encoded}`;
}

export const WHATSAPP_GENERAL_URL = buildWhatsAppLink(WHATSAPP_MESSAGES.general);
export const WHATSAPP_WEBSITE_SETUP_URL = buildWhatsAppLink(
  WHATSAPP_MESSAGES.websiteSetup
);
export const WHATSAPP_GOOGLE_PROFILE_URL = buildWhatsAppLink(
  WHATSAPP_MESSAGES.googleBusinessProfile
);
export const WHATSAPP_BUSINESS_URL = buildWhatsAppLink(
  WHATSAPP_MESSAGES.whatsappBusiness
);
export const WHATSAPP_PACKAGE_URL = buildWhatsAppLink(
  WHATSAPP_MESSAGES.businessOnlineSetup
);
