"use client";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Desarrollo Web Corporativo",
    description:
      "Sitios institucionales modernos, optimizados para SEO y completamente responsivos.",
    source: "Clientes independientes",
  },
  {
    title: "Sistemas de Gestión",
    description:
      "Aplicaciones CRUD, dashboards, administración de usuarios y módulos personalizados.",
    source: "Proyectos freelance",
  },
  {
    title: "Integraciones externas",
    description:
      "Pasarelas de pago, APIs REST, autenticación con terceros y manejo de bases de datos.",
    source: "Startups y PyMEs",
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-[#2e1d56] py-20 text-white px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12">Experiencia.</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-white/30 rounded-2xl p-6 relative backdrop-blur-sm bg-white/5"
            >
              {/* Top bar estilo ventana */}
              <div className="flex space-x-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              {/* Contenido */}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-white/90 mb-4">{item.description}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white font-semibold">{item.source}</span>
                <span className="text-[#0fc573] font-bold cursor-pointer hover:underline">
                  Leer más →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
