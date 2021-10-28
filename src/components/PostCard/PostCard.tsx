import { useHistory } from "react-router";

import { IPost } from "../../redux/types";
import styles from "./PostCard.module.css";

export const PostCard = ({ image, title, text, id }: IPost) => {
  const history = useHistory();

  return (
    <div
      className={styles.container}
      onClick={() => history.push(`/posts/${id}`)}
    >
      <img className={styles.image} src={image} />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.arrow}>&#8250;</div>
    </div>
  );
};
