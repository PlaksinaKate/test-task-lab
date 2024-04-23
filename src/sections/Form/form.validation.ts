export const validation = {
  phone: (value: string) => {
    const regex = new RegExp(/\+7|8\d{10}/);
    return regex.test(value);
  },
};