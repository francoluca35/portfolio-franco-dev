"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";

const AnimatedLogo = dynamic(() => import("../utils/AnimatedLogo"), {
  ssr: false,
});

const menuItems = [
  { href: "#inicio", label: "menu.inicio" },
  { href: "#about", label: "menu.about" },
  { href: "#skills", label: "menu.skills" },
  { href: "#proyectos", label: "menu.proyectos" },
  { href: "#contacto", label: "menu.contacto" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { t, i18n } = useTranslation(); // Hook para traducción
  console.log("Traducción de menu.inicio:", t("menu.inicio"));
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
        <AnimatedLogo />
        <div className="flex gap-3 items-center">
          {/* Selector de idioma */}
          <button
            onClick={() => i18n.changeLanguage("es")}
            className={`text-sm px-2 py-1 rounded ${
              i18n.language === "es"
                ? "bg-[#0fc555] text-white"
                : "bg-white text-black"
            }`}
          >
            ES
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={`text-sm px-2 py-1 rounded ${
              i18n.language === "en"
                ? "bg-[#0fc555] text-white"
                : "bg-white text-black"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage("it")}
            className={`text-sm px-2 py-1 rounded ${
              i18n.language === "it"
                ? "bg-[#0fc555] text-white"
                : "bg-white text-black"
            }`}
          >
            IT
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className="space-y-2 ml-3"
            aria-label="Abrir menú de navegación"
            title="Menú"
          >
            <span className="block w-6 h-0.5 bg-[#0fc555]" />
            <span className="block w-6 h-0.5 bg-[#0fc555]" />
          </button>
        </div>
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
              {t("menu.cerrar")}
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
                    {t(item.label)}
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
