"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 60, // Cantidad de gotas
            density: { enable: true, area: 800 },
          },
          color: { value: "#88f7ff" }, // Azul celeste tipo lluvia
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
            random: true,
          },
          size: {
            value: 1.5,
            random: { enable: true, minimumValue: 1 },
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "bottom",
            straight: true,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
}
