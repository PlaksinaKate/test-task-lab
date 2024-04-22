import { PATH } from "../../helpers/consts";
import { HeaderLink } from "./Link";
import styles from "./Header.module.scss";

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={`row center ${styles.ul}`}>
        {Object.values(PATH).map((path, index) => {
          const { name, link } = path;
          return <HeaderLink key={index} linkName={name} link={"#" + link} />;
        })}
      </ul>
    </nav>
  );
}
