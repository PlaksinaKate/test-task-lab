import { IRest } from "../../../models";
import styles from "./Input.module.scss";

interface IInput {
  label: string;
  value: string | number | readonly string[] | undefined;
  type?: string;
  error?: string;
  placeholder: string;
  isValid?: boolean;
  className?: string
}

export function Input({
  label,
  value,
  type = "text",
  error,
  placeholder,
  isValid,
  className,
  ...rest
}: IInput & IRest) {
  return (
    <label
      className={`${error ? styles.error : ''} ${
        isValid ? styles.valid : ''
      } ${styles.wrapper} ${className}`}
    >
      <input
        className={value !== "" ? styles.focus : ""}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      <span>{label}</span>
      <div>{error}</div>
    </label>
  );
}
