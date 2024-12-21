import express, { Request, Response } from "express";
import i18next from "./config/i18n-config";  
import languageMiddleware from "./middleware/language";
import i18nextMiddleware from 'i18next-express-middleware'; 

const app = express();

app.use(i18nextMiddleware.handle(i18next));

app.use(languageMiddleware);


app.get('/', (req: Request, res: Response) => {


  // if (req.i18n.language === "fa") {
  //   res.json({ message: "lang is fa" })
  // }


  res.json({ message: req.t("error.not_found") });
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
