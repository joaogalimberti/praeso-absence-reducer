"use client"

import { useEffect, useState } from "react"

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])

  const steps = [
    { 
      n: "01", 
      title: "Registro de Presença", 
      tag: "Entrada de Dados",
      desc: "Insira os dados básicos do seu cliente. A PRAESO organiza as informações para iniciar o monitoramento inteligente.", 
      img: "/images/step-1.png"
    },
    { 
      n: "02", 
      title: "Planejamento de Agenda", 
      tag: "Organização",
      desc: "Defina os horários com facilidade. Nossa interface oferece clareza absoluta sobre sua grade de compromissos.", 
      img: "/images/step-2.png"
    },
    { 
      n: "03", 
      title: "Antecipação Ativa", 
      tag: "Engajamento",
      desc: "O sistema envia notificações estratégicas em momentos de alta atenção, preparando o cliente para o compromisso.", 
      img: "/images/step-3.png"
    },
    { 
      n: "04", 
      title: "Confirmação e Controle", 
      tag: "Resultado",
      desc: "O cliente valida a presença com um clique. Sua agenda se atualiza instantaneamente com foco em faturamento.", 
      img: "/images/step-4.png"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleSteps((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 }
    )

    const stepElements = document.querySelectorAll('.step-item')
    stepElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="how-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">O Método</div>
          <h2 className="section-title">
            A Engenharia por trás do <span className="highlight">Fluxo</span>
          </h2>
          <p className="section-subtitle">
            Quatro etapas desenhadas para eliminar a ociosidade e profissionalizar sua gestão.
          </p>
        </div>
        
        <div className="steps-container">
          {/* Linha central */}
          <div className="steps-path"></div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0

            return (
              <div 
                key={step.n} 
                className={`step-item ${isEven ? 'step-normal' : 'step-reverse'} ${
                  visibleSteps.includes(index) ? 'step-visible' : ''
                }`}
                data-index={index}
              >
                {/* Lado esquerdo */}
                <div className="step-side step-left">
                  {isEven ? (
                    // Texto à esquerda (steps ímpares: 1, 3)
                    <div className="step-content">
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-description">{step.desc}</p>
                    </div>
                  ) : (
                    // Imagem à esquerda (steps pares: 2, 4)
                    <div className="step-visual">
                      <div className="step-image-card">
                        <img src={step.img} alt={step.title} />
                        <div className="step-badge">{step.tag}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Marcador central */}
                <div className="step-marker">
                  <div className="step-number">{step.n}</div>
                </div>

                {/* Lado direito */}
                <div className="step-side step-right">
                  {isEven ? (
                    // Imagem à direita (steps ímpares: 1, 3)
                    <div className="step-visual">
                      <div className="step-image-card">
                        <img src={step.img} alt={step.title} />
                        <div className="step-badge">{step.tag}</div>
                      </div>
                    </div>
                  ) : (
                    // Texto à direita (steps pares: 2, 4)
                    <div className="step-content">
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-description">{step.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks