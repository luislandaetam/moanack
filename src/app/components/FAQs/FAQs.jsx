import { Accordion } from "../Accordion/Accordion";

export function FAQs() {
  return (
    <article>
      <h3 className="font-extraBold">
        ¿Tienes dudas? <br />
        Estas son las preguntas más frecuentes.
      </h3>
      <Accordion />
    </article>
  );
}
