const MobileView = () => {
  return (
    <section className="mobile-section">
      <div className="container">
        <div className="mobile-content">
          <div className="mobile-images">
            <img src="/images/mobile-1.png" alt="Interface PRAESO Mobile - Agenda" className="mobile-phone" />
            <img src="/images/mobile-2.png" alt="Interface PRAESO Mobile - Protocolos" className="mobile-phone" />
            <img src="/images/mobile-3.png" alt="Interface PRAESO Mobile - Status" className="mobile-phone" />
          </div>
          
          <div className="mobile-text">
            <h2 className="section-title">Controle em movimento</h2>
            <p className="mobile-description">
              A inteligência da PRAESO acompanha o seu ritmo. Gerencie a previsibilidade da sua agenda de qualquer lugar, com uma interface otimizada para respostas rápidas.
            </p>
            
            <div className="mobile-features">
              <div className="mobile-feature">
                <div className="mf-indicator-dot"></div>
                <div>
                  <strong>Alertas de Presença</strong>
                  <p>Notificações instantâneas sobre confirmações e reagendamentos.</p>
                </div>
              </div>
              
              <div className="mobile-feature">
                <div className="mf-indicator-dot"></div>
                <div>
                  <strong>Sincronia Absoluta</strong>
                  <p>Dados atualizados em tempo real entre todos os seus dispositivos.</p>
                </div>
              </div>
              
              <div className="mobile-feature">
                <div className="mf-indicator-dot"></div>
                <div>
                  <strong>Experiência Nativa</strong>
                  <p>Navegação fluida e intuitiva, desenhada para a máxima eficiência.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileView;