import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const getCurrentHost = typeof window !== 'undefined' ? window.location.origin : '';

i18n.use(i18nBackend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
        escapeValue: false
    },
    ns: ['translation'],
    defaultNS: 'translation',
    backend: {
        loadPath: `${getCurrentHost}/assets/locales/{{lng}}/{{ns}}.json`
    },
    react: {
        useSuspense: false
    }
});

export default i18n;