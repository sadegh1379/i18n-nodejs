declare module '*.json' {
  // تایپ‌گذاری برای کلیدهای موجود در فایل JSON
  const value: { [key: string]: string }; // تمام کلیدها باید از نوع رشته باشند
  export default value;
}

// برای استفاده از تایپ کلیدهای موجود در فایل JSON
declare namespace NodeJS {
  interface Global {
    __: (key: keyof typeof import('../locales/en.json')) => string;
  }
}
