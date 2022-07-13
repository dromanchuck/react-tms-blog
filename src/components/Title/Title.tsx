import styles from "./index.module.css";

interface IProps {
  text: string;
}

export const Title = ({ text }: IProps) => {
  return <h1 className={styles.title}>{text}</h1>;
};
