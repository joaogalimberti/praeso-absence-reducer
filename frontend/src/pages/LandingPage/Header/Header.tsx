import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">📋</span>
            <span className="logo-text">No-Show Reducer</span>
          </div>
          <nav className="nav">
            <a href="#features">Recursos</a>
            <a href="#how-it-works">Como Funciona</a>
            <a href="#pricing">Preços</a>
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Começar Grátis</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;