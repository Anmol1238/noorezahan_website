import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { SITE } from "../content/site";
import { Button } from "./Button";
import "./Navbar.css";

const links = [
  { to: "/features", label: "Features" },
  { to: "/#how-it-works", label: "How It Works", hash: true },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
];

export function Navbar() {
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
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`}>
      <div className="nav__inner container-wide">
        <Link to="/" className="nav__brand" aria-label={`${SITE.name} home`}>
          {SITE.mark}
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((item) =>
            item.hash ? (
              <a key={item.label} href={item.to} className="nav__link">
                {item.label}
              </a>
            ) : (
              <NavLink key={item.label} to={item.to} className={({ isActive }) => `nav__link${isActive ? " is-active" : ""}`}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="nav__cta">
          <Button href="/#download" variant="primary">
            Download App
          </Button>
        </div>

        <button
          type="button"
          className={`nav__menu-btn ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-nav" className={`nav-drawer ${open ? "is-open" : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((item) =>
            item.hash ? (
              <a key={item.label} href={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ) : (
              <Link key={item.label} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ),
          )}
          <Link to="/privacy" onClick={() => setOpen(false)}>
            Privacy
          </Link>
          <Link to="/terms" onClick={() => setOpen(false)}>
            Terms
          </Link>
          <Button href="/#download" variant="primary" className="nav-drawer__cta">
            Download App
          </Button>
        </nav>
      </div>
    </header>
  );
}
