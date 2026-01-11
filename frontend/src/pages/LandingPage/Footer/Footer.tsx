const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <span className="logo-icon">📋</span>
              <span className="logo-text">No-Show Reducer</span>
            </div>
            <p className="footer-description">
              A solução completa para reduzir faltas e aumentar a previsibilidade da sua agenda.
            </p>
          </div>
          
          <div className="footer-column">
            <h4>Produto</h4>
            <ul>
              <li><a href="#features">Recursos</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#">Integrações</a></li>
              <li><a href="#">Atualizações</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Suporte</h4>
            <ul>
              <li><a href="#">Central de ajuda</a></li>
              <li><a href="#">Tutoriais</a></li>
              <li><a href="#">Status do sistema</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">Termos de uso</a></li>
              <li><a href="#">LGPD</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 No-Show Reducer. Todos os direitos reservados.</p>
          <div className="footer-social">
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;