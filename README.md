# Multi-language Support for Node.js with i18n and i18next

Hello friends! One of the most common problems I encounter in multi-language projects is setting up the correct multi-language support. To address this, I've created a ready-to-use configuration that solves these issues and makes the process easier.

In some projects, I’ve seen that everything was handled through a database, and to fetch translations, an additional request was required. This approach is not only time-consuming but also adds unnecessary complexity. The best approach is to use **i18n** or **i18next**.

## i18n vs i18next

### **i18n**
- Simpler and faster to implement.
- Suitable for small projects or when you're looking for a quick solution.

### **i18next**
- More features, such as loading translations from the server or separate JSON files.
- Best for larger projects where flexibility and scalability are needed.

## How to Use

To use this configuration, all you need is a middleware that reads the `language-type` from the request headers and sets it. After that, you can easily use translations in your application using `t()`.

Example:

```javascript
res.json({ message: req.t("error.not_found") });
