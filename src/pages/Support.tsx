import { useState, type FormEvent } from "react";
import { Button } from "../components/Button";
import { SITE } from "../content/site";
import "./SimplePages.css";

const faqs = [
  {
    cat: "Account",
    q: "How do I sign in?",
    a: "Use email/mobile OTP or available social sign-in options in the app. Availability may vary by release.",
  },
  {
    cat: "Create Look",
    q: "Why was my photo rejected?",
    a: "Quality checks look for a clear, single-person face. Blurry, multi-person, or low face-confidence photos may need a retake.",
  },
  {
    cat: "Identity",
    q: "Does Create Look change my face?",
    a: "Noor is designed for identity-preserving styling using face detection and an identity reference crop. Results can still vary.",
  },
  {
    cat: "Photos",
    q: "Can I upload someone else’s photo?",
    a: "Only with the necessary rights and consent. Third-party consent flows may apply.",
  },
  {
    cat: "Coins",
    q: "What are coins?",
    a: "Coins are in-app virtual currency used for certain generations. They have no cash value outside the app.",
  },
  {
    cat: "Subscriptions",
    q: "How do subscriptions work?",
    a: "Subscriptions and IAP are billed through Apple or Google. Manage or cancel in your store account settings.",
  },
  {
    cat: "Ads",
    q: "Why do I see ads?",
    a: "Rewarded ads may unlock additional Create Look generations subject to daily limits.",
  },
  {
    cat: "Privacy",
    q: "Where can I read how photos are used?",
    a: "See Privacy Policy and AI & Photo Consent on this website.",
  },
  {
    cat: "Account deletion",
    q: "How do I delete my account?",
    a: "Use in-app controls when available, or email support from your registered address. See Delete Account.",
  },
];

export function SupportPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="simple">
      <div className="container simple__hero">
        <p className="eyebrow">Support</p>
        <h1 className="display display-lg">Need a little help?</h1>
        <p className="lede">
          Browse FAQs or reach us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </div>

      <div className="container faq">
        {faqs.map((item) => (
          <details key={item.q}>
            <summary>
              <span className="muted">{item.cat} · </span>
              {item.q}
            </summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>

      <div className="container">
        <h2 className="display display-md" style={{ marginTop: "3rem" }}>
          Contact
        </h2>
        {sent ? (
          <p className="lede">Thanks — this demo form does not send email yet. Please write to {SITE.email}.</p>
        ) : (
          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" required autoComplete="email" />
            </label>
            <label>
              Topic
              <select name="topic" defaultValue="Create Look">
                <option>Account</option>
                <option>Create Look</option>
                <option>Beauty Scan</option>
                <option>Privacy</option>
                <option>Billing</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" required />
            </label>
            <label>
              Optional attachment
              <input type="file" name="attachment" accept="image/*,.pdf" />
            </label>
            <p className="form-note">Attachments are not uploaded in this demo build — use email for files.</p>
            <Button type="submit">Send message</Button>
          </form>
        )}
      </div>
    </div>
  );
}
