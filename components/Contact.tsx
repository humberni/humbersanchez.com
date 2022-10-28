import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const redes = [
  {
    name: "twitter",
    href: "https://twitter.com/humberni",
    icon: <FaTwitter size={16} />,
  },
  {
    name: "github",
    href: "https://github.com/humberni",
    icon: <FaGithub size={16} />,
  },
  {
    name: "instagram",
    href: "https://instagram.com/humber_nieto",
    icon: <FaInstagram size={16} />,
  },
  {
    name: "email",
    href: "mailto:hola@humbersanchez.com",
    icon: <MdEmail size={16} />,
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

      <div className="flex justify-center gap-4 max-w-[350px] m-auto">
        {redes.map((red) => (
          <Link key={red.name} href={red.href}>
            <a target="_blank" className="text-gray-900  dark:text-gray-100">
              <div className="w-9 h-9 bg-gray-200 rounded-full dark:bg-gray-600 flex items-center justify-center">
                {red.icon}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
