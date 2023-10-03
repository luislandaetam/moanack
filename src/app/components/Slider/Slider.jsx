"use client";

import Image from "next/image";
import cirugiaSlider from "../../../../public/home/cirugia-slider.png";
import estudioSlider from "../../../../public/home/estudio-slider.png";
import endourologiaSlider from "../../../../public/home/endourologia-slider.png";
import saludSlider from "../../../../public/home/salud-slider.png";

export function Slider() {
  const divClasses =
    "relative w-[20vw] hover:grayscale transition-all ease-in-out duration-300 min-w-[20rem]";
  const imageClasses = "brightness-50 w-full h-full";
  const spanClasses =
    "absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center font-bold text-h6";

  return (
    <section className="flex flex-row flex-wrap justify-center md:justify-between items-center gap-10 my-xl">
      <div className={divClasses}>
        <Image
          src={cirugiaSlider}
          alt="Cirugía Robótica"
          className={imageClasses}
        />
        <div>
          <span className={spanClasses}>Cirugía Robótica</span>
        </div>
      </div>
      <div className={divClasses}>
        <Image
          src={estudioSlider}
          alt="Estudio de Imagen"
          className={imageClasses}
        />
        <div>
          <span className={spanClasses}>Estudio de Imagen</span>
        </div>
      </div>
      <div className={divClasses}>
        <Image
          src={endourologiaSlider}
          alt="Endourología"
          className={imageClasses}
        />
        <span className={spanClasses}>Endourología</span>
      </div>
      <div className={divClasses}>
        <Image src={saludSlider} alt="Salud Sexual" className={imageClasses} />
        <span className={spanClasses}>Salud Sexual</span>
      </div>
    </section>
  );
}
