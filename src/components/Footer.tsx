import { Link } from "react-router-dom";
import { SITE } from "../content/site";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">{SITE.mark}</div>
          <p className="footer__tagline">{SITE.secondary}</p>
          <p className="footer__name">{SITE.fullName}</p>
        </div>

        <div>
          <h2>Explore</h2>
          <ul>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <a href="/#how-it-works">How It Works</a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Legal</h2>
          <ul>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/ai-photo-consent">AI & Photo Consent</Link>
            </li>
            <li>
              <Link to="/community">Community Guidelines</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Support</h2>
          <ul>
            <li>
              <Link to="/support">Help Center</Link>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>Contact</a>
            </li>
            <li>
              <Link to="/delete-account">Delete Account</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {SITE.year} {SITE.name}. All rights reserved.
          <br />
          Developed By {SITE.developedBy}
        </p>
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </div>
    </footer>
  );
}
