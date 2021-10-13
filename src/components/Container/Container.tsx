import { ReactNode } from "react";

import styles from "./Container.module.css";

interface IProps {
  children: ReactNode;
  title: string;
}

export const Container = ({ children, title }: IProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.background} />
      <div>{children}</div>
    </div>
  );
};
