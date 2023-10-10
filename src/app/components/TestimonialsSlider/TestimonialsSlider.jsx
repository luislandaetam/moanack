"use client";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import Image from "next/image";
import Glide, {
  Controls,
  Swipe,
  Autoplay,
} from "@glidejs/glide/dist/glide.modular.esm";
import { useEffect } from "react";
import antonio from "../../../../public/home/antonio.png";

export function TestimonialsSlider() {
  const cardStyle =
    "flex flex-col justify-between items-center max-w-[60vw] min-w-[20rem] mx-[20vw] bg-white text-black rounded-2xl p-half text-center gap-5";

  const nameClasses = "font-extraBold text-h6 leading-none";
  const testimonyClasses = "font-bold text-[0.6em]";
  const illnessClasses = "text-[0.6em] mt-10";

  useEffect(() => {
    new Glide("#glide2", {
      autoplay: 5000,
      hoverpause: false,
      perSwipe: 1,
    }).mount({ Controls, Swipe, Autoplay });
  }, []);

  return (
    <div className="glide" id="glide2">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <div className={cardStyle}>
              <Image src={antonio} alt="Juan Carlos Rodríguez" />
              <h4 className={nameClasses}>Juan Carlos Rodríguez</h4>
              <p className={testimonyClasses}>
                El Dr. Moanack es un verdadero profesional que cambió mi vida.
                Su habilidad para tratar mi problema de cálculos renales con
                precisión y empatía fue asombrosa. Su enfoque en la tecnología y
                la cirugía robótica me proporcionó una solución eficiente y
                prácticamente sin dolor. Gracias a él, he recuperado mi calidad
                de vida y no podría estar más agradecido.
              </p>
              <p className={illnessClasses}>
                Paciente Operado por Cálculos Renales
              </p>
            </div>
          </li>
          <li className="glide__slide">
            <div className={cardStyle}>
              <Image src={antonio} alt="Carlos Martínez" />
              <h4 className={nameClasses}>Carlos Martínez</h4>
              <p className={testimonyClasses}>
                Después de años lidiando con problemas de próstata, encontré al
                Dr. Moanack. Su experiencia en Urología y su compromiso con la
                última tecnología me dieron la confianza para someterme a una
                cirugía de próstata asistida por robot. Los resultados fueron
                increíbles: mi recuperación fue rápida y mis síntomas mejoraron
                notablemente. El Dr. Moanack realmente cambió mi perspectiva de
                la salud.
              </p>
              <p className={illnessClasses}>Paciente Operado de Próstata</p>
            </div>
          </li>
          <li className="glide__slide">
            <div className={cardStyle}>
              <Image src={antonio} alt="Ana Carvajal" />
              <h4 className={nameClasses}>Ana Carvajal</h4>
              <p className={testimonyClasses}>
                Como mujer, enfrentar un diagnóstico de cáncer de vejiga fue
                abrumador. El Dr. Moanack no solo demostró ser un cirujano
                excepcional, sino también un apoyo compasivo en mi viaje. Su
                enfoque en la cirugía laparoscópica avanzada hizo que mi
                recuperación fuera más suave y mi calidad de vida mejoró
                significativamente. Le debo mi gratitud por su experiencia y
                cuidado excepcionales.
              </p>
              <p className={illnessClasses}>
                Paciente Operada de Cáncer de Vejiga
              </p>
            </div>
          </li>
          <li className="glide__slide">
            <div className={cardStyle}>
              <Image src={antonio} alt="Luis Alberto González" />
              <h4 className={nameClasses}>Luis Alberto González</h4>
              <p className={testimonyClasses}>
                Mi experiencia con el Dr. Moanack fue asombrosa. A pesar de mi
                inicial preocupación por la cirugía renal, él me tranquilizó con
                su conocimiento y destreza. Gracias a su experiencia en cirugía
                robótica, mi procedimiento fue preciso y eficiente,
                permitiéndome volver a mis actividades normales más rápido de lo
                que imaginaba. Sin duda, el Dr. Moanack es un experto en el que
                puedes confiar.
              </p>
              <p className={illnessClasses}>Paciente Operado de los Riñones</p>
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
