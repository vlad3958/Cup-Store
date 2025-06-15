import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CategoryPage.css';
import cupForm from '../assets/cup-form.png';
import { navigateToSection } from '../utils/navigation';

const DoubleCupsPage = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigateToSection(navigate, window.location.pathname, 'design');
  };
  const products = [
    {
      id: 1,
      name: 'Стакан двошаровий 250мл',
      price: '4.50 грн',
      image: cupForm,
      description: 'Термоізоляційний двошаровий стакан для гарячих напоїв'
    },
    {
      id: 2,
      name: 'Стакан двошаровий 350мл',
      price: '5.00 грн',
      image: cupForm,
      description: 'Великий двошаровий стакан з подвійною ізоляцією'
    },
    {
      id: 3,
      name: 'Стакан двошаровий 400мл',
      price: '5.50 грн',
      image: cupForm,
      description: 'Максимальний розмір двошарового стакану'
    },
    {
      id: 4,
      name: 'Стакан двошаровий 180мл',
      price: '4.00 грн',
      image: cupForm,
      description: 'Компактний двошаровий стакан для еспресо'
    }
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <div className="container">
          <Link to="/" className="back-link">← Повернутися на головну</Link>
          <h1>Двошарові стакани</h1>
          <p>Термоізоляційні двошарові стакани для максимального комфорту</p>
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

export default DoubleCupsPage;
