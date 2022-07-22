import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-4">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-4" />

      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-0 sm:grid-cols-1">
        <div className="flex flex-row justify-center">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition text-sm ">
              <span>Copyright</span> &copy; {new Date().getFullYear()} Humber
              Sanchez
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
