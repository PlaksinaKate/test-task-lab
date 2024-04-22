import { PATH } from "../../helpers/consts";
import { HeaderLink } from "./Link";
import styles from "./Header.module.scss";
import { IOnClose } from "./BurgerMenu";

export function Navigation({ onClose }: IOnClose) {
  return (
    <nav className={styles.nav}>
      <ul className={`row center ${styles.ul}`}>
        {Object.values(PATH).map((path, index) => {
          const { name, link } = path;
          return (
            <HeaderLink
              key={index}
              linkName={name}
              link={"#" + link}
              onClose={onClose}
            />
          );
        })}
      </ul>
    </nav>
  );
}
