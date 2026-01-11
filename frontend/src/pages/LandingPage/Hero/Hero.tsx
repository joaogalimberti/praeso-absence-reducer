const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="mesh-gradient"></div>
        <div className="noise-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Inteligência em Previsibilidade
            </div>
            <h1 className="hero-title">
              Compromissos que <br />
              <span className="highlight">se cumprem.</span>
            </h1>
            <p className="hero-description">
              A <strong>PRAESO</strong> antecipa a presença dos seus clientes e elimina as lacunas na sua agenda. 
              Tecnologia de ponta para quem não aceita ociosidade.
            </p>
            
            <div className="hero-cta">
              <button className="btn-primary btn-large">
                Começar agora
                <span className="btn-arrow">→</span>
              </button>
              <button className="btn-outline btn-large">Entenda o método</button>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                Sem cartão de crédito
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                Teste grátis por 14 dias
              </div>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img src="/hero-dashboard.png" alt="Dashboard PRAESO" className="main-dashboard-img" />
              
              {/* Cards Flutuantes com Glassmorphism */}
              <div className="floating-card card-presence">
                <div className="card-icon-wrapper">✓</div>
                <div>
                  <div className="card-title">Presença Confirmada</div>
                  <div className="card-subtitle">Paciente: Dr. Carlos Mendes</div>
                </div>
              </div>

              <div className="floating-card card-revenue">
                <div className="card-icon-wrapper">R$</div>
                <div>
                  <div className="card-title">Receita Protegida</div>
                  <div className="card-subtitle">+ R$ 2.400 este mês</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;