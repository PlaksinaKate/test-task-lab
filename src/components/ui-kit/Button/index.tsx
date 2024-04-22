import { ReactNode } from "react";
import styles from "./Button.module.scss";
import { IRest } from "../../../models";

interface IButton {
  children: ReactNode;
  primary?: boolean;
  classNames?: string;
}

export function Button({
  children,
  primary,
  classNames,
  ...rest
}: IButton & IRest) {
  return (
    <button
      className={`${styles.button} ${
        primary ? styles.primary : ''
      } ${classNames}`}
      {...rest}
    >
      {children}
    </button>
  );
}
