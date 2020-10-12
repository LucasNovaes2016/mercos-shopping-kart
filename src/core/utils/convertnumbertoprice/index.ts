export const convertNumberToPrice = (num: number) => {
  return num
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};
