const BeforeAfter = () => {
  return (
    <section className="before-after-section">
      <div className="container">
        <div className="section-header center">
          <div className="section-tag">A Metamorfose</div>
          <h2 className="section-title">O Impacto da Previsibilidade</h2>
          <p className="section-subtitle">
            A transição da gestão reativa para uma cultura de presença confirmada.
          </p>
        </div>
        
        <div className="ba-wrapper">
          <div className="ba-vs-badge">VS</div>
          
          <div className="before-after-grid">
            {/* Lado ANTES: Gestão Reativa */}
            <div className="ba-card before-card">
              <div className="ba-card-inner">
                <div className="ba-header">
                  <div className="ba-label">Cenário Atual</div>
                  <h3>Gestão Reativa</h3>
                </div>
                
                <div className="ba-visual-chaos">
                  {/* Representação visual de instabilidade */}
                  <div className="chaos-line"></div>
                  <div className="chaos-line"></div>
                  <div className="chaos-line"></div>
                </div>

                <ul className="ba-list">
                  <li><span className="ba-icon-error">✕</span> 20-30% de ausências não planejadas</li>
                  <li><span className="ba-icon-error">✕</span> Lacunas ociosas e "buracos" na grade</li>
                  <li><span className="ba-icon-error">✕</span> Dependência de processos manuais falhos</li>
                  <li><span className="ba-icon-error">✕</span> Receita oscilante e imprevisível</li>
                </ul>
              </div>
            </div>

            {/* Lado DEPOIS: PRAESO */}
            <div className="ba-card after-card">
              <div className="ba-card-inner">
                <div className="ba-header">
                  <div className="ba-label highlight">Com PRAESO</div>
                  <h3>Cultura de Presença</h3>
                </div>

                <div className="ba-visual-stable">
                  {/* Representação visual de estabilidade */}
                  <div className="stable-bar"></div>
                  <div className="stable-bar"></div>
                  <div className="stable-bar"></div>
                </div>

                <ul className="ba-list">
                  <li><span className="ba-icon-success">✓</span> Redução para 5-8% de ausências</li>
                  <li><span className="ba-icon-success">✓</span> Máxima ocupação da agenda</li>
                  <li><span className="ba-icon-success">✓</span> Protocolo 100% automatizado</li>
                  <li><span className="ba-icon-success">✓</span> <strong>Menos esforço, mais controle</strong></li>
                </ul>
                <div className="ba-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;