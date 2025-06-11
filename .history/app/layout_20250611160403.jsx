"use client";

import { Outfit } from "next/font/google";
import Head from "next/head";

import dynamic from "next/dynamic";
import "../styles/globals.css";
import { metadata } from "./metadata";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

const DynamicNav = dynamic(() => import("../components/Nav"), { ssr: false });
const DynamicScrollTopButton = dynamic(
  () => import("../components/ScrollTopButton"),
  { ssr: false }
);

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
        <link rel="canonical" href="https://francomputer.com.ar" />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400&display=swap"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <title>FranComputer | Desarrollo Web Fullstack - Franco Parera</title>
        <meta
          name="description"
          content="Portfolio de FranComputer - Desarrollo Web Fullstack con React, Next.js, Node.js y MongoDB. Aplicaciones modernas y escalables para empresas."
        />
        <meta name="author" content="Franco Parera" />
        <meta
          name="keywords"
          content="FranComputer, desarrollo web, fullstack, React, Next.js, MongoDB, programador freelance, aplicaciones web"
        />
        <meta
          name="google-site-verification"
          content="VcaUpPAGn2SPyM7z_rUY1uClctjjTLTW5n5R"
        />

        <meta
          property="og:title"
          content="FranComputer | Desarrollo Web Fullstack - Franco Parera"
        />
        <meta
          property="og:description"
          content="Portfolio profesional de Franco Parera, desarrollo web fullstack en React, Next.js y MongoDB."
        />
        <meta property="og:url" content="https://francomputer.com.ar/" />
        <meta property="og:site_name" content="FranComputer" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://francomputer.com.ar/assets/seo-banner.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Franco Parera",
              alternateName: "FranComputer",
              url: "https://francomputer.com.ar/",
              jobTitle: "Desarrollador Web Fullstack",
              sameAs: [
                "https://github.com/francoluca35",
                "https://www.linkedin.com/in/franco-parera/",
              ],
            }),
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-27M0KS481G"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-27M0KS481G');
            `,
          }}
        />
      </head>
      <body className={`antialiased scroll-smooth ${outfit.className}`}>
        <DynamicNav />
        <div className="pt-20">{children}</div>
        <DynamicScrollTopButton />
      </body>
    </html>
  );
}
