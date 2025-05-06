"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top navbar */}
      <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 bg-[#CFF25C] text-[#2B00AA]">
        <h1 className="text-2xl font-bold">franco.dev</h1>

        <button onClick={() => setIsOpen(true)} className="space-y-2">
          <span className="block w-6 h-0.5 bg-[#2B00AA]"></span>
          <span className="block w-6 h-0.5 bg-[#2B00AA]"></span>
        </button>
      </nav>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#E60000] text-white flex flex-col items-center justify-center text-5xl font-extrabold z-50"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-8 text-lg font-bold"
            >
              close
            </button>

            <ul className="space-y-8 text-center">
              <li>
                <Link href="#inicio" onClick={() => setIsOpen(false)}>
                  HOME
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
