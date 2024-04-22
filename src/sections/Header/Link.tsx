import { Link } from "react-router-dom";
import { IRest } from "../../models";
import styles from "./Header.module.scss";
import { IOnClose } from "./BurgerMenu";

interface IHeaderLink {
  linkName: string;
  link: string;
}

export function HeaderLink({
  linkName,
  link,
  onClose,
  ...rest
}: IHeaderLink & IOnClose & IRest) {
  return (
    <li className={styles.li} {...rest} onClick={onClose}>
      <Link
        className={styles.link}
        to={{
          pathname: "/",
          hash: link,
        }}
      >
        {linkName}
      </Link>
    </li>
  );
}
