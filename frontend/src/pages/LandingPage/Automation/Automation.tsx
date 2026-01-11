const Automation = () => {
  return (
    <section className="automation-section">
      <div className="container">
        <h2 className="section-title center">Transforme horários em compromissos</h2>
        <p className="section-subtitle center">
          A inteligência da <strong>PRAESO</strong> antecipa a presença do seu cliente, 
          eliminando a incerteza da sua agenda.
        </p>
        
        <div className="automation-visual">
          <img src="/automation-flow.png" alt="Fluxo de automação PRAESO" className="automation-image" />
          
          <div className="automation-steps">
            <div className="auto-step auto-step-1">
              <div className="auto-icon-styled">01</div>
              <div className="auto-text">
                <strong>Agendamento</strong>
                <span>Presença registrada no sistema</span>
              </div>
            </div>
            
            <div className="auto-step auto-step-2">
              <div className="auto-icon-styled">02</div>
              <div className="auto-text">
                <strong>Antecipação</strong>
                <span>PRAESO inicia o protocolo de contato</span>
              </div>
            </div>
            
            <div className="auto-step auto-step-3">
              <div className="auto-icon-styled">03</div>
              <div className="auto-text">
                <strong>Consciência</strong>
                <span>Lembrete estratégico enviado</span>
              </div>
            </div>
            
            <div className="auto-step auto-step-4">
              <div className="auto-icon-styled">04</div>
              <div className="auto-text">
                <strong>Confirmação</strong>
                <span>Compromisso validado pelo cliente</span>
              </div>
            </div>
            
            <div className="auto-step auto-step-5">
              <div className="auto-icon-styled">05</div>
              <div className="auto-text">
                <strong>Previsibilidade</strong>
                <span>Sua agenda atualizada em tempo real</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;