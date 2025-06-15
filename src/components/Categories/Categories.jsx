import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';
import cup1 from '../../assets/cup1.png';
import cupForm from '../../assets/cup-form.png';

const Categories = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      id: 1,
      title: 'Одношарові стакани',
      image: cup1,
      path: '/single-cups'
    },
    {
      id: 2,
      title: 'Двошарові стакани',
      image: cupForm,
      path: '/double-cups'
    },
    {
      id: 3,
      title: 'Гофровані стакани',
      image: cup1,
      path: '/corrugated-cups'
    },
    {
      id: 4,
      title: 'Тарілки',
      image: cupForm,
      path: '/plates'
    }
  ];

  const handleCategoryClick = (path) => {
    navigate(path);
  };  return (
    <section id="products" className="categories">
      <div className="categories-container">
        <div className="categories-header">
          <h2>Продукція</h2>
        </div>
        
        <div className="categories-grid">
          <div className="categories-row first-row">
            {categories.slice(0, 3).map((category) => (
              <div 
                key={category.id} 
                className="category-card"
                onClick={() => handleCategoryClick(category.path)}
              >
                <div className="category-image">
                  <img src={category.image} alt={category.title} />
                </div>
                <div className="category-title">
                  <h3>{category.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="categories-row second-row">
            {categories.slice(3).map((category) => (
              <div 
                key={category.id} 
                className="category-card"
                onClick={() => handleCategoryClick(category.path)}
              >
                <div className="category-image">
                  <img src={category.image} alt={category.title} />
                </div>
                <div className="category-title">
                  <h3>{category.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
