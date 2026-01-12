"use client"

import { useEffect, useState } from "react"

const Hero = () => {
  const [filledSlots, setFilledSlots] = useState(0)

  // Animação simples de preenchimento
  useEffect(() => {
    const interval = setInterval(() => {
      setFilledSlots(prev => (prev >= 8 ? 0 : prev + 1))
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="mesh-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          {/* Lado esquerdo - Texto */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Inteligência em Previsibilidade
            </div>

            <h1 className="hero-title">
              Sua agenda <br />
              <span className="highlight">sempre cheia.</span>
            </h1>

            <p className="hero-description">
              A <strong>PRAESO</strong> antecipa a presença dos seus clientes e elimina as lacunas na sua agenda. 
              <span className="text-highlight"> Zero faltas. Máxima previsibilidade.</span>
            </p>
            
            <div className="hero-cta">
              <button className="btn-primary btn-large">
                Começar agora
                <span className="btn-arrow">→</span>
              </button>
              <button className="btn-outline btn-large">
                Ver demonstração
              </button>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                Sem cartão de crédito
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                14 dias grátis
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                Cancelamento fácil
              </div>
            </div>
          </div>

          {/* Lado direito - Calendário */}
          <div className="hero-visual">
            <div className="calendar-card">
              <div className="calendar-header">
                <div className="calendar-title">Hoje</div>
                <div className="calendar-date">12 Janeiro</div>
              </div>
              
              <div className="calendar-slots">
                {Array.from({ length: 8 }).map((_, i) => {
                  const hour = 9 + i
                  const isFilled = i < filledSlots
                  
                  return (
                    <div key={i} className={`slot ${isFilled ? 'slot-filled' : ''}`}>
                      <div className="slot-time">{hour}:00</div>
                      <div className="slot-content">
                        {isFilled ? (
                          <>
                            <div className="slot-check">✓</div>
                            <div className="slot-name">Cliente confirmado</div>
                          </>
                        ) : (
                          <div className="slot-empty-text">Disponível</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Cards flutuantes simplificados */}
            <div className="float-card card-1">
              <div className="card-icon">🔔</div>
              <div>
                <div className="card-title">Notificação enviada</div>
                <div className="card-sub">Confirmação em 2min</div>
              </div>
            </div>

            <div className="float-card card-2">
              <div className="card-icon success">✓</div>
              <div>
                <div className="card-title">+8 Confirmações</div>
                <div className="card-sub">Hoje</div>
              </div>
            </div>

            <div className="float-card card-3">
              <div className="card-icon revenue">💰</div>
              <div>
                <div className="card-title">R$ 2.400</div>
                <div className="card-sub">Receita protegida</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero