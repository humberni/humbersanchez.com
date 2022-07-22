import Link from "next/link";

import Container from "../components/Container";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <Container title="404 – Humber Sanchez">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          <span>🥲 Ups!</span> <br /> <br /> 404 – Página no disponible
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-16">
          Parece que has encontrado algo que solía existir, o has escrito algo
          mal. Supongo que escribiste algo mal. ¿Puedes verificar esa URL?
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white hover:ring-2 ring-gray-200 dark:hover:ring-2 dark:ring-gray-800 transition-all mb-60">
            Regresar
          </a>
        </Link>
      </div>
      <Footer />
    </Container>
  );
}
