import Link from "next/link";

const projetcs = [
    {
        title: "Halley ✨",
        description: "Plantilla web publicado en Themeforest desarrollado con NextJs y Tailwindcss.",
        href: "https://halley.vercel.app/",
    },
    {
        title: "Quina ERP",
        description:
            "Sitio web informativo desarrollado con NextJs, Tailwind Css y desplegado en ▲ Vercel.",
        href: "https://quinaerp.com/",
    },
    {
        title: "Jhonsy Silva",
        description: "Sitio web personal construido con NextJs y Tailwind Css",
        href: "https://jhonsysilva.vercel.app/",
    },

    {
        title: "Flash Service",
        description: "PWA para el rubro de delivery, implementado con Laravel.",
        href: "https://appflashservice.com/",
    },
    {
        title: "Dark Mode",
        description: "Ejemplo práctico de configurar un Dark Mode con Nextjs y Tailwindcss.",
        href: "https://darkmode-nextjs.vercel.app/",
    },
    {
        title: "Gerson Medina",
        description:
            "Portafolio web de fotografía y videos, desarrollado con ReacJs.",
        href: "https://www.gersonmedina.com/",
    },
    {
        title: "Levirom",
        description:
            "Familia creativa, enfocados 100% en empresas, arte y cultura, construida bajo el CMS WordPress.",
        href: "https://levirom.pe/",
    },
    {
        title: "AVVA",
        description:
            "Sitio web informativo implementado para Avva empresa consultora y contructora.",
        href: "https://www.avvaconsultora.com/",
    },

    {
        title: "Humber Sanchez",
        description:
            "Portafolio web minimalista desarrollado con NextJs, Tailwind Css y desplegado en ▲ Vercel.",
        href: "https://github.com/humberni/humbersanchez.com",
    },
];

export default function Projects() {
    return (
        <>
            <h2 className="text-4xl font-bold pt-16">
                Proyectos
            </h2>

            <p className="pt-6 mb-6 max-w-2xl text-center m-auto dark:text-neutral-300">
                Entre la universidad, el trabajo, el tiempo libre y la curiosidad individual, he trabajado en muchos proyectos y con diferentes tecnologías a lo largo de los años.
            </p>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 mt-12 my-2 w-full mb-16">
                {projetcs.map(({ title, href, description }) => (
                    <Link key={title} href={href}

                        target="_blank"
                        className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 w-full">

                        <h3 className="text-lg font-bold text-left mt-2 text-neutral-900 dark:text-neutral-100">
                            {title} &rarr;
                        </h3>
                        <p className="mt-1 text-left text-neutral-700 dark:text-neutral-300">
                            {description}
                        </p>

                    </Link>
                ))}
            </div>
        </>
    )
}

