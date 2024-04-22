import { Wr, Text } from "../../components/ui-kit";
import { microloanInfo } from "./Microloan.info";
import styles from "./Microloan.module.scss";

export function Microloan() {
  return (
    <section className={styles.section}>
      <Wr>
        <div className={`row stretch space-between ${styles.items}`}>
          {microloanInfo.map((info) => {
            const { id, title, text } = info;
            return <MicroloanItem key={id} title={title} text={text} />;
          })}
        </div>
      </Wr>
    </section>
  );
}

interface IMicroloanItem {
  title: string;
  text: string;
}

function MicroloanItem({ title, text }: IMicroloanItem) {
  return (
    <div className={styles.item}>
      <Text size={"18"} bold>
        {title}
      </Text>
      <Text size={"16"} classNames={styles.text}>
        {text}
      </Text>
    </div>
  );
}
