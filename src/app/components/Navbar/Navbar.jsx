"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/navbar/logo.png";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const selected = "text-moanackOrange font-black";

  return (
    <header className="flex flex-row justify-between items-center p-full absolute">
      <Image src={logo} alt="Logo" className="w-[6em]" />
      <nav>
        <ul className="flex flex-row justify-end items-center gap-5 font-thin">
          <li>
            <Link href="/" className={pathname === "/" ? selected : ""}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/about-me"
              className={pathname === "/about-me" ? selected : ""}
            >
              Sobre mí
            </Link>
          </li>
          <li>
            <Link
              href="/davinci"
              className={pathname === "/davinci" ? selected : ""}
            >
              Da Vinci Xi
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? selected : ""}
            >
              Contáctame
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="px-half py-1 font-semibold rounded-full bg-moanackOrange"
            >
              Agenda tu cita
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
