"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

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
              bounce: 0.55,
              duration: 0.8,
            }}
            className="fixed inset-0 bg-[#2c1167] text-white flex flex-col items-center justify-center text-5xl font-extrabold z-50"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-8 text-lg font-bold hover:text-black"
            >
              close
            </button>

            <ul className="space-y-8 text-center ">
              <li className="hover:text-black hover:text-6xl">
                <Link href="#inicio" onClick={() => setIsOpen(false)}>
                  INICIO
                </Link>
              </li>
              <li className="hover:text-black  hover:text-6xl">
                <Link href="#experiencia" onClick={() => setIsOpen(false)}>
                  EXPERIENCIA
                </Link>
              </li>
              <li className="hover:text-black hover:text-6xl">
                <Link href="#proyectos" onClick={() => setIsOpen(false)}>
                  PROYECTOS
                </Link>
              </li>
              <li className="hover:text-black hover:text-6xl">
                <Link href="#contacto" onClick={() => setIsOpen(false)}>
                  CONTACTO
                </Link>
              </li>
            </ul>

            <div className="text-2xl mt-16 flex gap-8">
              <a
                href="https://www.linkedin.com/in/franco-parera/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0077B5] transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/francoluca35"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#010101] transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/franco.dev24/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c550ff] transition-colors duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
