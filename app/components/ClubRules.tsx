'use client';
import { useRef } from 'react';
import useScrollAnimate from '../hooks/useScrollAnimate';

const rules = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Приходи вовремя',
    desc: 'Разминка начинается по расписанию. Опоздание — значит пропуск. Уважай своё время и время группы.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="9" y1="7" x2="16" y2="7" />
        <line x1="9" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: 'Запись обязательна',
    desc: 'На групповые занятия записывайся заранее через менеджера или чат. Без записи — места может не быть.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6.5 6.5h11M6.5 17.5h11M2 12h2M20 12h2M4 10v4M20 10v4M7 8v8M17 8v8" />
      </svg>
    ),
    title: 'Убирай за собой',
    desc: 'Вернул штангу — разобрал блины. Протёр мат после тренировки. Чистый зал — это общее дело.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Уважай комьюнити',
    desc: 'Мы одна команда. Поддерживай новичков, не мешай тренирующимся, общайся без грубости.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Слушай тренера',
    desc: 'Техника — на первом месте. Если тренер говорит скинуть вес или сменить упражнение — это для твоей безопасности.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="5" width="22" height="14" rx="2" />
        <path d="M1 10h22" />
      </svg>
    ),
    title: 'Сменка и полотенце',
    desc: 'Чистая спортивная обувь и полотенце — обязательно. На улице тренируемся только в специальных кедах.',
  },
];

export default function ClubRules() {
  const titleRef = useRef<HTMLDivElement>(null);
  useScrollAnimate(titleRef);

  return (
    <section
      id="rules"
      style={{
        background: 'var(--color-surface-dark)',
        padding: 'var(--space-24) 0',
      }}
    >
      <div className="container">
        {/* Section header */}
        <div
          ref={titleRef}
          className="scroll-animate"
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>
            Правила
          </span>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
            Правила клуба
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Простые правила, которые делают MaxForce местом,
            куда хочется возвращаться.
          </p>
        </div>

        {/* Rules grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {rules.map((rule, i) => (
            <div
              key={i}
              className="scroll-animate"
              style={{
                transitionDelay: `${i * 80}ms`,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                background: 'var(--color-surface-mid)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: '28px 24px',
                transition: 'border-color 300ms ease, transform 300ms ease, box-shadow 300ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-brand-red)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(200, 57, 26, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'var(--color-brand-red-glow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-brand-red)',
                  flexShrink: 0,
                }}
              >
                {rule.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    color: 'var(--color-text-primary)',
                    marginBottom: '6px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {rule.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                  }}
                >
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
