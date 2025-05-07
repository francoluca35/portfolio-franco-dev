"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import Head from "next/head"; // Para pre-cargar el CV si es necesario

export default function About() {
  const [descargando, setDescargando] = useState(false);
  const [descargado, setDescargado] = useState(false);

  const handleDescarga = () => {
    if (descargando || descargado) return;

    setDescargando(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/pdfs/cv-parera-franco-desarrollo.pdf";
      link.download = "cv-parera-franco-desarrollo.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDescargando(false);
      setDescargado(true);
    }, 2000);
  };

  return (
    <>
      {/* Pre-cargar la imagen de fondo clave si es necesario */}
      <Head>
        <link
          rel="preload"
          href="/assets/fondos/fondo-projectos.avif"
          as="image"
        />
      </Head>

      <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        {/* Aquí se elimina "loading='lazy'" y se mantiene "priority" */}
        <Image
          src="/assets/fondos/fondo-projectos.avif"
          alt="Fondo"
          fill
          priority // La imagen clave tiene "priority"
          sizes="(max-width: 768px) 100vw, 100vw" // Tamaños responsivos
          className="object-cover z-0"
        />

        <div className="absolute inset-0 bg-black/70 z-10 backdrop-blur-sm" />

        <div className="relative z-20 max-w-6xl px-4 sm:px-8 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72">
            <div className="absolute inset-0 rounded-full rotating-border z-0" />
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden p-[5px] bg-black">
              {/* Imagen del perfil con lazy load */}
              <Image
                src="/assets/sobre-mi.avif"
                alt="Franco Parera"
                fill
                priority // Para mantener la prioridad en la imagen de perfil
                sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 250px, 288px"
                className="object-cover rounded-full"
                loading="lazy" // Lazy load para la imagen de perfil
              />
            </div>
          </div>

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
              className="text-white leading-relaxed"
            >
              Soy <strong>desarrollador web fullstack</strong> con experiencia
              en <strong>proyectos digitales escalables</strong>, especializado
              en <strong>Next.js, React, Node.js</strong> y{" "}
              <strong>MongoDB</strong>. Diseño y desarrollo{" "}
              <strong>sitios web responsivos</strong>, optimizados para{" "}
              <strong>rendimiento, SEO y experiencia del usuario</strong>.
              Trabajo con enfoque en{" "}
              <strong>calidad, buenas prácticas, documentación</strong> y
              cumplimiento de plazos.
            </motion.p>

            <motion.button
              onClick={handleDescarga}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 font-mono text-lg px-8 py-3 rounded-full shadow-lg border border-white/10 transition-all
      ${
        descargado
          ? "bg-green-600 text-white"
          : descargando
          ? "bg-[#a765f2] text-white"
          : "bg-[#8e2df5] text-white hover:bg-[#7c23d3]"
      }`}
            >
              <FiDownload className="text-xl" />
              {descargado
                ? "En Ordenador"
                : descargando
                ? "Descargando..."
                : "Descargar CV"}
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}
