"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-[#6C3FCF] text-gray-100 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 relative overflow-hidden">
      {/* Texto */}
      <div className="md:w-1/2 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6"
        >
          Fullstack <span className="text-gray-300">Developer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-200 max-w-lg"
        >
          Me especializo en crear productos digitales modernos, escalables y con
          gran experiencia de usuario.
        </motion.p>

        <ul className="mt-8 text-sm text-gray-300 space-y-2">
          <li>• Diseño UI/UX, APIs y bases de datos</li>
          <li>• Web apps responsivas y animadas</li>
          <li>• Código limpio, moderno y reutilizable</li>
        </ul>
      </div>

      {/* Imagen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative z-10"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 border-[6px] border-white rounded-xl shadow-2xl overflow-hidden">
          <Image
            src="/images/tu-foto.png" // <--- Reemplazá este archivo en public/images/
            alt="Foto de Franco"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
