import i18n from "i18n";
import path from "path";

i18n.configure({
  locales: ["en", "es", "fa"],
  directory: path.join(path.resolve(), "/src/locales"),
  defaultLocale: "en",
  objectNotation: true,
  register: global,
  queryParameter: "lang"
});

export default i18n;
