export const dateStringtToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split('/')
    .map((value: string) => {
      return parseInt(value);
  });
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2];
  return new Date(year, month, day);
}