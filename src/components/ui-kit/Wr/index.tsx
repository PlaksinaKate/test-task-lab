import { IChildren, IRest } from "../../../models";
import styles from "./Wr.module.scss";

export function Wr({ children, ...rest }: IChildren & IRest) {
  return (
    <div className={styles.wr} {...rest}>
      {children}
    </div>
  );
}
