import { Request, Response, NextFunction } from 'express';

const languageMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const lang = req.get("Language-Type");

  if (lang) {
    const language = lang.toLowerCase();
    if (["en", "es", "fa"].includes(language)) {
      req.i18n.changeLanguage(language);
    } else {
      req.i18n.changeLanguage("en");
    }
  } else {
    req.i18n.changeLanguage("en");
  }

  next();
};

export default languageMiddleware;
