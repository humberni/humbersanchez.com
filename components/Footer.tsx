import Link from "next/link";

export default function Footer() {
    return (
        <footer className="p-8 mt-6 text-center">
            <Link
                href="https://humbersanchez.com"
                target="_blank"
                className="text-neutral-900 dark:text-neutral-400 text-sm transition"
            >
                &copy; Copyright {new Date().getFullYear()}. All rights reserved.
            </Link>
        </footer>
    )
}