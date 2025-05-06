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

export default function SkillsSection() {
  const skills = [
    {
      icon: <FaHtml5 className="text-4xl md:hover:text-7xl md:text-6xl" />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt className="text-4xl md:hover:text-7xl md:text-6xl" />,
      name: "CSS3",
    },
    {
      icon: <FaJs className="text-4xl md:hover:text-7xl md:text-6xl" />,
      name: "JavaScript",
    },
    {
      icon: (
        <SiTailwindcss className="text-4xl md:hover:text-7xl md:text-6xl" />
      ),
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs className="text-4xl md:hover:text-7xl md:text-6xl" />,
      name: "Next",
    },
    {
      icon: <FaReact className="text-4xl md:hover:text-7xl md:text-6xl" />,
      name: "React",
    },
    {
      icon: <SiRemix className="text-4xl md:hover:text-7xl md:text-6xl" />,
      name: "Remix",
    },
    {
      icon: <FaGitAlt className="text-4xl md:hover:text-7xl md:text-6xl" />,
      name: "Git",
    },
    {
      icon: <FaGithub className="text-4xl md:hover:text-7xl md:text-6xl" />,
      name: "GitHub",
    },
    {
      icon: <BiCodeAlt className="text-4xl md:hover:text-7xl md:text-6xl" />,
      name: "RESTful APIs",
    },
    {
      icon: <SiFirebase className="text-4xl md:hover:text-7xl md:text-6xl" />,
      name: "Firebase",
    },
    {
      icon: <SiMongodb className="text-4xl md:hover:text-7xl md:text-6xl" />,
      name: "MongoDB",
    },
  ];

  return (
    <section className="w-full min-h-screen flex items-center bg-[#191919] text-white px-4 sm:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase tracking-wider text-sm text-[#0fc573] font-semibold">
          Skills & Tools
        </p>
        <h2 className="text-4xl md:hover:text-7xl md:text-6xl sm:text-5xl font-extrabold mb-4">
          Tecnologías que domino
        </h2>
        <p className="text-white/80 mb-10">
          Las herramientas y tecnologías que utilizo para convertir ideas en
          productos funcionales:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-[#0fc573] mb-2">{skill.icon}</div>
              <span className="text-white/90 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
