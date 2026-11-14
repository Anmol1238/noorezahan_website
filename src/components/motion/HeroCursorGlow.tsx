import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Props = {
  pointer: { x: number; y: number };
};

/** Cursor-following champagne glow in the hero */
export function HeroCursorGlow({ pointer }: Props) {
  const reduced = usePrefersReducedMotion();
  const [smooth, setSmooth] = useState(pointer);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const tick = () => {
      setSmooth((prev) => ({
        x: prev.x + (pointer.x - prev.x) * 0.14,
        y: prev.y + (pointer.y - prev.y) * 0.14,
      }));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pointer, reduced]);

  if (reduced) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[5] transition-opacity duration-500"
      style={{
        background: `radial-gradient(circle 280px at ${smooth.x * 100}% ${smooth.y * 100}%, rgba(201,168,92,0.14) 0%, rgba(235,107,158,0.08) 35%, transparent 70%)`,
        willChange: "background",
      }}
    />
  );
}
