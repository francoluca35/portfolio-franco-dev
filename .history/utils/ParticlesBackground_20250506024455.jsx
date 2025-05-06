"use client";
import Particles from "react-tsparticles";
import { useMemo } from "react";

export default function ParticlesBackground() {
  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: "transparent" },
      fpsLimit: 60,
      particles: {
        number: {
          value: 80,
          density: { enable: true, area: 800 },
        },
        color: { value: "#74dfff" }, // color celeste claro
        shape: { type: "circle" },
        opacity: { value: 0.3 },
        size: { value: 2 },
        move: {
          direction: "bottom",
          enable: true,
          outModes: { default: "out" },
          speed: 2,
          straight: true,
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="rain-particles"
      options={options}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
}
