import { useState } from "react";
import { Button, Checkbox, Input, Title, Wr } from "../../components/ui-kit";
import styles from "./Form.module.scss";
import { ERRORS, PATH } from "../../helpers/consts";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFormData } from "../../store/slices/form-slice";
import { api } from "../../helpers/api";
import { validation } from "./form.validation";

export function Form() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [errorValid, setErrorValid] = useState<string>("");
  const [valid, setValid] = useState<{ name: boolean; phone: boolean }>({
    name: false,
    phone: false,
  });
  const { name, phone } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  const onChangeName = (e: { target: { value: any } }) => {
    dispatch(
      setFormData({
        name: e.target.value,
        phone,
      })
    );
  };

  const onChangePhone = (e: { target: { value: any } }) => {
    dispatch(
      setFormData({
        name,
        phone: e.target.value,
      })
    );
  };

  const handleSubmit = () => {
    if (!validation.phone(phone)) {
      setErrorValid(ERRORS.phoneValid);
      return;
    }

    setErrorValid("");
    setValid({ name: true, phone: true });
    if (isChecked) api.sendForm();
  };

  return (
    <section className={styles.section} id={PATH.form.link}>
      <Wr>
        <Title size={"h2"} tag={"h2"} classNames={styles.title}>
          Отправь форму
        </Title>
        <form
          className={`row space-between ${styles.wr}`}
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            label={"Имя"}
            value={name}
            placeholder={"Имя"}
            className={styles.item}
            isValid={valid.name}
            onChange={onChangeName}
          />
          <Input
            type="phone"
            label={"Телефон"}
            value={phone}
            placeholder={"Телефон"}
            className={styles.item}
            onChange={onChangePhone}
            maxLength="11"
            isValid={valid.phone}
            error={errorValid}
          />
          <Checkbox
            label={"Согласен, отказываюсь"}
            setstate={setIsChecked}
            checked={isChecked}
            classNames={styles.item}
          />
          <Button type="submit" primary classNames={styles.item}>
            Отправить
          </Button>
        </form>
      </Wr>
    </section>
  );
}
