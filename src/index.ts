import express, { Request, Response } from 'express';
import languageMiddleware from './middleware/language';
import i18n from './config/i18n-config';

const app = express();

app.use(i18n.init);
app.use(languageMiddleware);

app.get('/', (req: Request, res: Response) => {
    res.json({ message: req.__("global-messages.success.login", { username:"sadegh" }) });
});

const PORT =  4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
