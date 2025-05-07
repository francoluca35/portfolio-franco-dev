"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaJs } from "react-icons/fa";
import ParticlesBackground from "../utils/ParticlesBackground";
import MatrixRain from "../utils/MatrixRain";

export default function Hero() {
  return (
    <section
      aria-label="Presentación de Franco Parera como Fullstack Developer"
      className="relative w-full min-h-screen bg-gradient-to-br from-[#0c0713] via-[#3e066f] to-[#000000] text-white px-4 sm:px-12 p-20 -mt-20 flex items-center justify-center"
    >
      <ParticlesBackground />
      <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full backdrop-blur-md bg-[#171717]/60 z-10" />
      <MatrixRain />
      <div className="hidden md:block absolute top-0 right-[33%] w-24 h-full bg-gradient-to-r from-transparent to-[#171717] z-20" />

      {/* Contenido visible */}
      <div className="relative z-30 max-w-6xl w-full flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Imagen optimizada */}
        <Image
          src="/assets/yo-hero.avif" // Cambiar a formato WebP o AVIF
          alt="Franco Parera - Fullstack Developer"
          width={640}
          height={640}
          priority
          sizes="(max-width: 768px) 300px, 600px"
          loading="lazy" // Carga diferida
        />
        {/* Resto del contenido */}
      </div>
    </section>
  );
}
