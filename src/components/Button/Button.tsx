import styles from "./index.module.css";

interface IProps {
  text: string;
  disabled: boolean;
  onClick?: () => void;
  type?: "primary" | "secondary";
}

export const Button = (props: IProps) => {
  return (
    <button
      disabled={props.disabled}
      className={`${styles.button} ${
        props.type ? styles[props.type] : styles.primary
      } ${props.disabled ? styles.disabled : ""}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
