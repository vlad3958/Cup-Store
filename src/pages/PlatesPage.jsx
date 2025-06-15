import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CategoryPage.css';
import cupForm from '../assets/cup-form.png';
import { navigateToSection } from '../utils/navigation';

const PlatesPage = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigateToSection(navigate, window.location.pathname, 'design');
  };
  const products = [
    {
      id: 1,
      name: 'Тарілка паперова 18см',
      price: '1.50 грн',
      image: cupForm,
      description: 'Екологічна паперова тарілка для швидкого харчування'
    },
    {
      id: 2,
      name: 'Тарілка паперова 23см',
      price: '2.00 грн',
      image: cupForm,
      description: 'Велика паперова тарілка для основних страв'
    },
    {
      id: 3,
      name: 'Тарілка глибока 16см',
      price: '2.50 грн',
      image: cupForm,
      description: 'Глибока тарілка для супів та рідких страв'
    },
    {
      id: 4,
      name: 'Тарілка десертна 15см',
      price: '1.20 грн',
      image: cupForm,
      description: 'Маленька тарілка для десертів та закусок'
    }
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <div className="container">
          <Link to="/" className="back-link">← Повернутися на головну</Link>
          <h1>Тарілки</h1>
          <p>Якісні паперові тарілки для ресторанів та кафе</p>
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

export default PlatesPage;
