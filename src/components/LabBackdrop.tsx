"use client";

import { useEffect, useRef } from "react";

// Project a small rotating 3D mesh onto canvas without a WebGL dependency.
export default function LabBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let width = 0;
    let height = 0;
    let frame = 0;
    let angle = 0.3;
    let lastTime = 0;
    let visible = true;
    let mouseX = 0;
    let mouseY = 0;
    let lineColor = "56, 189, 248";
    let dotColor = "168, 85, 247";
    const points = Array.from({ length: 9 }, (_, row) =>
      Array.from({ length: 24 }, (_, column) => {
        const latitude = ((row + 1) / 10) * Math.PI;
        const longitude = (column / 24) * Math.PI * 2;
        return {
          x: Math.sin(latitude) * Math.cos(longitude),
          y: Math.cos(latitude),
          z: Math.sin(latitude) * Math.sin(longitude),
        };
      }),
    );

    function draw() {
      if (!context) return;
      context.clearRect(0, 0, width, height);
      const radius = Math.min(width * 0.38, height * 0.47, 340);
      const centerX = width > 930 ? width * 0.73 : width * 0.65;
      const centerY = height * 0.45;
      const projected = points.map((row) => row.map((point) => {
        const rotation = angle + mouseX * 0.12;
        const x = point.x * Math.cos(rotation) - point.z * Math.sin(rotation);
        const z = point.x * Math.sin(rotation) + point.z * Math.cos(rotation);
        const tilt = 0.3 + mouseY * 0.08;
        const y = point.y * Math.cos(tilt) - z * Math.sin(tilt);
        const depth = point.y * Math.sin(tilt) + z * Math.cos(tilt);
        const scale = 3 / (3 - depth);
        return { x: centerX + x * radius * scale, y: centerY + y * radius * scale, depth };
      }));

      projected.forEach((row, rowIndex) => row.forEach((point, column) => {
        context.strokeStyle = `rgba(${lineColor}, ${0.035 + (point.depth + 1) * 0.045})`;
        context.lineWidth = 0.7;
        for (const next of [row[(column + 1) % row.length], projected[rowIndex + 1]?.[column]]) {
          if (!next) continue;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(next.x, next.y);
          context.stroke();
        }
        context.fillStyle = `rgba(${dotColor}, ${0.16 + (point.depth + 1) * 0.13})`;
        context.beginPath();
        context.arc(point.x, point.y, point.depth > 0 ? 1.5 : 1, 0, Math.PI * 2);
        context.fill();
      }));
    }

    function animate(time: number) {
      if (time - lastTime >= 1000 / 30) {
        angle += Math.min(time - (lastTime || time), 64) * 0.00008;
        lastTime = time;
        draw();
      }
      frame = requestAnimationFrame(animate);
    }

    function syncAnimation() {
      cancelAnimationFrame(frame);
      lastTime = 0;
      draw();
      if (!motion.matches && visible && !document.hidden) frame = requestAnimationFrame(animate);
    }

    function resize() {
      if (!canvas || !context) return;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    }

    function move(event: PointerEvent) {
      if (!pointer.matches || motion.matches) return;
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    }

    function updateColors() {
      const styles = getComputedStyle(document.documentElement);
      lineColor = styles.getPropertyValue("--canvas-line-rgb").trim() || "56, 189, 248";
      dotColor = styles.getPropertyValue("--canvas-dot-rgb").trim() || "168, 85, 247";
      draw();
    }

    const themeObserver = new MutationObserver(updateColors);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    updateColors();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });
    observer.observe(canvas);
    motion.addEventListener("change", syncAnimation);
    document.addEventListener("visibilitychange", syncAnimation);
    window.addEventListener("pointermove", move, { passive: true });
    resize();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      themeObserver.disconnect();
      resizeObserver.disconnect();
      motion.removeEventListener("change", syncAnimation);
      document.removeEventListener("visibilitychange", syncAnimation);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return <canvas ref={canvasRef} className="lab-backdrop" aria-hidden="true" />;
}
