"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import "../styles/rotating-border.css";

export default function About() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Fondo */}
      <Image
        src="/assets/fondos/fondo-projectos.avif"
        alt="Fondo"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Capa oscura con blur */}
      <div className="absolute inset-0 bg-black/70 z-10 backdrop-blur-sm" />

      {/* Contenido principal */}
      <div className="relative z-20 max-w-6xl px-4 sm:px-8 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Imagen con borde animado */}
        <div className="relative w-60 h-60 sm:w-72 sm:h-72">
          <div className="absolute inset-0 rounded-full rotating-border z-0" />
          <div className="relative z-10 w-full h-full rounded-full overflow-hidden p-[5px] bg-black">
            <Image
              src="/assets/sobre-mi.avif"
              alt="Franco Parera"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>

        {/* Texto descriptivo */}
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            <span className="text-[#0fc573]">Sobre</span> Mí
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white/90 leading-relaxed"
          >
            Desarrollador Fullstack con experiencia en proyectos web escalables
            usando Next.js, React, Node.js y MongoDB. Me especializo en crear
            interfaces responsivas, optimizadas y funcionales, priorizando la
            experiencia del usuario. Trabajo con enfoque en calidad,
            documentación y cumplimiento de plazos.
          </motion.p>

          <motion.a
            href="/pdfs/cv-parera-franco-desarrollo.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#8e2df5] text-white font-mono text-lg px-8 py-3 rounded-full shadow-lg border border-white/10 hover:bg-[#7c23d3] transition-all"
          >
            <FiDownload className="text-xl" />
            Descargar CV
          </motion.a>
        </div>
      </div>
    </section>
  );
}
