import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { REVEAL } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "scale";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
};

const hidden = {
  up: { opacity: 0, y: 32 },
  left: { opacity: 0, x: -32 },
  scale: { opacity: 0, scale: 0.96 },
};

export function Reveal({ children, className = "", delay = 0, direction = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px", amount: 0.15 });

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={hidden[direction]}
      animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : hidden[direction]}
      transition={{ ...REVEAL, delay }}
    >
      {children}
    </motion.div>
  );
}
