"use client";

import { FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  const phone = "+541131199882";
  const message = "Hola!, me gustaria hablar con franco.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <section className="bg-[#272626] text-white py-20 px-6 flex justify-center">
      <div className=" bg-gradient-to-br  from-[#0c0713] via-[#1b7c3f] to-[#131212] rounded-xl p-8 md:p-14 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto y enlaces */}
        <div className="text-left md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Siempre estoy dispuesto a charlar
          </h2>
          <p className="text-lg mb-2">
            <a
              href="mailto:francolucap1@gmail.com"
              className="underline font-bold hover:text-[#151515] transition"
            >
              Hazme un correo electrónico
            </a>{" "}
            a Francolucap1@gmail.com
          </p>
          <p className="text-lg mb-4">o contactame por mis redes sociales.</p>
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://www.instagram.com/franco.dev24/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#000000]"
              aria-label="Instagram de Franco Parera"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/franco-parera/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#000000]"
              aria-label="Linkedin de Franco Parera"
              title="Linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#000000]"
              aria-label="Whatsapp de Franco Parera"
              title="Whatsapp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="relative w-64 h-64 md:w-96 md:h-72 flex items-center justify-center">
          <Image
            src="/assets/nube.png"
            alt="Nube decorativa"
            fill
            sizes="(max-width: 768px) 256px, 384px"
            className="object-contain opacity-80"
            priority={false}
            loading="lazy"
          />

          <div className="absolute w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/assets/contact.webp"
              alt="Cartoon Franco Parera"
              fill
              sizes="(max-width: 768px) 192px, 256px"
              className="object-contain"
              priority={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
