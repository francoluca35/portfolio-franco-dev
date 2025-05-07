"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Outfit } from "next/font/google";
import Nav from "../components/Nav";
import ScrollTopButton from "../components/ScrollTopButton";
import "../styles/globals.css";

// Carga diferida del componente AnimatedLogo
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

// Optimización de la fuente Outfit (cargar solo el peso necesario)
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"], // Cargar solo el peso necesario
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
        {/* Pre-cargar la fuente Outfit si es crítica para la carga */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400&display=swap"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
        {/* También podrías agregar meta tags y otros links aquí, como Open Graph, etc. */}
      </head>
      <body className={`antialiased scroll-smooth ${outfit.className}`}>
        <Nav />
        <div className="pt-20">{children}</div>
        <ScrollTopButton />
      </body>
    </html>
  );
}
