import { LegalLayout, LegalSection } from "../components/LegalLayout";
import { SITE } from "../content/site";

const toc = [
  { id: "acceptance", label: "Acceptance" },
  { id: "eligibility", label: "Eligibility" },
  { id: "account", label: "Account Responsibilities" },
  { id: "usage", label: "Service Usage" },
  { id: "ai", label: "AI-Generated Results" },
  { id: "content", label: "User Content" },
  { id: "consent", label: "Identity & Photo Consent" },
  { id: "prohibited", label: "Prohibited Uses" },
  { id: "abuse", label: "Deepfake / Abuse" },
  { id: "coins", label: "Coins & Virtual Currency" },
  { id: "ads", label: "Ads" },
  { id: "iap", label: "Subscriptions & IAP" },
  { id: "refunds", label: "Refunds" },
  { id: "ip", label: "Intellectual Property" },
  { id: "third", label: "Third-Party Services" },
  { id: "termination", label: "Termination" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "law", label: "Governing Law" },
  { id: "contact", label: "Contact" },
];

export function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      updated="21 August 2026"
      intro="These Terms govern your use of Noor-e-Zahan apps and related websites. Please read them carefully."
      toc={toc}
    >
      <LegalSection id="acceptance" title="1. Acceptance">
        <p>By creating an account or using Noor, you agree to these Terms and our Privacy Policy.</p>
      </LegalSection>
      <LegalSection id="eligibility" title="2. Eligibility">
        <p>
          You must be at least <strong>13 years old</strong> to create an account. By using Noor you represent that you
          meet this requirement and can form a binding contract where applicable.
        </p>
      </LegalSection>
      <LegalSection id="account" title="3. Account Responsibilities">
        <p>
          You are responsible for accurate account information, safeguarding login credentials, and activity under your
          account.
        </p>
      </LegalSection>
      <LegalSection id="usage" title="4. Service Usage">
        <p>
          We grant you a limited, non-exclusive, non-transferable license to use Noor for personal, non-commercial
          enjoyment unless otherwise agreed in writing.
        </p>
      </LegalSection>
      <LegalSection id="ai" title="5. AI-Generated Results">
        <p>
          AI-generated outputs may vary. Noor does not guarantee perfect likeness, garment fit, style accuracy, or
          commercial usability of generated images. Results are for creative exploration and are not professional beauty
          or medical advice.
        </p>
      </LegalSection>
      <LegalSection id="content" title="6. User Content">
        <p>
          You retain rights to content you upload. You grant Noor a license to host, process, and display that content as
          needed to operate the service (including sending images to AI providers for generation).
        </p>
      </LegalSection>
      <LegalSection id="consent" title="7. Identity & Photo Consent">
        <p>
          Upload only photos you have the right to use. For third-party subjects, obtain required consent. Misuse may
          lead to account action. See also our AI & Photo Consent page.
        </p>
      </LegalSection>
      <LegalSection id="prohibited" title="8. Prohibited Uses">
        <ul>
          <li>Illegal activity, harassment, hate, threats, or exploitation</li>
          <li>Uploading others&apos; images without rights/consent</li>
          <li>Scraping, reverse engineering, or abusing the service</li>
          <li>Attempting to bypass quotas, payments, or security controls</li>
        </ul>
      </LegalSection>
      <LegalSection id="abuse" title="9. Deepfake / Abuse Restrictions">
        <p>
          Non-consensual intimate imagery, deceptive impersonation, and malicious deepfake use are prohibited and may be
          reported to authorities where appropriate.
        </p>
      </LegalSection>
      <LegalSection id="coins" title="10. Coins & Virtual Currency">
        <p>
          Coins and similar virtual items have no cash value outside the app, are non-transferable, and may be modified
          as described in-app.
        </p>
      </LegalSection>
      <LegalSection id="ads" title="11. Ads">
        <p>Rewarded ads may unlock additional generations subject to daily limits and partner availability.</p>
      </LegalSection>
      <LegalSection id="iap" title="12. Subscriptions & IAP">
        <p>
          Subscriptions and purchases are billed by Apple or Google under their terms. Features unlocked depend on your
          active entitlements.
        </p>
      </LegalSection>
      <LegalSection id="refunds" title="13. Refunds">
        <p>Refund requests are handled according to Apple App Store and Google Play policies.</p>
      </LegalSection>
      <LegalSection id="ip" title="14. Intellectual Property">
        <p>
          Noor branding, UI, catalog assets, and software are owned by us or our licensors. Cinema/celebrity-inspired
          content is inspirational unless otherwise licensed.
        </p>
      </LegalSection>
      <LegalSection id="third" title="15. Third-Party Services">
        <p>Third-party services (sign-in, ads, AI providers, payments) are governed by their own terms.</p>
      </LegalSection>
      <LegalSection id="termination" title="16. Termination">
        <p>We may suspend or terminate accounts that violate these Terms or create risk for users or the platform.</p>
      </LegalSection>
      <LegalSection id="disclaimers" title="17. Disclaimers">
        <p>The service is provided “as is” without warranties of uninterrupted or error-free operation.</p>
      </LegalSection>
      <LegalSection id="liability" title="18. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Noor is not liable for indirect or consequential damages arising from
          use of the service or AI outputs.
        </p>
      </LegalSection>
      <LegalSection id="law" title="19. Governing Law">
        <p className="note">
          Governing law / jurisdiction: <strong>[TO CONFIRM]</strong>.
        </p>
      </LegalSection>
      <LegalSection id="contact" title="20. Contact">
        <p>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
