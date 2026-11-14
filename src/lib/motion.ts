/** Shared cinematic easing — matches brand motion language */
export const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

export const SPRING_SOFT = { type: "spring" as const, stiffness: 260, damping: 28, mass: 0.8 };

export const REVEAL = {
  duration: 0.9,
  ease: EASE_LUXURY,
};
