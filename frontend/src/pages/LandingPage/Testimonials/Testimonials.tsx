const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Carlos Mendes',
      role: 'Dentista',
      text: 'Reduzi minhas faltas de 25% para 8% em 2 meses. O sistema se paga sozinho!',
      image: '/images/testimonial-1.jpg'
    },
    {
      name: 'Dra. Ana Paula',
      role: 'Fisioterapeuta',
      text: 'Meus pacientes adoram os lembretes. Nunca mais perdi tempo esperando quem não vem.',
      image: '/images/testimonial-2.jpg'
    },
    {
      name: 'Dr. Roberto Silva',
      role: 'Psicólogo',
      text: 'A interface é limpa e prática. Em 5 minutos já estava usando no dia a dia.',
      image: '/images/testimonial-3.jpg'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title center">O que profissionais dizem</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="testimonial-avatar" 
                />
                <div>
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-role">{testimonial.role}</div>
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