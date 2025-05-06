"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md fixed top-0 w-full z-50">
      <ul className="flex justify-center gap-6">
        <li>
          <Link href="#inicio">Inicio</Link>
        </li>
        <li>
          <Link href="#experiencia">Experiencia</Link>
        </li>
        <li>
          <Link href="#proyectos">Proyectos</Link>
        </li>
        <li>
          <Link href="#contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
