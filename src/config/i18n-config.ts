import i18next from "i18next";
import path from "path";
import i18nextFsBackend from "i18next-fs-backend";
import i18nextMiddleware from 'i18next-http-middleware';

i18next
  .use(i18nextMiddleware.LanguageDetector)
  .use(i18nextFsBackend)
  .init({
    lng: "en",
    fallbackLng: "en",
    preload: ["en", "es", "fa"],
    ns: ["translation"],
    defaultNS: "translation",
    backend: {
      loadPath: path.resolve(__dirname, "../locales/{{lng}}.json"),
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
