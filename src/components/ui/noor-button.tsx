import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsDesktopPointer } from "@/hooks/useIsDesktopPointer";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  variant?: Variant;
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  magnetic?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export function NoorButton({
  variant = "primary",
  to,
  href,
  children,
  className,
  magnetic,
  type = "button",
  disabled,
  onClick,
}: Props) {
  const reduced = usePrefersReducedMotion();
  const desktop = useIsDesktopPointer();
  const useMagnetic = magnetic !== false && desktop && !reduced;
  const innerRef = useRef<HTMLSpanElement>(null);
  const [shine, setShine] = useState({ x: 50, y: 50, visible: false });

  const base =
    "relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-sm font-semibold tracking-wide transition-[box-shadow] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

  const variants: Record<Variant, string> = {
    primary:
      "bg-[linear-gradient(135deg,#613894_0%,#EB6B9E_55%,#C9A85C_100%)] text-pearl shadow-[0_10px_30px_rgba(97,56,148,0.28)] hover:shadow-[0_16px_40px_rgba(235,107,158,0.22)]",
    secondary:
      "border border-gold/45 bg-surface/70 text-pearl backdrop-blur-md hover:border-gold",
    ghost: "border border-pearl/20 bg-transparent text-pearl hover:border-champagne/55 hover:bg-white/5",
  };

  const cls = cn(base, variants[variant], className, disabled && "pointer-events-none opacity-50");

  const onMove = (e: MouseEvent) => {
    if (!useMagnetic || !innerRef.current) return;
    const rect = innerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    innerRef.current.style.transform = `translate3d(${x * 0.18}px, ${y * 0.18}px, 0)`;
    setShine({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      visible: true,
    });
  };

  const onLeave = () => {
    if (innerRef.current) innerRef.current.style.transform = "";
    setShine((s) => ({ ...s, visible: false }));
  };

  const motionProps = {
    whileHover: useMagnetic ? { scale: 1.03 } : { y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 380, damping: 22 },
    onMouseMove: onMove,
    onMouseLeave: onLeave,
  };

  const inner = (
    <span ref={innerRef} data-magnetic className="relative z-[1] inline-flex items-center gap-2">
      {children}
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[-8px] rounded-full transition-opacity duration-300"
          style={{
            opacity: shine.visible ? 1 : 0,
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.3) 0%, transparent 55%)`,
          }}
        />
      )}
    </span>
  );

  if (to) {
    return (
      <motion.span {...motionProps} className={cn(cls, "cursor-pointer")} style={{ display: "inline-flex" }}>
        <Link to={to} className="contents" onClick={onClick}>
          {inner}
        </Link>
      </motion.span>
    );
  }

  if (href) {
    return (
      <motion.a
        {...motionProps}
        href={href}
        className={cls}
        data-magnetic
        onClick={onClick}
        {...(href.startsWith("http") || href.startsWith("mailto")
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} {...motionProps} className={cls} data-magnetic disabled={disabled} onClick={onClick}>
      {inner}
    </motion.button>
  );
}
