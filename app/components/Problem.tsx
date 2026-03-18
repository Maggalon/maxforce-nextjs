'use client';
import { useRef } from 'react';
import useScrollAnimate from '../hooks/useScrollAnimate';

const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15s1.5-2 4-2 4 2 4 2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" strokeLinecap="round" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: '1. Ты тренируешься один',
    text: 'Наушники в ушах, глаза в телефоне, один и тот же тренажёр по кругу. Без команды — нет заряда, нет прогресса.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    icon2: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: '2. Ты не знаешь, что делать',
    text: 'Программа скачана из интернета. Результатов нет. Мотивация — на нуле. Приходить в зал становится пыткой.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '3. У тебя нет времени',
    text: 'Работа, семья, дедлайны. Зал на 2 часа — роскошь, которую ты не можешь себе позволить.',
  },
];

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollAnimate(ref);

  return (
    <section style={{ padding: 'var(--space-24) 0' }}>
      <div className="container">
        <div
          ref={ref}
          className="scroll-animate"
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: 'var(--color-text-primary)', marginBottom: '8px' }}>
            Обычные залы вас подводят.{' '}
            <span style={{ color: 'var(--color-brand-red)' }}>Вот почему.</span>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {problems.map((p, i) => (
            <div
              key={i}
              className="feature-card scroll-animate"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--color-brand-red-glow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-brand-red)',
                  marginBottom: '24px',
                  flexShrink: 0,
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontSize: '24px',
                  color: 'var(--color-text-primary)',
                  marginBottom: '8px',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
