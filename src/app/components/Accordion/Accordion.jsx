"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export function Accordion() {
  const bold = "font-bold";
  return (
    <Accordion variant="light">
      <AccordionItem
        key="1"
        aria-label="¿Cómo funciona la cirugía asistida por robots?"
        title="¿Cómo funciona la cirugía asistida por robots?"
        className={bold}
      >
        <p>
          Durante la cirugía da Vinci, el cirujano se sienta en una consola de
          control y opera los instrumentos quirúrgicos desde allí. El robot
          quirúrgico está equipado con brazos robóticos que sostienen los
          instrumentos quirúrgicos y una cámara de alta definición que
          proporciona imágenes en 3D del sitio quirúrgico. El cirujano controla
          los brazos del robot y los instrumentos quirúrgicos desde la consola
          de control, lo que le permite{" "}
          <span className={bold}>
            realizar movimientos precisos y delicados
          </span>{" "}
          dentro del cuerpo del paciente.
        </p>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="¿Qué ventajas posee esta alternativa?"
        title="¿Qué ventajas posee esta alternativa?"
        className={bold}
      >
        <p>
          La cirugía robótica da Vinci ofrece varias ventajas en comparación con
          otros tipos de cirugía, incluyendo:
        </p>
        <ul>
          <li>
            <span className={bold}>Cirugía menos invasiva:</span> La cirugía da
            Vinci se realiza a través de pequeñas incisiones en el cuerpo, lo
            que significa que hay menos dolor y cicatrices y una recuperación
            más rápida.
          </li>
          <li>
            <span className={bold}>Mayor precisión y control:</span> La
            tecnología robótica avanzada del sistema da Vinci permite a los
            cirujanos realizar movimientos precisos y delicados que son
            difíciles de realizar con las manos humanas.
          </li>
          <li>
            <span className={bold}>Menos sangrado:</span> La precisión de la
            cirugía da Vinci también significa que hay menos sangrado durante el
            procedimiento.
          </li>
          <li>
            <span className={bold}>Menos tiempo de hospitalización:</span>{" "}
            Debido a que la cirugía da Vinci es menos invasiva y tiene una
            recuperación más rápida, los pacientes a menudo pueden irse a casa
            del hospital más rápido que con otros tipos de cirugía.
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="¿Esta alternativa es segura?"
        title="¿Esta alternativa es segura?"
        className={bold}
      >
        <span className={bold}>
          Sí, la cirugía robótica da Vinci es segura y efectiva.
        </span>{" "}
        Como con cualquier tipo de cirugía, hay algunos riesgos asociados con la
        cirugía da Vinci, pero estos riesgos son generalmente bajos.
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="¿Cómo se compara la cirugía da Vinci con otros tipos de cirugía?"
        title="¿Cómo se compara la cirugía da Vinci con otros tipos de cirugía?"
        className={bold}
      >
        La cirugía robótica da Vinci ofrece varias ventajas sobre otros tipos de
        cirugía, incluyendo{" "}
        <span className={bold}>
          una recuperación más rápida, menos dolor y cicatrices y una mayor
          precisión y control.
        </span>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="¿Cuánto tiempo dura la recuperación después de la cirugía da Vinci?"
        title="¿Cuánto tiempo dura la recuperación después de la cirugía da Vinci?"
        className={bold}
      >
        El tiempo de recuperación después de la cirugía robótica da Vinci varía
        según el procedimiento específico y la salud general del paciente. En
        general,{" "}
        <span className={bold}>
          la recuperación es más rápida que con otros tipos de cirugía y los
          pacientes a menudo pueden regresar a sus actividades diarias normales
          dentro de unas pocas semanas
        </span>{" "}
        después de la cirugía.
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="¿Qué debo esperar durante la cirugía da Vinci?"
        title="¿Qué debo esperar durante la cirugía da Vinci?"
        className={bold}
      >
        Durante la cirugía da Vinci, el paciente estará bajo anestesia general y
        no sentirá ningún dolor. El cirujano controlará los brazos del robot y
        los instrumentos quirúrgicos desde la consola de control, mientras que
        la cámara de alta definición proporciona imágenes en 3D del sitio
        quirúrgico. El cirujano guiará con cuidado los instrumentos quirúrgicos
        a través de pequeñas incisiones en el cuerpo del paciente para realizar
        el procedimiento.
      </AccordionItem>
      <AccordionItem
        key="7"
        aria-label="¿Cómo puedo prepararme para la cirugía da Vinci?"
        title="¿Cómo puedo prepararme para la cirugía da Vinci?"
        className={bold}
      >
        Se te proporcionaran instrucciones detalladas sobre cómo prepararte para
        la cirugía da Vinci, pero en general, deberás evitar comer o beber nada
        durante varias horas antes de la cirugía, y seguir cualquier otra
        instrucción específica que te dé tu cirujano.
      </AccordionItem>
    </Accordion>
  );
}
