import { Button } from "../Button/Button";
import styles from "./index.module.css";

interface IProps {
  text: string;
  removeTodo: () => void;
}

export const TodoItem = ({ text, removeTodo }: IProps) => {
  return (
    <li className={styles.item}>
      {text}{" "}
      <Button type="secondary" disabled={false} text="X" onClick={removeTodo} />
    </li>
  );
};
