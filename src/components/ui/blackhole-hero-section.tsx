import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { NOOR_WEBGL } from "@/content/site";

export type BlackholeHeroConfig = {
  steps?: number;
  glow?: number;
  brightness?: number;
  maxDpr?: number;
  gasInner?: readonly [number, number, number];
  gasOuter?: readonly [number, number, number];
  highlight?: readonly [number, number, number];
};

type Props = {
  className?: string;
  config?: BlackholeHeroConfig;
  showLabels?: boolean;
  /** Normalized pointer 0–1 within the hero visual */
  mouse?: { x: number; y: number };
};

/**
 * WebGL “Noor light” engine — cinematic beauty glow (purple / rose / champagne).
 * Not an astronomy black-hole visual: warm luminous core, soft aura, silk ribbons.
 */
const VERT = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_glow;
uniform float u_brightness;
uniform vec3 u_gasInner;
uniform vec3 u_gasOuter;
uniform vec3 u_highlight;
uniform vec2 u_mouse;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}

vec3 noorLight(vec2 uv) {
  // Offset glow away from portrait center; subtly follows cursor
  vec2 lightCenter = vec2(0.28, -0.22) + (u_mouse - 0.5) * 0.22;
  vec2 glowUv = uv - lightCenter;
  float r = length(glowUv);
  float a = atan(glowUv.y, glowUv.x);

  vec3 noir = vec3(0.04, 0.03, 0.07);
  vec3 velvet = vec3(0.08, 0.05, 0.12);
  vec3 bg = mix(noir, velvet, fbm(uv * 2.2 + u_time * 0.012) * 0.28);

  // Soft champagne bokeh at edges only
  float bokeh = smoothstep(0.995, 1.0, hash(floor(uv * 280.0 + u_time * 0.006)));
  bg += u_highlight * bokeh * 0.08 * smoothstep(0.15, 0.75, r);

  // Subtle pearl highlight — kept off-center and low intensity
  float core = exp(-r * r * 7.0);
  vec3 pearl = vec3(0.92, 0.88, 0.84);
  vec3 coreCol = mix(u_highlight, pearl, 0.65);
  bg += coreCol * core * 0.32 * u_glow;

  // Rose & velvet aura (peripheral)
  float aura = exp(-r * 2.1) * (0.55 + 0.25 * sin(a * 3.0 + u_time * 0.2));
  vec3 auraCol = mix(u_gasInner, u_gasOuter, sin(a * 2.0 + u_time * 0.15) * 0.5 + 0.5);
  bg += auraCol * aura * 0.38 * u_glow;

  // Flowing silk-light ribbons on the outer ring
  float ribbon = sin(a * 5.0 + u_time * 0.3 + r * 5.5) * 0.5 + 0.5;
  ribbon *= exp(-pow(r - 0.55, 2.0) / 0.14);
  bg += mix(u_gasOuter, u_highlight, ribbon) * ribbon * 0.16 * u_glow;

  // Edge champagne bloom — not a center blow-out
  bg += u_highlight * smoothstep(0.35, 0.95, r) * exp(-r * 1.1) * 0.08 * u_glow;

  // Fade center so portrait shows through
  bg *= smoothstep(0.08, 0.42, length(uv)) * smoothstep(1.2, 0.45, r);
  return bg * u_brightness;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  uv.x *= u_resolution.x / u_resolution.y;

  vec3 col = noorLight(uv);
  col = pow(col, vec3(1.05));
  gl_FragColor = vec4(col, 0.72);
}
`;

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isMobile(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
}

export function BlackholeHeroSection({ className, config, showLabels = true, mouse }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const visibleRef = useRef(true);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const [fallback, setFallback] = useState(false);
  const [staticFrame, setStaticFrame] = useState(false);

  useEffect(() => {
    if (mouse) mouseRef.current = mouse;
  }, [mouse]);

  const merged: Required<Omit<BlackholeHeroConfig, "steps">> & { steps: number } = {
    steps: config?.steps ?? 1,
    glow: config?.glow ?? (isMobile() ? 0.55 : 0.65),
    brightness: config?.brightness ?? 0.72,
    maxDpr: config?.maxDpr ?? (isMobile() ? 1.25 : 1.75),
    gasInner: config?.gasInner ?? NOOR_WEBGL.purple,
    gasOuter: config?.gasOuter ?? NOOR_WEBGL.pink,
    highlight: config?.highlight ?? NOOR_WEBGL.gold,
  };

  useEffect(() => {
    if (prefersReducedMotion()) {
      setStaticFrame(true);
      setFallback(true);
      return;
    }
    if (!detectWebGL()) {
      setFallback(true);
      return;
    }

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl =
      canvas.getContext("webgl2", { alpha: true, antialias: false, powerPreference: "high-performance" }) ??
      canvas.getContext("webgl", { alpha: true, antialias: false, powerPreference: "high-performance" });
    if (!gl) {
      setFallback(true);
      return;
    }

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) {
      setFallback(true);
      return;
    }

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setFallback(true);
      return;
    }

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      resolution: gl.getUniformLocation(program, "u_resolution"),
      time: gl.getUniformLocation(program, "u_time"),
      glow: gl.getUniformLocation(program, "u_glow"),
      brightness: gl.getUniformLocation(program, "u_brightness"),
      gasInner: gl.getUniformLocation(program, "u_gasInner"),
      gasOuter: gl.getUniformLocation(program, "u_gasOuter"),
      highlight: gl.getUniformLocation(program, "u_highlight"),
      mouse: gl.getUniformLocation(program, "u_mouse"),
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, merged.maxDpr);
      const w = Math.max(1, Math.floor(rect.width * dpr));
      const h = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const draw = (now: number) => {
      if (!visibleRef.current || document.hidden) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      if (!startRef.current) startRef.current = now;
      const t = (now - startRef.current) / 1000;

      resize();
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      gl.useProgram(program);
      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
      gl.uniform1f(uniforms.time, t);
      gl.uniform1f(uniforms.glow, merged.glow);
      gl.uniform1f(uniforms.brightness, merged.brightness);
      gl.uniform3f(uniforms.gasInner, merged.gasInner[0], merged.gasInner[1], merged.gasInner[2]);
      gl.uniform3f(uniforms.gasOuter, merged.gasOuter[0], merged.gasOuter[1], merged.gasOuter[2]);
      gl.uniform3f(uniforms.highlight, merged.highlight[0], merged.highlight[1], merged.highlight[2]);
      gl.uniform2f(uniforms.mouse, mouseRef.current.x, mouseRef.current.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    rafRef.current = requestAnimationFrame(draw);

    const onVis = () => {
      visibleRef.current = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);

    const obs = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting && !document.hidden;
      },
      { threshold: 0.05 },
    );
    obs.observe(container);

    const onContextLost = (e: Event) => {
      e.preventDefault();
      setFallback(true);
    };
    canvas.addEventListener("webglcontextlost", onContextLost);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      obs.disconnect();
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, [merged.brightness, merged.gasInner, merged.gasOuter, merged.glow, merged.highlight, merged.maxDpr]);

  const fallbackStyle: CSSProperties = {
    background: `
      radial-gradient(ellipse 70% 60% at 72% 28%, rgba(235,107,158,0.18) 0%, transparent 50%),
      radial-gradient(ellipse 80% 70% at 65% 35%, rgba(97,56,148,0.22) 0%, transparent 55%),
      radial-gradient(ellipse 50% 45% at 75% 25%, rgba(201,168,92,0.12) 0%, transparent 42%),
      linear-gradient(180deg, rgba(10,8,18,0.15) 0%, rgba(26,18,36,0.35) 100%)
    `,
  };

  return (
    <div ref={containerRef} className={cn("relative h-full min-h-[280px] w-full overflow-hidden", className)}>
      {fallback ? (
        <div className="absolute inset-0" style={fallbackStyle} aria-hidden />
      ) : (
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full mix-blend-soft-light opacity-45" aria-hidden />
      )}
      {showLabels && !staticFrame && (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {(["STYLE", "IDENTITY", "LIGHT"] as const).map((label, i) => (
            <span
              key={label}
              className={cn(
                "absolute text-[0.62rem] font-medium tracking-[0.32em] text-pearl/50",
                i === 0 && "left-[12%] top-[18%]",
                i === 1 && "right-[14%] top-[44%]",
                i === 2 && "left-[18%] bottom-[20%]",
              )}
            >
              {label}
            </span>
          ))}
        </div>
      )}
      {/* Soft edge vignette only — no dark “hole” on the left */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,8,18,0.55)_100%)]"
        aria-hidden
      />
    </div>
  );
}
