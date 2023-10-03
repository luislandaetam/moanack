import { Accordion } from "../Accordion/Accordion";

export function FAQs() {
  return (
    <article className="mt-xxl">
      <h3 className="font-extraBold text-h4 md:text-h3 text-center">
        ¿Tienes dudas? <br />
        Estas son las preguntas más frecuentes.
      </h3>
      <Accordion />
    </article>
  );
}
