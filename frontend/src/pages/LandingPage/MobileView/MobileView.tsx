const MobileView = () => {
  return (
    <section className="mobile-section">
      <div className="container">
        <div className="mobile-content">
          <div className="mobile-images">
            <img src="/images/mobile-1.png" alt="App mobile - agenda" className="mobile-phone" />
            <img src="/images/mobile-2.png" alt="App mobile - lembretes" className="mobile-phone" />
            <img src="/images/mobile-3.png" alt="App mobile - confirmações" className="mobile-phone" />
          </div>
          <div className="mobile-text">
            <h2 className="section-title">Sempre no seu bolso</h2>
            <p className="mobile-description">
              Gerencie sua agenda de qualquer lugar. O app mobile tem todos os recursos da versão desktop em uma interface otimizada para toque.
            </p>
            <div className="mobile-features">
              <div className="mobile-feature">
                <div className="mf-icon">📲</div>
                <div>
                  <strong>Notificações push</strong>
                  <p>Receba alertas instantâneos</p>
                </div>
              </div>
              <div className="mobile-feature">
                <div className="mf-icon">🔄</div>
                <div>
                  <strong>Sincronização automática</strong>
                  <p>Dados sempre atualizados</p>
                </div>
              </div>
              <div className="mobile-feature">
                <div className="mf-icon">✨</div>
                <div>
                  <strong>Interface intuitiva</strong>
                  <p>Fácil de usar, mesmo em movimento</p>
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