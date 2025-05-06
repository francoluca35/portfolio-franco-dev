"use client";

import { useState, useEffect } from "react";

export default function AnimatedLogo() {
  const fullText = "FranComputer";
  const baseText = "FC";
  const [text, setText] = useState(baseText);
  const [writing, setWriting] = useState(true);

  useEffect(() => {
    let interval;
    if (writing) {
      interval = setInterval(() => {
        setText((prev) => {
          if (prev.length < fullText.length) {
            return fullText.slice(0, prev.length + 1);
          } else {
            clearInterval(interval);
            setTimeout(() => setWriting(false), 1500); // espera antes de borrar
            return prev;
          }
        });
      }, 100);
    } else {
      interval = setInterval(() => {
        setText((prev) => {
          if (prev.length > baseText.length) {
            return prev.slice(0, -1);
          } else {
            clearInterval(interval);
            setTimeout(() => setWriting(true), 1000); // espera antes de volver a escribir
            return prev;
          }
        });
      }, 60);
    }

    return () => clearInterval(interval);
  }, [writing]);

  return (
    <h1 className="text-2xl font-bold text-[#0fc555] tracking-wide">
      {text}
      <span className="animate-pulse text-[#0fc555]">|</span>
    </h1>
  );
}
