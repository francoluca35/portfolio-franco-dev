import Nav from "../components/Nav";
import "../styles/globals.css";

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
    url: "https://tusitio.com",
    siteName: "Franco Parera | Portfolio",
    images: [
      {
        url: "https://tusitio.com/og-image.jpg",
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
    images: ["https://tusitio.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="mt-30 antialiased scroll-smooth">
        <Nav />
        <div className="pt-20">{children}</div>{" "}
      </body>
    </html>
  );
}
