"use client";

import { FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-[#202020] text-white py-20 px-6 flex justify-center">
      <div className="bg-[#510f47] rounded-xl p-8 md:p-14 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto y enlaces */}
        <div className="text-left md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
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

        {/* Ilustración con nube blanca */}
        <div className="relative w-64 h-64 md:w-96 md:h-72 flex items-center justify-center">
          {/* Nube blanca detrás */}
          <Image
            src="/assets/nube.png"
            alt="Nube decorativa"
            fill
            className="object-contain opacity-80"
          />

          {/* Caricatura */}
          <div className="absolute w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/assets/contact.png"
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
