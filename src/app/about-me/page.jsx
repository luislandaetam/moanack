import Image from "next/image";
import styles from "./AboutMe.module.css";
import moanack from "../../../public/about-me/moanack-pose.png";
import { OrangeButton } from "../components/OrangeButton/OrangeButton";

export default function AboutMe() {
  return (
    <main
      className={`${styles.main} grid grid-cols-2
    gap-1 p-full`}
    >
      <article>
        <Image src={moanack} alt="Dr. Moanack" />
      </article>
      <article>
        <section>
          <h2 className="text-moanackOrange font-bold">Dr. Jorge Moanack</h2>
          <h1>Endourología y cirugía minimamente invasiva.</h1>
          <h3 className="text-moanackOrange font-thin">Caracas, Venezuela.</h3>
        </section>
        <section>
          <p>
            Breve biografia en primera persona de los inicios y experiencia de
            Moanack con especial enfasis en su certificación en Houston Texas en
            Cirugia Robotica.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ante
            quam. Cras convallis ornare ante sed dictum. Ut blandit maximus
            augue eget ullamcorper. Nullam sed augue blandit, laoreet lectus
            mollis, euismod tortor. Sed et sem aliquam, tincidunt ante in,
            ornare leo. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Curabitur efficitur auctor leo.
          </p>
        </section>
        <section>
          <ul className="text-moanackOrange list-disc">
            <li>Postgrado en Urología - UCV</li>
            <li>Postgrado en Cirugía - Hospital Jesús Yerena</li>
            <li>Cirugía Robótica - Houston Texas</li>
            <li>Profesor de postgrado de Urología - UCV</li>
            <li>Miembro de la SVU (Sociedad Venezolana de Urología)</li>
            <li>Miembro de la confederación americana de urología</li>
          </ul>
          <OrangeButton content="Agenda tu cita" link="#" />
        </section>
      </article>
    </main>
  );
}
