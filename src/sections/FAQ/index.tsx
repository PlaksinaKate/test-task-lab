import { useState } from "react";
import { Title, Wr } from "../../components/ui-kit";
import styles from "./FAQ.module.scss";
import { faqInfo } from "./faq.info";

interface IAccordionItem {
  title: string;
  content: string;
}

export function FAQ() {
  return (
    <section className={styles.section}>
      <Wr>
        <Title size={"h2"} tag={"h2"} classNames={styles.title}>
          Вопросы и ответы
        </Title>
        <div className={styles.accordion}>
          {faqInfo.map((info) => {
            const { id, title, content } = info;
            return <AccordionItem key={id} title={title} content={content} />;
          })}
        </div>
      </Wr>
    </section>
  );
}

function AccordionItem({ title, content }: IAccordionItem) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${styles.item}  ${isActive && styles.active}`}>
      <div
        className={`row space-between no-wrap ${styles.accordion_title}`}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div className={styles.plus}></div>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}
