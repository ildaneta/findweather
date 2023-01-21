export const formatDate = (date: string) => {
  const localTime = date
  const dateString = new Date(localTime.substring(0, 10));

  const dateFormatted = Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(dateString);

  const upperCasedWeekday = dateFormatted.replace(/^\w/, (l) =>
    l.toUpperCase()
  );

  return upperCasedWeekday
}