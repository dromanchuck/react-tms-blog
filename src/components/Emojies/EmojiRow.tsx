import styles from "./index.module.css";

interface IProps {
  title: string;
  symbol: string;
}

export const EmojiRow = ({ title, symbol }: IProps) => {
  return (
    <div className={styles.item}>
      <div>{symbol}</div>
      <div>{title}</div>
    </div>
  );
};
