"use client";
import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth / 3;
    canvas.height = window.innerHeight;

    const binary = "01";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(23, 23, 23, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#9b5de5";
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = binary[Math.floor(Math.random() * binary.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        drops[i] =
          y * fontSize > canvas.height || Math.random() > 0.975 ? 0 : y + 1;
      });
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hidden md:block absolute top-0 right-0 w-1/3 h-full z-10 pointer-events-none"
    />
  );
}
