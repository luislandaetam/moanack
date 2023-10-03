"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/navbar/logo.png";
import { usePathname } from "next/navigation";
import { Hamburger } from "../Hamburger/Hamburger";

export function Navbar() {
  const pathname = usePathname();
  const selected = "text-moanackOrange font-extraBold";

  return (
    <header className="fixed lg:absolute lg:top-0 lg:left-0 w-full p-full font-extraLight z-20">
      <nav className="flex flex-row justify-between items-center">
        <Image src={logo} alt="Logo" className="w-[6em]" />
        <ul className="hidden lg:flex flex-row justify-end items-center gap-20 font-thin">
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
            <a
              href="https://api.whatsapp.com/send/?phone=584241406600&text&type=phone_number&app_absent=0"
              className="px-half py-3 font-bold rounded-full bg-moanackOrange hover:bg-moanackGrey hover:text-white transition-all ease-in-out"
            >
              Agenda tu cita
            </a>
          </li>
        </ul>
        <section className="flex flex-row items-center gap-3">
          <article className="h-12 flex flex-col justify-start items-center mb-4 text-white rounded-md lg:hidden font-bold">
            <Hamburger />
          </article>
        </section>
      </nav>
    </header>
  );
}
