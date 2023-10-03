"use client";

import Link from "next/link";

export function Links({ onClick }) {
  return (
    <div className="flex flex-col justify-center gap-5">
      <Link onClick={onClick} href="/">
        <span>Inicio</span>
      </Link>
      <Link onClick={onClick} href="/about">
        <span>Sobre Mí</span>
      </Link>
      <Link onClick={onClick} href="/davinci">
        <span>Da Vinci Xi</span>
      </Link>
      <Link onClick={onClick} href="/contact">
        <span>Contáctame</span>
      </Link>
      <a
        onClick={onClick}
        href="https://api.whatsapp.com/send/?phone=584241406600&text&type=phone_number&app_absent=0"
      >
        <span>Agenda tu cita</span>
      </a>
    </div>
  );
}
