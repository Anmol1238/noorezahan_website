import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsDesktopPointer } from "@/hooks/useIsDesktopPointer";

const INTERACTIVE = "a, button, [role='button'], input, select, textarea, label, [data-magnetic]";

export function LuxuryCursor() {
  const reduced = usePrefersReducedMotion();
  const desktop = useIsDesktopPointer();
  const active = desktop && !reduced;

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!active) return;

    document.documentElement.classList.add("luxury-cursor");

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element | null;
      setHovering(!!t?.closest(INTERACTIVE));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOver, { passive: true });

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      const { x, y } = pos.current;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${hovering ? 1.65 : 1})`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("luxury-cursor");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf.current);
    };
  }, [active, hovering, visible]);

  if (!active) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="luxury-cursor__ring pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 rounded-full border border-gold/35 opacity-0 transition-opacity duration-300 data-[visible=true]:opacity-100"
        data-visible={visible}
        style={{
          opacity: visible ? (hovering ? 0.55 : 0.35) : 0,
          willChange: "transform",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="luxury-cursor__dot pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-champagne shadow-[0_0_12px_rgba(201,168,92,0.65)]"
        style={{
          opacity: visible ? 1 : 0,
          willChange: "transform",
        }}
      />
    </>
  );
}
