"use client"

import { useEffect, useState } from "react"

const Automation = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    { 
      n: "01", 
      title: "Agendamento", 
      desc: "Registro inicial",
      icon: "📅",
      detail: "Cliente agendado no sistema"
    },
    { 
      n: "02", 
      title: "Antecipação", 
      desc: "Início do protocolo",
      icon: "⏰",
      detail: "48h antes: Primeira notificação"
    },
    { 
      n: "03", 
      title: "Consciência", 
      desc: "Lembrete estratégico",
      icon: "🔔",
      detail: "24h antes: Confirmação solicitada"
    },
    { 
      n: "04", 
      title: "Confirmação", 
      desc: "Validação ativa",
      icon: "✓",
      detail: "Cliente confirma presença"
    },
    { 
      n: "05", 
      title: "Previsibilidade", 
      desc: "Agenda protegida",
      icon: "🎯",
      detail: "Compromisso garantido"
    },
  ]

  // Auto-play animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <section className="automation-section">
      <div className="container">
        <div className="automation-header">
          <div className="section-tag">Automação Inteligente</div>
          <h2 className="section-title">
            O Motor da <span className="blue-gradient-text">Previsibilidade</span>
          </h2>
          <p className="section-subtitle">
            A inteligência da <strong>PRAESO</strong> automatiza o comportamento de presença, 
            transformando incerteza em receita protegida.
          </p>
        </div>
        
        <div className="automation-canvas">
          {/* Linha de conexão animada */}
          <div className="flow-line-container">
            <div className="flow-line-track"></div>
            <div 
              className="flow-line-progress"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Steps interativos */}
          <div className="automation-steps-grid">
            {steps.map((step, index) => (
              <div 
                key={step.n} 
                className={`auto-node ${index <= activeStep ? 'node-active' : ''} ${index === activeStep ? 'node-current' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="node-circle">
                  <div className="node-pulse"></div>
                  <div className="node-icon">{step.icon}</div>
                  <span className="node-number">{step.n}</span>
                </div>
                <div className="node-content">
                  <strong>{step.title}</strong>
                  <span>{step.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Card de detalhes do step ativo */}
          <div className="step-detail-card">
            <div className="detail-icon">{steps[activeStep].icon}</div>
            <div className="detail-content">
              <div className="detail-label">Etapa {steps[activeStep].n}</div>
              <h3>{steps[activeStep].title}</h3>
              <p>{steps[activeStep].detail}</p>
            </div>
          </div>
        </div>

        {/* Simulação de WhatsApp no iPhone */}
        <div className="whatsapp-simulation">
          <div className="iphone-mockup">
            {/* iPhone Frame */}
            <div className="iphone-bezel">
              {/* Dynamic Island */}
              <div className="dynamic-island"></div>
              
              {/* Screen Content */}
              <div className="iphone-screen">
                {/* WhatsApp Header - Simples */}
                <div className="whatsapp-header-simple">
                  <div className="contact-avatar-simple">P</div>
                  <div className="contact-info-simple">
                    <div className="contact-name-simple">PRAESO</div>
                    <div className="contact-status-simple">online</div>
                  </div>
                </div>
                
                {/* Messages Area */}
                <div className="whatsapp-messages-simple">
                  <div className="message-date">Hoje</div>
                  
                  <div className="message message-sent message-1">
                    <div className="message-bubble bubble-sent">
                      Olá! Pode confirmar minha consulta de amanhã às 14h30
                    </div>
                    <div className="message-time time-sent">10:25 ✓✓</div>
                  </div>
                  
                  {/* Typing indicator */}
                  <div className="typing-wrapper">
                    <div className="typing-indicator-simple">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  
                  <div className="message message-received message-2">
                    <div className="message-bubble bubble-received">
                      Perfeito, Sr. João!
                      <br/><br/>
                      Sua presença está confirmada para amanhã (16/01) às 14h30.
                    </div>
                    <div className="message-time time-received">10:25</div>
                  </div>
                  
                  <div className="message message-received message-3">
                    <div className="message-bubble bubble-received">
                      Obrigado por confirmar. Até amanhã!
                    </div>
                    <div className="message-time time-received">10:26</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Buttons */}
            <div className="iphone-button volume-up"></div>
            <div className="iphone-button volume-down"></div>
            <div className="iphone-button power"></div>
          </div>

          <div className="simulation-info">
            <div className="info-tag">IA Conversacional</div>
            <h3>Confirmação Natural com Inteligência Artificial</h3>
            <p>
              A IA da PRAESO conversa naturalmente com seus clientes, chamando pelo nome 
              e processando respostas em linguagem humana. Nada de comandos robóticos.
            </p>
            <div className="info-features">
              <div className="info-feature">
                <div className="feature-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#2563eb">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                  </svg>
                </div>
                <div>
                  <div className="feature-title">Processamento Natural</div>
                  <div className="feature-desc">Entende "sim", "confirmo", "vou sim" e variações</div>
                </div>
              </div>
              <div className="info-feature">
                <div className="feature-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#2563eb">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <div className="feature-title">Personalização</div>
                  <div className="feature-desc">Usa o nome do cliente e contexto da consulta</div>
                </div>
              </div>
              <div className="info-feature">
                <div className="feature-icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#2563eb">
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                  </svg>
                </div>
                <div>
                  <div className="feature-title">Resposta Instantânea</div>
                  <div className="feature-desc">Confirma automaticamente em segundos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Automation