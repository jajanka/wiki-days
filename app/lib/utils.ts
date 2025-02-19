export function geCurrentMonthAndDate(): string {
  const currentDate = new Date();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const date = String(currentDate.getDate()).padStart(2, '0');

  return `${month}/${date}`;
}

export function getDateString(): string {
  const currentDate = new Date();

  return currentDate.toDateString();
}
