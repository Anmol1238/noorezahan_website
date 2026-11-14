import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { SITE } from "../content/site";
import "./SimplePages.css";

export function AiConsentPage() {
  return (
    <div className="simple">
      <div className="container simple__hero">
        <p className="eyebrow">AI & Photo Consent</p>
        <h1 className="display display-lg">Before You Create, Know What Happens to Your Photo.</h1>
        <p className="lede">
          A clear look at how Create Look uses your image — written for people, not lawyers.
        </p>
      </div>

      <div className="container">
        <Reveal>
          <ol className="consent-flow">
            <li>Your Photo</li>
            <li>Face / Image Quality Check</li>
            <li>Identity Reference</li>
            <li>AI Styling</li>
            <li>Generated Look</li>
          </ol>
        </Reveal>

        <div className="simple__grid">
          <Reveal className="simple__card">
            <h2>What is uploaded</h2>
            <p>
              Your person photo (and related outfit/style images you choose). We may also create and upload a cropped
              face region as an identity reference.
            </p>
          </Reveal>
          <Reveal className="simple__card">
            <h2>Why face-anchor processing</h2>
            <p>
              It helps styling stay centered on your real face. Quality gates may block photos that are too blurry,
              multi-person, or low confidence.
            </p>
          </Reveal>
          <Reveal className="simple__card">
            <h2>Identity preservation</h2>
            <p>
              Designed to keep your face and identity recognizable. Results can still vary — we do not claim perfect
              likeness every time.
            </p>
          </Reveal>
          <Reveal className="simple__card">
            <h2>Generated image storage</h2>
            <p>Looks may appear in your history so you can revisit, save, or share them (where enabled).</p>
          </Reveal>
        </div>

        <Reveal className="callout">
          <h2>Uploading someone else&apos;s photo?</h2>
          <p>
            You must have the necessary rights and consent. Third-party flows may ask for subject details and, when
            enabled, SMS OTP verification. Misuse can result in account action.
          </p>
        </Reveal>

        <Reveal className="simple__actions">
          <Button to="/privacy">Read Privacy Policy</Button>
          <Button to="/delete-account" variant="secondary">
            Account Deletion
          </Button>
          <a className="text-link" href={`mailto:${SITE.email}`}>
            Contact {SITE.email}
          </a>
        </Reveal>
      </div>
    </div>
  );
}

export function CommunityPage() {
  return (
    <div className="simple">
      <div className="container simple__hero">
        <p className="eyebrow">Community</p>
        <h1 className="display display-lg">Create beautifully. Share responsibly.</h1>
        <p className="lede">Guidelines for social features on Noor — when feed, posts, and profiles are available.</p>
      </div>
      <div className="container simple__grid">
        {[
          "Harassment or bullying",
          "Non-consensual image manipulation",
          "Sexual exploitation",
          "Impersonation",
          "Deepfake abuse",
          "Illegal content",
          "Hate or threats",
          "Spam or scraping",
          "Copyright infringement",
        ].map((item) => (
          <div key={item} className="simple__card">
            <h2>Not allowed</h2>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="container simple__actions">
        <Button href={`mailto:${SITE.email}?subject=Report%20a%20Problem`}>Report a Problem</Button>
        <Button to="/report" variant="secondary">
          Submit report form
        </Button>
      </div>
    </div>
  );
}

export function DeleteAccountPage() {
  return (
    <div className="simple">
      <div className="container simple__hero">
        <p className="eyebrow">{SITE.name} · {SITE.legalEntity}</p>
        <h1 className="display display-lg">Request data deletion</h1>
        <p className="lede">
          How to delete some or all of your {SITE.name} data — including options that keep your account open.
        </p>
      </div>
      <div className="container simple__prose">
        <h2 id="keep-account">1. Delete some data (keep your account)</h2>
        <p>
          You can ask us to delete specific personal data while continuing to use {SITE.name}. This does{" "}
          <strong>not</strong> require deleting your account.
        </p>
        <ol>
          <li>
            Email <a href={`mailto:${SITE.email}?subject=Request%20data%20deletion`}>{SITE.email}</a> from your
            registered address.
          </li>
          <li>
            Use subject line: <strong>Request data deletion</strong>.
          </li>
          <li>
            Include your username or signup email/mobile, and which data you want removed (for example: profile photos,
            face/body references, AI look history, posts/reels, wardrobe items, or “all personal data except what is
            required to keep my account working”).
          </li>
          <li>We may verify your identity before acting on the request.</li>
        </ol>
        <p>
          <strong>Typically deleted on request (where technically feasible):</strong> profile photos and related image
          URLs, AI look / scan history tied to your account, posts and reels you ask us to remove, and other personal
          profile fields you specify.
        </p>
        <p>
          <strong>Typically kept while your account remains active:</strong> account identifiers needed to sign in
          (email/username), subscription and purchase records required for billing/store compliance, coin/wallet ledger
          rows needed for integrity, and security logs. Third-party AI providers may retain technical logs under their
          own policies for limited periods.
        </p>

        <h2 id="delete-account">2. Delete your entire account</h2>
        <p>This permanently closes your {SITE.name} account.</p>
        <h3>In the app (recommended)</h3>
        <ol>
          <li>Open <strong>Settings</strong>.</li>
          <li>Choose <strong>Delete Account</strong> (under Premium &amp; data / Data).</li>
          <li>Confirm deletion. Password-based accounts may need to re-enter their password.</li>
        </ol>
        <h3>By email</h3>
        <p>
          Email <a href={`mailto:${SITE.email}?subject=Delete%20my%20account`}>{SITE.email}</a> from your registered
          address with subject “Delete my account”. Include your username or the email/mobile used to sign up.
        </p>

        <h2>What we do when full account deletion succeeds</h2>
        <ul>
          <li>Revoke signed-in sessions (refresh tokens)</li>
          <li>Anonymize login identifiers and clear profile photo fields on your user record</li>
          <li>Soft-delete posts and reels from public/social views</li>
          <li>
            Archive certain AI history snapshots for about <strong>90 days</strong> for security and legal defense, then
            that archive is intended to be purged
          </li>
        </ul>

        <h2>What may remain after account deletion</h2>
        <p>
          Coin ledgers, verified purchase records, anonymized database references, server backups, and cloud media
          objects may not disappear instantly from every system. See our <a href="/privacy">Privacy Policy</a> for full
          retention details.
        </p>
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="simple">
      <div className="container simple__hero">
        <p className="eyebrow">About</p>
        <h1 className="display display-lg">Beauty is personal. Technology should be too.</h1>
        <p className="lede">
          {SITE.name} is an AI beauty and fashion studio that helps people create looks on their own photo while
          preserving their real identity.
        </p>
      </div>
      <div className="container simple__prose">
        <p>
          We believe style exploration should feel luxurious, emotional, and honest — fashion, beauty, AI, and personal
          expression without asking you to become someone else.
        </p>
        <p className="brand-line">{SITE.philosophy}.</p>
        <p className="brand-line muted">{SITE.secondary}</p>
      </div>
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="simple not-found">
      <div className="container simple__hero">
        <p className="eyebrow">404</p>
        <h1 className="display display-xl">This light doesn&apos;t exist.</h1>
        <p className="lede">Let&apos;s get you back to {SITE.name}.</p>
        <Button to="/">Return Home</Button>
      </div>
    </div>
  );
}
