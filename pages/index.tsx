import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Social from "../components/Social";

export default function Home() {
  return (
    <Layout>
      <div className="justify-center text-center">
        <h1 className="text-4xl font-bold mt-16">
          Humber Sanchez
        </h1>
        <h2 className="text-lg font-normal mt-4 text-neutral-900 dark:text-neutral-300">Ingeniero de Sistemas</h2>
        <p className="max-w-md text-neutral-900 dark:text-neutral-300 mx-auto mt-6">Apasionado por la tecnología con más de 3 años de experiencia encargado de desarrollar e implementar soluciones tecnológicas en beneficio de las personas y las empresas.</p>
        <Social />
        <div className="flex justify-center mt-12">
          <Image
            alt="Humber Sanchez"
            height={130}
            width={130}
            src="/images/avatar/avatar.jpg"
            sizes="100vw"
            priority
            className="rounded-full filter hover:grayscale rotate-45"
          />
        </div>
        <Projects />
        <p className="max-w-lg mx-auto">
          Actualmente no estoy buscando nuevas oportunidades, pero mi bandeja de entrada siempre está abierta. Ya sea que tenga una pregunta o simplemente quiera saludar.
        </p>
        <Social />

      </div>
    </Layout >
  )
}