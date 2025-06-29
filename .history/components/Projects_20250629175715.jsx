"use client";

import { useState, memo } from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projectsData = [
  {
    id: 1,
    category: "web",
    title: "Web Diseño & Desarrollo web",
    description: "Sitio web DeamonDD Diseño & Desarrollo",
    image: "/assets/proyects/deamondd.avif",
    link: "https://deamondd.com",
    github: "https://github.com/francoluca35/deamon-dd",
  },
  {
    id: 2,
    category: "web",
    title: "Web Empresa Gastronomica",
    description: "Sitio web JLA Técnico",
    image: "/assets/proyects/jla.avif",
    link: "https://jlatecnicos.com",
    github: "https://github.com/francoluca35/web-site-jla",
  },
  {
    id: 3,
    category: "web",
    title: "Web de Viajes",
    description: "Sitio web Transportes Maurello S.A",
    image: "/assets/proyects/maurello-web.avif",
    link: "https://empresacolectivo.vercel.app",
    github: "https://github.com/francoluca35/empresacolectivo",
  },
  {
    id: 4,
    category: "app",
    title: "App Control de finanzas",
    description: "App fullstack para gestión de finanzas para JLA Técnico",
    image: "/assets/proyects/app-jla.avif",

    github: "https://github.com/francoluca35/jla-app",
  },
  {
    id: 5,
    category: "app",
    title: "App Gestión de viajes",
    description:
      "App fullstack para la organización de viajes y control de pasajes",
    image: "/assets/proyects/maurello-app.avif",
    github: "https://github.com/francoluca35/appcolectivos",
  },
  {
    id: 6,
    category: "app",
    title: "App de reservas",
    description:
      "App fullstack para gestión de reservas para canchas de futbol y padel",
    image: "/assets/proyects/caruso-app.png",
    link: "https://yael-app.vercel.app",
    github: "https://github.com/francoluca35/yael-app",
  },
  {
    id: 7,
    category: "app",
    title: "Comandas restaurante",
    description:
      "App fullstack para gestión de reservas para canchas de futbol y padel",
    image: "/assets/proyects/perumar-1.png",
    github: "https://github.com/francoluca35/comandas",
  },
];

const categories = [
  { label: "Todos", value: "all" },
  { label: "Páginas Web", value: "web" },
  { label: "App Web", value: "app" },
];

const ProjectCard = memo(({ project }) => {
  return (
    <div className="relative group rounded-xl overflow-hidden bg-black/70 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={250}
        className="object-cover w-full h-[200px]"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-white mt-1">
          {project.category === "web" ? "Páginas Web" : "App Web"}
        </p>
      </div>

      <div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-2 rounded-full hover:bg-gray-400"
          >
            <FiExternalLink size={18} />
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-2 rounded-full hover:bg-gray-400"
          >
            <FiGithub size={18} />
          </a>
        )}
      </div>
    </div>
  );
});

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projectsData.slice(0, 6) // solo los primeros 6
      : projectsData.filter((p) => p.category === active);

  return (
    <section className="bg-gradient-to-br from-[#0c0713] via-[#711eba] to-[#000000] py-12 px-6">
      <h2 className="text-center text-4xl md:text-6xl font-extrabold text-white mb-6">
        Proyectos
      </h2>
      <h3 className="text-center mb-6 -mt-2 text-white">
        Cada proyecto, una solución a medida. Mirá lo que puedo hacer por vos.
      </h3>

      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`px-5 py-2 rounded-full font-mono text-lg transition-all duration-200
              ${
                active === cat.value
                  ? "bg-white text-black"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
