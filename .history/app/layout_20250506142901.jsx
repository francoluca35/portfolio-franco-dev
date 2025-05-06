import Nav from "../components/Nav";
import "../styles/globals.css";
import { Outfit } from "next/font/google";
import ScrollTopButton from "../components/ScrollTopButton";

export const metadata = {
  title: "Franco Parera | Desarrollador Web Fullstack",
  description:
    "Portfolio de Franco Parera, desarrollador web especializado en React, Next.js y soluciones escalables.",
  keywords:
    "desarrollador web, portfolio, frontend, backend, next.js, react, diseño web, SEO, Buenos Aires",
  authors: [{ name: "Franco Parera" }],
  creator: "Franco Parera",
  openGraph: {
    title: "Franco Parera | Desarrollador Web",
    description:
      "Conocé mis proyectos como desarrollador web fullstack. Diseño moderno, rendimiento y SEO.",
    url: "https://francomputer.com.ar",
    siteName: "Franco Parera | Portfolio",
    images: [
      {
        url: "	https://francomputer.com.ar/_next/image?url=%2Fassets%2Fsobre-mi.jpg&w=1920&q=75",
        width: 1200,
        height: 630,
        alt: "Imagen portfolio Franco",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franco Parera | Desarrollador Web",
    description:
      "Portfolio profesional de Franco Parera con proyectos reales, experiencia y habilidades técnicas.",
    images: [
      "	https://francomputer.com.ar/_next/image?url=%2Fassets%2Fsobre-mi.jpg&w=1920&q=75",
    ],
  },
};
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body className={`antialiased scroll-smooth ${outfit.className}`}>
        <Nav />
        <div className="pt-20">{children}</div>
        <ScrollTopButton />
      </body>
    </html>
  );
}
