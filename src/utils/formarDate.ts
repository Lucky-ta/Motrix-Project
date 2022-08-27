function addZero(number: number) {
  const FUNC_NUMBER = 9;
  if (number <= FUNC_NUMBER) return `0${number}`;
  return number;
}

const formatDate = (newDate: string) => {
  const date = new Date(newDate);
  const formatedDate = `${addZero(date.getDate())}/${addZero(
    date.getMonth() + 1,
  )}/${date.getFullYear()}`;
  return formatedDate;
};

export default formatDate;
