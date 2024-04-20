import { Logo, Wr } from "../../components/ui-kit";
import styles from "./Header.module.scss";
import { PATH } from "../../helpers/consts";
import { HeaderLink } from "./Link";
import { Link } from "react-router-dom";
import { useState } from "react";

interface IBurgerMenu {
  active: boolean;
}

interface IBurgerMenuButton {
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
}

export function Header() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);

  return (
    <>
      <header className={styles.header}>
        <Wr>
          <div className="row space-between center">
            <Link to={"#"}>
              <Logo color={openBurgerMenu ? "#191C1F" : "white"} />
            </Link>
            <Navigation />
            <BurgerMenuButton
              clicked={openBurgerMenu}
              setClicked={setOpenBurgerMenu}
            />
          </div>
        </Wr>
      </header>
      <BurgerMenu active={openBurgerMenu} />
    </>
  );
}

function BurgerMenuButton({ clicked, setClicked }: IBurgerMenuButton) {
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

function BurgerMenu({ active }: IBurgerMenu) {
  return (
    <div className={`${styles.burger_menu} ${active ? styles.active : ""}`}>
      <Wr>
        <Navigation />
      </Wr>
    </div>
  );
}

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul className={`row center ${styles.ul}`}>
        {Object.values(PATH).map((path, index) => {
          const { name, link } = path;
          return <HeaderLink key={index} linkName={name} link={link} />;
        })}
      </ul>
    </nav>
  );
}
