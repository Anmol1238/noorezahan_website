import { useCallback, useEffect, useRef, useState } from "react";
import "./BeforeAfterSlider.css";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "YOUR PHOTO",
  afterLabel = "YOUR LOOK",
  caption = "STYLE CHANGES. YOU STAY YOU.",
}: Props) {
  const [pos, setPos] = useState(52);
  const dragging = useRef(false);
  const frame = useRef<HTMLDivElement>(null);

  const syncWidth = useCallback(() => {
    const el = frame.current;
    if (!el) return;
    el.style.setProperty("--ba-frame-w", `${el.getBoundingClientRect().width}px`);
  }, []);

  useEffect(() => {
    syncWidth();
    window.addEventListener("resize", syncWidth);
    return () => window.removeEventListener("resize", syncWidth);
  }, [syncWidth]);

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const el = frame.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--ba-frame-w", `${rect.width}px`);
      const next = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.min(96, Math.max(4, next)));
    },
    [],
  );

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div className="ba">
      <div
        ref={frame}
        className="ba__frame"
        role="img"
        aria-label="Interactive comparison of original photo and styled look"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <img className="ba__img ba__img--after" src={afterSrc} alt={afterAlt} loading="lazy" />
        <div className="ba__before" style={{ width: `${pos}%` }}>
          <img className="ba__img" src={beforeSrc} alt={beforeAlt} loading="lazy" />
        </div>
        <div className="ba__handle" style={{ left: `${pos}%` }} aria-hidden>
          <span className="ba__knob" />
        </div>
        <span className="ba__label ba__label--left">{beforeLabel}</span>
        <span className="ba__label ba__label--right">{afterLabel}</span>
      </div>
      <p className="ba__caption">{caption}</p>
      <label className="ba__range-label" htmlFor="ba-range">
        Reveal styling
      </label>
      <input
        id="ba-range"
        className="ba__range"
        type="range"
        min={4}
        max={96}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-valuetext={`${Math.round(pos)} percent original photo visible`}
      />
    </div>
  );
}
