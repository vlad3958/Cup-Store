import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CategoryPage.css';
import cup1 from '../assets/cup1.png';
import { navigateToSection } from '../utils/navigation';

const CorrugatedCupsPage = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigateToSection(navigate, window.location.pathname, 'design');
  };
  const products = [
    {
      id: 1,
      name: 'Стакан гофрований 250мл',
      price: '3.50 грн',
      image: cup1,
      description: 'Гофрований стакан з рельєфною поверхнею для зручного тримання'
    },
    {
      id: 2,
      name: 'Стакан гофрований 350мл',
      price: '4.00 грн',
      image: cup1,
      description: 'Великий гофрований стакан з відмінною теплоізоляцією'
    },
    {
      id: 3,
      name: 'Стакан гофрований 400мл',
      price: '4.50 грн',
      image: cup1,
      description: 'Максимальний розмір гофрованого стакану'
    },
    {
      id: 4,
      name: 'Стакан гофрований 180мл',
      price: '3.00 грн',
      image: cup1,
      description: 'Компактний гофрований стакан для еспресо'
    }
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <div className="container">
          <Link to="/" className="back-link">← Повернутися на головну</Link>
          <h1>Гофровані стакани</h1>
          <p>Гофровані стакани з ергономічним дизайном та відмінною теплоізоляцією</p>
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

export default CorrugatedCupsPage;
