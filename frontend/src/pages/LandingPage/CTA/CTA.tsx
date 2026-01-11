const CTA = () => {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-grid">
            
            <div className="cta-text-content">
              <div className="cta-badge">Pronto para transformar sua agenda?</div>
              <h2 className="cta-title">Sua produtividade merece a <span className="text-gradient">Previsibilidade.</span></h2>
              <p className="cta-description">
                Recupere o controle do seu faturamento e garanta que seus horários se transformem em compromissos reais. Configuração simples, resultados imediatos.
              </p>
              
              <div className="cta-actions">
                <button className="cta-btn-main">
                  Começar agora gratuitamente
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                
                <div className="cta-trust-bar">
                  <div className="trust-item">
                    <span className="trust-icon">✓</span>
                    <span>Sem cartão de crédito</span>
                  </div>
                  <div className="trust-item">
                    <span className="trust-icon">✓</span>
                    <span>Teste grátis por 14 dias</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-visual-element">
              <div className="cta-image-wrapper">
                <img src="/images/cta-professional.png" alt="Agenda sob controle" />
                {/* Overlay que simula luz de interface */}
                <div className="cta-interface-glow"></div>
              </div>
            </div>

          </div>
          
          {/* Elementos abstratos de fundo para luxo visual */}
          <div className="cta-bg-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;