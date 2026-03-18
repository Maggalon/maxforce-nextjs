'use client';
import { useRef } from 'react';
import useScrollAnimate from '../hooks/useScrollAnimate';

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#22C55E"
      strokeWidth="2.5"
      strokeLinecap="round"
      style={{ flexShrink: 0, marginTop: '2px' }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const plans = [
  {
    name: 'Старт',
    tag: '3 раза в неделю',
    price: '7 500',
    period: '/мес',
    original: '8 × посещений / мес: 6 500 ₽\n12 × посещений / мес: 7 500 ₽',
    features: [
      '12 групповых тренировок в месяц',
      'Доступ к расписанию',
      'Вводный OnRamp',
      'Все классические WOD',
    ],
    cta: 'Выбрать',
    featured: false,
  },
  {
    name: 'Без лимита',
    tag: 'Безлимит на месяц',
    price: '7 900',
    period: '/мес',
    badge: 'ПОПУЛЯРНЫЙ',
    features: [
      'Неограниченные тренировки',
      'Все форматы: Class / Open Gym / Team',
      'Приоритетная запись',
      'Закрытый чат комьюнити',
    ],
    cta: 'Выбрать',
    featured: true,
  },
  {
    name: 'Квартал',
    tag: '3 месяца безлимит',
    price: '21 500',
    period: '/квартал',
    features: [
      'Всё из «Без лимита»',
      'Экономия ~5 600 ₽ vs 3 мес',
      'Рассрочка доступна',
      'Заморозка 7 дней бесплатно',
    ],
    cta: 'Выбрать',
    featured: false,
  },
  {
    name: 'Полугодие',
    tag: '6 месяцев безлимит',
    price: '39 500',
    period: '/полгода',
    features: [
      'Всё из «Без лимита»',
      'Экономия ~8 000 ₽ vs 6 мес',
      'Рассрочка доступна',
      'Заморозка 14 дней бесплатно',
    ],
    cta: 'Выбрать',
    featured: false,
  },
  {
    name: 'Женский ОФП',
    tag: "Women's GPP Classes",
    price: 'от 5 900',
    period: '/мес',
    features: [
      '8 занятий — 5 900 ₽',
      '12 занятий — 6 900 ₽',
      'Специализированная программа',
      'Женская группа с тренером',
    ],
    cta: 'Записаться',
    featured: false,
  },
];

// Single visit options
const singleVisits = [
  { label: 'Разовое в группе (Class)', price: '1 200 ₽' },
  { label: 'Разовое самостоятельно (Open Gym)', price: '700 ₽' },
  { label: '1 неделя безлимит', price: '2 500 ₽' },
  { label: '4 тренировки в месяц', price: '3 500 ₽' },
  { label: '1 мес. Open Gym (Своб. посещение)', price: '5 600 ₽' },
];

export default function Pricing() {
  const titleRef = useRef<HTMLDivElement>(null);
  useScrollAnimate(titleRef);

  return (
    <section
      id="pricing"
      style={{ padding: 'var(--space-24) 0' }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={titleRef}
          className="scroll-animate"
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Цены</span>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
            Цены на абонементы
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--color-text-secondary)' }}>
            Без скрытых условий. Только честная цена за результат.
          </p>
        </div>

        {/* Main pricing cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            alignItems: 'center',
            marginBottom: '48px',
          }}
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`scroll-animate ${plan.featured ? 'pricing-card-featured' : 'pricing-card'}`}
              style={{
                transitionDelay: `${i * 80}ms`,
                transform: plan.featured ? 'scale(1.04)' : 'scale(1)',
              }}
            >
              {plan.badge && (
                <div className="pricing-badge">{plan.badge}</div>
              )}

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '28px',
                  color: 'var(--color-text-primary)',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {plan.name}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
                {plan.tag}
              </p>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '28px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '52px',
                    color: 'var(--color-text-primary)',
                    lineHeight: 0.85,
                  }}
                >
                  {plan.price}
                </span>
                <div style={{ marginLeft: '8px', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: 600, fontSize: '20px', color: 'var(--color-text-secondary)', lineHeight: 1 }}>
                    ₽
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul style={{ listStyle: 'none', marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {plan.features.map((f, fi) => (
                  <li key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckIcon />
                    <span
                      style={{
                        fontSize: '14px',
                        color: plan.featured && fi === 0
                          ? 'var(--color-text-primary)'
                          : 'var(--color-text-secondary)',
                        fontWeight: plan.featured && fi === 0 ? 600 : 400,
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#join"
                className={plan.featured ? 'btn-primary' : 'btn-secondary'}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  width: '100%',
                  ...(plan.featured
                    ? { boxShadow: '0 4px 16px rgba(200, 57, 26, 0.4)' }
                    : {}),
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Single visits table */}
        <div
          className="scroll-animate"
          style={{
            background: 'var(--color-surface-mid)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            marginBottom: '32px',
          }}
        >
          <h3
            style={{
              fontSize: '28px',
              color: 'var(--color-text-primary)',
              marginBottom: '24px',
              textAlign: 'center',
            }}
          >
            Разовые посещения
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '12px',
            }}
          >
            {singleVisits.map((sv, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'var(--color-surface-elevated)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 16px',
                  gap: '12px',
                }}
              >
                <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                  {sv.label}
                </span>
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {sv.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Free first session callout */}
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-accent-gold)' }}>
            Первое занятие — бесплатно. Без обязательств. Просто приди.
          </p>
        </div>
      </div>
    </section>
  );
}
