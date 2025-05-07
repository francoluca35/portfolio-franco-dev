"use client";

import { Outfit } from "next/font/google"; // Para cargar la fuente Outfit
import Nav from "../components/Nav"; // Componente de navegación
import ScrollTopButton from "../components/ScrollTopButton"; // Botón de desplazamiento hacia arriba
import "../styles/globals.css"; // Estilos globales
import { metadata } from "./metadata";

// Cargar la fuente Outfit de manera eficiente (cargar solo los pesos necesarios)
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"], // Solo cargar los pesos necesarios
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />

        {/* Meta tags SEO, Open Graph, y Twitter */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.authors[0].name} />
        <meta name="creator" content={metadata.creator} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />

        {/* Twitter */}
        <meta property="twitter:card" content={metadata.twitter.card} />
        <meta property="twitter:title" content={metadata.twitter.title} />
        <meta
          property="twitter:description"
          content={metadata.twitter.description}
        />
        <meta property="twitter:image" content={metadata.twitter.images[0]} />
      </head>
      <body className={`antialiased scroll-smooth ${outfit.className}`}>
        <Nav /> {/* Navegación principal */}
        <div className="pt-20">{children}</div> {/* Contenido principal */}
        <ScrollTopButton /> {/* Botón de desplazamiento hacia arriba */}
      </body>
    </html>
  );
}
