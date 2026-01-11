const BeforeAfter = () => {
  return (
    <section className="before-after-section">
      <div className="container">
        <h2 className="section-title center">O impacto da Previsibilidade</h2>
        <p className="section-subtitle center">Veja como a PRAESO transforma a realidade da sua clínica ou consultório</p>
        
        <div className="before-after-grid">
          {/* Lado ANTES: Incerteza */}
          <div className="before-card">
            <div className="ba-header before">
              <div className="ba-status-dot"></div>
              <h3>Gestão Reativa</h3>
            </div>
            <div className="ba-image-container">
               <img src="/images/before-chaos.png" alt="Agenda com buracos e incerteza" className="ba-image" />
            </div>
            <ul className="ba-list">
              <li><span>✕</span> 20-30% de ausências não planejadas</li>
              <li><span>✕</span> Lacunas ociosas na grade de horários</li>
              <li><span>✕</span> Dependência de processos manuais falhos</li>
              <li><span>✕</span> Tempo desperdiçado com "espera passiva"</li>
              <li><span>✕</span> Receita oscilante e imprevisível</li>
            </ul>
          </div>

          {/* Lado DEPOIS: PRAESO */}
          <div className="after-card">
            <div className="ba-header after">
              <div className="ba-status-dot pulse"></div>
              <h3>Com PRAESO</h3>
            </div>
            <div className="ba-image-container">
               <img src="/images/after-organized.png" alt="Agenda otimizada com PRAESO" className="ba-image" />
            </div>
            <ul className="ba-list">
              <li><span>✓</span> Redução drástica para 5-8% de faltas</li>
              <li><span>✓</span> Máxima ocupação da agenda</li>
              <li><span>✓</span> Protocolo de presença 100% automatizado</li>
              <li><span>✓</span> Confirmações antecipadas via IA</li>
              <li><span>✓</span> <strong>Menos ausências, mais controle</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;