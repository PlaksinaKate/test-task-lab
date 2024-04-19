import { IRest } from "../../../models";
import styles from "./Checkbox.module.scss";

interface ICheckbox {
  label: string;
  setstate: (checked: boolean) => void;
  checked: boolean
}

export function Checkbox({ label, checked, setstate,  ...rest }: ICheckbox & IRest) {
  console.log("checked", checked);

  return (
    <div className={styles.wrapper}>
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
