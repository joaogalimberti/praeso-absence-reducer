const featuresData = [
  { 
    number: '01', 
    title: 'Antecipação Estratégica', 
    description: 'Protocolos de contato que preparam o cliente para o compromisso muito antes do horário marcado.' 
  },
  { 
    number: '02', 
    title: 'Confirmação Ativa', 
    description: 'Sistema inteligente que converte intenção em presença confirmada com um clique, sem fricção.' 
  },
  { 
    number: '03', 
    title: 'Grade de Previsibilidade', 
    description: 'Uma visão clara do seu dia que permite agir preventivamente sobre possíveis lacunas na agenda.' 
  },
  { 
    number: '04', 
    title: 'Métricas de Performance', 
    description: 'Dados precisos sobre a saúde da sua agenda e o crescimento real do seu faturamento.' 
  },
  { 
    number: '05', 
    title: 'Automação Consciente', 
    description: 'Configuração rápida que trabalha silenciosamente, garantindo atenção total aos seus pacientes.' 
  },
  { 
    number: '06', 
    title: 'Proteção de Receita', 
    description: 'Reduza drasticamente o prejuízo causado por ausências e recupere o controle financeiro.' 
  }
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="features-header">
          <div className="features-tag">Tecnologia & Gestão</div>
          <h2 className="section-title">Engenharia de <span className="highlight-blue">Presença</span></h2>
          <p className="section-subtitle">
            Recursos desenhados milimetricamente para transformar sua agenda em um fluxo contínuo de compromissos cumpridos.
          </p>
        </div>
        
        <div className="features-grid">
          {featuresData.map((f, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card-content">
                <div className="feature-top">
                  <span className="feature-number">{f.number}</span>
                  <div className="feature-status-dot"></div>
                </div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
                
                {/* Elemento interativo que "acende" no hover */}
                <div className="feature-indicator">
                  <div className="indicator-line"></div>
                  <div className="indicator-glow"></div>
                </div>
              </div>
              <div className="card-glass-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;