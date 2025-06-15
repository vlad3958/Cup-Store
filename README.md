# Cup Store Website 🥤

Професійний веб-сайт для української компанії з виробництва одноразових стаканів та тарілок з індивідуальним дизайном.

![Responsive Design](https://img.shields.io/badge/Design-Responsive-brightgreen)
![React](https://img.shields.io/badge/React-18.0+-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-purple)

## ✨ Основні можливості

- 📱 **Повністю адаптивний дизайн** - працює на всіх пристроях
- 🎯 **Інтуїтивна навігація** - з плавним скролінгом між секціями
- 📧 **Робоча контактна форма** - з EmailJS інтеграцією та підтримкою файлових вкладень
- 🍔 **Burger меню** - для мобільних пристроїв
- 🎨 **Сучасний UI/UX** - з анімаціями та переходами
- 🔍 **SEO оптимізований** - готовий для пошукових систем

## 🚀 Демо

[Переглянути живий сайт](#) *(після деплою)*

## 📂 Структура проекту

```
Cup-Store-Website/
├── src/
│   ├── components/          # React компоненти
│   │   ├── Header/         # Шапка з навігацією
│   │   ├── Banner/         # Головний банер
│   │   ├── About/          # Секція "Про нас"
│   │   ├── Categories/     # Категорії продуктів
│   │   ├── Design/         # Форма замовлення
│   │   └── Contacts/       # Контактна інформація
│   ├── pages/              # Сторінки категорій
│   ├── assets/             # Зображення та медіа
│   └── utils/              # Допоміжні функції
├── public/                 # Статичні файли
└── docs/                   # Документація
```

## 🛠️ Технології

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: CSS3 з responsive design
- **Build Tool**: Vite
- **Email Service**: EmailJS
- **Router**: React Router DOM
- **Icons**: Font Awesome (опціонально)

## ⚡ Швидкий старт

### Передумови
- Node.js 16+ 
- npm або yarn

### Інсталяція

1. **Клонувати репозиторій**
   ```bash
   git clone https://github.com/yourusername/cup-store-website.git
   cd cup-store-website
   ```

2. **Встановити залежності**
   ```bash
   npm install
   ```

3. **Запустити в режимі розробки**
   ```bash
   npm run dev
   ```

4. **Відкрити в браузері**
   ```
   http://localhost:5173
   ```

### Збірка для продакшену

```bash
npm run build
```

## 📧 Налаштування EmailJS

Для роботи контактної форми з підтримкою файлових вкладень потрібно налаштувати EmailJS:

1. **Базове налаштування**: Слідуйте інструкціям в [`EMAILJS_SETUP.md`](./EMAILJS_SETUP.md)
2. **Файлові вкладення**: Налаштуйте за інструкцією в [`EMAILJS_FILE_ATTACHMENT_SETUP.md`](./EMAILJS_FILE_ATTACHMENT_SETUP.md)
3. **Тестування**: Використайте план тестування з [`FILE_ATTACHMENT_TESTING_PLAN.md`](./FILE_ATTACHMENT_TESTING_PLAN.md)

### Функціонал форми замовлення:
- ✅ Валідація всіх полів
- ✅ Підтримка українських номерів телефонів
- ✅ Завантаження файлів (JPG, PNG, GIF, PDF, TXT)
- ✅ Обмеження розміру файлу (до 10MB)
- ✅ Автоматична очистка форми після відправки
- ✅ Індикатор завантаження

## 🎨 Кастомізація

### Зміна контактної інформації

Відредагуйте файл `src/components/Contacts/Contacts.jsx`:

```javascript
const contactInfo = {
  address: "ваша адреса",
  phone: "+380 ХХ ХХХ ХХ ХХ",
  email: "your@email.com"
};
```

### Додавання нових продуктів

1. Додайте зображення в `src/assets/`
2. Оновіть `src/components/Categories/Categories.jsx`
3. Створіть нову сторінку в `src/pages/`

### Зміна стилів

Кожен компонент має свій CSS файл:
- `src/components/ComponentName/ComponentName.css`

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px  
- **Mobile**: 320px - 767px

## 🧪 Тестування

Використовуйте [`TESTING_PLAN.md`](./TESTING_PLAN.md) для перевірки всіх функцій.

### Запуск тестів

```bash
# Локальний превью збірки
npm run preview

# Перевірка помилок
npm run lint
```

## 🚀 Деплой

Детальні інструкції в [`DEPLOYMENT_GUIDE.md`](./DEPLOYMENT_GUIDE.md)

### Швидкий деплой на Netlify

1. Збудуйте проект: `npm run build`
2. Завантажте папку `dist` на [Netlify](https://netlify.com)
3. Готово! ✨

## 📞 Контакти компанії

- **Адреса**: вулиця Алматинська, 2/1, Київ, 02000
- **Телефон**: +380 96 055 88 79  
- **Email**: s.ziabchenkov@gmail.com

## 🤝 Contributing

1. Fork проект
2. Створіть feature гілку (`git checkout -b feature/AmazingFeature`)
3. Commit зміни (`git commit -m 'Add some AmazingFeature'`)
4. Push в гілку (`git push origin feature/AmazingFeature`)
5. Відкрийте Pull Request

## 📝 Ліцензія

Цей проект ліцензований під MIT License - див. файл [LICENSE](LICENSE) для деталей.

## 🎯 Roadmap

- [ ] Додати більше категорій продуктів
- [ ] Інтегрувати систему онлайн-платежів
- [ ] Додати галерею робіт
- [ ] Мультимовність (UA/EN)
- [ ] Панель адміністратора
- [ ] CMS інтеграція

## 💡 FAQ

**Q: Чому форма не відправляється?**
A: Перевірте налаштування EmailJS в файлі `EMAILJS_SETUP.md`

**Q: Як змінити кольори сайту?**
A: Відредагуйте CSS змінні в файлах компонентів

**Q: Чи можна додати нові сторінки?**
A: Так, створіть новий файл в `src/pages/` та додайте маршрут

---

Зроблено з ❤️ для Cup Store Ukraine
