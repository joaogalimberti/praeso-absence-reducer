const CTA = () => {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-content">
          <img src="/images/cta-professional.png" alt="Agenda sob controle" className="final-cta-image" />
          <div className="final-cta-text">
            <h2>Previsibilidade para sua agenda</h2>
            <p>
              Recupere o controle do seu tempo e garanta que seus horários se transformem em compromissos reais.
            </p>
            <div className="final-cta-buttons">
              <button className="btn-primary btn-large">
                Começar agora
                <span className="btn-arrow">→</span>
              </button>
              <div className="cta-benefits">
                <span>✓ Menos ausências, mais controle</span>
                <span>• Sem cartão de crédito</span>
                <span>• Configuração em 5 minutos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;