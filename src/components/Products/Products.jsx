import React, { useState } from 'react';
import './Products.css';
import cup1 from '../../assets/cup1.png';

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start with middle item

  const products = [
    {
      id: 1,
      name: 'Двошарові',
      image: cup1,
      description: 'Високоякісні двошарові стакани'
    },
    {
      id: 2,
      name: 'Одношарові',
      image: cup1,
      description: 'Класичні одношарові стакани'
    },
    {
      id: 3,
      name: 'Гофровані',
      image: cup1,
      description: 'Яскраві кольорові стакани'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getItemClass = (index) => {
    if (index === currentSlide) return 'center active';
    if (index === (currentSlide - 1 + products.length) % products.length) return 'left';
    if (index === (currentSlide + 1) % products.length) return 'right';
    return 'hidden';
  };

  return (
    <div className="products">
      <div className="products-header">
        <h2>Продукція</h2>
      </div>
      
      <div className="carousel-container">
        <div className="carousel-content">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`product-item ${getItemClass(index)}`}
              onClick={() => goToSlide(index)}
            >
              <img src={product.image} alt={product.name} />
              <div className="product-label">
                <span>{product.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
