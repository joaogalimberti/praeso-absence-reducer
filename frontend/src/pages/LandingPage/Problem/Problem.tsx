const Problem = () => {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="problem-content">
          <div className="problem-image">
            <img src="/problem-illustration.png" alt="O ciclo da incerteza na agenda" />
          </div>
          <div className="problem-text">
            <h2 className="section-title">O ciclo da incerteza</h2>
            <div className="problem-list">
              {/* Etapa 1: Ocupação aparente */}
              <div className="problem-item">
                <div className="problem-number">10</div>
                <div className="problem-desc">
                  <strong>Horários Ocupados</strong>
                  <p>Aparentemente, sua grade está completa.</p>
                </div>
              </div>
              
              <div className="problem-arrow">↓</div>
              
              {/* Etapa 2: A falha na presença */}
              <div className="problem-item problem-item-bad">
                <div className="problem-number">03</div>
                <div className="problem-desc">
                  <strong>Ausências Não Planejadas</strong>
                  <p>Faltas sem aviso prévio ou tempo para remanejamento.</p>
                </div>
              </div>
              
              <div className="problem-arrow">↓</div>
              
              {/* Etapa 3: O impacto final */}
              <div className="problem-item problem-item-worse">
                <div className="problem-status-icon">!</div>
                <div className="problem-desc">
                  <strong>Ociosidade Estrutural</strong>
                  <p>Tempo, equipe e recursos desperdiçados com a espera.</p>
                </div>
              </div>
            </div>
            
            <div className="problem-callout">
              <strong>A incerteza custa caro.</strong> Quando o compromisso não se cumpre, sua estrutura trabalha no vazio.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;