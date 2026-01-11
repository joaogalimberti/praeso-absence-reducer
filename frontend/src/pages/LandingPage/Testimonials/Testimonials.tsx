const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Carlos Mendes',
      role: 'Cirurgião Dentista',
      stat: '-17% de faltas',
      text: 'Reduzi minhas ausências de 25% para 8% em apenas dois meses. O sistema não é um custo, ele se paga sozinho através da recuperação de receita.',
      image: '/images/testimonial-1.jpg'
    },
    {
      name: 'Dra. Ana Paula',
      role: 'Fisioterapeuta',
      stat: '+12h livres/mês',
      text: 'Meus pacientes elogiam a clareza das comunicações. Parei de desperdiçar tempo em espera passiva e recuperei o controle total do meu dia.',
      image: '/images/testimonial-2.jpg'
    },
    {
      name: 'Dr. Roberto Silva',
      role: 'Psicólogo Clínico',
      stat: '100% Automação',
      text: 'A interface é extremamente intuitiva. Em poucos minutos o protocolo já estava rodando e gerando previsibilidade para o meu consultório.',
      image: '/images/testimonial-3.jpg'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header center">
          <div className="section-tag">Prova Social</div>
          <h2 className="section-title">Resultados de quem vive o dia a dia</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="t-card-header">
                <div className="t-stat-badge">{t.stat}</div>
                <div className="t-stars">★★★★★</div>
              </div>
              
              <blockquote className="t-quote">
                "{t.text}"
              </blockquote>

              <div className="t-footer">
                <div className="t-avatar-wrapper">
                  <img src={t.image} alt={t.name} className="t-avatar" />
                  <div className="t-check-badge">✓</div>
                </div>
                <div className="t-meta">
                  <span className="t-name">{t.name}</span>
                  <span className="t-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;