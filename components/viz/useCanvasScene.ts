'use client';

import { useEffect, useRef } from 'react';

export type Scene = {
  /** Run on mount and on every resize, with the box's CSS-pixel size. */
  layout?: (width: number, height: number) => void;
  update: (dt: number) => void;
  draw: (ctx: CanvasRenderingContext2D, width: number, height: number) => void;
  /** Seconds simulated before the first paint, so the figure opens mid-motion
   *  rather than from a cold, empty state. */
  warmStart?: number;
};

/**
 * The plumbing every canvas figure on the site needs: DPR-correct sizing that
 * survives resize, a clock that stops when the figure is offscreen or the tab
 * is hidden, and a single static frame when the visitor asks for reduced motion.
 */
export function useCanvasScene(createScene: () => Scene) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Held in a ref so the loop is built once, not rebuilt on every render.
  const factory = useRef(createScene);
  factory.current = createScene;

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const scene = factory.current();
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastTime = 0;
    let onScreen = true;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      // Past 2x the extra pixels cost more than they show.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scene.layout?.(width, height);
    };

    const paint = () => {
      ctx.clearRect(0, 0, width, height);
      scene.draw(ctx, width, height);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(wrap);

    for (let i = 0; i < Math.round((scene.warmStart ?? 0) * 60); i++) scene.update(1 / 60);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      paint();
      return () => resizeObserver.disconnect();
    }

    const loop = (time: number) => {
      frame = requestAnimationFrame(loop);
      if (!onScreen || document.hidden) {
        // Resume from now, so a backgrounded tab doesn't jump on return.
        lastTime = time;
        return;
      }
      // Clamped so a long stall advances one ordinary frame, not a whole second.
      const dt = lastTime ? Math.min((time - lastTime) / 1000, 1 / 20) : 1 / 60;
      lastTime = time;
      scene.update(dt);
      paint();
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
      },
      { rootMargin: '120px' }
    );
    intersectionObserver.observe(wrap);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return { wrapRef, canvasRef };
}
