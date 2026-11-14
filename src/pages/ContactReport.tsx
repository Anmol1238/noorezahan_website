import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import { NoorButton } from "@/components/ui/noor-button";
import { SITE } from "@/content/site";

const reportTypes = [
  "Technical Issue",
  "Inappropriate Content",
  "Harassment",
  "Bullying",
  "Impersonation",
  "Non-consensual Image",
  "Deepfake / Identity Misuse",
  "Copyright Issue",
  "Spam",
  "Safety Concern",
  "Other",
];

export function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="px-5 pb-20 pt-[calc(72px+2.5rem)]">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-champagne">Contact</p>
        <h1 className="mt-3 font-display text-4xl text-pearl md:text-5xl">We&apos;re here to help.</h1>
        <p className="mt-4 text-pearl/75">
          Reach {SITE.name} at{" "}
          <a href={`mailto:${SITE.email}`} className="text-champagne underline underline-offset-4">
            {SITE.email}
          </a>
        </p>

        {sent ? (
          <p className="mt-8 text-pearl/80">
            Thank you — this demo form does not send email yet. Please write to {SITE.email} directly.
          </p>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 grid gap-4"
            onSubmit={onSubmit}
          >
            <label className="grid gap-1.5 text-sm text-champagne">
              Name
              <input required name="name" autoComplete="name" className="field" />
            </label>
            <label className="grid gap-1.5 text-sm text-champagne">
              Email
              <input required type="email" name="email" autoComplete="email" className="field" />
            </label>
            <label className="grid gap-1.5 text-sm text-champagne">
              Topic
              <select name="topic" defaultValue="Create Look" className="field">
                <option>Account</option>
                <option>Create Look</option>
                <option>Beauty Scan</option>
                <option>Photos</option>
                <option>Identity</option>
                <option>Coins</option>
                <option>Subscription</option>
                <option>Ads</option>
                <option>Privacy</option>
                <option>Account Deletion</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm text-champagne">
              Message
              <textarea required name="message" className="field min-h-[140px] resize-y" />
            </label>
            <label className="grid gap-1.5 text-sm text-champagne">
              Optional attachment
              <input type="file" name="attachment" accept="image/*,.pdf" className="field py-3" />
            </label>
            <p className="text-sm text-pearl/60">Attachments are not uploaded in this demo — use email for files.</p>
            <NoorButton type="submit" className="w-fit">
              Send message
            </NoorButton>
          </motion.form>
        )}
      </div>
    </div>
  );
}

export function ReportPage() {
  const [params] = useSearchParams();
  const defaultType = params.get("type") === "content" ? "Inappropriate Content" : "Technical Issue";
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="px-5 pb-20 pt-[calc(72px+2.5rem)]">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-champagne">Report</p>
        <h1 className="mt-3 font-display text-4xl text-pearl md:text-5xl">
          Something doesn&apos;t look right? Tell us.
        </h1>
        <p className="mt-4 text-pearl/75">
          Reports help keep {SITE.name} safe. We do not expose internal moderation systems or guarantee response times.
        </p>

        {sent ? (
          <p className="mt-8 text-lg text-champagne">Thank you. We&apos;ve received your report.</p>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 grid gap-4"
            onSubmit={onSubmit}
          >
            <label className="grid gap-1.5 text-sm text-champagne">
              Your email
              <input required type="email" name="email" autoComplete="email" className="field" />
            </label>
            <label className="grid gap-1.5 text-sm text-champagne">
              Report type
              <select name="type" defaultValue={defaultType} className="field">
                {reportTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-1.5 text-sm text-champagne">
              User / content being reported (optional)
              <input name="target" className="field" placeholder="@username or link" />
            </label>
            <label className="grid gap-1.5 text-sm text-champagne">
              Description
              <textarea required name="description" className="field min-h-[140px] resize-y" />
            </label>
            <label className="grid gap-1.5 text-sm text-champagne">
              Optional screenshot
              <input type="file" name="screenshot" accept="image/*" className="field py-3" />
            </label>
            <NoorButton type="submit" className="w-fit">
              Submit Report
            </NoorButton>
          </motion.form>
        )}
      </div>
    </div>
  );
}
