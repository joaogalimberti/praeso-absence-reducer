const DashboardPreview = () => {
  return (
    <section className="dashboard-section">
      <div className="container">
        <div className="dashboard-content">
          <div className="dashboard-text">
            <h2 className="section-title">Consciência total sobre sua agenda</h2>
            <p className="dashboard-description">
              Visualize status de confirmação e métricas de performance em uma interface 
              desenhada para quem não pode perder tempo com incertezas.
            </p>
            <ul className="dashboard-features">
              <li>
                <div className="df-indicator"></div>
                <div>
                  <strong>Métricas de Previsibilidade</strong>
                  <p>Acompanhe sua taxa de presença e identifique tendências antes que elas virem prejuízo.</p>
                </div>
              </li>
              <li>
                <div className="df-indicator"></div>
                <div>
                  <strong>Gestão Onipresente</strong>
                  <p>Acesse de qualquer dispositivo — sua agenda sob controle onde quer que você esteja.</p>
                </div>
              </li>
              <li>
                <div className="df-indicator"></div>
                <div>
                  <strong>Resposta Instantânea</strong>
                  <p>Valide confirmações e reagendamentos em tempo real, sem necessidade de intervenção manual.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="dashboard-image">
            <div className="image-overlay-glow"></div>
            <img src="/images/dashboard-main.png" alt="Interface de gestão estratégica" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;