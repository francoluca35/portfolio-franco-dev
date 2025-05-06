import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main>
      <section id="inicio">
        <Hero />
      </section>

      <section id="experiencia" className="bg-[#181818] text-white ">
        <Experience />
      </section>

      <section id="proyectos" className="bg-[#0E0E0E] text-white py-20 px-6">
        <Projects />
      </section>

      <section id="contacto" className="bg-[#6C3FCF] text-white py-20 px-6">
        <Footer />
      </section>
    </main>
  );
}
