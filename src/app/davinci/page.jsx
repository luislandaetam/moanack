import styles from "./DaVinciXi.module.css";
import Image from "next/image";
import figure1 from "../../../public/davinci/figure-1.png";
import figure2 from "../../../public/davinci/figure-2.png";
import figure3 from "../../../public/davinci/figure-3.png";

export default function DaVinciXi() {
  const bold = "font-bold";
  const extraBold = "font-extraBold";
  const fullMargin = "my-full";
  const extraTopMargin = "mt-xxl";
  const imageWidth = "w-80 h-auto";
  const figures = "grid grid-cols-3 gap-4";
  const figureItems = "flex flex-col items-center";

  return (
    <main>
      <article className={`${styles.main} h-screen`}>
        <section className="flex flex-col justify-center items-center h-full w-full">
          <h1 className={`${extraBold} text-h1`}>El futuro de las cirugías.</h1>
          <h2 className="text-moanackOrange">
            Cirugías <span className={bold}>mínimamente invasivas</span> al
            servicio de tu recuperación.
          </h2>
        </section>
      </article>
      <article className="bg-[#36415D] flex flex-col items-center px-xxxl">
        <section>
          <h3 className={`${extraBold} ${extraTopMargin} text-h3`}>
            Expandiendo lo que es posible
          </h3>
          <p className={fullMargin}>
            Es justo decir que nadie espera con ansias una cirugía, pero a veces
            puede ser la mejor opción para tu cuidado. Si se considera que la
            cirugía es adecuada para ti, puedes explorar las diferentes formas
            en que los médicos pueden realizar la cirugía que necesita.
          </p>
          <p>
            La cirugía abierta tradicional, en la que un cirujano opera con
            instrumentos manuales a través de un corte grande (incisión), puede
            ser el primer método que venga a la mente. Sin embargo, también
            podría ser candidato para un enfoque{" "}
            <span className={bold}>menos invasivo</span> que requiere solo{" "}
            <span className={bold}>
              unos pocos cortes pequeños, llamado cirugía mínimamente invasiva.
            </span>{" "}
            La cirugía mínimamente invasiva incluye la{" "}
            <span className={bold}>
              cirugía laparoscópica y la cirugía asistida por robots.
            </span>
          </p>
        </section>
        <section>
          <h3 className={`${extraBold} ${extraTopMargin} text-h3`}>
            Mejorando las capacidades
          </h3>
          <p className={fullMargin}>
            Los médicos utilizamos muchas tecnologías que mejoran nuestras
            capacidades más allá de lo que permite el cuerpo humano. Por
            ejemplo, los escáneres de resonancia magnética y tomografía
            computarizada permiten a los médicos "ver" dentro del cuerpo. De
            manera similar, muchos cirujanos realizan{" "}
            <span className={bold}>
              cirugía asistida por robots utilizando un sistema da Vinci porque
              amplía las capacidades de sus ojos y manos.
            </span>
          </p>
        </section>
        <section className={figures}>
          <figure className={figureItems}>
            <Image
              src={figure1}
              alt="Doctor realizando cirugía robótica"
              className={imageWidth}
            />
            <figcaption>
              Estaré contigo en la sala de operaciones, sentado en la consola
              del sistema da Vinci. La consola le da a tu cirujano el control de
              los instrumentos que utiliza para realizar tu cirugía con
              precisión.
            </figcaption>
          </figure>
          <figure className={figureItems}>
            <Image
              src={figure2}
              alt="Vista durante cirugía robótica"
              className={imageWidth}
            />
            <figcaption>
              El sistema de visión de da Vinci ofrece vistas de alta definición
              en 3D, brindándome una vista cristalina del área quirúrgica que se
              magnifica 10 veces más de lo que ve el ojo humano.
            </figcaption>
          </figure>
          <figure className={figureItems}>
            <Image
              src={figure3}
              alt="Dedos manejando robot durante cirugía robótica"
              className={imageWidth}
            />
            <figcaption>
              En la intervención se utilizan instrumentos pequeños que se mueven
              como una mano humana, pero con un rango de movimiento mucho mayor.
              La tecnología de filtración de temblores incorporada en el sistema
              ayuda a mover cada instrumento con precisión suave.
            </figcaption>
          </figure>
        </section>
      </article>
    </main>
  );
}
