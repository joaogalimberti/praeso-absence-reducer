const Problem = () => {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="problem-grid">
          
          {/* Lado Esquerdo: O Infográfico Visual */}
          <div className="problem-visual">
            <div className="agenda-container">
              <div className="agenda-header">Agenda do Dia</div>
              <div className="agenda-slots">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`slot ${i >= 7 ? 'empty-slot' : 'filled-slot'}`}>
                    <div className="slot-bar"></div>
                    <div className="slot-status">{i >= 7 ? 'Ausência' : 'Confirmado'}</div>
                  </div>
                ))}
              </div>
              {/* Card Flutuante de Prejuízo */}
              <div className="impact-badge">
                <span className="impact-icon">⚠️</span>
                <div>
                  <strong>30% de Perda</strong>
                  <span>Capacidade ociosa detectada</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: A Explicação */}
          <div className="problem-text-content">
            <div className="problem-tag">O Gargalo Operacional</div>
            <h2 className="section-title">O ciclo da <span className="text-gradient">incerteza</span></h2>
            
            <div className="timeline-steps">
              <div className="timeline-item">
                <div className="timeline-marker blue">01</div>
                <div className="timeline-info">
                  <h3>Ocupação Ilusória</h3>
                  <p>Sua grade parece completa, gerando uma falsa sensação de faturamento e produtividade total.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker amber">02</div>
                <div className="timeline-info">
                  <h3>A Quebra de Expectativa</h3>
                  <p>Faltas não comunicadas impedem que você encaixe outros pacientes, criando "buracos" impossíveis de preencher.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker red">03</div>
                <div className="timeline-info">
                  <h3>Ociosidade Estrutural</h3>
                  <p>Sua equipe, luz e equipamentos continuam custando, mas a receita esperada simplesmente não entra.</p>
                </div>
              </div>
            </div>

            <div className="problem-quote">
              <p>"A incerteza custa mais caro que o investimento em tecnologia."</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problem;