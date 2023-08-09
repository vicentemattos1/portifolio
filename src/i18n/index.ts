import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PTBR from "./locale/pt-BR.json";
import ENUS from "./locale/en-US.json";
import { config } from "../config";
import { ptBR as datePTBR, enUS as dateENUS } from "date-fns/locale";

const datePickerLanguages = [
  { code: "pt-BR", value: datePTBR },
  { code: "en-US", value: dateENUS },
];

export const currentDatePickerLocale = datePickerLanguages.find(
  (language) => language.code === localStorage.getItem(config.i18nLang)
)?.value;

const resources = {
  "pt-BR": PTBR,
  "en-US": ENUS,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt-BR",
  interpolation: { escapeValue: false },
  detection: {
    order: ["navigator"],
  },
});

document.documentElement.lang = i18n.language;
i18n.on("languageChanged", (lng: string) => {
  document.documentElement.setAttribute("lang", lng);
  localStorage.setItem(config.i18nLang, lng);
});
const savedLang = localStorage.getItem(config.i18nLang);
i18n.changeLanguage(savedLang ?? "pt-BR");

export default i18n;
