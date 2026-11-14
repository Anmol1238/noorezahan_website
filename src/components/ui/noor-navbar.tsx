import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SITE } from "@/content/site";
import { cn } from "@/lib/utils";
import { NoorButton } from "./noor-button";

const mainLinks: Array<{ to: string; label: string; hash?: boolean }> = [
  { to: "/features", label: "Features" },
  { to: "/#how-it-works", label: "How It Works", hash: true },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
];

const drawerExtra: Array<{ to: string; label: string; hash?: boolean }> = [
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { to: "/contact", label: "Contact Us" },
  { to: "/report", label: "Report a Problem" },
  { to: "/delete-account", label: "Delete Account" },
];

export function NoorNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[72px] border-b transition-all duration-300",
        scrolled || open
          ? "border-gold/10 bg-noir/75 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full w-[min(100%-2.5rem,1320px)] items-center justify-between gap-4">
        <Link
          to="/"
          className="font-display text-[clamp(1rem,2.4vw,1.35rem)] font-semibold tracking-[0.06em] text-transparent bg-[linear-gradient(135deg,#C9A85C_0%,#E6D4B5_45%,rgba(97,56,148,0.75)_100%)] bg-clip-text"
          aria-label={`${SITE.name} home`}
        >
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {mainLinks.map((item) =>
            item.hash ? (
              <a key={item.label} href={item.to} className="text-sm font-medium text-pearl/70 transition hover:text-pearl">
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  cn("text-sm font-medium transition", isActive ? "text-pearl" : "text-pearl/70 hover:text-pearl")
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <NoorButton href="/#download">Download App</NoorButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-pearl/15 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto bg-noir/96 px-6 py-8 backdrop-blur-xl lg:hidden"
          >
            <nav className="grid gap-5" aria-label="Mobile">
              <Link to="/" className="font-display text-3xl" onClick={() => setOpen(false)}>
                Home
              </Link>
              {[...mainLinks, ...drawerExtra].map((item) =>
                item.hash ? (
                  <a key={item.label} href={item.to} className="font-display text-3xl" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.label} to={item.to} className="font-display text-3xl" onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                ),
              )}
              <NoorButton href="/#download" className="mt-4 w-fit">
                Download App
              </NoorButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
