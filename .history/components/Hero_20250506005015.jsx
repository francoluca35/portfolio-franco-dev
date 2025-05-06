"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#6C3FCF] text-white overflow-hidden flex items-center justify-center">
      {/* Fondo derecho verde */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#181818] z-0" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20">
        {/* Columna izquierda: texto */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#D3F56A]"
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

        {/* Columna derecha: imagen y fondo blanco */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative mt-12 md:mt-0 flex justify-center items-center"
        >
          {/* Cuadro blanco detrás */}
          <div className="absolute bottom-[-12px] left-[60px] w-64 h-64 md:w-80 md:h-80 border border-white z-0" />

          {/* Imagen principal */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 -left-12 shadow-2xl overflow-hidden z-10">
            <Image
              src="/assets/yo-franco.png" // asegurate de que este archivo exista
              alt="Foto de Franco"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
