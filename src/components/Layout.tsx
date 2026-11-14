import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NoorNavbar } from "@/components/ui/noor-navbar";
import { NoorFooter } from "@/components/ui/noor-footer";
import { LuxuryCursor } from "@/components/motion/LuxuryCursor";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-noir text-pearl font-[family-name:var(--font-ui)]">
      <a
        className="absolute left-3 top-[-3rem] z-[1000] rounded-lg bg-gold px-4 py-2.5 font-semibold text-noir focus:top-3"
        href="#main"
      >
        Skip to content
      </a>
      <NoorNavbar />
      <LuxuryCursor />
      <main id="main" className="overflow-x-clip">
        <Outlet />
      </main>
      <NoorFooter />
    </div>
  );
}
