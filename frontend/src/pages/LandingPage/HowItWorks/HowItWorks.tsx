const HowItWorks = () => {
  const steps = [
    { 
      n: 1, 
      title: "Registro de Presença", 
      desc: "Insira os dados básicos do seu cliente. A PRAESO organiza as informações para iniciar o monitoramento.", 
      img: "/images/step-1-register.png" 
    },
    { 
      n: 2, 
      title: "Planejamento de Agenda", 
      desc: "Defina os horários com facilidade. Nossa interface oferece clareza absoluta sobre sua grade de compromissos.", 
      img: "/images/step-2-schedule.png" 
    },
    { 
      n: 3, 
      title: "Antecipação Ativa", 
      desc: "O sistema envia notificações estratégicas em momentos de alta atenção, preparando o cliente para o compromisso.", 
      img: "/images/step-3-reminder.png" 
    },
    { 
      n: 4, 
      title: "Confirmação e Controle", 
      desc: "O cliente valida a presença com um clique. Sua agenda se atualiza instantaneamente com foco em resultados.", 
      img: "/images/step-4-confirm.png" 
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <h2 className="section-title center">O Método PRAESO</h2>
        <p className="section-subtitle center">Simplicidade tecnológica para garantir compromissos que se cumprem.</p>
        
        <div className="steps">
          {steps.map((step) => (
            <div key={step.n} className="step">
              <div className="step-number">{step.n}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.desc}</p>
                <div className="step-image-wrapper">
                  <img src={step.img} alt={step.title} className="step-image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;