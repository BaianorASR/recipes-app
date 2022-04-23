export const myAlert = (msg: string) => {
  const global = globalThis;
  global.alert(msg);
};
