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
        <h2 className="section-title center">O impacto real na sua clínica</h2>
        <div className="stats-grid">
          <div className={`stat-card ${statsVisible ? 'visible' : ''}`} style={{animationDelay: '0.1s'}}>
            <div className="stat-number">70%</div>
            <div className="stat-label">Redução de faltas</div>
            <div className="stat-description">Média dos nossos clientes</div>
          </div>
          <div className={`stat-card ${statsVisible ? 'visible' : ''}`} style={{animationDelay: '0.2s'}}>
            <div className="stat-number">R$ 2.400</div>
            <div className="stat-label">Recuperado por mês</div>
            <div className="stat-description">Baseado em consulta de R$ 200</div>
          </div>
          <div className={`stat-card ${statsVisible ? 'visible' : ''}`} style={{animationDelay: '0.3s'}}>
            <div className="stat-number">5 min</div>
            <div className="stat-label">Para configurar</div>
            <div className="stat-description">Comece a usar hoje mesmo</div>
          </div>
          <div className={`stat-card ${statsVisible ? 'visible' : ''}`} style={{animationDelay: '0.4s'}}>
            <div className="stat-number">95%</div>
            <div className="stat-label">Taxa de confirmação</div>
            <div className="stat-description">Clientes respondem aos lembretes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;