import styles from "./Home.module.css";
import Image from "next/image";
import { OrangeButton } from "./components/OrangeButton/OrangeButton";
import { WhiteButton } from "./components/WhiteButton.jsx/WhiteButton";
import expMoanack from "../../public/home/exp.png";
import { TransparentButton } from "./components/TransparentButton/TransparentButton";
import { Slider } from "./components/Slider/Slider";
import { Testimonials } from "./components/Testimonials/Testimonials";
import robot1 from "../../public/home/robot1.png";
import robot2 from "../../public/home/robot2.png";

export default function Home() {
  return (
    <main className="bg-[#36415D]">
      <article className={styles.firstBackground}>
        <section className="h-[100vh] md:h-[150vh] grid grid-cols-1 md:grid-cols-2 items-center">
          <section className="px-xl">
            <h3 className="text-moanackOrange font-auxiliar uppercase text-h5 md:text-h3 leading-none">
              Cirugía Robótica
            </h3>
            <h1 className="font-extraBold text-h3 md:text-h1 my-0 leading-none mb-full">
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
              <OrangeButton
                link="https://api.whatsapp.com/send/?phone=584241406600&text&type=phone_number&app_absent=0"
                content="Agenda tu cita"
              />
              <WhiteButton link="/davinci" content="Conocer más" />
            </section>
          </section>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 -translate-y-[9.9rem] mx-xl relative min-h-[100vh]">
          {/* <Image src={expMoanack} alt="Dr. Moanack" /> */}
          <section className="col-start-2 my-[18rem]">
            <h2 className="uppercase font-auxiliar text-h3 md:text-h2 text-moanackOrange">
              Experiencia a la vanguardia
            </h2>
            <p className="mb-[2.5rem]">
              Con 48 años, venezolano y padre de dos hijos, he dedicado mi vida
              a la medicina. Mi formación como cirujano general, y luego en
              Urología en la UCV, me ha llevado a especializarme en Cirugía
              Laparoscópica Avanzada y Endourología. Con experiencia
              internacional y certificación en el Robot Da Vinci Xi, ofrezco
              procedimientos mínimamente invasivos de vanguardia.
            </p>
            <TransparentButton link="/about" content="Sobre mí" />
          </section>
        </section>
        <section className="mx-xl min-h-[100vh]">
          <section className="grid grid-cols-1 md:grid-cols-2">
            <h2 className="text-h3">
              <span className="font-bold">Tecnología</span>
              <br />
              en cada <span className="font-bold">procedimiento</span>
            </h2>
          </section>
          <Slider />
          <p className="mx-xl">
            Con más de dos décadas como urólogo de renombre en Venezuela, he
            tenido el privilegio de transformar vidas a través de mi experiencia
            médica. Mi formación en cirugía general y mi especialidad en
            Urología, respaldadas por mi formación en Endourología y Cirugía
            Mínimamente Invasiva, me permiten ofrecer tratamientos avanzados.
            Siempre me he caracterizado por mantenerme a la vanguardia de las
            nuevas tecnologías, cosa que me ha llevado a manejar instrumentos de
            última tecnología como el Robot Da Vinci Xi, garantizando
            procedimientos precisos y efectivos.
          </p>
          <div className="flex justify-center w-full">
            <OrangeButton
              link="https://api.whatsapp.com/send/?phone=584241406600&text&type=phone_number&app_absent=0"
              content="Agenda tu cita"
            />
          </div>
        </section>
      </article>
      <article className={styles.secondBackground}>
        <section className="grid grid-cols-1 md:grid-cols-2 mx-xl leading-none pt-xxxl">
          <div>
            <h2 className="font-extraBold text-h3 md:text-h2">
              El futuro de la cirugía a tu alcance hoy
            </h2>
            <p className="text-moanackOrange font-bold mt-full">
              Cirugía Robótica de Da Vinci Xi
            </p>
            <OrangeButton link="/davinci" content="Conocer más" />
          </div>
          <div className="flex flex-row flex-nowrap">
            <Image
              src={robot1}
              alt="Da Vinci Xi robot"
              className="max-w-[40vw]"
            />
            <Image
              src={robot2}
              alt="Da Vinci Xi robot"
              className="max-w-[40vw]"
            />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center mx-xl mt-xl pb-xl text-center">
          <h2 className="font-extraBold text-h3 md:text-h2 leading-none">
            ¿Qué piensan mis pacientes?
          </h2>
          <h3 className="text-moanackOrange font-bold mt-full text-h4 md:text-h3 my-full">
            Testimonios de esperanza y éxito
          </h3>
          <Testimonials />
        </section>
      </article>
    </main>
  );
}
