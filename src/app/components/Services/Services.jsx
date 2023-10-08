"use client";

import Image from "next/image";
import cirugiaSlider from "../../../../public/home/cirugia-slider.png";
import estudioSlider from "../../../../public/home/estudio-slider.png";
import endourologiaSlider from "../../../../public/home/endourologia-slider.png";
import saludSlider from "../../../../public/home/salud-slider.png";

export function Services() {
  const divClasses =
    "relative hover:grayscale transition-all ease-in-out duration-300 w-[20vw] min-w-[20rem] mx-auto text-center";
  const imageClasses = "brightness-50 w-full h-full m-0";
  const spanClasses =
    "flex justify-center items-center text-center font-bold text-h6 w-full h-full";
  const textClasses =
    "absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-all ease-in-out dureation-300";

  return (
    <section className="flex flex-row justify-center items-center gap-10">
      <div className={divClasses}>
        <Image
          src={cirugiaSlider}
          alt="Cirugía Robótica"
          className={imageClasses}
        />
        <div className={textClasses}>
          <span className={spanClasses}>Cirugía Robótica</span>
        </div>
      </div>

      <div className={divClasses}>
        <Image
          src={estudioSlider}
          alt="Estudio de Imagen"
          className={imageClasses}
        />
        <div className={textClasses}>
          <span className={spanClasses}>Estudio de Imagen</span>
        </div>
      </div>

      <div className={divClasses}>
        <Image
          src={endourologiaSlider}
          alt="Endourología"
          className={imageClasses}
        />
        <div className={textClasses}>
          <span className={spanClasses}>Endourología</span>
        </div>
      </div>

      <div className={divClasses}>
        <Image src={saludSlider} alt="Salud Sexual" className={imageClasses} />
        <div className={textClasses}>
          <span className={spanClasses}>Salud Sexual</span>
        </div>
      </div>
    </section>
  );
}
