import styles from "./Home.module.css";
import Image from "next/image";
import { OrangeButton } from "./components/OrangeButton/OrangeButton";
import { WhiteButton } from "./components/WhiteButton.jsx/WhiteButton";
import expMoanack from "../../public/home/exp.png";
import { TransparentButton } from "./components/TransparentButton/TransparentButton";

export default function Home() {
  return (
    <main>
      <article
        className={`${styles.headerBackground} h-[140vh] grid grid-cols-2 items-center`}
      >
        <section className="px-xl">
          <h3 className="text-moanackOrange font-auxiliar uppercase text-h3 leading-none">
            Cirugía Robótica
          </h3>
          <h1 className="font-extraBold text-h1 my-0 leading-none mb-full">
            Mínimamente invasiva.
          </h1>
          <p>
            Tecnología de punta en Venezuela, al servicio de su comodidad,
            gracias al sistema{" "}
            <span className="font-bold">
              Da Vinci Xi de cirugía robótica con precisión
            </span>
            , mínimamente invasiva.
          </p>
          <section className="flex gap-full">
            <OrangeButton link="#" content="Agenda tu cita" />
            <WhiteButton link="/davinci" content="Conocer más" />
          </section>
        </section>
      </article>
      <article
        className={`${styles.expBackground} grid grid-cols-2 -translate-y-[36rem]`}
      >
        <section className="col-start-2 my-[36rem]">
          <h2 className="uppercase font-auxiliar text-orangeMoanack text-h2 text-moanackOrange">
            Experiencia a la vanguardia
          </h2>
          <p className="mb-[2.5rem]">
            Descripción de quien es el Dr. Moanack, sus estudios y experiencia
            en el campo de la urología especial enfasis en la cirugia robotica.
          </p>
          <p>
            Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
            dolor sit amet,Lorem ipsum dolor sit amet.
          </p>
          <TransparentButton link="/about" content="Sobre mí" />
        </section>
      </article>
      {/* <article>
        <Image
          src={expMoanack}
          alt="Dr. Moanack"
          className="-scale-x-100 w-[75%] rotate-"
        />
      </article> */}
    </main>
  );
}
