import styles from "./Input.module.css";

export function Input({ value, onChange, placeholder, isHidden = false }) {
  return (
    <input
      type={isHidden ? "password" : "text"}
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
