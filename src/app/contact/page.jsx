"use client";

import styles from "./Contact.module.css";
import Image from "next/image";
import whatsapp from "../../../public/footer/whatsapp-icon.svg";
import email from "../../../public/footer/email-icon.svg";
import instagram from "../../../public/footer/instagram-icon.svg";
import tiktok from "../../../public/footer/tiktok-icon.svg";

export default function Contact() {
  const locationClasses = "font-bold text-h6 md:text-h5";
  const divClasses = "mb-half";
  const linkClasses = "text-h6 font-bold";
  const icons = "w-11 hover:scale-105 transition-all ease-in-out duration-300";

  return (
    <main className={`${styles.main} min-h-screen`}>
      <article className="flex flex-col justify-center p-xxl min-h-[100vh] items-center text-center">
        <h1 className="text-moanackOrange font-extraBold text-h3 md:text-h2">
          Venezuela
        </h1>
        <div className={divClasses}>
          <h2 className={locationClasses}>Urológico San Román</h2>
          <p>Días: Lunes y Viernes.</p>
        </div>
        <div className={divClasses}>
          <h2 className={locationClasses}>UCQ Noreste</h2>
          <p>Días: Martes y Jueves.</p>
        </div>
        <div className={divClasses}>
          <h2 className={locationClasses}>Grupo Médico Santa Paula</h2>
          <p>Días: Miércoles.</p>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=584241406600&text&type=phone_number&app_absent=0"
          target="_blank"
          className={`${linkClasses} text-moanackOrange`}
        >
          +58 424-140.66.00
        </a>
        <a
          href="emailto:consultas@drmoanack.com"
          target="_blank"
          className={linkClasses}
        >
          consultas@drmoanack.com
        </a>
        <section className="flex flex-row gap-5 mt-half">
          <a href="https://www.instagram.com/dr.moanack/" target="_blank">
            <Image src={instagram} alt="Instagram Icon" className={icons} />
          </a>
          <a href="https://www.tiktok.com/@drmoanack" target="_blank">
            <Image src={tiktok} aalt="TikTok Icon" className={icons} />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=584241406600&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <Image src={whatsapp} alt="WhatsApp Icon" className={icons} />
          </a>
          <a href="mailto:consultas@drmoanack.com" target="_blank">
            <Image src={email} alt="Email Icon" className={icons} />
          </a>
        </section>
      </article>
    </main>
  );
}
