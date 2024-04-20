import { ComponentType } from "react";
import { IChildren, IRest } from "../../../models";
import styles from "./Text.module.scss";

interface IText {
  size: string;
  bold?: boolean;
  tag?: ComponentType | keyof JSX.IntrinsicElements;
  classNames?: string;
}

export function Text({
  children,
  size,
  bold,
  tag = "div",
  classNames,
  ...rest
}: IRest & IChildren & IText) {
  const Tag = tag;
  const textSize = "text_" + size;

  return (
    <Tag
      className={`${styles.text} ${styles[textSize]} ${
        bold ? styles.bold : null
      } ${classNames}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
