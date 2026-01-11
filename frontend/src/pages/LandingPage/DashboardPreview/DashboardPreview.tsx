const DashboardPreview = () => {
  return (
    <section className="dashboard-section">
      <div className="container">
        <div className="dashboard-content">
          <div className="dashboard-text">
            <h2 className="section-title">Controle total em uma tela</h2>
            <p className="dashboard-description">
              Visualize todos os compromissos, status de confirmação e métricas de performance em um dashboard limpo e intuitivo.
            </p>
            <ul className="dashboard-features">
              <li>
                <span className="df-icon">📊</span>
                <div>
                  <strong>Métricas em tempo real</strong>
                  <p>Acompanhe taxa de faltas, confirmações e tendências</p>
                </div>
              </li>
              <li>
                <span className="df-icon">📱</span>
                <div>
                  <strong>Acesse de qualquer lugar</strong>
                  <p>Desktop, tablet ou celular - totalmente responsivo</p>
                </div>
              </li>
              <li>
                <span className="df-icon">⚡</span>
                <div>
                  <strong>Notificações instantâneas</strong>
                  <p>Saiba na hora quando um cliente confirma ou cancela</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="dashboard-image">
            <img src="/images/dashboard-main.png" alt="Dashboard principal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;