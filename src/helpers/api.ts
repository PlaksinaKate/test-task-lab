const sendForm = async () => {
  return await fetch(`"https://jsonplaceholder.typicode.com/users`, {
    method: "POST",
  })
    .then((response) => response.json())
    .catch((error) => error);
};

export const api = { sendForm };
