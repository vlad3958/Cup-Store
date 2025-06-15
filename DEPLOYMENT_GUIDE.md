# Інструкції з деплойменту сайту Cup Store

## 🚀 Варіанти деплойменту

### 1. Netlify (Рекомендовано - БЕЗКОШТОВНО)

**Переваги:**
- Безкоштовний хостинг
- Автоматичні деплої з Git
- HTTPS з коробки
- CDN для швидкості

**Кроки:**
1. Створіть акаунт на [Netlify.com](https://netlify.com)
2. Підключіть GitHub репозиторій або завантажте папку вручну
3. Налаштування збірки:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
4. Сайт буде доступний за адресою типу `your-site-name.netlify.app`

### 2. Vercel (БЕЗКОШТОВНО)

**Переваги:**
- Швидкий деплой
- Автоматична оптимізація
- Edge функції

**Кроки:**
1. Створіть акаунт на [Vercel.com](https://vercel.com)
2. Імпортуйте проект з GitHub
3. Автоматично визначить налаштування для Vite
4. Сайт буде доступний за адресою типу `your-site.vercel.app`

### 3. GitHub Pages (БЕЗКОШТОВНО)

**Кроки:**
1. В вашому репозиторії: Settings → Pages
2. Source: GitHub Actions
3. Створіть файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 4. Звичайний веб-хостинг

**Кроки:**
1. Виконайте збірку проекту:
   ```powershell
   npm run build
   ```
2. Завантажте вміст папки `dist` на ваш хостинг
3. Налаштуйте веб-сервер для SPA (Single Page Application)

## ⚙️ Налаштування перед деплоєм

### 1. Перевірте package.json
```json
{
  "name": "cup-store-website",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 2. Налаштуйте vite.config.js (для GitHub Pages)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/repository-name/', // Замініть на назву вашого репозиторія
})
```

### 3. Додайте файл .gitignore
```
node_modules/
dist/
.env
.env.local
.env.production
```

## 🔧 Налаштування домену

### Власний домен:
1. **Netlify**: Site settings → Domain management → Add custom domain
2. **Vercel**: Project settings → Domains → Add domain
3. **GitHub Pages**: Settings → Pages → Custom domain

### Налаштування DNS:
```
CNAME record: www -> your-site.netlify.app
A record: @ -> IP address provided by hosting
```

## 📧 Налаштування EmailJS для продакшену

1. Зареєструйтеся на [EmailJS.com](https://emailjs.com)
2. Створіть Service та Template (інструкції в `EMAILJS_SETUP.md`)
3. Оновіть ключі в `src/components/Design/Design.jsx`:
   ```javascript
   const serviceID = 'your_real_service_id';
   const templateID = 'your_real_template_id';
   const userID = 'your_real_user_id';
   ```

## 🔒 Безпека та продуктивність

### Environment Variables:
Створіть файл `.env` для приватних ключів:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

І використовуйте в коді:
```javascript
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
```

### Оптимізація зображень:
Перед деплоєм стисніть зображення в папці `src/assets/`

### SEO налаштування:
Додайте в `index.html`:
```html
<meta name="description" content="Українська компанія з виробництва одноразових стаканів та тарілок з індивідуальним дизайном">
<meta name="keywords" content="стакани, одноразові, дизайн, Україна, кави">
<meta property="og:title" content="Cup Store - Одноразові стакани з вашим дизайном">
<meta property="og:description" content="Виготовляємо якісні одноразові стакани та тарілки з індивідуальним дизайном">
```

## ✅ Чекліст перед деплоєм:

- [ ] Тестування всіх функцій локально
- [ ] Перевірка responsive design
- [ ] Налаштування EmailJS
- [ ] Оптимізація зображень
- [ ] Перевірка всіх посилань
- [ ] Додавання SEO meta тегів
- [ ] Тестування форми
- [ ] Перевірка console на помилки

## 🎯 Після деплою:

1. **Тестування**: Перевірте всі функції на живому сайті
2. **Google Analytics**: Додайте відстеження (опціонально)
3. **Google Search Console**: Зареєструйте сайт
4. **Backup**: Регулярно робіть резервні копії

---

**Важливо**: Зберігайте ключі EmailJS в безпеці та не публікуйте їх в публічних репозиторіях!
