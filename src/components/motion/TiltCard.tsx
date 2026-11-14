import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useSpring } from "motion/react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsDesktopPointer } from "@/hooks/useIsDesktopPointer";
import { SPRING_SOFT } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  lift?: number;
};

/** Subtle 3D tilt + cursor-following highlight for feature cards */
export function TiltCard({ children, className, intensity = 7, lift = 6 }: Props) {
  const reduced = usePrefersReducedMotion();
  const desktop = useIsDesktopPointer();
  const interactive = desktop && !reduced;
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, SPRING_SOFT);
  const rotateY = useSpring(0, SPRING_SOFT);
  const liftY = useSpring(0, SPRING_SOFT);
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * intensity);
    rotateX.set((0.5 - py) * intensity);
    liftY.set(-lift);
    setGlow({ x: px * 100, y: py * 100 });
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    liftY.set(0);
    setGlow({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      className={cn("tilt-card group relative", className)}
      style={
        interactive
          ? {
              transformPerspective: 900,
              rotateX,
              rotateY,
              y: liftY,
              willChange: "transform",
            }
          : undefined
      }
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={interactive ? { scale: 0.985 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {interactive && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[2] rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(201,168,92,0.2) 0%, transparent 55%)`,
          }}
        />
      )}
      {children}
      {interactive && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 40%, rgba(97,56,148,0.08) 100%)",
          }}
        />
      )}
    </motion.div>
  );
}
