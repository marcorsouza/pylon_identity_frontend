import { DateTime } from "luxon";

const formatDateTime = (dateString: string | null | undefined) => {
  if (!dateString) return "—";

  // Tentando converter a string ISO para DateTime
  const date = DateTime.fromISO(dateString);

  // Checa se a conversão foi bem-sucedida e formata a data
  return date.isValid ? date.toFormat("dd/LL/yyyy HH:mm") : "—";
};

export default formatDateTime;
