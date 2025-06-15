// Utility functions for navigation and scrolling

export const scrollToSection = (sectionId) => {
  // Додаємо невелику затримку для того, щоб DOM встиг оновитися
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Враховуємо висоту хедера (7vh приблизно 50-70px)
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 100);
};

export const navigateToSection = (navigate, currentPath, sectionId) => {
  if (currentPath !== '/') {
    // Переходимо на головну сторінку
    navigate('/');
    // Прокручуємо до секції після завантаження (більша затримка для переходу між сторінками)
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 300);
  } else {
    // Просто прокручуємо до секції
    scrollToSection(sectionId);
  }
};
