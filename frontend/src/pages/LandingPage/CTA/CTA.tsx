const CTA = () => {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-content">
          <img src="/images/cta-reduce-no-shows.png" alt="Reduza faltas agora" className="final-cta-image" />
          <div className="final-cta-text">
            <h2>Pare de perder dinheiro com faltas</h2>
            <p>Junte-se a centenas de profissionais que já reduziram suas faltas em até 70%</p>
            <div className="final-cta-buttons">
              <button className="btn-primary btn-large">
                Começar Teste Grátis de 14 Dias
                <span className="btn-arrow">→</span>
              </button>
              <p className="cta-note">Sem cartão de crédito • Configuração em 5 minutos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;