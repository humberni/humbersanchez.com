import Link from "next/link";
import { Contact } from "../components/Contact";

import Container from "../components/Container";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Container
      title="Sobre mi – Humber Sanchez"
      description="Algunos de mis proyectos más destacados, construidos a lo largo de mi experiencia."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Sobre mi
        </h1>
        <div className="mb-16">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Hola, soy Humber Sanchez Nieto. Actualmente soy CEO de &nbsp;
            <Link href="https://quinaerp.com/">
              <a
                target="_blank"
                className="text-gray-900 dark:text-gray-100 hover:underline"
              >
                Quina ERP,
              </a>
            </Link>
            &nbsp; una marca creada a partir de una solución cloud de software
            libre para desarrolladores y de marca blanca. El objetivo es brindar
            el servicio de gestión y facturación electrónica a un precio
            accesible a todas las Pymes del Perú.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-16">
            <Link href="https://quinaerp.com/">
              <a
                target="_blank"
                className="text-gray-900 dark:text-gray-100 hover:underline"
              >
                Quina ERP
              </a>
            </Link>
            💪
          </p>

          <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
            Educación
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Humber Sanchez egresó de la &nbsp;
            <Link href="https://www.untrm.edu.pe/es/">
              <a
                target="_blank"
                className="text-gray-900 dark:text-gray-100 hover:underline"
              >
                Universidad Nacional Toribio Rodríguez de Mendoza de Amazonas
              </a>
            </Link>
            , en la carrera de Ingeniería de Sistemas.
          </p>
        </div>

        <Contact />
      </div>
      <Footer />
    </Container>
  );
}
