import { IRest } from "../../../models";
import styles from "./Checkbox.module.scss";

interface ICheckbox {
  label: string;
  setstate: (checked: boolean) => void;
  checked: boolean;
  classNames?: string
}

export function Checkbox({ label, checked, setstate, classNames,  ...rest }: ICheckbox & IRest) {
  return (
    <div className={`${styles.wrapper} ${classNames}`}>
      <input
        type="checkbox"
        onChange={() => setstate(!checked)}
        checked={checked}
        {...rest}
      />
      <label>{label}</label>
    </div>
  );
}
