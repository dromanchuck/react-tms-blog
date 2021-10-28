import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 120) {
        setIsSmall(true);
      }

      if (window.pageYOffset <= 120) {
        setIsSmall(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={styles.container} style={{ height: isSmall ? 50 : 150 }}>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles["active-link"]}
      >
        Posts
      </NavLink>
      <div>
        <NavLink
          exact
          to="/register"
          className={styles.link}
          activeClassName={styles["active-link"]}
        >
          Register
        </NavLink>
        <NavLink
          exact
          to="/login"
          className={styles.link}
          activeClassName={styles["active-link"]}
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};
