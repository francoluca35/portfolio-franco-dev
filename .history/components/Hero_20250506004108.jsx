"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#3e1b89] text-white">
      {/* Parte derecha verde lima */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#252525] z-0" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20">
        {/* Texto */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#D3F56A]"
          >
            Fullstack Developer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-white max-w-md"
          >
            Me especializo en crear productos digitales modernos, escalables y
            con gran experiencia de usuario.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 text-sm text-white/90">
            <p>• Diseño UI/UX, APIs y bases de datos</p>
            <p>• Web apps responsivas y animadas</p>
            <p>• Código limpio, moderno y reutilizable</p>
            <p>• Experiencia en proyectos internacionales</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative md:w-1/2 mt-12 md:mt-0 flex justify-center z-10"
        >
          {/* Cuadro blanco detrás (fino) */}
          <div className="absolute button-4 left-6 w-64 h-64 md:w-80 md:h-80 border border-white z-0" />

          {/* Imagen principal */}
          <div className="relative w-64 h-64 md:w-80 md:h-80   shadow-2xl overflow-hidden z-10">
            <Image
              src="/assets/yo-franco.png"
              alt="Foto de Franco"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute bottom-20 left-20 w-32 h-32 border border-dashed border-white opacity-30" />
        <div className="absolute top-40 right-40 w-12 h-12 bg-[#6C3FCF] opacity-50 rotate-45" />
        <div className="absolute bottom-10 right-10 h-10 w-px bg-white opacity-30" />
        {/* Agregá más con absolute si querés más detalles */}
      </div>
    </section>
  );
}
