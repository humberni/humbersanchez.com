import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
    return (
        <div className="mt-6 flex justify-between items-center rounded-lg ">
            <div>
                <Link href="/">
                    <Image
                        className="block h-9 w-auto m-2"
                        src="/images/logo/humber-logo.svg"
                        alt="Logo - Humber Sanchez"
                        width={512}
                        height={512}
                        quality={75}
                        sizes="100vw"
                    />
                </Link>
            </div>
            <ThemeSwitch />
        </div>
    )
}