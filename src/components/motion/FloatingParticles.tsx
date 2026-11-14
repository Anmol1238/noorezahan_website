import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Props = {
  /** Normalized pointer 0–1 within hero */
  pointer: { x: number; y: number };
  className?: string;
};

const PARTICLES = [
  { size: 3, baseX: 18, baseY: 22, drift: 12, delay: 0 },
  { size: 2, baseX: 72, baseY: 35, drift: 18, delay: 0.4 },
  { size: 4, baseX: 55, baseY: 68, drift: 10, delay: 0.8 },
  { size: 2, baseX: 85, baseY: 55, drift: 14, delay: 1.2 },
  { size: 3, baseX: 30, baseY: 78, drift: 16, delay: 0.6 },
  { size: 2, baseX: 62, baseY: 18, drift: 11, delay: 1.0 },
];

/** Lightweight floating light particles — respond subtly to cursor */
export function FloatingParticles({ pointer, className = "" }: Props) {
  const reduced = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (reduced || !mounted) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {PARTICLES.map((p, i) => {
        const offsetX = (pointer.x - 0.5) * p.drift;
        const offsetY = (pointer.y - 0.5) * p.drift;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-champagne/40 blur-[1px] animate-[float-particle_6s_ease-in-out_infinite]"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.baseX + offsetX}%`,
              top: `${p.baseY + offsetY}%`,
              animationDelay: `${p.delay}s`,
              boxShadow: "0 0 8px rgba(201,168,92,0.35)",
              willChange: "transform",
            }}
          />
        );
      })}
    </div>
  );
}
