import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import AnimatedLogo from "../utils/AnimatedLogo";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0c0713] via-[#3e066f] to-[#000000] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding o texto */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold tracking-wide">
            <AnimatedLogo />
          </h3>
          <p className="text-sm mt-1 text-gray-300">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* Enlaces sociales */}
        <div className="flex gap-5 text-2xl">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c50f0f] transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/franco-parera/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0f0fc5] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/francoluca35"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#313231] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/franco.dev24/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff50cd] transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
