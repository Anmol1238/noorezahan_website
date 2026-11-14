import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import "./LegalLayout.css";

export type TocItem = { id: string; label: string };

type Props = {
  title: string;
  updated?: string;
  intro?: string;
  toc: TocItem[];
  children: ReactNode;
};

export function LegalLayout({ title, updated, intro, toc, children }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(toc[0]?.id);

  useEffect(() => {
    const els = toc
      .map((t) => document.getElementById(t.id))
      .filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.4] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [toc]);

  return (
    <div className="legal">
      <div className="container legal__hero">
        <p className="eyebrow">Legal</p>
        <h1 className="display display-md">{title}</h1>
        {updated ? <p className="legal__updated">Last updated: {updated}</p> : null}
        {intro ? <p className="lede">{intro}</p> : null}
      </div>

      <div className="container legal__layout">
        <aside className="legal__toc">
          <button type="button" className="legal__toc-toggle" onClick={() => setOpen((v) => !v)}>
            Contents {open ? "▴" : "▾"}
          </button>
          <nav className={open ? "is-open" : ""} aria-label="Table of contents">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
        <article className="legal__body">{children}</article>
      </div>

      <div className="container legal__related">
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/ai-photo-consent">AI & Photo Consent</Link>
        <Link to="/delete-account">Delete Account</Link>
      </div>
    </div>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="legal-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
