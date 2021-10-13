import { ReactNode } from "react";

import styles from "./FormContainer.module.css";

interface IProps {
  children: ReactNode;
}

export const FormContainer = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
