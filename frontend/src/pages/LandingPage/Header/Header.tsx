import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div
            className="logo"
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          >
            <span className="logo-text">PRAESO</span>
          </div>

          <nav className="nav">
            <a href="#features">Recursos</a>
            <a href="#how-it-works">Como Funciona</a>
            <button
              className="btn-primary"
              onClick={() => navigate('/login')}
            >
              Começar Agora
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;