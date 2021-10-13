import styles from "./Button.module.css";

export function Button({ text, type = "primary", onClick }) {
  return (
    <button className={styles[type]} onClick={onClick}>
      {text}
    </button>
  );
}
