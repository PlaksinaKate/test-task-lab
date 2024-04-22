import { Title, Wr, Text } from "../../components/ui-kit";
import { PATH } from "../../helpers/consts";
import styles from "./ThirdBlock.module.scss";

export function ThirdBlock() {
  return (
    <section className={styles.section} id={PATH["3-block"].link}>
      <Wr>
        <div className={`row space-between center no-wrap ${styles.wr}`}>
          <div className={styles.text_content}>
            <Title size={"h3"} tag={"h3"}>
              Круто, ты дошел до третьего блока
            </Title>
            <Text size={"16"} classNames={styles.text}>
              63% опрошенных пользовались кредитами из-за того, что не могли
              покрыть непредвиденные расходы свыше 15 000 ₽. <br /> <br />
              Доступ к заработанным деньгам помогает отказаться от кредитов и
              экономить деньги на процентах и штрафах.
            </Text>
          </div>
          <div className={styles.img}>
            <img src="./img/3-block.png" alt="3-block" />
          </div>
        </div>
      </Wr>
    </section>
  );
}
