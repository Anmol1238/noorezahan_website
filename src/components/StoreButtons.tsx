import { SITE } from "../content/site";
import "./StoreButtons.css";

export function StoreButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`store-row ${compact ? "store-row--compact" : ""}`}>
      <a className="store-btn" href={SITE.appStoreUrl} aria-label="Download on the App Store (link placeholder)">
        <span className="store-btn__label">Download on the</span>
        <strong>App Store</strong>
      </a>
      <a className="store-btn" href={SITE.playStoreUrl} aria-label="Get it on Google Play (link placeholder)">
        <span className="store-btn__label">Get it on</span>
        <strong>Google Play</strong>
      </a>
      <span className="placeholder-note">Store URLs — confirm before launch</span>
    </div>
  );
}
