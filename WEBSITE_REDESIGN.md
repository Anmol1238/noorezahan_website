# Noor-e-Zahan Website — Redesign Implementation Notes

**Project path:** `/Users/anmolgupta/Documents/Documents - Anmol’s MacBook Pro/Code/noorezahan-website`  
**Last updated:** 22 August 2026

---

## Purpose

This document records the **cinematic redesign** of the official **Noor-e-Zahan AI Beauty** marketing and legal website. The black-hole WebGL hero is used as a **visual engine** (light, identity, transformation) — **not** as a space/astronomy theme.

---

## Brand naming rule

| Context | Use |
|---------|-----|
| Product copy, legal, CTAs, SEO | **Noor-e-Zahan** |
| Visual wordmark in nav/footer | **NOOR** (brand mark only) |
| Full descriptor | **Noor-e-Zahan AI Beauty** |

Avoid casual “Noor” as the product name in body copy.

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) + legacy section CSS |
| Motion | `motion` (Motion library) |
| Icons | `lucide-react` |
| Hero visual | WebGL shader (`blackhole-hero-section.tsx`) |

**Note:** shadcn/ui is not fully initialized; UI components live under `src/components/ui/` following shadcn-style patterns (`cn()` helper in `src/lib/utils.ts`).

---

## Key components

| File | Role |
|------|------|
| `components/ui/blackhole-hero-section.tsx` | WebGL hero — Noor palette, reduced motion + fallback |
| `components/ui/cinematic-hero.tsx` | Hero layout (copy left, visual right) |
| `components/ui/noor-navbar.tsx` | Sticky nav + mobile drawer |
| `components/ui/noor-footer.tsx` | Footer with legal/support links |
| `components/ui/noor-button.tsx` | Primary/secondary CTAs |
| `components/ui/app-store-buttons.tsx` | App Store / Play placeholders |

---

## Black-hole hero behavior

- **Colors:** velvet purple, rose pink, cinematic gold (not orange sci-fi)
- **Performance:** lower steps/DPR on mobile; pauses when off-screen or tab hidden
- **Accessibility:** `prefers-reduced-motion` → static CSS gradient fallback
- **Fallback:** WebGL unavailable / context lost → same gradient fallback
- **Labels:** STYLE · IDENTITY · LIGHT (editorial, not HUD)

---

## Routes

| Path | Page |
|------|------|
| `/` | Home (black-hole hero + product sections) |
| `/features` | Features |
| `/about` | About |
| `/contact` | Contact Us form |
| `/support` | FAQ + contact |
| `/report` | Report a Problem |
| `/report?type=content` | Report Content (pre-selected) |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/ai-photo-consent` | AI & Photo Consent |
| `/community` | Community Guidelines |
| `/delete-account` | Delete Account |
| `*` | 404 — “This light doesn't exist.” |

---

## Homepage order

1. Navigation  
2. Cinematic black-hole hero  
3. Brand statement — *Be Your Own Noor.*  
4. Product introduction / studio grid  
5. Create Look  
6. Identity preservation  
7. **Your Noor** before/after slider  
8. Beauty Scan  
9. Cinema / celebrity gallery  
10. Wardrobe  
11. Social  
12. How It Works  
13. App showcase  
14. Privacy / trust  
15. Monetization note  
16. Contact strip  
17. Final download CTA  
18. Footer  

---

## Legal & product accuracy

Do **not** invent:

- Legal company name / address  
- Governing jurisdiction  
- AI training policy  
- Retention periods  
- Minimum age  
- App Store / Play Store production URLs  

Mark as **[TO CONFIRM]** in legal pages until supplied.

Do **not** claim:

- 100% identical face  
- Perfect/guaranteed results  
- Medical/diagnostic beauty analysis  

Prefer: **identity-preserving AI styling**, **designed to keep your face recognizable**, **AI-generated results may vary**.

---

## Run locally

```bash
cd "/Users/anmolgupta/Documents/Documents - Anmol’s MacBook Pro/Code/noorezahan-website"
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

---

## Before launch checklist

- [ ] Replace Unsplash placeholders with licensed brand photography  
- [ ] Confirm App Store + Google Play URLs  
- [ ] Legal review of Privacy / Terms / AI consent  
- [ ] Fill all `[TO CONFIRM]` placeholders  
- [ ] Wire contact/report forms to backend or email service  
- [ ] Add canonical domain + OG image asset  
- [ ] Test WebGL hero on low-end Android devices  

---

## Related docs

- `WEBSITE_AND_LEGAL_CONTEXT.md` (iOS repo root) — product + legal briefing  
- `README.md` — quick start for this website repo  

---

**Noor-e-Zahan AI Beauty** · *Your Authentic Beauty, Elevated.* · *Be Your Own Noor.*
