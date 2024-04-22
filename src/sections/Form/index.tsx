import { useState } from "react";
import { Button, Checkbox, Input, Title, Wr } from "../../components/ui-kit";
import styles from "./Form.module.scss";
import { PATH } from "../../helpers/consts";

export function Form() {
  const [state, setstate] = useState<boolean>(false);

  return (
    <section className={styles.section} id={PATH.form.link}>
      <Wr>
        <Title size={"h2"} tag={"h2"} classNames={styles.title}>
          Отправь форму
        </Title>
        <div className={`row space-between ${styles.wr}`}>
          <Input
            label={"Имя"}
            value={''}
            placeholder={"Имя"}
            className={styles.item}
          />
          <Input
            label={"Телефон"}
            value={''}
            placeholder={"Телефон"}
            className={styles.item}
          />
          <Checkbox
            label={"Согласен, отказываюсь"}
            setstate={setstate}
            checked={state}
            classNames={styles.item}
          />
          <Button primary classNames={styles.item}>
            Отправить
          </Button>
        </div>
      </Wr>
    </section>
  );
}
