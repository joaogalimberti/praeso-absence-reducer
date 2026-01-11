const Automation = () => {
  const steps = [
    { n: "01", title: "Agendamento", desc: "Registro inicial" },
    { n: "02", title: "Antecipação", desc: "Início do protocolo" },
    { n: "03", title: "Consciência", desc: "Lembrete estratégico" },
    { n: "04", title: "Confirmação", desc: "Validação ativa" },
    { n: "05", title: "Previsibilidade", desc: "Agenda protegida" },
  ];

  return (
    <section className="automation-section">
      <div className="container">
        <div className="automation-header">
          <h2 className="section-title">O Motor da <span className="blue-gradient-text">Previsibilidade</span></h2>
          <p className="section-subtitle">
            A inteligência da <strong>PRAESO</strong> automatiza o comportamento de presença, 
            transformando incerteza em receita protegida.
          </p>
        </div>
        
        <div className="automation-canvas">
          {/* A Linha de Conexão com Animação de Fluxo */}
          <div className="flow-line-container">
            <svg className="flow-svg">
              <line x1="0" y1="50%" x2="100%" y2="50%" className="base-line" />
              <line x1="0" y1="50%" x2="100%" y2="50%" className="active-line" />
            </svg>
          </div>

          <div className="automation-steps-grid">
            {steps.map((step, index) => (
              <div key={step.n} className="auto-node" style={{ "--delay": `${index * 0.2}s` } as any}>
                <div className="node-circle">
                  <div className="node-pulse"></div>
                  <span className="node-number">{step.n}</span>
                </div>
                <div className="node-content">
                  <strong>{step.title}</strong>
                  <span>{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card de Impacto Final da Automação */}
        <div className="automation-impact-card">
          <div className="impact-badge">Resultado Final</div>
          <h3>Sua agenda se auto-gerencia enquanto você foca no atendimento.</h3>
        </div>
      </div>
    </section>
  );
};

export default Automation;