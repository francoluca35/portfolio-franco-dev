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
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400&display=swap"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />

        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.authors[0].name} />
        <meta name="creator" content={metadata.creator} />

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

        <meta property="og:image" content={metadata.openGraph.images[0].url} />
      </Head>
      <body className={`antialiased scroll-smooth ${outfit.className}`}>
        <DynamicNav />
        <div className="pt-20">{children}</div>
        <DynamicScrollTopButton />
      </body>
    </html>
  );
}
