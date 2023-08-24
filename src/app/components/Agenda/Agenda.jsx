import styles from "./Agenda.module.css";
import { OrangeButton } from "../OrangeButton/OrangeButton";

export function Agenda() {
  return (
    <section className={`${styles.background} grid grid-cols-2 my-xxl`}>
      <div className="py-[60px] px-[30px]">
        <h3 className="text-h4 font-extraBold leading-none">
          Agendemos tu cita <br />
          virtual o presencial,
          <br />
          <span className="text-moanackOrange">sin complicaciones.</span>
        </h3>
        <OrangeButton link="#" content="Agenda tu cita" />
      </div>
    </section>
  );
}
