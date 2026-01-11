const Problem = () => {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="problem-content">
          <div className="problem-image">
            <img src="/images/problem-illustration.png" alt="Problema de faltas" />
          </div>
          <div className="problem-text">
            <h2 className="section-title">O problema que você enfrenta todo dia</h2>
            <div className="problem-list">
              <div className="problem-item">
                <div className="problem-number">10</div>
                <div className="problem-desc">
                  <strong>Consultas agendadas</strong>
                  <p>Sua agenda está cheia</p>
                </div>
              </div>
              <div className="problem-arrow">↓</div>
              <div className="problem-item problem-item-bad">
                <div className="problem-number">2</div>
                <div className="problem-desc">
                  <strong>Clientes faltam</strong>
                  <p>Sem avisar, sem remarcar</p>
                </div>
              </div>
              <div className="problem-arrow">↓</div>
              <div className="problem-item problem-item-worse">
                <div className="problem-icon">💸</div>
                <div className="problem-desc">
                  <strong>Prejuízo direto</strong>
                  <p>Dinheiro e tempo perdidos</p>
                </div>
              </div>
            </div>
            <div className="problem-callout">
              <strong>Isso acontece todo dia.</strong> E você não consegue reagendar a tempo.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;