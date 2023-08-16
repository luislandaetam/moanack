"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/navbar/logo.png";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const selected = "text-moanackOrange font-extraBold";

  return (
    <header className="absolute w-full font-extraLight">
      <nav className="flex flex-row justify-between items-center p-full ">
        <Image src={logo} alt="Logo" className="w-[6em]" />
        <ul className="flex flex-row justify-end items-center gap-5 font-thin">
          <li>
            <Link href="/" className={pathname === "/" ? selected : ""}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? selected : ""}
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
              className="px-half py-1 font-bold rounded-full bg-moanackOrange"
            >
              Agenda tu cita
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
