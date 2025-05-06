"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar superior */}
      <nav
        className={`fixed w-full px-6 py-4 flex justify-between items-center z-50 transition-colors duration-300 ${
          scrolled ? "bg-[#570c6c4b] shadow-lg" : "bg-transparent"
        }`}
      >
        <h1 className="text-2xl font-bold text-[#0fc555]">FranComputer</h1>

        <button onClick={() => setIsOpen(true)} className="space-y-2">
          <span className="block w-6 h-0.5 bg-[#0fc555]"></span>
          <span className="block w-6 h-0.5 bg-[#0fc555]"></span>
        </button>
      </nav>

      {/* Menú fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#2c1167] text-white  flex flex-col items-center justify-center text-5xl font-extrabold z-50"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-8 text-lg font-bold"
            >
              close
            </button>

            <ul className="space-y-8 text-center hover:text-black">
              <li>
                <Link href="#inicio" onClick={() => setIsOpen(false)}>
                  INICIO
                </Link>
              </li>
              <li>
                <Link href="#experiencia" onClick={() => setIsOpen(false)}>
                  EXPERIENCIA
                </Link>
              </li>
              <li>
                <Link href="#proyectos" onClick={() => setIsOpen(false)}>
                  PROYECTOS
                </Link>
              </li>
              <li>
                <Link href="#contacto" onClick={() => setIsOpen(false)}>
                  CONTACTO
                </Link>
              </li>
            </ul>

            <div className="text-sm font-light mt-16 flex gap-8">
              <a
                href="https://linkedin.com/in/francoparera"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
