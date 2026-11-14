import { useRef, useState, useCallback, type MouseEvent } from "react";
import { motion, useSpring } from "motion/react";
import { BlackholeHeroSection } from "./blackhole-hero-section";
import { NoorButton } from "./noor-button";
import { AppStoreButtons } from "./app-store-buttons";
import { HeroCursorGlow } from "@/components/motion/HeroCursorGlow";
import { FloatingParticles } from "@/components/motion/FloatingParticles";
import { IMAGES, SITE } from "@/content/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsDesktopPointer } from "@/hooks/useIsDesktopPointer";
import { SPRING_SOFT, EASE_LUXURY } from "@/lib/motion";

export function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  const desktop = useIsDesktopPointer();
  const interactive = desktop && !reduced;

  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const textX = useSpring(0, SPRING_SOFT);
  const textY = useSpring(0, SPRING_SOFT);
  const visualX = useSpring(0, SPRING_SOFT);
  const visualY = useSpring(0, SPRING_SOFT);
  const imageX = useSpring(0, SPRING_SOFT);
  const imageY = useSpring(0, SPRING_SOFT);

  const onMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (!sectionRef.current || !interactive) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      setPointer({ x: px, y: py });
      textX.set((px - 0.5) * -14);
      textY.set((py - 0.5) * -10);
      visualX.set((px - 0.5) * 10);
      visualY.set((py - 0.5) * 8);
      imageX.set((px - 0.5) * -6);
      imageY.set((py - 0.5) * -5);
    },
    [interactive, textX, textY, visualX, visualY, imageX, imageY],
  );

  const onLeave = useCallback(() => {
    setPointer({ x: 0.5, y: 0.5 });
    textX.set(0);
    textY.set(0);
    visualX.set(0);
    visualY.set(0);
    imageX.set(0);
    imageY.set(0);
  }, [textX, textY, visualX, visualY, imageX, imageY]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] lg:min-h-screen overflow-hidden"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0A0812_0%,#1A1224_55%,rgba(97,56,148,0.35)_100%)]" />
      {interactive && <HeroCursorGlow pointer={pointer} />}
      {interactive && <FloatingParticles pointer={pointer} />}

      <div className="relative mx-auto grid min-h-[92vh] w-[min(100%-2.5rem,1320px)] grid-cols-1 items-center gap-8 pt-[calc(72px+2rem)] pb-16 lg:min-h-screen lg:grid-cols-[1fr_1.05fr] lg:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_LUXURY }}
          style={interactive ? { x: textX, y: textY, willChange: "transform" } : undefined}
          className="relative z-10 max-w-xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-champagne">
            {SITE.studio}
          </p>
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-pearl">
            {SITE.promise}.
          </h1>
          <p className="mt-5 max-w-lg text-[clamp(1.05rem,1.6vw,1.15rem)] leading-relaxed text-pearl/78">
            Create personalized fashion and beauty looks on your own photo with identity-preserving AI — while keeping
            your real identity at the center.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <NoorButton href="/#download">Download {SITE.name}</NoorButton>
            <NoorButton to="/features" variant="secondary">
              Explore Features
            </NoorButton>
          </div>
          <AppStoreButtons />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: EASE_LUXURY }}
          style={interactive ? { x: visualX, y: visualY, willChange: "transform" } : undefined}
          className="relative z-0 h-[min(52vh,520px)] lg:h-[min(78vh,760px)]"
        >
          <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-gold/20 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <motion.img
              src={IMAGES.hero}
              alt={IMAGES.heroAlt}
              className="absolute inset-0 h-full w-full object-cover object-[center_18%] brightness-[0.92] contrast-[1.04] saturate-[1.05]"
              loading="eager"
              style={interactive ? { x: imageX, y: imageY, scale: 1.03, willChange: "transform" } : { scale: 1.03 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/85 via-noir/15 to-transparent" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-r from-noir/50 via-transparent to-noir/20" aria-hidden />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_28%,rgba(97,56,148,0.22)_0%,transparent_48%)]"
              aria-hidden
            />

            <BlackholeHeroSection
              className="absolute inset-0 rounded-[28px]"
              showLabels={false}
              mouse={pointer}
              config={{
                gasInner: [0.38, 0.22, 0.58],
                gasOuter: [0.92, 0.42, 0.62],
                highlight: [0.79, 0.66, 0.36],
                glow: 0.55,
                brightness: 0.68,
              }}
            />
          </div>

          <p className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-center text-[0.65rem] font-medium tracking-[0.28em] text-champagne/70">
            LIGHT · IDENTITY · STYLE
          </p>
        </motion.div>
      </div>
    </section>
  );
}
