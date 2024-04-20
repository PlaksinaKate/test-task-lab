import { Title, Text, Button, Wr } from "../../components/ui-kit";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Wr>
        <div className={`column center justify-center ${styles.wr}`}>
          <Title size={"h1"} tag={"h1"} classNames={styles.title}>
            Говорят, никогда не поздно сменить профессию
          </Title>
          <Text size={"18"} classNames={styles.text}>
            Сделай круто тестовое задание и у тебя получится
          </Text>
          <div>
            <Button>Проще простого!</Button>
          </div>
        </div>
      </Wr>
    </section>
  );
}
