"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-start h-[90vh]">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Hola, soy Franco.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg md:text-2xl text-gray-300"
      >
        Desarrollador Web Fullstack. Construyo experiencias modernas e intuitivas.
      </motion.p>
    </section>
  );
}