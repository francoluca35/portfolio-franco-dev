"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { RiNextjsFill } from "react-icons/ri";

export default function Hero() {
  return (
    <section
      aria-label="Presentación de Franco Parera como Fullstack Developer"
      className="-mt-20 relative w-full min-h-screen text-white flex items-center justify-center sm:px-12 py-20 bg-gradient-to-br from-[#1f0d3a] via-[#36147f] to-[#6C3FCF]"
    >
      {/* Fondo negro a la derecha */}
      <div className="hidden md:block absolute top-0 right-0 w-1/3 h-full bg-[#171717] z-0" />

      {/* Difuminado entre violeta y negro */}
      <div className="hidden md:block absolute top-0 right-[33%] w-24 h-full bg-gradient-to-r from-transparent to-[#171717] z-10" />

      {/* Contenido */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col items-center md:flex-row md:items-center md:justify-between gap-10 md:gap-0">
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="absolute top-6 left-6 w-60 h-60 md:w-80 md:h-80 border border-white z-0" />
          <div className="relative w-70 h-70 md:w-80 md:h-80 shadow-2xl overflow-hidden z-10">
            <Image
              src="/assets/yo-franco.png"
              alt="Franco Parera - desarrollador fullstack"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Texto */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-[#0fc573]"
          >
            Fullstack Developer
            <RiNextjsFill />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-white max-w-xl mx-auto md:mx-0"
          >
            Me especializo en crear productos digitales modernos, escalables y
            con gran experiencia de usuario.
          </motion.p>

          {/* Lista de habilidades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/90 max-w-lg mx-auto md:mx-0 pt-4"
          >
            <p>
              <span className="text-[#0fc555]">•</span> Diseño UI/UX, APIs y
              bases de datos
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
