import { ReactNode } from "react";
import styles from "./Button.module.scss";
import { IRest } from "../../../models";

interface IButton {
  children: ReactNode,
  primary?: boolean,
}

export function Button({ children, primary, ...rest }: IButton & IRest) {
  return (
    <button className={`${styles.button} ${primary ? styles.primary : null}`} {...rest}>
      {children}
    </button>
  );
}
