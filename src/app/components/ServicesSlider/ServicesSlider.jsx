"use client";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import Image from "next/image";
import cirugiaSlider from "../../../../public/home/cirugia-slider.png";
import estudioSlider from "../../../../public/home/estudio-slider.png";
import endourologiaSlider from "../../../../public/home/endourologia-slider.png";
import saludSlider from "../../../../public/home/salud-slider.png";
import Glide, {
  Controls,
  Swipe,
  Autoplay,
} from "@glidejs/glide/dist/glide.modular.esm";
import { useEffect } from "react";

export function ServicesSlider() {
  const divClasses =
    "relative hover:grayscale transition-all ease-in-out duration-300 max-w-[20vw] min-w-[20rem] mx-auto text-center";
  const imageClasses = "brightness-50 w-full h-full m-0";
  const spanClasses =
    "flex justify-center items-center text-center font-bold text-h6 w-full h-full";
  const textClasses =
    "absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-all ease-in-out dureation-300";

  useEffect(() => {
    new Glide("#glide1", {
      autoplay: 5000,
      hoverpause: false,
      perSwipe: 1,
    }).mount({ Controls, Swipe, Autoplay });
  }, []);

  return (
    <div className="glide" id="glide1">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
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
          </li>
          <li className="glide__slide">
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
          </li>
          <li className="glide__slide">
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
          </li>
          <li className="glide__slide">
            <div className={divClasses}>
              <Image
                src={saludSlider}
                alt="Salud Sexual"
                className={imageClasses}
              />
              <div className={textClasses}>
                <span className={spanClasses}>Salud Sexual</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          {"<"}
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          {">"}
        </button>
      </div>
    </div>
  );
}
