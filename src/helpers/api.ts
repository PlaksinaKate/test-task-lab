import { IUser } from "../store/slices/form-slice.interfaces";

const sendForm = async ({name, phone}: IUser) => {
  return await fetch(`"https://jsonplaceholder.typicode.com/users`, {
    method: "POST",
    body: JSON.stringify({
      name,
      username: name,
      email: phone
    })
  })
    .then((response) => response.json())
    .catch((error) => error);
};

export const api = { sendForm };
