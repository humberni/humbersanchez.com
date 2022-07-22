import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
        <Link href="https://twitter.com/humberni">
          <a target="_blank" className="text-gray-900  dark:text-gray-100">
            <div className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  dark:hover:ring-2 dark:ring-gray-600 hover:ring-2 ring-gray-200  transition-all">
              <FaTwitter size={20} />
            </div>
          </a>
        </Link>

        <Link href="https://github.com/humberni">
          <a target="_blank" className="text-gray-900 dark:text-gray-100">
            <div className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center dark:hover:ring-2 dark:ring-gray-600 hover:ring-2 ring-gray-200  transition-all">
              <FaGithub size={20} />
            </div>
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/humberni/">
          <a target="_blank" className="text-gray-900 dark:text-gray-100">
            <div className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center dark:hover:ring-2 dark:ring-gray-600 hover:ring-2 ring-gray-200  transition-all">
              <FaLinkedin size={20} />
            </div>
          </a>
        </Link>

        <Link href="mailto:hola@humbersanchez.com">
          <a target="_blank" className="text-gray-900 dark:text-gray-100">
            <div className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center dark:hover:ring-2 dark:ring-gray-600 hover:ring-2 ring-gray-200  transition-all">
              <MdEmail size={20} />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
