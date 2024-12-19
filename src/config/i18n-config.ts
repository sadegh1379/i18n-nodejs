import i18n from "i18n";
import path from "path";

// Configure i18n
i18n.configure({
  locales: ["en", "es", "fa"], // Define supported languages
  directory: path.join(path.resolve(), "/src/locales"), // Directory for locale files
  defaultLocale: "en", // Default language
  objectNotation: true, // Enable object notation for translation keys
  // cookie: "lang", 
  register: global,
  queryParameter:"lang"
});

export default i18n;
