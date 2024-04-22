import { Logo, Wr } from "../../components/ui-kit";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BurgerMenu, BurgerMenuButton } from "./BurgerMenu";
import { Navigation } from "./Navigation";

export function Header() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);

  const onClose = () => setOpenBurgerMenu(!openBurgerMenu);

  return (
    <>
      <header className={styles.header}>
        <Wr>
          <div className="row space-between center">
            <Link to={"#"}>
              <Logo color={openBurgerMenu ? "#191C1F" : "white"} />
            </Link>
            <Navigation onClose={onClose} />
            <BurgerMenuButton
              clicked={openBurgerMenu}
              setClicked={setOpenBurgerMenu}
            />
          </div>
        </Wr>
      </header>
      <BurgerMenu
        active={openBurgerMenu}
        onClose={onClose}
      />
    </>
  );
}
