"use client";
import { useState, useEffect } from "react";
import { Outfit, Urbanist } from "next/font/google";
const outfit = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700"], // o los pesos que estés usando
});
export default function AnimatedLogo() {
  const leftFull = "Fran";
  const rightFull = "Computer";
  const base = "FC";

  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [phase, setPhase] = useState("expand");
  const [step, setStep] = useState(0);

  useEffect(() => {
    let interval;

    if (phase === "expand") {
      interval = setInterval(() => {
        setLeft((prev) => {
          if (prev.length < leftFull.length - 1) {
            return leftFull.slice(1, prev.length + 2);
          }
          return prev;
        });

        setRight((prev) => {
          if (prev.length < rightFull.length - 1) {
            return rightFull.slice(1, prev.length + 2);
          }
          return prev;
        });

        setStep((prev) => {
          const next = prev + 1;
          if (next >= Math.max(leftFull.length - 1, rightFull.length - 1)) {
            clearInterval(interval);
            setTimeout(() => setPhase("pause"), 1200);
          }
          return next;
        });
      }, 100);
    }

    if (phase === "contract") {
      interval = setInterval(() => {
        setLeft((prev) => prev.slice(0, -1));
        setRight((prev) => prev.slice(0, -1));
        setStep((prev) => {
          const next = prev - 1;
          if (next <= 0) {
            clearInterval(interval);
            setTimeout(() => setPhase("expand"), 1000);
          }
          return next;
        });
      }, 60);
    }

    if (phase === "pause") {
      setTimeout(() => {
        setPhase("contract");
      }, 800);
    }

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <h1
      className={`text-2xl font-bold text-[#0fc555] tracking-wide ${outfit.className}`}
    >
      F<span className="inline-block">{left}</span>C
      <span className="inline-block">{right}</span>
      <span className="text-[#0fc555] animate-pulse">.</span>
    </h1>
  );
}
