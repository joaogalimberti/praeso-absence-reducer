import { useState, useEffect } from 'react';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
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

  const features = [
    {
      icon: '📅',
      title: 'Agenda Inteligente',
      description: 'Visualize todos os compromissos em formato de lista diária ou calendário semanal'
    },
    {
      icon: '🔔',
      title: 'Lembretes Automáticos',
      description: 'Envio automático de lembretes 24h antes por email, SMS e WhatsApp'
    },
    {
      icon: '✅',
      title: 'Confirmação Simples',
      description: 'Clientes confirmam presença com um clique - você acompanha em tempo real'
    },
    {
      icon: '📊',
      title: 'Métricas Claras',
      description: 'Veja a redução de faltas antes vs depois com dashboards visuais'
    },
    {
      icon: '⚡',
      title: 'Rápido & Fácil',
      description: 'Configure em minutos. Cadastre clientes, agende e deixe o sistema trabalhar'
    },
    {
      icon: '💰',
      title: 'Economize Dinheiro',
      description: 'Reduza até 70% das faltas e recupere tempo e receita perdidos'
    }
  ];

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
    <div className="landing-page">
      {/* Header/Navigation */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <span className="logo-icon">📋</span>
              <span className="logo-text">No-Show Reducer</span>
            </div>
            <nav className="nav">
              <a href="#features">Recursos</a>
              <a href="#how-it-works">Como Funciona</a>
              <a href="#pricing">Preços</a>
              <button className="btn-secondary">Login</button>
              <button className="btn-primary">Começar Grátis</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src="/images/hero-background.jpg" alt="" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Reduza faltas automaticamente
              </div>
              <h1 className="hero-title">
                Pare de perder <span className="highlight">dinheiro e tempo</span> com faltas
              </h1>
              <p className="hero-description">
                Lembretes inteligentes que confirmam presença automaticamente.
                Economize tempo, aumente sua receita e tenha previsibilidade na agenda.
              </p>
              <div className="hero-cta">
                <button className="btn-primary btn-large">
                  Começar Teste Grátis
                  <span className="btn-arrow">→</span>
                </button>
                <button className="btn-outline btn-large">
                  <span className="play-icon">▶</span>
                  Ver Como Funciona
                </button>
              </div>
              <div className="hero-trust">
                <div className="trust-item">
                  <span className="trust-icon">✓</span>
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="trust-item">
                  <span className="trust-icon">✓</span>
                  <span>Configuração em 5 minutos</span>
                </div>
                <div className="trust-item">
                  <span className="trust-icon">✓</span>
                  <span>Suporte em português</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/hero-dashboard.png" alt="Dashboard do No-Show Reducer" />
              <div className="floating-card card-1">
                <div className="card-icon">🔔</div>
                <div className="card-content">
                  <div className="card-title">Lembrete enviado</div>
                  <div className="card-subtitle">24h antes do horário</div>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">✅</div>
                <div className="card-content">
                  <div className="card-title">Cliente confirmou</div>
                  <div className="card-subtitle">Presença garantida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
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

      {/* Stats Section */}
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

      {/* Before vs After */}
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

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title center">Tudo que você precisa para reduzir faltas</h2>
            <p className="section-subtitle">Automação inteligente que funciona enquanto você atende</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="container">
          <h2 className="section-title center">Como funciona</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Cadastre seus clientes</h3>
                <p className="step-description">Adicione nome, telefone e email. Simples assim.</p>
                <img src="/images/step-1-register.png" alt="Cadastro de clientes" className="step-image" />
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Agende os horários</h3>
                <p className="step-description">Marque data, hora e cliente. Visualize em lista ou calendário.</p>
                <img src="/images/step-2-schedule.png" alt="Agendamento" className="step-image" />
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Sistema envia lembretes</h3>
                <p className="step-description">24h antes, o cliente recebe lembrete automático por email, SMS ou WhatsApp.</p>
                <img src="/images/step-3-reminder.png" alt="Envio de lembretes" className="step-image" />
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Cliente confirma presença</h3>
                <p className="step-description">Com um clique, ele confirma. Você vê tudo no dashboard em tempo real.</p>
                <img src="/images/step-4-confirm.png" alt="Confirmação" className="step-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="dashboard-section">
        <div className="container">
          <div className="dashboard-content">
            <div className="dashboard-text">
              <h2 className="section-title">Controle total em uma tela</h2>
              <p className="dashboard-description">
                Visualize todos os compromissos, status de confirmação e métricas de performance em um dashboard limpo e intuitivo.
              </p>
              <ul className="dashboard-features">
                <li>
                  <span className="df-icon">📊</span>
                  <div>
                    <strong>Métricas em tempo real</strong>
                    <p>Acompanhe taxa de faltas, confirmações e tendências</p>
                  </div>
                </li>
                <li>
                  <span className="df-icon">📱</span>
                  <div>
                    <strong>Acesse de qualquer lugar</strong>
                    <p>Desktop, tablet ou celular - totalmente responsivo</p>
                  </div>
                </li>
                <li>
                  <span className="df-icon">⚡</span>
                  <div>
                    <strong>Notificações instantâneas</strong>
                    <p>Saiba na hora quando um cliente confirma ou cancela</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="dashboard-image">
              <img src="/images/dashboard-main.png" alt="Dashboard principal" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile View Section */}
      <section className="mobile-section">
        <div className="container">
          <div className="mobile-content">
            <div className="mobile-images">
              <img src="/images/mobile-1.png" alt="App mobile - agenda" className="mobile-phone" />
              <img src="/images/mobile-2.png" alt="App mobile - lembretes" className="mobile-phone" />
              <img src="/images/mobile-3.png" alt="App mobile - confirmações" className="mobile-phone" />
            </div>
            <div className="mobile-text">
              <h2 className="section-title">Sempre no seu bolso</h2>
              <p className="mobile-description">
                Gerencie sua agenda de qualquer lugar. O app mobile tem todos os recursos da versão desktop em uma interface otimizada para toque.
              </p>
              <div className="mobile-features">
                <div className="mobile-feature">
                  <div className="mf-icon">📲</div>
                  <div>
                    <strong>Notificações push</strong>
                    <p>Receba alertas instantâneos</p>
                  </div>
                </div>
                <div className="mobile-feature">
                  <div className="mf-icon">🔄</div>
                  <div>
                    <strong>Sincronização automática</strong>
                    <p>Dados sempre atualizados</p>
                  </div>
                </div>
                <div className="mobile-feature">
                  <div className="mf-icon">✨</div>
                  <div>
                    <strong>Interface intuitiva</strong>
                    <p>Fácil de usar, mesmo em movimento</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="automation-section">
        <div className="container">
          <h2 className="section-title center">Automação que trabalha por você</h2>
          <p className="section-subtitle center">Configure uma vez e deixe o sistema fazer o resto</p>
          <div className="automation-visual">
            <img src="/images/automation-flow.png" alt="Fluxo de automação" className="automation-image" />
            <div className="automation-steps">
              <div className="auto-step auto-step-1">
                <div className="auto-icon">📅</div>
                <div className="auto-text">Agendamento criado</div>
              </div>
              <div className="auto-step auto-step-2">
                <div className="auto-icon">⏰</div>
                <div className="auto-text">24h antes</div>
              </div>
              <div className="auto-step auto-step-3">
                <div className="auto-icon">📧</div>
                <div className="auto-text">Lembrete enviado</div>
              </div>
              <div className="auto-step auto-step-4">
                <div className="auto-icon">✅</div>
                <div className="auto-text">Cliente confirma</div>
              </div>
              <div className="auto-step auto-step-5">
                <div className="auto-icon">🎉</div>
                <div className="auto-text">Você é notificado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title center">O que profissionais dizem</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
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

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-card">
              <img src="/images/trust-secure.png" alt="Segurança" className="trust-image" />
              <h3>Seus dados protegidos</h3>
              <p>Criptografia de ponta a ponta e conformidade com LGPD</p>
            </div>
            <div className="trust-card">
              <img src="/images/trust-support.png" alt="Suporte" className="trust-image" />
              <h3>Suporte dedicado</h3>
              <p>Equipe em português pronta para ajudar</p>
            </div>
            <div className="trust-card">
              <img src="/images/trust-uptime.png" alt="Disponibilidade" className="trust-image" />
              <h3>99.9% de uptime</h3>
              <p>Sistema sempre disponível quando você precisa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <h2 className="section-title center">Planos que cabem no seu bolso</h2>
          <p className="section-subtitle center">Comece grátis e escale conforme cresce</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-name">Starter</h3>
                <div className="pricing-price">
                  <span className="price-currency">R$</span>
                  <span className="price-amount">49</span>
                  <span className="price-period">/mês</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>✓ Até 100 agendamentos/mês</li>
                <li>✓ Lembretes por email</li>
                <li>✓ Dashboard básico</li>
                <li>✓ Suporte por email</li>
              </ul>
              <button className="btn-outline btn-full">Começar Grátis</button>
            </div>
            <div className="pricing-card pricing-card-featured">
              <div className="pricing-badge">Mais Popular</div>
              <div className="pricing-header">
                <h3 className="pricing-name">Professional</h3>
                <div className="pricing-price">
                  <span className="price-currency">R$</span>
                  <span className="price-amount">99</span>
                  <span className="price-period">/mês</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>✓ Agendamentos ilimitados</li>
                <li>✓ Email + SMS + WhatsApp</li>
                <li>✓ Dashboard completo + métricas</li>
                <li>✓ Suporte prioritário</li>
                <li>✓ App mobile</li>
                <li>✓ Múltiplos profissionais</li>
              </ul>
              <button className="btn-primary btn-full">Começar Grátis</button>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-name">Enterprise</h3>
                <div className="pricing-price">
                  <span className="price-text">Personalizado</span>
                </div>
              </div>
              <ul className="pricing-features">
                <li>✓ Tudo do Professional</li>
                <li>✓ Multi-clínicas</li>
                <li>✓ API personalizada</li>
                <li>✓ Gerente de conta dedicado</li>
                <li>✓ Treinamento incluído</li>
                <li>✓ SLA garantido</li>
              </ul>
              <button className="btn-outline btn-full">Falar com Vendas</button>
            </div>
          </div>
          <div className="pricing-guarantee">
            <div className="guarantee-badge">🛡️</div>
            <div>
              <strong>Garantia de 30 dias</strong>
              <p>Não ficou satisfeito? Devolvemos 100% do seu dinheiro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <img src="/images/cta-reduce-no-shows.png" alt="Reduza faltas agora" className="final-cta-image" />
            <div className="final-cta-text">
              <h2>Pare de perder dinheiro com faltas</h2>
              <p>Junte-se a centenas de profissionais que já reduziram suas faltas em até 70%</p>
              <div className="final-cta-buttons">
                <button className="btn-primary btn-large">
                  Começar Teste Grátis de 14 Dias
                  <span className="btn-arrow">→</span>
                </button>
                <p className="cta-note">Sem cartão de crédito • Configuração em 5 minutos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <div className="footer-logo">
                <span className="logo-icon">📋</span>
                <span className="logo-text">No-Show Reducer</span>
              </div>
              <p className="footer-description">
                A solução completa para reduzir faltas e aumentar a previsibilidade da sua agenda.
              </p>
            </div>
            <div className="footer-column">
              <h4>Produto</h4>
              <ul>
                <li><a href="#features">Recursos</a></li>
                <li><a href="#pricing">Preços</a></li>
                <li><a href="#">Integrações</a></li>
                <li><a href="#">Atualizações</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Carreiras</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Suporte</h4>
              <ul>
                <li><a href="#">Central de ajuda</a></li>
                <li><a href="#">Tutoriais</a></li>
                <li><a href="#">Status do sistema</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacidade</a></li>
                <li><a href="#">Termos de uso</a></li>
                <li><a href="#">LGPD</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 No-Show Reducer. Todos os direitos reservados.</p>
            <div className="footer-social">
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
