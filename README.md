# Noor-e-Zahan Website

Premium cinematic marketing + legal site for **Noor-e-Zahan AI Beauty**.

## Path

`/Users/anmolgupta/Documents/Documents - Anmol’s MacBook Pro/Code/noorezahan-website`

## Run

```bash
cd "/Users/anmolgupta/Documents/Documents - Anmol’s MacBook Pro/Code/noorezahan-website"
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/features` | Features |
| `/about` | About |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/ai-photo-consent` | AI & Photo Consent |
| `/community` | Community Guidelines |
| `/support` | Support / FAQ |
| `/delete-account` | Delete Account |
| `*` | Branded 404 |

## Notes

- App Store / Play Store URLs are placeholders — confirm before launch.
- Legal `[TO CONFIRM]` markers must be filled by business/legal.
- Editorial images currently use Unsplash placeholders; replace with licensed brand photography.

## Production hosting (AWS EC2)

Live at **https://noor-e-jahan.in** (and `www`).

- Static build (`dist/`) is served by nginx on the same EC2 as the API.
- API / MongoDB production: **https://api.noor-e-jahan.in/v1** (DB `noorezahan-prod`).
- Build env: `.env.production` → `VITE_API_BASE_URL=https://api.noor-e-jahan.in/v1`
- Deploy flow: see backend doc `docs/AWS_PRODUCTION_DEPLOYMENT_FLOW.md` (website section).

```bash
npm run build
rsync -az --delete dist/ ec2-user@34.197.233.141:/var/www/noorezahan-website/
```

