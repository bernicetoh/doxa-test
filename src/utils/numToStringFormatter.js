export const numToStringFormatter = (number) => {
  return Math.abs(number) > 999
    ? (Math.abs(number) / 1000).toFixed(1) + "k"
    : number.toString();
};
