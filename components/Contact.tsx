import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const redes = [
  {
    name: "twitter",
    href: "https://twitter.com/humberni",
    icon: <FaTwitter size={20} />,
  },
  {
    name: "github",
    href: "https://github.com/humberni",
    icon: <FaGithub size={20} />,
  },
  {
    name: "linkendin",
    href: "https://www.linkedin.com/in/humberni/",
    icon: <FaLinkedin size={20} />,
  },
  {
    name: "email",
    href: "mailto:hola@humbersanchez.com",
    icon: <MdEmail size={20} />,
  },
];

export function Contact() {
  return (
    <div>
      <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
        Contacto
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-12">
        Actualmente no estoy buscando nuevas oportunidades, pero mi bandeja de
        entrada siempre está abierta. Ya sea que tenga una pregunta o
        simplemente quiera saludar.
      </p>

      <div className="flex items-center justify-between max-w-[240px] m-auto">
        {redes.map((red) => (
          <Link key={red.name} href={red.href}>
            <a target="_blank" className="text-gray-900  dark:text-gray-100">
              <div className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  dark:hover:ring-2 dark:ring-gray-600 hover:ring-2 ring-gray-200  transition-all">
                {red.icon}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
