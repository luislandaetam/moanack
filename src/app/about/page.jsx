import Image from "next/image";
import styles from "./About.module.css";
import moanack from "../../../public/about/moanack-pose.png";
import { OrangeButton } from "../components/OrangeButton/OrangeButton";

export default function About() {
  return (
    <main
      className={`${styles.main} grid grid-cols-2
    gap-1 px-full`}
    >
      <article className="mt-60">
        <Image src={moanack} alt="Dr. Moanack" />
      </article>
      <article className="mt-60">
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
          <p>
            Breve biografia en primera persona de los inicios y experiencia de
            Moanack con especial enfasis en su certificación en Houston Texas en
            Cirugia Robotica.
          </p>
          <p className="mt-half">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ante
            quam. Cras convallis ornare ante sed dictum. Ut blandit maximus
            augue eget ullamcorper. Nullam sed augue blandit, laoreet lectus
            mollis, euismod tortor. Sed et sem aliquam, tincidunt ante in,
            ornare leo. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Curabitur efficitur auctor leo.
          </p>
        </section>
        <section className="mt-full">
          <ul className="text-moanackOrange list-disc">
            <li>Postgrado en Urología - UCV</li>
            <li>Postgrado en Cirugía - Hospital Jesús Yerena</li>
            <li>Cirugía Robótica - Houston, Texas</li>
            <li>Profesor de Postgrado de Urología - UCV</li>
            <li>Miembro de la SVU (Sociedad Venezolana de Urología)</li>
            <li>Miembro de la Confederación Americana de Urología</li>
          </ul>
          <OrangeButton content="Agenda tu cita" link="#" />
        </section>
      </article>
    </main>
  );
}
