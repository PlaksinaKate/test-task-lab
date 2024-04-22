import { Link } from "react-router-dom";
import { IRest } from "../../models";
import styles from "./Header.module.scss";

interface IHeaderLink {
  linkName: string;
  link: string;
}

export function HeaderLink({ linkName, link, ...rest }: IHeaderLink & IRest) {
  return (
    <li className={styles.li} {...rest}>
      <Link className={styles.link} to={{
         pathname: "/",
         hash: link,
      }}>
        {linkName}
      </Link>
    </li>
  );
}
