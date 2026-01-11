const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Reduza faltas automaticamente
            </div>
            <h1 className="hero-title">
              Pare de perder <span className="highlight">dinheiro e tempo</span> com faltas
            </h1>
            <p className="hero-description">
              Lembretes inteligentes que confirmam presença automaticamente.
              Economize tempo, aumente sua receita e tenha previsibilidade na agenda.
            </p>
            <div className="hero-cta">
              <button className="btn-primary btn-large">Começar Teste Grátis</button>
              <button className="btn-outline btn-large">Ver Como Funciona</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero-dashboard.png" alt="Dashboard" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;