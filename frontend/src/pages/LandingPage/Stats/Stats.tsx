import { useState, useEffect } from 'react';

const Stats = () => {
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setStatsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <h2 className="section-title center">Resultados da Previsibilidade</h2>
        <p className="section-subtitle center">Como a PRAESO impacta a eficiência operacional da sua agenda.</p>
        
        <div className="stats-grid">
          <div className={`stat-card ${statsVisible ? 'visible' : ''}`} style={{animationDelay: '0.1s'}}>
            <div className="stat-number">70%</div>
            <div className="stat-label">Redução de Ausências</div>
            <div className="stat-description">Menos ociosidade desde o primeiro mês</div>
          </div>
          
          <div className={`stat-card ${statsVisible ? 'visible' : ''}`} style={{animationDelay: '0.2s'}}>
            <div className="stat-number">R$ 2.400</div>
            <div className="stat-label">Receita Protegida</div>
            <div className="stat-description">Média mensal recuperada por profissional</div>
          </div>
          
          <div className={`stat-card ${statsVisible ? 'visible' : ''}`} style={{animationDelay: '0.3s'}}>
            <div className="stat-number">95%</div>
            <div className="stat-label">Taxa de Consciência</div>
            <div className="stat-description">Compromissos confirmados e validados</div>
          </div>
          
          <div className={`stat-card ${statsVisible ? 'visible' : ''}`} style={{animationDelay: '0.4s'}}>
            <div className="stat-number">05 min</div>
            <div className="stat-label">Implementação</div>
            <div className="stat-description">Configuração do protocolo de presença</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;