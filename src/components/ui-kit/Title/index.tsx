import { ComponentType, ReactNode } from "react";
import { IRest } from "../../../models";
import styles from './Title.module.scss'

interface ITitle {
  children: ReactNode;
  size: string;
  tag: ComponentType | keyof JSX.IntrinsicElements;
  classNames?: string;
}

export function Title({ children, size, tag, classNames, ...rest }: ITitle & IRest) {
  const Tag = tag;

  return <Tag className={`${styles[size]} ${classNames}`} {...rest}>{children}</Tag>;
}
