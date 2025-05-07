"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import dynamic from "next/dynamic";

// Cargar AnimatedLogo de manera diferida para optimizar la carga
const AnimatedLogo = dynamic(() => import("../utils/AnimatedLogo"), {
  ssr: false,
});

const menuItems = [
  { href: "#inicio", label: "INICIO" },
  { href: "#about", label: "SOBRE MI" },
  { href: "#skills", label: "HABILIDADES" },
  { href: "#proyectos", label: "PROYECTOS" },
  { href: "#contacto", label: "CONTACTO" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Cambia el estado para cambiar el fondo al hacer scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phone = "+541131199882";
  const message = "Hola!, me gustaria hablar con franco.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <nav
        className={`fixed w-full px-6 py-4 flex justify-between items-center z-50 transition-colors duration-300 ${
          scrolled ? "bg-[#2b06364b] shadow-lg" : "bg-transparent"
        }`}
      >
        <AnimatedLogo /> {/* Logo cargado de forma diferida */}
        <button
          onClick={() => setIsOpen(true)}
          className="space-y-2"
          aria-label="Abrir menú de navegación"
          title="Menú"
        >
          <span className="block w-6 h-0.5 bg-[#0fc555]" />
          <span className="block w-6 h-0.5 bg-[#0fc555]" />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              bounce: 0.25,
              duration: 0.8,
            }}
            className="fixed inset-0 bg-[#2c1167] text-white flex flex-col items-center justify-center text-5xl font-extrabold z-50"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-8 text-lg font-bold hover:text-black"
            >
              cerrar
            </button>

            <ul className="space-y-8 text-center">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="hover:text-black hover:text-6xl transition-all duration-300"
                >
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="text-2xl mt-16 flex gap-8">
              <a
                href="https://www.linkedin.com/in/franco-parera/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0077B5] transition-colors duration-300"
                aria-label="Linkedin de Franco Parera"
                title="Linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/francoluca35"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#010101] transition-colors duration-300"
                aria-label="GitHub de Franco Parera"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/franco.dev24/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c550ff] transition-colors duration-300"
                aria-label="Instagram de Franco Parera"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#34b851] transition-colors duration-300"
                aria-label="Whatsapp de Franco Parera"
                title="Whatsapp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
