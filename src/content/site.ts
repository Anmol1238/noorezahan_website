export const SITE = {
  /** Brand wordmark in nav, footer, and logo areas */
  mark: "Noor-e-Zahan",
  name: "Noor-e-Zahan",
  fullName: "Noor-e-Zahan AI Beauty",
  studio: "Your AI beauty & style studio",
  promise: "Your Authentic Beauty, Elevated",
  supportLine: "Real Identity Preservation AI",
  philosophy: "Be Your Own Noor",
  secondary: "ONE LIGHT. EVERY SOUL.",
  email: "support@noor-e-jahan.in",
  /** Operating / developer entity used in store listings and legal pages */
  legalEntity: "Bushara And Anmol",
  developedBy: "Bushara & Anmol",
  year: 2026,
  appStoreUrl: "#download",
  playStoreUrl: "#download",
  urls: {
    privacy: "https://www.noor-e-jahan.in/privacy",
    terms: "https://www.noor-e-jahan.in/terms",
    deleteAccount: "https://www.noor-e-jahan.in/delete-account",
    /** Play / store “Delete data URL” — partial deletion without closing the account */
    deleteData: "https://www.noor-e-jahan.in/delete-account#keep-account",
    support: "https://www.noor-e-jahan.in/support",
    api: "https://api.noor-e-jahan.in",
  },
} as const;

export const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80",
  heroAlt: "Editorial portrait in soft cinematic light",
  styled:
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
  styledAlt: "Styled fashion look with warm editorial lighting",
  createLook:
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1400&q=80",
  beauty:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80",
  cinema1:
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80",
  cinema2:
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  cinema3:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
  cinema4:
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
  cinema5:
    "https://images.unsplash.com/photo-1534528741775-53994d69b58b?auto=format&fit=crop&w=900&q=80",
  wardrobe:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  social:
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=80",
  finalCta:
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=80",
  about:
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
} as const;

/** Noor-e-Zahan palette as normalized RGB 0–1 for WebGL */
export const NOOR_WEBGL = {
  purple: [0.38, 0.22, 0.58] as const,
  pink: [0.92, 0.42, 0.62] as const,
  gold: [0.79, 0.66, 0.36] as const,
  rose: [0.76, 0.55, 0.5] as const,
  champagne: [0.9, 0.83, 0.71] as const,
  noir: [0.04, 0.03, 0.07] as const,
};
