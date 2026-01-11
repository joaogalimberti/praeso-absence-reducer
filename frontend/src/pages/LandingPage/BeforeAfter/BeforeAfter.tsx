const BeforeAfter = () => {
  return (
    <section className="before-after-section">
      <div className="container">
        <h2 className="section-title center">Antes vs Depois</h2>
        <div className="before-after-grid">
          <div className="before-card">
            <div className="ba-header before">
              <span className="ba-icon">😰</span>
              <h3>Sem o No-Show Reducer</h3>
            </div>
            <img src="/images/before-chaos.png" alt="Antes - caos na agenda" className="ba-image" />
            <ul className="ba-list">
              <li>❌ 20-30% de faltas constantes</li>
              <li>❌ Agenda com buracos</li>
              <li>❌ Ligações manuais esquecidas</li>
              <li>❌ Tempo perdido esperando</li>
              <li>❌ Receita imprevisível</li>
            </ul>
          </div>
          <div className="after-card">
            <div className="ba-header after">
              <span className="ba-icon">🎉</span>
              <h3>Com o No-Show Reducer</h3>
            </div>
            <img src="/images/after-organized.png" alt="Depois - agenda organizada" className="ba-image" />
            <ul className="ba-list">
              <li>✅ Apenas 5-8% de faltas</li>
              <li>✅ Agenda sempre cheia</li>
              <li>✅ Lembretes 100% automáticos</li>
              <li>✅ Confirmações em tempo real</li>
              <li>✅ Receita previsível e maior</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;