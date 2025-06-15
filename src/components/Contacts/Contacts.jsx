import React from 'react';
import './Contacts.css';
import addressIcon from '../../assets/address.png';
import phoneIcon from '../../assets/phone.png';
import emailIcon from '../../assets/E-mail.png';
import clockIcon from '../../assets/clock.png';

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts-container">
        <div className="contacts-header">
          <h2>Контакти</h2>
        </div>
        
        <div className="contacts-content">
          <div className="contact-info">            <div className="contact-item">
              <div className="contact-icon">
                <img src={addressIcon} alt="Адреса" className="contact-icon-img" />
              </div>
              <div className="contact-details">
                <h3>Адреса:</h3>
                <p>вулиця Алматинська, 2/1, Київ, 02000</p>
              </div>
            </div>            <div className="contact-item">
              <div className="contact-icon">
                <img src={phoneIcon} alt="Телефон" className="contact-icon-img" />
              </div>
              <div className="contact-details">
                <h3>Телефон:</h3>
                <p>+380 96 055 88 79</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img src={emailIcon} alt="E-mail" className="contact-icon-img" />
              </div>
              <div className="contact-details">
                <h3>E-mail:</h3>
                <p>s.ziabchenkov@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <img src={clockIcon} alt="Час роботи" className="contact-icon-img" />
              </div>
              <div className="contact-details">
                <h3>Час роботи:</h3>
                <p>Пн-Пт: 9:00 - 17:00<br />Сб-Нд: 10:00 - 16:00</p>
              </div>
            </div>
          </div>

          <div className="map-container">
            <h3>Карта</h3>            <div className="map-wrapper">
              <iframe
                src="https://maps.google.com/maps?q=вулиця+Алматинська+2/1+Київ+02000+Україна&output=embed&z=15"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта розташування офісу"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
