import { Request, Response, NextFunction } from 'express';

// Middleware to set language based on the custom Language-Type header
const languageMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const lang = req.get("Language-Type"); // Get the Language-Type header

  // If the header is provided, set the locale
  if (lang) {
    const language = lang.toLowerCase();
    if (["en", "es", "fr", "fa"].includes(language)) {
      req.setLocale(language); // Set the language from the header
    } else {
      req.setLocale("en"); // Default to English if the language is not supported
    }
  } else {
    req.setLocale("en"); // Default to English if no language header is provided
  }

  next();
};

export default languageMiddleware;
