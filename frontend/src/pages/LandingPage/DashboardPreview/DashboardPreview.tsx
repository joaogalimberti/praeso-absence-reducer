const DashboardPreview = () => {
  return (
    <section className="dashboard-section">
      <div className="container">
        <div className="dashboard-grid">
          
          {/* Lado do Texto: Mais limpo e focado */}
          <div className="dashboard-info">
            <div className="info-tag">Visibilidade 360º</div>
            <h2 className="section-title">Consciência total sobre sua agenda</h2>
            <p className="dashboard-description">
              Visualize status de confirmação e métricas de performance em uma interface 
              desenhada para quem não pode perder tempo com incertezas.
            </p>

            <div className="dashboard-feature-stack">
              <div className="df-item">
                <div className="df-dot"></div>
                <div className="df-content">
                  <h4>Métricas de Previsibilidade</h4>
                  <p>Acompanhe sua taxa de presença e identifique tendências antes que elas virem prejuízo.</p>
                </div>
              </div>

              <div className="df-item active">
                <div className="df-dot"></div>
                <div className="df-content">
                  <h4>Gestão Onipresente</h4>
                  <p>Acesse de qualquer dispositivo — sua agenda sob controle onde quer que você esteja.</p>
                </div>
              </div>

              <div className="df-item">
                <div className="df-dot"></div>
                <div className="df-content">
                  <h4>Resposta Instantânea</h4>
                  <p>Valide confirmações em tempo real, sem necessidade de intervenção manual.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado da Imagem: O "Hero" do Software */}
          <div className="dashboard-visual">
            <div className="dashboard-window">
              <div className="window-header">
                <div className="window-dots"><span></span><span></span><span></span></div>
                <div className="window-url">app.praeso.com.br</div>
              </div>
              <div className="image-wrapper">
                <img src="/images/dashboard-main.png" alt="Interface PRAESO" />
                <div className="glass-card-float">
                  <div className="pulse-icon"></div>
                  <span>Atualizado em tempo real</span>
                </div>
              </div>
            </div>
            {/* Elementos Decorativos de Fundo */}
            <div className="dashboard-glow-1"></div>
            <div className="dashboard-glow-2"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;