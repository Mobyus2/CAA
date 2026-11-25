export const CONTACT_EMAIL = "contact@cap-adpa.com";
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";
// Lien Calendly / Cal.com à renseigner dans .env.local : NEXT_PUBLIC_BOOKING_URL
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Demande de rendez-vous")}`;

export const navItems = [
  { label: "Le cabinet", href: "/#about" },
  { label: "Expertises", href: "/#services" },
  { label: "Pourquoi nous", href: "/#why" },
  { label: "Équipe", href: "/#team" },
  { label: "Contact", href: "/#contact" },
];
