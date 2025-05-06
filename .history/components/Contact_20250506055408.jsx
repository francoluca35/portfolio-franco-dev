"use client";

import { FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-[#1c1c1c] text-white py-20 px-6 flex justify-center">
      <div className="bg-[#753b6c] rounded-xl p-8 md:p-14 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg">
        {/* Texto y enlaces */}
        <div className="text-left md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            I'm always up for a chat.
          </h2>
          <p className="text-lg mb-2">
            <a
              href="mailto:francolucap1@gmail.com"
              className="underline font-bold hover:text-[#0fc573] transition"
            >
              Pop me an email
            </a>{" "}
            at Francolucap1@gmail.com
          </p>
          <p className="text-lg mb-6">or give me a shout on social media.</p>
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0fc573]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0fc573]"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Ilustración con nube blanca */}
        <div className="relative w-64 h-64 md:w-[350px] md:h-[300px] flex items-center justify-center">
          {/* Nube blanca */}
          <Image
            src="/assets/nube.png" // asegúrate de que esta imagen esté en /public/assets/
            alt="Nube decorativa"
            fill
            className="object-contain opacity-80"
          />
          {/* Caricatura */}
          <div className="absolute w-44 h-44 md:w-56 md:h-56">
            <Image
              src="/assets/contact.png" // tu caricatura sin fondo
              alt="Cartoon Franco Parera"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
