import { useRef, useEffect, useCallback } from "react";

const DOT_SPACING = 32;
const DOT_BASE_RADIUS = 1.2;
const INTERACTION_RADIUS = 120;
const PUSH_STRENGTH = 12;
const SCALE_BOOST = 2.5;
const DOT_COLOR = "rgba(0,0,0,0.08)";
const ACTIVE_DOT_COLOR = "rgba(0,0,0,0.18)";

const DotBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, w, h);

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const cols = Math.ceil(w / DOT_SPACING) + 1;
    const rows = Math.ceil(h / DOT_SPACING) + 1;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const baseX = col * DOT_SPACING;
        const baseY = row * DOT_SPACING;

        const dx = baseX - mx;
        const dy = baseY - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let drawX = baseX;
        let drawY = baseY;
        let radius = DOT_BASE_RADIUS;
        let color = DOT_COLOR;

        if (dist < INTERACTION_RADIUS && dist > 0) {
          const factor = 1 - dist / INTERACTION_RADIUS;
          const easedFactor = factor * factor;
          const pushX = (dx / dist) * PUSH_STRENGTH * easedFactor;
          const pushY = (dy / dist) * PUSH_STRENGTH * easedFactor;
          drawX += pushX;
          drawY += pushY;
          radius = DOT_BASE_RADIUS + SCALE_BOOST * easedFactor;
          color = ACTIVE_DOT_COLOR;
        }

        ctx.beginPath();
        ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }
    }

    // Note: removed rafRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let isDrawing = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!isDrawing) {
        isDrawing = true;
        animationFrameId = requestAnimationFrame(() => {
          draw();
          isDrawing = false;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Perform an initial draw to populate the canvas
    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default DotBackground;
