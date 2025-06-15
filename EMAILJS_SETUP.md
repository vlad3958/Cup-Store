# Налаштування EmailJS для відправки форми

## Крок 1: Реєстрація на EmailJS

1. Перейдіть на [EmailJS.com](https://www.emailjs.com/)
2. Зареєструйтеся або увійдіть в акаунт
3. Перейдіть в Dashboard

## Крок 2: Створення Email Service

1. В Dashboard натисніть "Add New Service"
2. Оберіть ваш email провайдер (Gmail, Outlook, Yahoo тощо)
3. Введіть дані:
   - **Service Name**: `cup-store-service`
   - **Email**: `s.ziabchenkov@gmail.com`
   - **Password**: ваш пароль або App Password
4. Скопіюйте **Service ID** (наприклад: `service_abc1234`)

## Крок 3: Створення Email Template

1. Перейдіть в розділ "Email Templates"
2. Натисніть "Create New Template"
3. Налаштуйте template:
   
   **Template Name**: `cup-order-template`
   
   **Subject**: `Нове замовлення від {{from_name}}`
   
   **Content**:
   ```
   Нове замовлення від клієнта:

   Контактна інформація:
   • Ім'я: {{from_name}}
   • Телефон: {{from_phone}}
   • Email: {{from_email}}

   Деталі замовлення:
   • Тип продукту: {{product_type}}
   • Розмір: {{size}}
   • Кількість: {{quantity}}
   • Файл дизайну: {{file_name}}

   Дата замовлення: {{order_date}}

   ---
   Будь ласка, зв'яжіться з клієнтом для уточнення деталей замовлення.
   ```

4. В розділі Settings встановіть:
   - **To Email**: `{{to_email}}`
   - **From Name**: `Cup Store Website`
   - **Reply To**: `{{from_email}}`

5. Скопіюйте **Template ID** (наприклад: `template_xyz5678`)

## Крок 4: Отримання User ID

1. В Account налаштуваннях знайдіть **Public Key** (User ID)
2. Скопіюйте його (наприклад: `user-abcdef123456`)

## Крок 5: Оновлення коду

Відкрийте файл `src/components/Design/Design.jsx` та замініть наступні рядки:

```javascript
// Замініть ці значення на ваші справжні ID з EmailJS
const serviceID = 'service_1234567'; // Ваш Service ID
const templateID = 'template_1234567'; // Ваш Template ID  
const userID = 'YOUR_USER_ID'; // Ваш User ID (Public Key)
```

На ваші справжні значення:

```javascript
const serviceID = 'service_abc1234'; // Ваш справжній Service ID
const templateID = 'template_xyz5678'; // Ваш справжній Template ID
const userID = 'user-abcdef123456'; // Ваш справжній User ID
```

## Крок 6: Тестування

1. Збережіть зміни
2. Перезапустіть сайт (`npm start`)
3. Заповніть форму на сайті
4. Натисніть "Надіслати замовлення"
5. Перевірте, чи отримали ви email на `s.ziabchenkov@gmail.com`

## Додаткові налаштування

### Для Gmail:
- Увімкніть 2-факторну автентифікацію
- Створіть App Password для EmailJS
- Використовуйте App Password замість основного паролю

### Обмеження безкоштовного плану:
- 200 emails на місяць
- Для більшої кількості потрібна підписка

## Якщо виникли проблеми:

1. **Перевірте Console** в браузері на помилки
2. **Перевірте налаштування** Service та Template в EmailJS
3. **Тимчасове рішення**: Якщо EmailJS не працює, форма автоматично використає mailto: як резервний варіант

---

**Важливо**: Зберігайте ваші EmailJS ключі в безпеці та не публікуйте їх в публічних репозиторіях.
