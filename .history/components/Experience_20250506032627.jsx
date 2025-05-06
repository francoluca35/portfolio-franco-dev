"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaSass,
  FaWordpress,
} from "react-icons/fa";
import {
  SiFirebase,
  SiJquery,
  SiVite,
  SiNextui,
  SiMongodb,
  SiRemix,
} from "react-icons/si";

import { BiCodeAlt } from "react-icons/bi";
import { MdDevices } from "react-icons/md";
import { DiResponsive } from "react-icons/di";

export default function SkillsSection() {
  const skills = [
    { icon: <FaHtml5 className="text-4xl" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-4xl" />, name: "CSS3" },
    { icon: <FaJs className="text-4xl" />, name: "JavaScript" },
    { icon: <SiJquery className="text-4xl" />, name: "jQuery" },
    { icon: <FaReact className="text-4xl" />, name: "React" },
    { icon: <FaGitAlt className="text-4xl" />, name: "Git" },
    { icon: <FaGithub className="text-4xl" />, name: "GitHub" },
    { icon: <BiCodeAlt className="text-4xl" />, name: "RESTful APIs" },
    { icon: <SiFirebase className="text-4xl" />, name: "Firebase" },
    { icon: <SiMongodb className="text-4xl" />, name: "MongoDB" },
    { icon: <SiNextui className="text-4xl" />, name: "Next UI" },
    { icon: <SiRemix className="text-4xl" />, name: "Remix.js" },
  ];

  return (
    <section className="py-20 bg-[#1e123d] text-white px-4 sm:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase tracking-wider text-sm text-[#0fc573] font-semibold">
          Skills & Tools
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
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
