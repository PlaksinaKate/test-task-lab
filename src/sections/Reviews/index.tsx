import { Title, Wr } from "../../components/ui-kit";
import styles from "./Reviews.module.scss";
import { Slider } from "./Slider";


export function Reviews() {

  return (
    <section className={styles.section}>
      <Wr>
        <Title size={"h2"} tag={"h2"} classNames={styles.title}>
          Отзывы
        </Title>
        <Slider />
      </Wr>
    </section>
  );
}
