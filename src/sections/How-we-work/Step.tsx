import { Title, Text } from "../../components/ui-kit";
import styles from "./How-we-work.module.scss";

interface IStep {
  img: string;
  title: string;
  text: string;
}

export function Step({ img, title, text }: IStep) {
  return (
    <div className={styles.step}>
      <div className={styles.img}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.wr_text}>
        <Title size={"h6"} tag={"h6"} classNames={styles.step_title}>
          {title}
        </Title>
        <Text size={"14"} classNames={styles.step_text}>
          {text}
        </Text>
      </div>
    </div>
  );
}
