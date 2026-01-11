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
          {/* Logo atualizada: sem emoji, apenas o nome PRAESO */}
          <div 
            className="logo" 
            onClick={() => navigate('/')} 
            style={{ cursor: 'pointer' }}
          >
            <span className="logo-text" style={{ fontWeight: '800', letterSpacing: '-0.5px' }}>
              PRAESO
            </span>
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