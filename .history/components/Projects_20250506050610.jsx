"use client";

import { useState } from "react";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    category: "web",
    title: "Portfolio Personal",
    description: "Sitio web personal responsive con Next.js",
    image: "/assets/proyecto1.png",
    link: "https://tusitio.com",
  },
  {
    id: 2,
    category: "app",
    title: "App de Tareas",
    description: "App fullstack para gestión de tareas",
    image: "/assets/proyecto2.png",
    link: "https://tuapp.com",
  },
  // Agrega más proyectos aquí...
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
    <section className="bg-[#1e9a6f] ">
      <h2 className="text-center text-2xl sm:text-3xl font-bold font-mono text-black mb-6">
        Proyectos
      </h2>

      {/* Botones de filtro */}
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

      {/* Grid de proyectos */}
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
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-center items-center text-center text-white">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded-full font-bold hover:bg-gray-200"
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
