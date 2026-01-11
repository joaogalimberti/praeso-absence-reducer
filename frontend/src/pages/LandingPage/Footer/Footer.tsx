const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Coluna da Marca */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-dot"></span>
              <span className="logo-text">PRAESO</span>
            </div>
            <p className="footer-tagline">
              Inteligência em presença e antecipação estratégica para profissionais que valorizam o tempo.
            </p>
            <div className="footer-status">
              <span className="status-dot"></span>
              Sistemas Operacionais
            </div>
          </div>
          
          {/* Links em Grupos */}
          <div className="footer-links-group">
            <div className="footer-col">
              <h5>Solução</h5>
              <ul>
                <li><a href="#features">Recursos</a></li>
                <li><a href="#how-it-works">Método</a></li>
                <li><a href="#pricing">Preços</a></li>
                <li><a href="#">Integrações</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h5>Institucional</h5>
              <ul>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Carreiras</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h5>Suporte</h5>
              <ul>
                <li><a href="#">Central de Ajuda</a></li>
                <li><a href="#">API Docs</a></li>
                <li><a href="#">Comunidade</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Legal</h5>
              <ul>
                <li><a href="#">Privacidade</a></li>
                <li><a href="#">Termos</a></li>
                <li><a href="#">LGPD</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} PRAESO. Todos os direitos reservados. 
            <span className="made-in">Feito com precisão para profissionais.</span>
          </div>
          <div className="footer-socials">
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;