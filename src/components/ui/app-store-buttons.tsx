import { SITE } from "@/content/site";
import { cn } from "@/lib/utils";

export function AppStoreButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", compact ? "mt-2" : "mt-5")}>
      <a
        href={SITE.appStoreUrl}
        className="flex min-h-12 min-w-[148px] flex-col justify-center rounded-xl border border-gold/35 bg-noir/70 px-4 transition hover:-translate-y-px hover:border-gold"
        aria-label="Download on the App Store (link placeholder)"
      >
        <span className="text-[0.65rem] uppercase tracking-wider text-champagne">Download on the</span>
        <strong className="text-[0.95rem] font-semibold">App Store</strong>
      </a>
      <a
        href={SITE.playStoreUrl}
        className="flex min-h-12 min-w-[148px] flex-col justify-center rounded-xl border border-gold/35 bg-noir/70 px-4 transition hover:-translate-y-px hover:border-gold"
        aria-label="Get it on Google Play (link placeholder)"
      >
        <span className="text-[0.65rem] uppercase tracking-wider text-champagne">Get it on</span>
        <strong className="text-[0.95rem] font-semibold">Google Play</strong>
      </a>
      <span className="rounded-full border border-dashed border-gold/45 bg-elevated/55 px-3 py-1 text-xs text-champagne">
        Store URLs — confirm before launch
      </span>
    </div>
  );
}
