"use client";

import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <section id="inicio">
          <Hero />
        </section>

        <section id="experiencia">
          <Experience />
        </section>

        <section id="proyectos">
          <Projects />
        </section>

        <section id="contacto">
          <Footer />
        </section>
      </main>
    </>
  );
}
