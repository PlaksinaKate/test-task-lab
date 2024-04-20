import { Wr } from "../../components/ui-kit";
import styles from "./Header.module.scss";
import { Navigation } from "./Navigation";

interface IBurgerMenu {
  active: boolean;
}

interface IBurgerMenuButton {
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
}

export function BurgerMenuButton({ clicked, setClicked }: IBurgerMenuButton) {
  const onBurgerMenuButtonClick = () => setClicked(!clicked);

  return (
    <div
      className={`${styles.burger_menu_button} ${
        clicked ? styles.clicked : ""
      }`}
      onClick={onBurgerMenuButtonClick}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
}

export function BurgerMenu({ active }: IBurgerMenu) {
  return (
    <div className={`${styles.burger_menu} ${active ? styles.active : ""}`}>
      <Wr>
        <Navigation />
      </Wr>
    </div>
  );
}