import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTBR from './locale/pt-BR.json';
import ENUS from './locale/en-US.json';
import { config } from '../config';
const initialLang = localStorage.getItem(config.i18nLang) || 'en-US';

const resources = {
  'pt-BR': PTBR,
  'en-US': ENUS,
};
i18n.use(initReactI18next).init({
  resources,
  lng: initialLang,
  interpolation: { escapeValue: false },
  detection: {
    order: ['navigator'],
  },
});

document.documentElement.lang = i18n.language;
i18n.on('languageChanged', (lng: string) => {
  document.documentElement.setAttribute('lang', lng);
  localStorage.setItem(config.i18nLang, lng);
});
i18n.changeLanguage(initialLang);

export default i18n;
