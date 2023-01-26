import { Platform } from "react-native";

const formatDate = () => {
  
  const dateFormatted = Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date());
  
  const upperCasedWeekday = dateFormatted.replace(/^\w/, (l) =>
  l.toUpperCase()
  );
  
  return upperCasedWeekday
}

const formatAPIDate = (date: string) => {
  const dateString = new Date(date.substring(0, 10));
  const iOS = Platform.OS === 'ios';
  
  const weekdayFormatted = Intl.DateTimeFormat("pt-BR", {
    weekday: "short",
  }).format(dateString);

  const monthFormatted = Intl.DateTimeFormat("pt-BR", {
    month: 'short',
  }).format(dateString);

  const dayFormatted = Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
  }).format(dateString);

  const upperCasedWeekday = weekdayFormatted.replace(/^\w/, (l) =>
  l.toUpperCase()
  );

  const upperCasedMonth = monthFormatted.replace(/^\w/, (l) =>
  l.toUpperCase()
  );
  
  return `${upperCasedWeekday} ${dayFormatted} ${upperCasedMonth}`
};

export {formatDate, formatAPIDate}