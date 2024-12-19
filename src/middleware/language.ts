import { Request, Response, NextFunction } from 'express';

const languageMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const lang = req.get("Language-Type");

  if (lang) {
    const language = lang.toLowerCase();
    if (["en", "es", "fr", "fa"].includes(language)) {
      req.setLocale(language);
    } else {
      req.setLocale("en");
    }
  } else {
    req.setLocale("en");
  }

  next();
};

export default languageMiddleware;
