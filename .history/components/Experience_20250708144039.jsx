"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiFirebase,
  SiJquery,
  SiMongodb,
  SiRemix,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export default function SkillsSection() {
  const { t } = useTranslation();

  const skills = [
    {
      icon: (
        <FaHtml5 className="text-4xl md:text-6xl transition-all duration-300 text-[#0fc573] group-hover:text-[#e34f26]" />
      ),
      name: t("skills.html"),
    },
    {
      icon: (
        <FaCss3Alt className="text-4xl md:text-6xl transition-all duration-300 text-[#0fc573] group-hover:text-[#264de4]" />
      ),
      name: t("skills.css"),
    },
    {
      icon: (
        <FaJs className="text-4xl md:text-6xl transition-all duration-300 text-[#0fc573] group-hover:text-[#f0db4f]" />
      ),
      name: t("skills.js"),
    },
    {
      icon: (
        <SiTailwindcss className="text-4xl md:text-6xl transition-all duration-300 text-[#0fc573] group-hover:text-[#38bdf8]" />
      ),
      name: t("skills.tailwind"),
    },
    {
      icon: (
        <SiNextdotjs className="text-4xl md:text-6xl transition-all duration-300 text-[#0fc573] group-hover:text-white" />
      ),
      name: t("skills.next"),
    },
    {
      icon: (
        <FaReact className="text-4xl md:text-6xl transition-all duration-300 text-[#0fc573] group-hover:text-[#61dafb]" />
      ),
      name: t("skills.react"),
    },
    {
      icon: (
        <SiRemix className="text-4xl md:text-6xl transition-all duration-300 text-[#0fc573] group-hover:text-[#000000]" />
      ),
      name: t("skills.remix"),
    },
    {
      icon: (
        <FaGitAlt className="text-4xl md:text-6xl transition-all duration-300 text-[#0fc573] group-hover:text-[#f05032]" />
      ),
      name: t("skills.git"),
    },
    {
      icon: (
        <FaGithub className="text-4xl md:text-6xl transition-all duration-300 text-[#0fc573] group-hover:text-[#ffffff]" />
      ),
      name: t("skills.github"),
    },
    {
      icon: (
        <BiCodeAlt className="text-4xl md:text-6xl transition-all duration-300 text-[#0fc573] group-hover:text-[#c5bc0f]" />
      ),
      name: t("skills.rest"),
    },
    {
      icon: (
        <SiFirebase className="text-4xl md:text-6xl transition-all duration-300 text-[#0fc573] group-hover:text-[#ffca28]" />
      ),
      name: t("skills.firebase"),
    },
    {
      icon: (
        <SiMongodb className="text-4xl md:text-6xl transition-all duration-300 text-[#0fc573] group-hover:text-[#47A248]" />
      ),
      name: t("skills.mongodb"),
    },
  ];

  return (
    <section className="w-full min-h-screen flex items-center bg-[#191919] text-white px-4 sm:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase tracking-wider text-md text-[#0fc573] font-semibold">
          {t("skills.top")}
        </p>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          {t("skills.title")}
        </h2>
        <p className="text-white/80 mb-10">{t("skills.desc")}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer transition-transform duration-300 transform hover:scale-105"
            >
              <div className="mb-2">{skill.icon}</div>
              <span className="text-white/90 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
