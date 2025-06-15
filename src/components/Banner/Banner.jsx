import React from 'react';
import './Banner.css';
import cupBanner from '../../assets/cup-banner.png';
import shapeBanner from '../../assets/shape-banner.png';
import { scrollToSection } from '../../utils/navigation';

const Banner = () => {
  const handleOrderClick = () => {
    scrollToSection('design');
  };

  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Брендування стаканів</h1>
        <p>Друк вашого дизайну на паперових стаканах</p>
        <button className="banner-button" onClick={handleOrderClick}>Замовити</button>
      </div>
      <img src={cupBanner} alt="Cup Banner" className="cup-banner" />
      <img src={shapeBanner} alt="Shape Banner" className="shape-banner" />
    </div>
  );
};

export default Banner;
