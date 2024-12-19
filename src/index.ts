import express, { Request, Response } from 'express';
import languageMiddleware from './middleware/language';
import i18n from './config/i18n-config';

const app = express();

// Initialize i18n middleware (important to have this before using any translation)
app.use(i18n.init);

// Use the custom language middleware to set language from the Language-Type header
app.use(languageMiddleware);

// تعریف یک روت ساده
app.get('/', (req: Request, res: Response) => {
    res.json({ message: req.__("global-messages.success.login", { username:"sadegh" }) });
    
});

// تنظیم پورت و شروع سرور
const PORT =  4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
