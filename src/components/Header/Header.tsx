import { useEffect } from "react";
import styles from "./Header.module.css";

export const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", (event: any) => {
      console.log({ scroll: window.pageYOffset });
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return <div className={styles.container}></div>;
};
