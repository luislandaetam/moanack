import Image from "next/image";
import styles from "./About.module.css";
import moanack from "../../../public/about/moanack-pose.png";
import { OrangeButton } from "../components/OrangeButton/OrangeButton";

export default function About() {
  const bold = "font-bold";

  return (
    <main
      className={`${styles.main} grid grid-cols-1 md:grid-cols-2
    gap-1 px-full items-center pb-full`}
    >
      <article className="mt-60 w-full">
        <Image src={moanack} alt="Dr. Moanack" className="w-[80%] mx-[10%]" />
      </article>
      <article className="mt-60 w-full">
        <section>
          <h2 className="text-moanackOrange font-bold text-h5">
            Dr. Jorge Moanack
          </h2>
          <h1 className="font-extraBold text-h3">
            Endourología y cirugía mínimamente invasiva.
          </h1>
          <h3 className="text-moanackOrange text-h6">Caracas, Venezuela.</h3>
        </section>
        <section className="mt-full">
          <p>¡Bienvenidos a mi mundo médico y personal!</p>
          <p className="mt-half">
            Soy el{" "}
            <span className={bold}>
              Dr. Jorge Moanack, un venezolano apasionado por la medicina y
              comprometido con la salud y el bienestar de mis pacientes.
            </span>{" "}
            A mis 48 años, encuentro en cada día una oportunidad para aprender,
            crecer y hacer una diferencia en la vida de las personas.
          </p>
          <p className="mt-half">
            Mi viaje en el mundo de la medicina comenzó en Venezuela, donde{" "}
            <span className={bold}>
              me formé como médico con un enfoque en cirugía general.
            </span>{" "}
            Mi pasión por ofrecer un cuidado excepcional me llevó a{" "}
            <span className={bold}>
              graduarme en Urología en el prestigioso Hospital Universitario de
              Caracas (UCV).
            </span>{" "}
            Aquí, descubrí mi verdadera pasión: la Urología.
          </p>
          <p className={`${bold} mt-half`}>
            Mi búsqueda constante por la excelencia me llevó a realizar una
            pasantía en Endourología y Cirugía Mínimamente Invasiva en el mismo
            hospital.{" "}
            <span className="text-moanackOrange">
              Fui a Houston, Texas, para ser capacitado en el uso del Robot Da
              Vinci, una tecnología vanguardista que me permite realizar
              procedimientos mínimamente invasivos con precisión.
            </span>
          </p>
          <p className="mt-half">
            Soy miembro activo de la Sociedad Venezolana de Urología y también
            desempeño el papel de profesor de postgrado en la UCV, acumulando
            más de 12 años de experiencia en la enseñanza. Mi objetivo es
            transmitir conocimientos actualizados y promover la próxima
            generación de profesionales médicos comprometidos.
          </p>
          <p className="mt-half">
            <span className={bold}>
              Mi práctica médica, tanto pública como privada, está centrada en
              Cirugía Laparoscópica Avanzada y Cirugía Endourológica.
            </span>{" "}
            Creo en el poder de la innovación para mejorar la calidad de vida de
            mis pacientes, y estoy comprometido en brindar un enfoque
            personalizado y comprensivo en cada caso.
          </p>
          <p className="mt-half">
            Más allá de la medicina, me considero una persona de mente abierta,
            apasionado por las diferentes culturas y perspectivas. Mi amplia
            experiencia en la gestión de personal y la resolución de conflictos
            se basa en valores fundamentales como la armonía, la comunicación y
            el respeto.
          </p>
          <p className="mt-half">
            A lo largo de mi carrera, he asistido a conferencias nacionales e
            internacionales para mantenerme actualizado sobre los últimos
            procedimientos y técnicas. Mi objetivo es brindarte la atención
            médica más avanzada y cuidadosa, basada en la comprensión y el
            compromiso.
          </p>
          <p className="mt-half">
            Agradezco la confianza que depositas en mí y espero ser parte de tu
            viaje hacia la salud y el bienestar. Juntos, podemos enfrentar
            desafíos, superar obstáculos y lograr una vida más saludable.
          </p>
          <p className="mt-half">Con gratitud, Dr. Jorge Moanack.</p>
        </section>
        <section className="mt-full w-[80%] mx-[10%] md:w-full md:mx-0">
          <ul className="text-moanackOrange list-[square]">
            <li>Postgrado en Urología - UCV</li>
            <li>Postgrado en Cirugía - Hospital Jesús Yerena</li>
            <li>Cirugía Robótica - Houston, Texas</li>
            <li>Profesor de Postgrado de Urología - UCV</li>
            <li>
              Miembro de la SVU{" "}
              <span className="text-[0.6em]">
                (Sociedad Venezolana de Urología)
              </span>
            </li>
            <li>Miembro de la Confederación Americana de Urología</li>
          </ul>
          <OrangeButton
            content="Agenda tu cita"
            link="https://api.whatsapp.com/send/?phone=584241406600&text&type=phone_number&app_absent=0"
          />
        </section>
      </article>
    </main>
  );
}
