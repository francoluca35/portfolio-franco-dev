import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import AnimatedLogo from "../utils/AnimatedLogo";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#222222] via-[#3e066f] to-[#000000] text-white py-10 px-6">
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
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0fc573] transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0fc573] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0fc573] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0fc573] transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
