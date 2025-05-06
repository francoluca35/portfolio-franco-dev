"use client";

import { useState } from "react";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    category: "web",
    title: "Web Emprendimiento",
    description: "Sitio web DeamonDD Diseño & Desarrollo",
    image: "/assets/proyects/deamondd.avif",
    link: "https://deamondd.com",
  },
  {
    id: 2,
    category: "web",
    title: "Web Empresa Gastronomica",
    description: "Sitio web JLA Técnico",
    image: "/assets/proyects/jla.avif",
    link: "https://jlatecnicos.com",
  },
  {
    id: 3,
    category: "web",
    title: "Web de Viajes",
    description: "Sitio web Transportes Maurello S.A",
    image: "/assets/proyects/maurello-web.avif",
    link: "https://empresacolectivo.vercel.app",
  },
  {
    id: 4,
    category: "app",
    title: "App Control de finanzas",
    description: "App fullstack para gestión de finanzas para JLA Técnico",
    image: "/assets/proyects/app-jla.avif",
    link: "https://jlatecnicos.online",
  },

  {
    id: 5,
    category: "app",
    title: "App Gestión de viajes",
    description:
      "App fullstack para la organización de viajes y control de pasajes",
    image: "/assets/proyects/maurello-app.avif",
    link: "https://appcolectivos.vercel.app",
  },

  {
    id: 6,
    category: "app",
    title: "App de reservas",
    description:
      "App fullstack para gestión de reservas para cancahs de futbol y padel",
    image: "/assets/proyects/yael-app.avif",
    link: "https://yael-app.vercel.app",
  },
];

const categories = [
  { label: "Todos", value: "all" },
  { label: "Paginas Web", value: "web" },
  { label: "App Web", value: "app" },
];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  return (
    <section className=" bg-gradient-to-br  from-[#0c0713] via-[#711eba] to-[#000000] py-12 px-6">
      <h1 className="text-center text-4xl  md:text-6xl  font-extrabold text-white mb-6">
        Proyectos
      </h1>
      <h2 className="text-center mb-6 -mt-2 text-white">
        Cada proyecto, una solución a medida. Mirá lo que puedo hacer por vos.
      </h2>

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
          <div
            key={project.id}
            className="relative group rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center items-center text-center text-white">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#451780] text-white px-4 py-2 rounded-full font-bold hover:bg-[#6f38b7d3]"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
