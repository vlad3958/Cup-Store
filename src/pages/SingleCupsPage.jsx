import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CategoryPage.css';
import cup1 from '../assets/cup1.png';
import { navigateToSection } from '../utils/navigation';

const SingleCupsPage = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigateToSection(navigate, window.location.pathname, 'design');
  };
  const products = [
    {
      id: 1,
      name: 'Стакан одношаровий 250мл',
      price: '2.50 грн',
      image: cup1,
      description: 'Якісний одношаровий стакан для гарячих та холодних напоїв'
    },
    {
      id: 2,
      name: 'Стакан одношаровий 350мл',
      price: '3.00 грн',
      image: cup1,
      description: 'Великий одношаровий стакан ідеальний для кави та чаю'
    },
    {
      id: 3,
      name: 'Стакан одношаровий 400мл',
      price: '3.50 грн',
      image: cup1,
      description: 'Максимальний розмір одношарового стакану'
    },
    {
      id: 4,
      name: 'Стакан одношаровий 180мл',
      price: '2.00 грн',
      image: cup1,
      description: 'Компактний стакан для еспресо та маленьких порцій'
    }
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <div className="container">
          <Link to="/" className="back-link">← Повернутися на головну</Link>
          <h1>Одношарові стакани</h1>
          <p>Якісні одношарові паперові стакани для вашого бізнесу</p>
        </div>
      </div>

      <div className="category-content">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>                  <div className="product-price">{product.price}</div>
                  <button className="order-button" onClick={handleOrderClick}>Замовити</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCupsPage;
