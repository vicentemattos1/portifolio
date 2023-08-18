import { format } from "date-fns";
import { currentDatePickerLocale } from "../i18n";

export function formatDate(date: string) {
  return format(new Date(date), "dd/MM/yyyy", {
    locale: currentDatePickerLocale,
  });
}
