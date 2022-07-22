import { Suspense } from "react";
import Image from "next/future/image";

import Container from "../components/Container";
import Footer from "../components/Footer";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4  text-black dark:text-white">
                Humber Sanchez
              </h1>
              {/*<h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Ingeniero de <span className="font-semibold">sistemas</span>
              </h2>*/}
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Hola! <span className="text-xl">👋</span> mi nombre es Humber
                Sanchez Nieto, Bach. en Ingeniería de Sistemas, apasionado por
                la tecnología.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Humber Sanchez"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>
          <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
            Habilidades
          </h2>

          <div className="mb-16 border border-grey-200 dark:border-gray-800 rounded-lg p-4 w-full hover:border-gray-300 dark:hover:border-gray-300 bg-white dark:bg-gray-900">
            <code className="text-gray-600 dark:text-gray-400 mb-8 text-sm">
              <span>{`export function Habilidades() {`}</span> <br />
              <span className="ml-8">{`return (`}</span> <br />
              <span className="ml-16">{`<div>`}</span> <br />
              <span className="ml-24">{`<ul>`}</span> <br />
              <span className="ml-32">{`<li> NextJs </li>`}</span>
              <br />
              <span className="ml-32">{`<li> Reactjs </li>`}</span>
              <br />
              <span className="ml-32">{`<li> Tailwind </li>`}</span>
              <br />
              <span className="ml-32">{`<li> MySql </li>`}</span>
              <br />
              <span className="ml-32">{`<li> Git </li>`}</span>
              <br />
              <span className="ml-32">{`<li> Laravel </li>`}</span>
              <br />
              <span className="ml-32">{`<li> WordPress </li>`}</span>
              <br />
              <span className="ml-32">{`<li> Linux </li>`}</span>
              <br />
              <span className="ml-24">{`</ul>`}</span>
              <br />
              <span className="ml-16">{`<div>`}</span> <br />
              <span className="ml-8">{`);`}</span>
              <br />
              <span>{`}`}</span>
            </code>
          </div>

          <Contact />
          <span className="h-16" />
        </div>
      </Container>
      <Footer />
    </Suspense>
  );
}
