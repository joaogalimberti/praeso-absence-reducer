const HowItWorks = () => {
  const steps = [
    { 
      n: "01", 
      title: "Registro de Presença", 
      tag: "Entrada de Dados",
      desc: "Insira os dados básicos do seu cliente. A PRAESO organiza as informações para iniciar o monitoramento inteligente.", 
      img: "/images/step-1.png" 
    },
    { 
      n: "02", 
      title: "Planejamento de Agenda", 
      tag: "Organização",
      desc: "Defina os horários com facilidade. Nossa interface oferece clareza absoluta sobre sua grade de compromissos.", 
      img: "/images/step-2.png" 
    },
    { 
      n: "03", 
      title: "Antecipação Ativa", 
      tag: "Engajamento",
      desc: "O sistema envia notificações estratégicas em momentos de alta atenção, preparando o cliente para o compromisso.", 
      img: "/images/step-3.png" 
    },
    { 
      n: "04", 
      title: "Confirmação e Controle", 
      tag: "Resultado",
      desc: "O cliente valida a presença com um clique. Sua agenda se atualiza instantaneamente com foco em faturamento.", 
      img: "/images/step-4.png" 
    }
  ];

  return (
    <section id="how-it-works" className="how-section">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag">O Método</div>
          <h2 className="section-title">A Engenharia por trás do <span className="highlight">Fluxo</span></h2>
          <p className="section-subtitle">Quatro etapas desenhadas para eliminar a ociosidade e profissionalizar sua gestão.</p>
        </div>
        
        <div className="steps-container">
          {/* Linha central conectora (visível apenas em desktop) */}
          <div className="steps-path"></div>

          {steps.map((step, index) => (
            <div key={step.n} className={`step-item ${index % 2 !== 0 ? 'step-reverse' : ''}`}>
              <div className="step-visual">
                <div className="step-image-card">
                  <img src={step.img} alt={step.title} />
                  <div className="step-glass-badge">{step.tag}</div>
                </div>
              </div>

              <div className="step-marker">
                <div className="step-dot">
                  <span className="step-number-text">{step.n}</span>
                </div>
              </div>

              <div className="step-info">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;