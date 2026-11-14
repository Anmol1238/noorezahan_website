import { useCallback, useEffect, useRef } from "react";

type Point = { x: number; y: number };

const LERP = 0.12;

/** Smooth pointer position within a container (normalized 0–1). GPU-friendly via refs. */
export function usePointerSpring(enabled: boolean) {
  const target = useRef<Point>({ x: 0.5, y: 0.5 });
  const current = useRef<Point>({ x: 0.5, y: 0.5 });
  const raf = useRef<number>(0);
  const listeners = useRef(new Set<(p: Point) => void>());

  const subscribe = useCallback((fn: (p: Point) => void) => {
    listeners.current.add(fn);
    return () => listeners.current.delete(fn);
  }, []);

  const setTarget = useCallback((x: number, y: number) => {
    target.current = { x, y };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const tick = () => {
      const cx = current.current.x + (target.current.x - current.current.x) * LERP;
      const cy = current.current.y + (target.current.y - current.current.y) * LERP;
      current.current = { x: cx, y: cy };
      listeners.current.forEach((fn) => fn(current.current));
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [enabled]);

  return { setTarget, subscribe, getCurrent: () => current.current };
}
