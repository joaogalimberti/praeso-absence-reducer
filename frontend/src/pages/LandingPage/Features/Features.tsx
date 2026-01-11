const featuresData = [
  { icon: '📅', title: 'Agenda Inteligente', description: 'Visualize todos os compromissos...' },
  { icon: '🔔', title: 'Lembretes Automáticos', description: 'Envio automático de lembretes...' },
  { icon: '✅', title: 'Confirmação Simples', description: 'Clientes confirmam com um clique...' },
  { icon: '📊', title: 'Métricas Claras', description: 'Veja a redução de faltas...' },
  { icon: '⚡', title: 'Rápido & Fácil', description: 'Configure em minutos...' },
  { icon: '💰', title: 'Economize Dinheiro', description: 'Reduza até 70% das faltas...' }
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">Recursos pensados para o seu negócio</h2>
        <div className="features-grid">
          {featuresData.map((f, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;