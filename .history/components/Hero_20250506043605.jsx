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
      className="relative w-full min-h-screen bg-gradient-to-br from-[#1f0d3a] via-[#36147f] to-[#6C3FCF] text-white px-4 sm:px-12 py-20 -mt-20 flex items-center justify-center"
    >
      <ParticlesBackground />

      <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full backdrop-blur-md bg-[#171717]/60 z-10" />
      <MatrixRain />

      <div className="hidden md:block absolute top-0 right-[33%] w-24 h-full bg-gradient-to-r from-transparent to-[#171717] z-20" />

      {/*Contenido visible */}
      <div className="relative z-30 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-center md:justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="absolute top-6 left-6 w-60 h-60 sm:w-72 sm:h-72 border border-white z-0" />
          <div className="relative w-[320px] h-[420px] sm:w-[360px] sm:h-[480px] shadow-2xl z-10">
            <Image
              src="/assets/yo-hero.png"
              alt="Franco Parera - desarrollador fullstack"
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </motion.div>

        <div className="backdrop-blur-md bg-[#1f0d3a]/30 rounded-xl p-6 md:p-10 shadow-lg border border-white/10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0fc573] flex justify-center items-center gap-3 flex-wrap"
          >
            Fullstack Developer
            <FaJs className="text-yellow-400 text-3xl md:text-4xl" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-white max-w-xl mx-auto mt-4"
          >
            Transformo ideas en experiencias digitales robustas, combinando
            arquitectura escalable con diseño funcional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/90 max-w-md mx-auto pt-6"
          >
            <p>
              <span className="text-[#0fc555]">•</span> Optimización SEO y
              estructura semántica
            </p>
            <p>
              <span className="text-[#0fc555]">•</span> Web apps responsivas y
              animadas
            </p>
            <p>
              <span className="text-[#0fc555]">•</span> Código limpio, moderno y
              reutilizable
            </p>
            <p>
              <span className="text-[#0fc555]">•</span> Experiencia en proyectos
              internacionales
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
