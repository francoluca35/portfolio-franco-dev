"use client";

import { FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-[#753b6c] text-white py-20 px-6 flex justify-center">
      <div className="bg-[#1c1c1c] rounded-xl p-8 md:p-14 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto y enlaces */}
        <div className="text-left md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            I'm always up for a chat.
          </h2>
          <p className="text-lg mb-2">
            <a
              href="mailto:franco@deamond.com"
              className="underline font-bold hover:text-[#0fc573] transition"
            >
              Pop me an email
            </a>{" "}
            at franco@deamond.com
          </p>
          <p className="text-lg mb-4">or give me a shout on social media.</p>
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

        {/* Imagen tipo cartoon */}
        <div className="relative w-64 h-64 md:w-72 md:h-72">
          <Image
            src="/assets/cartoon-male.png" // asegurate que este archivo exista en /public/assets
            alt="Cartoon Franco Parera"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
