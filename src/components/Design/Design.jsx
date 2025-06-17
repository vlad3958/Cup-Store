import React, { useState } from 'react';
import './Design.css';
import nameIcon from '../../assets/name-icon.png';
import phoneIcon from '../../assets/phone.png';
import emailIcon from '../../assets/E-mail.png';
import sizeIcon from '../../assets/size-icon.png';
import quantityIcon from '../../assets/quantity-icon.png';
import uploadIcon from '../../assets/upload-icon.png';

const Design = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    size: '',
    quantity: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    
    // Валідація файлу
    if (file) {
      const maxSize = 10 * 1024 * 1024; // 10MB
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf', 'text/plain'];
      
      if (file.size > maxSize) {
        alert('Файл занадто великий. Максимальний розмір: 10MB');
        e.target.value = '';
        setSelectedFile(null);
        return;
      }
      
      if (!allowedTypes.includes(file.type)) {
        alert('Непідтримуваний формат файлу. Дозволені: JPG, PNG, GIF, PDF, TXT');
        e.target.value = '';
        setSelectedFile(null);
        return;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Валідація
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Будь ласка, заповніть всі обов\'язкові поля');
      setIsLoading(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('productType', 'двошарові стакани');
      formDataToSend.append('size', formData.size);
      formDataToSend.append('quantity', formData.quantity);
      formDataToSend.append('message', `Нове замовлення від ${formData.name}`);
      
      if (selectedFile) {
        formDataToSend.append('file', selectedFile);
      }

      // Відправка через Getform.io
      const response = await fetch('https://getform.io/f/bkknevlb', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        let fileInfo = selectedFile ? `\n• Файл: ${selectedFile.name}` : '';
        alert(`✅ Замовлення відправлено успішно!

Деталі:
• Ім'я: ${formData.name}
• Телефон: ${formData.phone}
• Email: ${formData.email}
• Продукт: Двошарові стакани
• Розмір: ${formData.size || 'Не вказано'}
• Кількість: ${formData.quantity || 'Не вказано'}${fileInfo}

Ми зв'яжемося з вами найближчим часом!`);
        
        // Очистка форми
        setFormData({
          name: '',
          phone: '',
          email: '',
          size: '',
          quantity: ''
        });
        setSelectedFile(null);
      } else {
        throw new Error('Помилка відправки');
      }
    } catch (error) {
      console.error('Помилка:', error);
      alert('❌ Помилка відправки. Спробуйте ще раз або зв\'яжіться з нами: +380 96 055 88 79');
    } finally {
      setIsLoading(false);
    }
  };return (
    <section id="design" className="design-section">
      <div className="design-container">
        <form 
          className="design-form" 
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          method="post"
        >
          <h1 className="form-title">Дизайн для двошарових стаканів</h1>
          <p className="form-subtitle">Замовляйте друк вашого бренду на паперових стаканах</p>
            <div className="form-group">
            <label htmlFor="name" className="form-label">
              <img src={nameIcon} alt="Name" className="form-icon" />
              Ваше ім'я *
            </label>
            <input 
              type="text" 
              name="name"
              id="name"
              className="form-input" 
              placeholder="Введіть ваше ім'я"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              <img src={phoneIcon} alt="Phone" className="form-icon" />
              Номер телефону *
            </label>
            <input 
              type="tel" 
              name="phone"
              id="phone"
              className="form-input" 
              placeholder="+380 XX XXX XX XX"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <img src={emailIcon} alt="Email" className="form-icon" />
              E-mail *
            </label>
            <input 
              type="email" 
              name="email"
              id="email"
              className="form-input" 
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group form-group-half">              <label htmlFor="size" className="form-label">
                <img src={sizeIcon} alt="Size" className="form-icon" />
                Розмір
              </label>
              <select 
                name="size"
                id="size"
                className="form-select" 
                value={formData.size}
                onChange={handleInputChange}
              >
                <option value="">Оберіть розмір</option>
                <option value="110мл">110мл</option>
                <option value="170мл">170мл</option>
                <option value="180мл">180мл</option>
                <option value="250мл">250мл</option>
                <option value="275мл">275мл</option>
                <option value="350мл">350мл</option>
                <option value="400мл">400мл</option>
                <option value="500мл">500мл</option>
              </select>
            </div>

            <div className="form-group form-group-half">              <label htmlFor="quantity" className="form-label">
                <img src={quantityIcon} alt="Quantity" className="form-icon" />
                Кількість
              </label>
              <input 
                type="number" 
                name="quantity"
                id="quantity"
                className="form-input" 
                placeholder="Введіть кількість"
                min="1"
                value={formData.quantity}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">            <label htmlFor="attachment" className="form-label">
              <img src={uploadIcon} alt="Upload" className="form-icon" />
              Завантажити файли у векторі
            </label>
            <div className="file-upload">
              <input 
                type="file" 
                name="attachment"
                id="attachment"
                className="file-input"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.gif,.pdf,.txt"
              />
              <label htmlFor="attachment" className="file-label">
                <span className="upload-icon">📁</span>
                {selectedFile ? selectedFile.name : 'Завантажити файл'}
              </label>
              {selectedFile && (
                <div className="file-info">
                  <span className="file-size">({(selectedFile.size / 1024).toFixed(1)} KB)</span>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit" 
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? '⏳ Відправляємо...' : 'Надіслати замовлення'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Design;