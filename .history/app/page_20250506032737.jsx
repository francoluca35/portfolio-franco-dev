"use client";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen px-4 sm:px-8 md:px-16">
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}