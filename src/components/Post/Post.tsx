import { IPost } from "../../types/post";
import styles from "./index.module.css";

export const Post = ({ image, text, date, title }: IPost) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};
