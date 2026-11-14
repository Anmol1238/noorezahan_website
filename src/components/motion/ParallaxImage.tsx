import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  speed?: number;
  loading?: "lazy" | "eager";
};

/** Scroll parallax image — transform only, GPU-friendly */
export function ParallaxImage({ src, alt, className, imgClassName, speed = 0.12, loading = "lazy" }: Props) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const drift = reduced ? 0 : speed * 48;
  const y = useTransform(scrollYProgress, [0, 1], [-drift, drift]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [1, 1, 1] : [1.04, 1, 1.04]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        className={cn("h-full w-full object-cover", imgClassName)}
        style={{ y, scale, willChange: reduced ? undefined : "transform" }}
      />
    </div>
  );
}
