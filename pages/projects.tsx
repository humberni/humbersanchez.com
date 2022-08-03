import Link from "next/link";
import { Contact } from "../components/Contact";

import Container from "../components/Container";
import Footer from "../components/Footer";

const projetcs = [
  {
    title: "Flash Service",
    description: "PWA para el rubro de delivery, implementado con Laravel.",
    href: "https://appflashservice.com/",
  },
  {
    title: "Gerson Medina",
    description:
      "Portafolio web de fotografía y videos, desarrollado con ReacJs.",
    href: "https://www.gersonmedina.com/",
  },
  {
    title: "Quina ERP",
    description:
      "Sitio web informativo desarrollado con NextJs, Tailwind Css y desplegado en ▲ Vercel.",
    href: "https://quinaerp.com/",
  },
  {
    title: "Jopesatools",
    description:
      "Plataforma Ecommerce de ferretería, bajo la tecnología de WooCommere.",
    href: "https://jopesatools.com/",
  },
  {
    title: " Cunia",
    description:
      "Ecommerce de electrodomésticos desarrollado bajo el CMS de WordPress y WooCommere.",
    href: "https://cunia.pe/",
  },
  {
    title: "Humber Sanchez",
    description:
      "Portafolio web minimalista y optimizado, desarrollado con NextJs, Tailwind Css y desplegado en ▲ Vercel.",
    href: "https://github.com/humberni/humbersanchez.com",
  },
  {
    title: "Dark Mode",
    description: "Ejemplo práctico de configurar un dark mode con Reactjs.",
    href: "https://github.com/humberni/mode-dark-react",
  },
];

export default function Dashboard() {
  return (
    <Container
      title="Proyectos – Humber Sanchez"
      description="Algunos de mis proyectos más destacados, construidos a lo largo de mi experiencia."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Proyectos
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Entre la universidad, el trabajo, el tiempo libre y la curiosidad
            individual, he trabajado en muchos proyectos y con diferentes
            tecnologías a lo largo de los años.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Algunos de mis proyectos más destacados🎖️
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mb-16">
          {projetcs.map((projetc) => (
            <Link key={projetc.title} href={projetc.href}>
              <a
                target="_blank"
                className="border border-grey-200 dark:border-gray-800 rounded-lg p-4 w-full hover:border-gray-300 dark:hover:border-gray-300 bg-white dark:bg-gray-900"
              >
                <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
                  {projetc.title} &rarr;
                </h3>
                <p className="mt-1 text-gray-700 dark:text-gray-400">
                  {projetc.description}
                </p>
              </a>
            </Link>
          ))}
        </div>
        <Contact />
      </div>
      <Footer />
    </Container>
  );
}
