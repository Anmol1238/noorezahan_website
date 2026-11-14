# Privacy Compliance Audit — Noor-e-Zahan

**Audit date:** 25 August 2026  
**Policy URL:** https://www.noor-e-jahan.in/privacy  
**Sources of truth:** iOS (`BusharaFashionNativeIOS`), Android (`BusharaFashionNativeANDROID`), backend (`noorezahan-api`), live website.

---

## A. Current status

| Store | Status |
|-------|--------|
| **Apple App Store** | **NEEDS CHANGES** (policy + App Privacy answers ready; confirm registered address; ship app build with legal links) |
| **Google Play Store** | **NEEDS CHANGES** (policy + Data Safety answers ready; complete Play Console forms; ship app build with legal links) |

The public Privacy Policy at `/privacy` has been rewritten to match implemented behavior. Remaining store blockers are primarily Console declarations and optional hardening (S3 purge job, registered postal address).

---

## B. Privacy Policy issues (found → fixed or tracked)

| Issue | Risk | Required change | Priority | Status |
|-------|------|-----------------|----------|--------|
| Multiple `[TO CONFIRM]` placeholders (company, age, training, retention, regions) | Store rejection | Replace with code-backed statements | P0 | Fixed in policy |
| Vague “analytics / crash when enabled” | Over-disclosure / under-disclosure | Only list shipped SDKs | P0 | Fixed |
| Named AdMob generically without ATT/UMP | Incomplete ads disclosure | Describe AdMob + UMP + ATT | P0 | Fixed |
| AI providers unnamed | Incomplete sharing disclosure | List BFL, OpenAI, HF, Replicate as configured paths | P0 | Fixed |
| Deletion claims too absolute | Misleading | Document anonymize + 90-day archive + media may linger | P0 | Fixed |
| No in-app Privacy Policy URL | Apple/Google expect accessible policy | Add Settings links iOS + Android | P0 | Fixed in apps |
| Account deletion web page vague | User confusion | Align with API behavior | P1 | Fixed |
| Terms eligibility `[TO CONFIRM]` | Inconsistency with 13+ signup | Set 13+ | P1 | Fixed |
| Registered postal address missing | Formal GDPR/Indian requests | Provide on request / add when confirmed | P1 | Noted in policy |
| Archive “auto-purge” claimed in API docs but no cron found | Policy vs code | Policy says “intended to be purged”; code job still missing | P1 | Code follow-up |
| S3 objects not deleted on account delete | Incomplete erasure | Lifecycle/cleanup job | P1 | Code follow-up |
| Third-party SMS OTP stubbed (“wire SMS provider”) | Consent flow may not deliver OTP | Wire SMS or disable flag in prod | P1 | REQUIRES VERIFICATION |
| Export Data UI stub | Accessibility rights incomplete | Wire export API or remove claim | P2 | Not claimed as live export in policy |

---

## C. Required / recommended code changes

### Done in this pass
1. Rewrote website `Privacy.tsx` + delete-account + Terms age.
2. iOS Settings → Privacy: links to Privacy / Terms / Delete Account web.
3. Android Settings → Help & Privacy screens: same links.

### Recommended (do not break features)
1. **Backend:** implement scheduled purge of `UserDeletionArchive` after `USER_DELETION_RETENTION_DAYS` and optional R2 object cleanup for deleted users.
2. **Backend:** either wire a real SMS provider for third-party subject OTP or set `REQUIRE_THIRD_PARTY_SUBJECT_OTP=false` in production until ready.
3. **Apps:** deep-link Subject Consent “Privacy policy version” label to `https://www.noor-e-jahan.in/privacy`.
4. **Android Manifest:** add `api.noor-e-jahan.in` to password-reset intent hosts if production reset links use that host.
5. **Confirm** registered company address for Play/Apple developer identity.

---

## D. App Store Connect → App Privacy (declare from code)

Use these as the baseline. Adjust only if a future build adds SDKs.

| Apple Data Type | Collected? | Linked to User? | Used for Tracking? | Purposes |
|-----------------|------------|-----------------|--------------------|----------|
| Contact Info — Email | Yes | Yes | No | App Functionality, Account Management |
| Contact Info — Phone Number | Yes (optional / third-party subject) | Yes | No | App Functionality |
| Contact Info — Name | Yes | Yes | No | App Functionality |
| User Content — Photos or Videos | Yes | Yes | No | App Functionality |
| User Content — Other User Content | Yes (posts/reels/bio) | Yes | No | App Functionality |
| Identifiers — User ID | Yes | Yes | No | App Functionality |
| Identifiers — Device ID | Yes (app install UUID) | Yes | No | App Functionality |
| Identifiers — Advertising Data | Yes (via AdMob when ads run) | Often Yes (via ads account) | **Yes if ATT authorized / personalized ads** | Third-Party Advertising |
| Purchases | Yes (IAP validation / coins / subs) | Yes | No | App Functionality |
| Usage Data — Product Interaction | Limited (ad reward / generation metadata on our API) | Yes | No | App Functionality |
| Diagnostics | No first-party crash SDK | — | — | Do not declare Crash Data unless Crashlytics added |
| Location | No | — | — | Do not declare |
| Sensitive Info — Other (face imagery for AI) | Treat photos/face processing under Photos / User Content; disclose AI processing in privacy policy (done) | Yes | No | App Functionality |

**Privacy Policy URL (ASC):** `https://www.noor-e-jahan.in/privacy`  
**Tracking:** Answer based on AdMob + ATT; if you only serve non-personalized ads and never use data for cross-app tracking, align AdMob settings and ASC “Used for Tracking” accordingly—**REQUIRES VERIFICATION** of live AdMob personalization settings.

---

## E. Google Play → Data Safety

| Data category | Collected? | Shared? | Purpose | Required declaration notes |
|---------------|------------|---------|---------|----------------------------|
| Personal info — Name | Yes | No* | App functionality | *Shared with processors only as service providers |
| Personal info — Email | Yes | Yes (Resend) | Account | |
| Personal info — User IDs | Yes | No* | App functionality | |
| Personal info — Phone | Yes (optional) | Possibly SMS if enabled | App functionality | Flag SMS when live |
| Photos and videos | Yes | Yes (AI providers, R2) | App functionality | |
| App activity / in-app actions | Yes (generation/ad reward) | No* | App functionality | |
| App info and performance — Crash logs | No dedicated SDK | — | — | Don’t claim unless added |
| Device or other IDs | Yes (install ID + Ad ID via AdMob) | Yes (AdMob) | App functionality; Advertising | Declare Advertising ID |
| Financial info — Purchase history | Yes (server validation) | Yes (Play Billing) | App functionality | |
| Location | No | — | — | |
| Approximate location via IP in logs | Possible | Hosting | Security | Optional “Other” / approx |

**Data deletion:** Yes — in-app delete + web/email.  
**Privacy policy URL:** `https://www.noor-e-jahan.in/privacy`  
**Encryption in transit:** Yes (HTTPS).  
**Encryption at rest:** MongoDB Atlas / R2 provide provider-managed encryption — declare per Google’s wording if you enable “encryption at rest” only when accurate for your Atlas/R2 settings (**REQUIRES VERIFICATION** of Atlas encryption toggles).

---

## F. Final Privacy Policy

Published at: **https://www.noor-e-jahan.in/privacy**  
Source: `noorezahan-website/src/pages/Privacy.tsx` (deployed static site).

---

## Third parties (verified in code)

| Party | Data | Why | Stored by them? |
|-------|------|-----|-----------------|
| AWS EC2 | API traffic, logs | Host API + website | Ops logs — period REQUIRES VERIFICATION |
| MongoDB Atlas | Account, AI metadata, wallet, etc. | Primary DB | Yes |
| Redis (self-hosted) | Cache/session helpers | Performance | Ephemeral |
| Cloudflare R2 | Uploaded/generated media | Storage/CDN | Yes until deleted |
| Resend | Email, OTP, report alerts | Transactional email | Per Resend policy |
| BFL / OpenAI / HF / Replicate | Images + prompts | Generate looks | Provider policy — REQUIRES VERIFICATION |
| Google Sign-In | OAuth tokens verified server-side | Auth | Google account |
| Facebook Login | Access token verified | Auth | Facebook account |
| Apple / Google Play | Purchase tokens | IAP | Store + our `IapReceipt` |
| Google AdMob + UMP | Ad / device / consent | Ads | Per Google ads policies |

---

## Tracking / analytics note

No Firebase Analytics, Mixpanel, Amplitude, Crashlytics, or Sentry in current iOS/Android dependency graphs. Do **not** declare those until added.
