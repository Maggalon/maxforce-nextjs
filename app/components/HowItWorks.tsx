'use client';
import { useRef } from 'react';
import useScrollAnimate from '../hooks/useScrollAnimate';

const steps = [
  {
    num: '1',
    title: 'Шаг 1 — Приходи',
    text: 'Удобное время. Тренировки каждое утро и вечер — вписываешь в своё расписание, не наоборот.',
  },
  {
    num: '2',
    title: 'Шаг 2 — Знакомься',
    text: 'Тренер покажет технику безопасно и постепенно. Ты не потеряешься. Ты не облажаешься. Ты начнёшь.',
  },
  {
    num: '3',
    title: 'Шаг 3 — Жги',
    text: 'Через 60 минут — ты потный, довольный и уже хочешь вернуться. Каждый WOD разный. Каждый день — прогресс.',
  },
];

export default function HowItWorks() {
  const titleRef = useRef<HTMLDivElement>(null);
  useScrollAnimate(titleRef);

  return (
    <section
      id="how"
      style={{
        background: 'var(--color-surface-dark)',
        padding: 'var(--space-24) 0',
      }}
    >
      <div className="container">
        <div
          ref={titleRef}
          className="scroll-animate"
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
            3 шага до первого WOD
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)' }}>
            Простая система. Мощный результат.
          </p>
        </div>

        <div className="steps-grid">
          {/* Connector line — desktop only */}
          <div className="step-connector" aria-hidden="true" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="step-item scroll-animate"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--color-bg)',
                  border: '2px solid var(--color-brand-red)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontSize: '24px',
                  color: 'var(--color-text-primary)',
                  marginBottom: '24px',
                  position: 'relative',
                  zIndex: 10,
                  boxShadow: '0 0 0 8px var(--color-surface-dark)',
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontSize: '24px',
                  color: 'var(--color-text-primary)',
                  marginBottom: '12px',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '320px',
                  margin: '0 auto',
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          position: relative;
        }
        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 10;
        }
        .step-connector {
          position: absolute;
          top: 28px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: var(--color-border);
          z-index: 0;
        }
        @media (max-width: 767px) {
          .steps-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .step-connector { display: none; }
        }
      `}</style>
    </section>
  );
}
