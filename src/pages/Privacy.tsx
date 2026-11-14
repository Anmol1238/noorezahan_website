import { LegalLayout, LegalSection } from "../components/LegalLayout";
import { SITE } from "../content/site";

const toc = [
  { id: "who", label: "Who We Are" },
  { id: "scope", label: "Scope" },
  { id: "collect", label: "Information We Collect" },
  { id: "use", label: "How We Use Information" },
  { id: "ai", label: "Photos, Faces & AI Processing" },
  { id: "providers", label: "Third-Party Services" },
  { id: "ads", label: "Advertising" },
  { id: "payments", label: "Payments & Subscriptions" },
  { id: "sharing", label: "When We Share Information" },
  { id: "retention", label: "Retention" },
  { id: "deletion", label: "Account & Data Deletion" },
  { id: "security", label: "Security" },
  { id: "transfers", label: "International Transfers" },
  { id: "children", label: "Children" },
  { id: "rights", label: "Your Rights" },
  { id: "website", label: "Website" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
];

export function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="25 August 2026"
      intro={`This Privacy Policy describes how ${SITE.legalEntity}, operating the ${SITE.name} apps and website (“Noor”, “we”, “us”), collects, uses, stores, and shares personal information. It is written to match our current iOS app, Android app, and production API as of the date above.`}
      toc={toc}
    >
      <LegalSection id="who" title="1. Who We Are">
        <p>
          <strong>Service:</strong> {SITE.fullName} (iOS and Android applications) and related public website pages at{" "}
          <a href="https://www.noor-e-jahan.in">noor-e-jahan.in</a>.
        </p>
        <p>
          <strong>Operator:</strong> {SITE.legalEntity}
        </p>
        <p>
          <strong>Privacy / support contact:</strong>{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
        <p>
          <strong>Stable Privacy Policy URL:</strong>{" "}
          <a href={SITE.urls.privacy}>{SITE.urls.privacy}</a>
        </p>
        <p className="note">
          Full registered office address for statutory filings: contact {SITE.email} if you need a postal address for a
          formal request. We will provide the current registered address on request.
        </p>
      </LegalSection>

      <LegalSection id="scope" title="2. Scope">
        <p>This policy covers:</p>
        <ul>
          <li>The Noor-e-Zahan mobile apps (iOS and Android)</li>
          <li>Our production API at {SITE.urls.api}</li>
          <li>This marketing and legal website</li>
        </ul>
        <p>
          It does not cover third-party websites, stores, or SDKs beyond how we use them to provide Noor. Those parties
          have their own policies.
        </p>
      </LegalSection>

      <LegalSection id="collect" title="3. Information We Collect">
        <h3>3.1 Account and profile</h3>
        <ul>
          <li>Email address, optional mobile number, username, full name</li>
          <li>Password (stored only as a secure hash on our servers; we do not store plaintext passwords)</li>
          <li>Optional gender and date of birth (used for eligibility and profile)</li>
          <li>Bio, avatar image, account reference photo, and related profile flags</li>
          <li>Authentication tokens (access/refresh) on device; refresh token hashes on our servers</li>
          <li>
            Sign-in via email/password, email OTP, Google, and/or Facebook where enabled. Apple Sign-In may be offered
            via our API where configured.
          </li>
        </ul>

        <h3>3.2 Photos and media you provide</h3>
        <ul>
          <li>Photos from camera or photo library for Beauty Scan, Create Look, Celebrity Look, wardrobe, posts, reels, and profile</li>
          <li>
            On-device face-region / identity-anchor crops we derive to help preserve likeness (uploaded with generate
            requests when that feature runs)
          </li>
          <li>AI-generated look images and related job metadata stored in your history</li>
        </ul>

        <h3>3.3 AI subject-consent data</h3>
        <ul>
          <li>Declarations that a photo is of you or of another person</li>
          <li>
            For third-party subjects (when required): relationship, name, mobile, purpose text, consent confirmations,
            optional OTP verification status, and a short-lived consent token
          </li>
          <li>Policy version identifier associated with that consent record</li>
        </ul>

        <h3>3.4 Device and technical data</h3>
        <ul>
          <li>App-generated device install identifier sent with API requests (`X-Device-Id`)</li>
          <li>Platform (iOS/Android), app version, and similar request metadata</li>
          <li>IP address and standard server/access logs on our hosting infrastructure</li>
        </ul>

        <h3>3.5 Purchases and wallet</h3>
        <ul>
          <li>
            In-app purchase and subscription validation data from Apple App Store or Google Play (for example product
            id, transaction identifiers, signed transaction / purchase token needed to unlock coins or subscriptions)
          </li>
          <li>Coin wallet balances and coin transaction ledger entries on our servers</li>
          <li>Subscription tier and expiry status on our servers</li>
        </ul>
        <p>We do not collect or store full payment card numbers. Card processing is handled by Apple or Google.</p>

        <h3>3.6 Advertising-related data</h3>
        <ul>
          <li>
            When ads are shown (for example rewarded ads for extra generations), Google Mobile Ads (AdMob) and Google’s
            User Messaging Platform (UMP) may collect device and advertising identifiers according to your OS settings
            and consent choices (including App Tracking Transparency on iOS where applicable)
          </li>
          <li>Ad reward events needed to credit in-app rewards on our backend</li>
        </ul>

        <h3>3.7 Support and safety</h3>
        <ul>
          <li>Messages you send to {SITE.email}</li>
          <li>In-app reports (reason, target, reporter identifiers) and admin email alerts for those reports</li>
        </ul>

        <h3>3.8 What we do not currently collect (in the shipped apps)</h3>
        <ul>
          <li>Precise GPS location</li>
          <li>Push notification device tokens (APNs/FCM) — in-app notification preferences may exist locally, but we do not operate push delivery in the current apps</li>
          <li>First-party product analytics SDKs such as Firebase Analytics, Mixpanel, or Amplitude</li>
          <li>Dedicated crash-reporting SDKs such as Firebase Crashlytics or Sentry</li>
        </ul>
      </LegalSection>

      <LegalSection id="use" title="4. How We Use Information">
        <ul>
          <li>Create and secure your account; authenticate sessions</li>
          <li>Provide Beauty Scan, Create Look, Celebrity Look, wardrobe, social, and related features</li>
          <li>Run face/quality checks and identity-preservation styling</li>
          <li>Enforce subject-consent rules for photos of people</li>
          <li>Manage coins, ad rewards, subscriptions, and entitlements</li>
          <li>Show ads and measure ad delivery via AdMob where enabled</li>
          <li>Prevent abuse, debug failures, and secure the service</li>
          <li>Respond to support and safety reports</li>
          <li>Comply with law and store policies</li>
        </ul>
        <p>
          <strong>Training:</strong> We do not use your photos to train our own machine-learning models. Images are sent
          to third-party AI providers solely to generate the results you request. Those providers process images under
          their own terms; we do not independently control whether a provider retains inputs for its own purposes beyond
          our contracts and their published policies (see Section 5).
        </p>
      </LegalSection>

      <LegalSection id="ai" title="5. Photos, Faces & AI Processing">
        <p>
          When you use Create Look, Celebrity Look, Beauty Scan, or similar features, your photos (and optional face /
          identity anchors) are uploaded to our API and cloud storage, then may be transmitted to AI image providers to
          produce styled results. Quality gates may reject blurry, multi-person, or low face-confidence photos.
        </p>
        <p>
          Generated looks and job status are typically stored so you can view history in the app. “Face locked” or similar
          UI means a usable face reference was detected — it does not guarantee perfect likeness every time.
        </p>
        <p>
          Providers we may use for image generation or virtual try-on (depending on configuration and feature path)
          include:
        </p>
        <ul>
          <li>
            <strong>Black Forest Labs (BFL / FLUX)</strong> — person and garment/reference images for generation or
            try-on
          </li>
          <li>
            <strong>OpenAI</strong> — image edit / generation APIs for certain paths (for example Advanced AI /
            celebrity flows when enabled)
          </li>
          <li>
            <strong>Hugging Face</strong> — hosted virtual try-on space when that path is enabled
          </li>
          <li>
            <strong>Replicate</strong> — hosted try-on / image models when that path is enabled
          </li>
        </ul>
        <p>
          Exact provider routing can vary by feature, subscription tier, and server configuration. Images are transmitted
          over HTTPS to our API and to these providers.
        </p>
      </LegalSection>

      <LegalSection id="providers" title="6. Third-Party Services">
        <p>
          We use service providers that process data on our behalf or as platform operators. Categories actually used by
          Noor today:
        </p>
        <ul>
          <li>
            <strong>Cloud hosting:</strong> Amazon Web Services (EC2 and related networking) for the production API and
            website
          </li>
          <li>
            <strong>Database:</strong> MongoDB Atlas for application data
          </li>
          <li>
            <strong>Cache:</strong> Redis (self-hosted on our API server in production)
          </li>
          <li>
            <strong>Object storage / CDN:</strong> Cloudflare R2 (S3-compatible) for uploaded and generated media
          </li>
          <li>
            <strong>Email delivery:</strong> Resend for OTPs, account-related mail, and admin report alerts
          </li>
          <li>
            <strong>AI inference:</strong> BFL, OpenAI, Hugging Face, and/or Replicate as described above
          </li>
          <li>
            <strong>Authentication helpers:</strong> Google Sign-In; Facebook Login (where enabled)
          </li>
          <li>
            <strong>Payments:</strong> Apple App Store / StoreKit; Google Play Billing
          </li>
          <li>
            <strong>Advertising:</strong> Google Mobile Ads (AdMob) and Google User Messaging Platform (UMP)
          </li>
        </ul>
        <p>
          We do not list analytics or crash SDKs we do not ship. If we add new processors, we will update this policy.
        </p>
      </LegalSection>

      <LegalSection id="ads" title="7. Advertising">
        <p>
          Noor may show rewarded, interstitial, or banner ads (Google AdMob). AdMob and related Google advertising
          components may use advertising identifiers and device signals for ad delivery, fraud prevention, and—where
          permitted by your consent and platform rules—personalized advertising.
        </p>
        <p>
          On iOS we request App Tracking Transparency permission where required. On Android and iOS we present consent
          messaging via Google UMP where applicable. You can also reset or limit ad tracking in your device settings.
        </p>
        <p>
          Facebook Login is configured so advertiser ID collection by the Facebook SDK is disabled in our iOS
          integration. Ads themselves are served by AdMob, not Facebook Audience Network, in the current apps.
        </p>
      </LegalSection>

      <LegalSection id="payments" title="8. Payments & Subscriptions">
        <p>
          Coin packs and subscriptions are purchased through Apple or Google. We receive validation payloads needed to
          credit coins or activate entitlements (transaction / product identifiers and signed purchase data). We store
          verification records and wallet/subscription state on our servers. Refunds and billing disputes are handled
          under Apple’s or Google’s store rules.
        </p>
      </LegalSection>

      <LegalSection id="sharing" title="9. When We Share Information">
        <ul>
          <li>With the processors listed in Section 6 to operate the service</li>
          <li>With Apple or Google for purchase validation</li>
          <li>With ad partners (AdMob) when ads are shown</li>
          <li>If required by law, regulation, or valid legal process</li>
          <li>To protect the safety, rights, or property of users or Noor</li>
          <li>In connection with a merger, acquisition, or asset transfer, subject to appropriate safeguards</li>
        </ul>
        <p>We do not sell your personal information for money.</p>
      </LegalSection>

      <LegalSection id="retention" title="10. Retention">
        <ul>
          <li>
            <strong>Active accounts:</strong> we retain profile, media references, AI history, wallet, and purchase
            records while your account remains active and as needed to provide the service.
          </li>
          <li>
            <strong>After account deletion:</strong> we anonymize your login identifiers and clear profile photo fields
            on the user record; we archive a snapshot of certain AI history for approximately{" "}
            <strong>90 days</strong> (configurable server minimum 30 days) for security, abuse investigation, and legal
            defense, then that archive is intended to be purged. Media objects in cloud storage may remain until deleted
            by our retention/cleanup processes or storage lifecycle rules.
          </li>
          <li>
            <strong>OTP codes:</strong> stored as hashes with short expiry (minutes).
          </li>
          <li>
            <strong>Server logs:</strong> retained according to our hosting and operational practices for security and
            debugging.
          </li>
          <li>
            <strong>Third-party AI providers:</strong> may retain technical logs or inputs under their own policies for
            limited periods — see their documentation.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="deletion" title="11. Account & Data Deletion">
        <p>
          If you create an account, you can delete it in the app: <strong>Settings → Delete Account</strong> (wording may
          vary slightly by platform). You may also request deletion by emailing {SITE.email} from your registered address
          or via our{" "}
          <a href={SITE.urls.deleteAccount}>Delete Account</a> page.
        </p>
        <p>When deletion succeeds on our API, we typically:</p>
        <ul>
          <li>Revoke refresh tokens</li>
          <li>Soft-delete posts/reels visibility</li>
          <li>Redact third-party subject contact fields where stored</li>
          <li>Anonymize the user record (email/username replaced; name, mobile, DOB, and profile image URLs cleared)</li>
          <li>Archive AI look/job/scan snapshots for the retention window above</li>
        </ul>
        <p>
          Some records (for example coin ledger rows, verified purchase receipts, or anonymized foreign keys) may remain
          in systems that must preserve integrity or meet financial/legal record-keeping. Cloud media files may not be
          immediately erased from every storage location. We do not claim instantaneous irreversible erasure from all
          backups or provider systems.
        </p>
      </LegalSection>

      <LegalSection id="security" title="12. Security">
        <p>We implement safeguards appropriate to our systems, including:</p>
        <ul>
          <li>HTTPS/TLS for the website and production API</li>
          <li>Password hashing for password-based accounts</li>
          <li>Hashed refresh tokens and short-lived access tokens</li>
          <li>Secrets kept in server environment configuration (not in client apps)</li>
          <li>Cloud database and object storage access controls</li>
          <li>Optional App Tracking Transparency and ad-consent flows on clients</li>
        </ul>
        <p>
          No method of transmission or storage is completely secure. We do not guarantee that unauthorized access can
          never occur.
        </p>
      </LegalSection>

      <LegalSection id="transfers" title="13. International Transfers">
        <p>
          Our production API and website are hosted in cloud regions that may differ from where you live (currently our
          primary compute is in AWS <strong>us-east-1</strong>). Database, storage, email, ads, auth, and AI providers may
          process data in the United States, India, the EU, or other regions where they operate. By using Noor you
          understand that your information may be transferred to and processed in these locations.
        </p>
      </LegalSection>

      <LegalSection id="children" title="14. Children">
        <p>
          Noor is not directed to children under <strong>13</strong>. Our signup flow requires a date of birth indicating
          you are at least 13. We do not knowingly collect personal information from children under 13. If you believe a
          child under 13 has created an account, contact {SITE.email} and we will take appropriate steps.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="15. Your Rights">
        <p>
          Depending on where you live (for example under GDPR, UK GDPR, CCPA/CPRA, or applicable Indian law), you may
          have rights to access, correct, delete, or export certain personal data, to object to or restrict certain
          processing, or to withdraw consent where processing is consent-based.
        </p>
        <p>
          To exercise these rights, email {SITE.email}. We may need to verify your identity. You may also delete your
          account in-app as described above. For advertising choices, use device settings and any on-screen consent
          options.
        </p>
      </LegalSection>

      <LegalSection id="website" title="16. Website">
        <p>
          The public website at noor-e-jahan.in is a static marketing and legal site. It does not require login. Contact
          and report forms on the website may be informational until connected to a backend; prefer emailing{" "}
          {SITE.email} for privacy requests. Essential hosting logs may record IP addresses when you visit.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="17. Changes">
        <p>
          We may update this Privacy Policy. We will change the “Last updated” date on this page and, where appropriate,
          provide notice in the app. Continued use after an update means you acknowledge the revised policy.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="18. Contact">
        <p>
          Privacy and data requests: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
        <p>
          Delete account help: <a href={SITE.urls.deleteAccount}>{SITE.urls.deleteAccount}</a>
        </p>
        <p>
          Support: <a href={SITE.urls.support}>{SITE.urls.support}</a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
