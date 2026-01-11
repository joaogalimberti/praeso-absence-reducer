import { useState, useEffect, useRef } from 'react';

const StatCard = ({ number, suffix, label, description, delay, isVisible }: any) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = parseInt(number.replace(/\D/g, ''));
      const duration = 2000; // 2 segundos de animação
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <div 
      className={`stat-card ${isVisible ? 'visible' : ''}`} 
      style={{ transitionDelay: delay }}
    >
      <div className="stat-glow"></div>
      <div className="stat-number">
        {number.includes('R$') ? `R$ ${count.toLocaleString()}` : `${count}${suffix || ''}`}
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-description">{description}</div>
      <div className="stat-progress-bar">
        <div className="progress-fill" style={{ width: isVisible ? '100%' : '0%' }}></div>
      </div>
    </div>
  );
};

const Stats = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="stats-section">
      <div className="stats-bg-decoration"></div>
      <div className="container">
        <div className="stats-header">
          <h2 className="section-title center">A Prova da Previsibilidade</h2>
          <p className="section-subtitle center">Dados reais que consolidam a autoridade da PRAESO no mercado.</p>
        </div>
        
        <div className="stats-grid">
          <StatCard 
            number="70" suffix="%" 
            label="Redução de Ausências" 
            description="Recupere o controle da sua grade horária." 
            delay="0.1s" 
            isVisible={statsVisible} 
          />
          <StatCard 
            number="2400" suffix="" 
            label="Receita Protegida" 
            description="Média mensal recuperada por profissional." 
            delay="0.2s" 
            isVisible={statsVisible} 
          />
          <StatCard 
            number="95" suffix="%" 
            label="Taxa de Consciência" 
            description="Compromissos validados pelo protocolo." 
            delay="0.3s" 
            isVisible={statsVisible} 
          />
          <StatCard 
            number="05" suffix=" min" 
            label="Implementação" 
            description="Tempo para ativar sua nova gestão." 
            delay="0.4s" 
            isVisible={statsVisible} 
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;