const HowItWorks = () => {
  const steps = [
    { n: 1, title: "Cadastre seus clientes", desc: "Adicione nome, telefone e email. Simples assim.", img: "/images/step-1-register.png" },
    { n: 2, title: "Agende os horários", desc: "Marque data, hora e cliente. Visualize em lista ou calendário.", img: "/images/step-2-schedule.png" },
    { n: 3, title: "Sistema envia lembretes", desc: "24h antes, o cliente recebe lembrete automático por email, SMS ou WhatsApp.", img: "/images/step-3-reminder.png" },
    { n: 4, title: "Cliente confirma presença", desc: "Com um clique, ele confirma. Você vê tudo no dashboard em tempo real.", img: "/images/step-4-confirm.png" }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <h2 className="section-title center">Como funciona</h2>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.n} className="step">
              <div className="step-number">{step.n}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.desc}</p>
                <img src={step.img} alt={step.title} className="step-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;