/** Production / marketing site public config (no secrets). */
export const API = {
  /** Nest production API — apps & future website forms use this. DB: MongoDB `noorezahan-prod`. */
  baseUrl: (import.meta.env.VITE_API_BASE_URL as string | undefined)?.replace(/\/$/, "") ||
    "https://api.noor-e-jahan.in/v1",
  origin: (import.meta.env.VITE_API_ORIGIN as string | undefined)?.replace(/\/$/, "") ||
    "https://api.noor-e-jahan.in",
} as const;
