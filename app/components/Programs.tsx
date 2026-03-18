'use client';
import { useRef } from 'react';
import useScrollAnimate from '../hooks/useScrollAnimate';

const programs = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6.5 6.5h11M6.5 17.5h11M2 12h2M20 12h2M4 10v4M20 10v4M7 8v8M17 8v8" />
      </svg>
    ),
    title: 'WOD Классика',
    subtitle: 'Базовый CrossFit',
    desc: 'Силовой блок плюс высокоинтенсивный комплекс (Метакон). Разнообразие упражнений под руководством тренера.',
    time: 'Пн / Ср / Пт | Утро 7:00–9:00 · Вечер 17:30–19:40',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Olympic Lifting',
    subtitle: 'Тяжёлая атлетика',
    desc: 'Группа по тяжёлой атлетике. Рывок, толчок, подготовка к соревнованиям. Технически выверенный подход.',
    time: 'Чт 19:40 | Запись обязательна',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Team WOD',
    subtitle: 'Командный CrossFit',
    desc: 'Командные кроссфит тренировки. Работаешь в паре или группе — поддержка и азарт обеспечены.',
    time: 'Сб 9:00 · Команда',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
    title: 'Open Gym',
    subtitle: 'Свободное посещение',
    desc: 'Самостоятельная тренировка без тренера. Полный доступ к оборудованию залу в свободное расписание.',
    time: 'Пн/Ср/Пт 13:30 · Сб 13:00',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
        <path d="M12 12v8" />
      </svg>
    ),
    title: 'Женский ОФП',
    subtitle: "Women's GPP",
    desc: 'Специализированные классы для женщин. Общая физическая подготовка, функциональный тренинг, уютная атмосфера.',
    time: '8 или 12 тренировок в месяц',
  },
];

export default function Programs() {
  const titleRef = useRef<HTMLDivElement>(null);
  useScrollAnimate(titleRef);

  return (
    <section
      id="programs"
      style={{ padding: 'var(--space-24) 0' }}
    >
      <div className="container">
        {/* Section header */}
        <div
          ref={titleRef}
          className="scroll-animate"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '48px',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <span className="section-label">Наши программы</span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: 'var(--color-text-primary)' }}>
              Программы тренировок
            </h2>
          </div>
          <a href="#schedule" className="btn-text">
            Смотреть расписание
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Programs grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {programs.map((p, i) => (
            <div
              key={i}
              className="feature-card scroll-animate"
              style={{
                transitionDelay: `${i * 80}ms`,
                height: '100%',
              }}
            >
              <div
                style={{
                  color: 'var(--color-brand-red)',
                  marginBottom: '24px',
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontSize: '28px',
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.1,
                  marginBottom: '4px',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--color-brand-amber)',
                  marginBottom: '16px',
                  letterSpacing: '0.05em',
                }}
              >
                {p.subtitle}
              </p>
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '20px',
                  flex: 1,
                }}
              >
                {p.desc}
              </p>
              <div className="divider" />
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--color-text-primary)',
                }}
              >
                {p.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
