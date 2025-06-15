import React, { useState } from 'react';
import './Design.css';
import formImg from '../../assets/form.png';

const Design = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productType: '',
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
  };  const handleSubmit = async (e) => {
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
      formDataToSend.append('productType', formData.productType);
      formDataToSend.append('size', formData.size);
      formDataToSend.append('quantity', formData.quantity);
      formDataToSend.append('message', `Нове замовлення від ${formData.name}`);
      
      if (selectedFile) {
        formDataToSend.append('file', selectedFile);
      }      // Відправка через Getform.io (правильний URL з панелі)
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
• Продукт: ${formData.productType || 'Не вказано'}
• Розмір: ${formData.size || 'Не вказано'}
• Кількість: ${formData.quantity || 'Не вказано'}${fileInfo}

Ми зв'яжемося з вами найближчим часом!`);
        
        // Очистка форми
        setFormData({
          name: '',
          phone: '',
          email: '',
          productType: '',
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
  };

  return (
    <section id="design" className="design-section">
      <div className="design-container">
        <form 
          className="design-form" 
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          method="post"
        >
          <img src={formImg} alt="Форма замовлення" className="form-background" />
          <div className="form-inputs">            <input 
              type="text" 
              name="name"
              className="form-input input-name" 
              placeholder=""
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input 
              type="tel" 
              name="phone"
              className="form-input input-phone" 
              placeholder=""
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <input 
              type="email" 
              name="email"
              className="form-input input-email" 
              placeholder=""
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <select 
              name="productType"
              className="form-input input-product" 
              value={formData.productType}
              onChange={handleInputChange}
            >
              <option value=""></option>
              <option value="одношарові стакани">одношарові стакани</option>
              <option value="двошарові стакани">двошарові стакани</option>
              <option value="гофра">гофра</option>
              <option value="тарілка">тарілка</option>
            </select>
            <select 
              name="size"
              className="form-input input-size" 
              value={formData.size}
              onChange={handleInputChange}
            >
              <option value=""></option>
              <option value="110мл">110мл</option>
              <option value="170мл">170мл</option>
              <option value="180мл">180мл</option>
              <option value="250мл">250мл</option>
              <option value="275мл">275мл</option>
              <option value="350мл">350мл</option>
              <option value="400мл">400мл</option>
              <option value="500мл">500мл</option>
            </select>
            <input 
              type="number" 
              name="quantity"
              className="form-input input-quantity" 
              placeholder=""
              min="1"
              value={formData.quantity}
              onChange={handleInputChange}
            />
              {/* Поле для завантаження файлу */}
            <div className="file-upload-container">
              <label htmlFor="attachment" className="file-upload-label">
                
              </label>
              <input 
                type="file" 
                name="attachment"
                id="attachment"
                className="file-input"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.gif,.pdf,.txt"
              />
              {selectedFile && (
                <div className="file-info">
                  <span className="file-name">📄 {selectedFile.name}</span>
                  <span className="file-size">({(selectedFile.size / 1024).toFixed(1)} KB)</span>
                </div>
              )}
            </div>            {/* Прихований input для timestamp - не потрібен */}
            
            {/* Кнопка відправки */}            <button
              type="submit" 
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? '⏳ Відправляємо...' : '📧 Надіслати замовлення'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Design;