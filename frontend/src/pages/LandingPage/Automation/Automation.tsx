const Automation = () => {
  return (
    <section className="automation-section">
      <div className="container">
        <h2 className="section-title center">Automação que trabalha por você</h2>
        <p className="section-subtitle center">Configure uma vez e deixe o sistema fazer o resto</p>
        <div className="automation-visual">
          <img src="/images/automation-flow.png" alt="Fluxo de automação" className="automation-image" />
          <div className="automation-steps">
            <div className="auto-step auto-step-1">
              <div className="auto-icon">📅</div>
              <div className="auto-text">Agendamento criado</div>
            </div>
            <div className="auto-step auto-step-2">
              <div className="auto-icon">⏰</div>
              <div className="auto-text">24h antes</div>
            </div>
            <div className="auto-step auto-step-3">
              <div className="auto-icon">📧</div>
              <div className="auto-text">Lembrete enviado</div>
            </div>
            <div className="auto-step auto-step-4">
              <div className="auto-icon">✅</div>
              <div className="auto-text">Cliente confirma</div>
            </div>
            <div className="auto-step auto-step-5">
              <div className="auto-icon">🎉</div>
              <div className="auto-text">Você é notificado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;