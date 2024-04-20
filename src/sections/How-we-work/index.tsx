import { Title, Wr } from "../../components/ui-kit";
import { PATH } from "../../helpers/consts";
import styles from "./How-we-work.module.scss";
import { Step } from "./Step";

export function HowWeWork() {
  return (
    <section className={styles.how_we_work} id={PATH["how-we-work"].link}>
      <Wr>
        <Title size={"h2"} tag={"h2"} classNames={styles.title}>
          Как это работает
        </Title>
        <div className={`row space-between ${styles.steps}`}>
          <Step
            img={"src/assets/img/how-we-work/waiting.svg"}
            title={"Прочитай задание внимательно"}
            text={"Думаю у тебя не займет это больше двух-трех минут"}
          />
          <Step
            img={"src/assets/img/how-we-work/delivery-truck.svg"}
            title={"Прочитай задание внимательно"}
            text={"Думаю у тебя не займет это больше двух-трех минут"}
          />
          <Step
            img={"src/assets/img/how-we-work/secure.svg"}
            title={"Прочитай задание внимательно"}
            text={"Думаю у тебя не займет это больше двух-трех минут"}
          />
          <Step
            img={"src/assets/img/how-we-work/money-bags.svg"}
            title={"Прочитай задание внимательно"}
            text={"Думаю у тебя не займет это больше двух-трех минут"}
          />
        </div>
      </Wr>
    </section>
  );
}
