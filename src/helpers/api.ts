import { store } from "../store";

const sendForm = async () => {
  const { name, phone } = store.getState().form;

  const response = await fetch(`"https://api.ru/?name=${name}&phone=${phone}`)
    .then((response) => console.log(response.json()))
    .catch((error) => {
      const errorMessage: string = error.message;
      console.error(errorMessage);
    });
};

export const api = { sendForm };
