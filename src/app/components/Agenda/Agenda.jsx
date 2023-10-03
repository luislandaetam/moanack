import styles from "./Agenda.module.css";
import { OrangeButton } from "../OrangeButton/OrangeButton";

export function Agenda() {
  return (
    <section
      className={`${styles.background} grid grid-cols-1 md:grid-cols-2 my-xxl`}
    >
      <div className="py-[60px] px-[30px]">
        <h3 className="text-h5 md:text-h4 font-extraBold leading-none">
          Agendemos tu cita <br />
          virtual o presencial,
          <br />
          <span className="text-moanackOrange">sin complicaciones.</span>
        </h3>
        <OrangeButton
          link="https://api.whatsapp.com/send/?phone=584241406600&text&type=phone_number&app_absent=0"
          content="Agenda tu cita"
        />
      </div>
    </section>
  );
}
