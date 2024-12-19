import express, { Request, Response } from "express";
import i18next from "./config/i18n-config";  
import languageMiddleware from "./middleware/language";
import i18nextMiddleware from 'i18next-express-middleware'; 

const app = express();

app.use(i18nextMiddleware.handle(i18next));

app.use(languageMiddleware);


app.get('/', (req: Request, res: Response) => {

  const message = req.t("name")
    

  res.json({ message });
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
