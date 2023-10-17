import { format } from 'date-fns';
import { ptBR as datePTBR, enUS as dateENUS } from 'date-fns/locale';
import i18n from '../i18n';

const datePickerLanguages = [
  { code: 'pt-BR', value: datePTBR, format: 'dd/MM/yyyy' },
  { code: 'en-US', value: dateENUS, format: 'MM/dd/yyyy' },
];

export function formatDate(date: string) {
  const currentLocale = datePickerLanguages.find((language) => language.code === i18n.language);
  if (currentLocale) {
    return format(new Date(date), currentLocale.format, {
      locale: currentLocale.value,
    });
  }
  return date;
}
