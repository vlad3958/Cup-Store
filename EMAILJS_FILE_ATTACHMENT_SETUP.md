# Налаштування EmailJS з підтримкою файлових вкладень

## Передумови
Переконайтеся, що у вас налаштовано:
- ✅ EmailJS акаунт
- ✅ Service ID: `service_i9eomyk`
- ✅ Public Key: `duPgxbMMypt-OJTqE`

## Крок 1: Створення нового шаблону з підтримкою файлів

1. **Перейдіть в EmailJS Dashboard**: https://dashboard.emailjs.com/admin
2. **Перейдіть до Email Templates**: У лівому меню натисніть "Email Templates"
3. **Створіть новий шаблон** або **відредагуйте існуючий** `template_7ox7peg`

## Крок 2: Налаштування шаблону

### Subject (Тема листа):
```
Нове замовлення від {{from_name}} - Ukrainian Cup Store
```

### Content (Зміст листа):
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Нове замовлення</title>
</head>
<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <h2 style="color: #8B4513;">🥤 Нове замовлення - Ukrainian Cup Store</h2>
    
    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #2c2c2c; margin-top: 0;">👤 Інформація про клієнта:</h3>
        <p><strong>Ім'я:</strong> {{from_name}}</p>
        <p><strong>📞 Телефон:</strong> {{phone}}</p>
        <p><strong>📧 Email:</strong> {{from_email}}</p>
    </div>
    
    <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #2c2c2c; margin-top: 0;">📦 Деталі замовлення:</h3>
        <p><strong>Тип продукту:</strong> {{product_type}}</p>
        <p><strong>Розмір:</strong> {{size}}</p>
        <p><strong>Кількість:</strong> {{quantity}}</p>
    </div>
    
    <div style="background: #fff8dc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #2c2c2c; margin-top: 0;">📅 Додаткова інформація:</h3>
        <p><strong>Дата замовлення:</strong> {{timestamp}}</p>
        <p><strong>Статус:</strong> Нове замовлення</p>
    </div>
    
    <hr style="margin: 30px 0; border: 1px solid #ddd;">
    
    <p style="color: #666; font-size: 14px;">
        Цей лист було відправлено автоматично з форми замовлення на сайті Ukrainian Cup Store.
        <br>Для відповіді клієнту використовуйте email: {{from_email}}
    </p>
</body>
</html>
```

## Крок 3: Додавання файлового вкладення

1. **Перейдіть на вкладку "Attachments"** у редакторі шаблону
2. **Натисніть "Add attachment"**
3. **Оберіть тип**: `Form File Attachment`
4. **Налаштуйте параметри**:
   - **Parameter name**: `attachment` (це має відповідати name атрибуту input файлу)
   - **Filename**: `{{attachment_name}}` (динамічне ім'я файлу)
   - **Content type**: `auto-detect` або залиште порожнім для автовизначення

## Крок 4: Перевірка налаштувань форми

Переконайтеся, що у коді форми:

### HTML форма має правильні атрибути:
```html
<form encType="multipart/form-data" method="post">
```

### Input для файлу має правильне name:
```html
<input type="file" name="attachment" />
```

### Використовується emailjs.sendForm:
```javascript
emailjs.sendForm('service_i9eomyk', 'template_7ox7peg', formElement, 'duPgxbMMypt-OJTqE')
```

## Крок 5: Тестування

1. **Збережіть шаблон** в EmailJS Dashboard
2. **Очистіть кеш браузера** (Ctrl+F5)
3. **Перевірте форму**:
   - Заповніть всі поля
   - Прикріпіть тестовий файл (JPG, PNG, PDF)
   - Відправте форму
4. **Перевірте email** - файл повинен прийти як вкладення

## Обмеження

- **Максимальний розмір файлу**: 10MB (встановлено в коді)
- **Підтримувані формати**: JPG, PNG, GIF, PDF, TXT
- **EmailJS ліміти**: Перевірте ваш план EmailJS для обмежень на вкладення

## Налагодження

Якщо файли не прикріплюються:

1. **Перевірте консоль браузера** на помилки
2. **Перевірте Parameter name** в EmailJS шаблоні (має бути `attachment`)
3. **Перевірте тип шаблону** (має бути `Form File Attachment`)
4. **Переконайтеся** що використовуєте `emailjs.sendForm` а не `emailjs.send`
5. **Перевірте розмір файлу** (не більше 10MB)

## Контакти для підтримки

- **Телефон**: +380 96 055 88 79
- **Email**: berezin.v.7930@gmail.com
- **EmailJS Documentation**: https://www.emailjs.com/docs/user-guide/file-attachments/
