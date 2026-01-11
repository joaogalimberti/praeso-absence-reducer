const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column footer-brand-column">
            <div className="footer-logo">
              <span className="logo-text" style={{ fontWeight: '800', fontSize: '1.5rem' }}>
                PRAESO
              </span>
            </div>
            <p className="footer-description">
              Antecipação e consciência para sua gestão. 
              Transformamos horários em compromissos reais através da inteligência de presença.
            </p>
          </div>
          
          <div className="footer-column">
            <h4>Solução</h4>
            <ul>
              <li><a href="#features">Recursos</a></li>
              <li><a href="#how-it-works">Como Funciona</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#">Integrações</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#">Sobre a PRAESO</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Suporte</h4>
            <ul>
              <li><a href="#">Central de ajuda</a></li>
              <li><a href="#">Status do sistema</a></li>
              <li><a href="#">API para Desenvolvedores</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">Termos de uso</a></li>
              <li><a href="#">Conformidade LGPD</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} PRAESO. Compromissos que se cumprem.</p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;