export const loginValidation = (email: string, password: string) => {
  const regex = new RegExp(
    '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+).(.[a-z]{2,3})$',
  );
  const MIN_LENGTH = 6;
  return !(regex.test(email) && password.length > MIN_LENGTH);
};
