import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Context } from "../../context/ThemeContext";
import { Button } from "../Button";
import { ReactComponent as Close } from "./close.svg";
import styles from "./index.module.css";

interface IProps {
  onClickClose: () => void;
}

export const NavBar = ({ onClickClose }: IProps) => {
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  useEffect(() => {
    console.log("mounting");

    return () => {
      console.log("unmounting");
    };
  }, []);

  const context = useContext(Context);

  return (
    <div className={styles.navBar}>
      <div className={styles.mainMenu}>
        <div className={styles.menu}>
          <Close onClick={onClickClose} />
        </div>
        <div>
          {user ? null : (
            <>
              <Link to="/login" onClick={onClickClose}>
                <Button text="Login" onClick={() => {}} disabled={false} />
              </Link>
              <Link to="/registration" onClick={onClickClose}>
                <Button text="Register" onClick={() => {}} disabled={false} />
              </Link>
            </>
          )}
        </div>

        <Button
          text={context.isDark ? "День" : "Ночь"}
          disabled={false}
          onClick={() => {
            context.setIsDark(!context.isDark);
          }}
        />
      </div>
    </div>
  );
};
