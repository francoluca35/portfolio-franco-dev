import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/Hero"), { ssr: false });
const Experience = dynamic(() => import("../components/Experience"), {
  ssr: false,
});
const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const About = dynamic(() => import("../components/About"), { ssr: false });
const Contact = dynamic(() => import("../components/Contact"), { ssr: false });

export default function HomePage() {
  return (
    <main>
      <section id="inicio">
        <Hero />
      </section>
      <section className="hidden">
        <p>
          Franco Parera es un desarrollador web fullstack especializado en
          React, Next.js, Node.js y MongoDB. Construye aplicaciones modernas,
          rápidas, escalables y accesibles para empresas y proyectos personales.
          Con experiencia en diseño, backend y frontend, ofrece soluciones
          digitales que transforman ideas en productos reales.
        </p>
      </section>

      <section id="about" className="bg-[#181818] text-white">
        <About />
      </section>
      <section id="skills" className="bg-[#181818] text-white">
        <Experience />
      </section>
      <section id="proyectos" className="bg-[#0E0E0E] text-white">
        <Projects />
      </section>
      <section id="contacto">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
