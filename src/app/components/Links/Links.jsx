"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Links({ onClick }) {
  const pathname = usePathname();

  const generalClasses =
    "bg-no-repeat bg-left-bottom pb-[4px] rounded-sm bg-gradient-to-r from-[#647491] to-[#647491] w-fit";
  const selected = "bg-[length:100%_2px]";
  const notSelected =
    "bg-[length:0%_2px] hover:bg-[length:100%_3px] transition-all ease-in-out duration-500";

  return (
    <div className="flex flex-col justify-center gap-5">
      <Link onClick={onClick} href="/">
        <span
          className={`${generalClasses} ${
            pathname === "/" ? selected : notSelected
          }`}
        >
          Inicio
        </span>
      </Link>
      <Link onClick={onClick} href="/about">
        <span
          className={`${generalClasses} ${
            pathname === "/about" ? selected : notSelected
          }`}
        >
          Sobre Mí
        </span>
      </Link>
      <Link onClick={onClick} href="/davinci">
        <span
          className={`${generalClasses} ${
            pathname === "/davinci" ? selected : notSelected
          }`}
        >
          Da Vinci Xi
        </span>
      </Link>
      <Link onClick={onClick} href="/contact">
        <span
          className={`${generalClasses} ${
            pathname === "/contact" ? selected : notSelected
          }`}
        >
          Contáctame
        </span>
      </Link>
      <a
        onClick={onClick}
        href="https://api.whatsapp.com/send/?phone=584241406600&text&type=phone_number&app_absent=0"
      >
        <span className={`${generalClasses} ${notSelected}`}>
          Agenda tu cita
        </span>
      </a>
    </div>
  );
}
