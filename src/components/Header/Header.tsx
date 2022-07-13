import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavBar } from "../NavBar/NavBar";
import { User } from "../User/User";
import styles from "./index.module.css";
import { ReactComponent as Menu } from "./menu.svg";

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  const toggle = () => {
    setActive(!active);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.menu}>
        <Menu onClick={toggle} />
        {user ? <User username={user?.username} /> : null}
      </div>
      {active ? <NavBar onClickClose={toggle} /> : null}
    </nav>
  );
};
