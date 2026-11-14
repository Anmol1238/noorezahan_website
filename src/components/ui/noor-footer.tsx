import { Link } from "react-router-dom";
import { SITE } from "@/content/site";

export function NoorFooter() {
  return (
    <footer className="border-t border-gold/15 bg-gradient-to-b from-surface/55 to-noir px-5 pb-8 pt-16">
      <div className="mx-auto grid w-[min(100%,1180px)] gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="font-display text-xl tracking-[0.06em] text-transparent bg-[linear-gradient(135deg,#C9A85C_0%,#E6D4B5_45%,rgba(97,56,148,0.75)_100%)] bg-clip-text sm:text-2xl">
            {SITE.name}
          </div>
          <p className="mt-3 text-xs tracking-[0.12em] text-champagne">{SITE.secondary}</p>
          <p className="mt-1 text-sm text-pearl/55">{SITE.fullName}</p>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-champagne">Explore</h2>
          <ul className="grid gap-2 text-sm text-pearl/70">
            <li><Link to="/" className="hover:text-pearl">Home</Link></li>
            <li><Link to="/features" className="hover:text-pearl">Features</Link></li>
            <li><a href="/#how-it-works" className="hover:text-pearl">How It Works</a></li>
            <li><Link to="/about" className="hover:text-pearl">About</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-champagne">Support</h2>
          <ul className="grid gap-2 text-sm text-pearl/70">
            <li><Link to="/contact" className="hover:text-pearl">Contact Us</Link></li>
            <li><Link to="/support" className="hover:text-pearl">Help / FAQ</Link></li>
            <li><Link to="/report" className="hover:text-pearl">Report a Problem</Link></li>
            <li><Link to="/report?type=content" className="hover:text-pearl">Report Content</Link></li>
            <li><Link to="/delete-account" className="hover:text-pearl">Delete Account</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-champagne">Legal</h2>
          <ul className="grid gap-2 text-sm text-pearl/70">
            <li><Link to="/privacy" className="hover:text-pearl">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-pearl">Terms & Conditions</Link></li>
            <li><Link to="/ai-photo-consent" className="hover:text-pearl">AI & Photo Consent</Link></li>
            <li><Link to="/community" className="hover:text-pearl">Community Guidelines</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-[min(100%,1180px)] flex-col gap-3 border-t border-white/5 pt-6 text-sm text-pearl/50 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="grid gap-1">
          <p>© {SITE.year} {SITE.name}. All rights reserved.</p>
          <p className="tracking-[0.04em] text-champagne/80">Developed By {SITE.developedBy}</p>
        </div>
        <a href={`mailto:${SITE.email}`} className="hover:text-pearl">{SITE.email}</a>
      </div>
    </footer>
  );
}
