import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';
import headerBackground from '../../assets/header-green.png';
import { navigateToSection } from '../../utils/navigation';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (sectionId) => {
    // Закриваємо мобільне меню
    setIsMobileMenuOpen(false);
    // Використовуємо утиліту для навігації
    navigateToSection(navigate, location.pathname, sectionId);
  };
  return (
    <header className="header" style={{ backgroundImage: `url(${headerBackground})` }}>
      <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="VP Store Logo" />
      </div>
      
      {/* Desktop Navigation */}
      <nav className="nav desktop-nav">
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}>Про нас</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('products'); }}>Продукція</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('design'); }}>Дизайн</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('contacts'); }}>Контакти</a>
      </nav>

      {/* Mobile Burger Button */}
      <button 
        className="burger-menu" 
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={`burger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        <span className={`burger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        <span className={`burger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
      </button>

      {/* Mobile Navigation */}
      <nav className={`nav mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}>Про нас</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('products'); }}>Продукція</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('design'); }}>Дизайн</a>
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigation('contacts'); }}>Контакти</a>
      </nav>
    </header>
  );
}

export default Header;
