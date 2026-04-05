'use client';
import { useRef } from 'react';
import useScrollAnimate from '../hooks/useScrollAnimate';

const programs = [
  {
    image: '/classic-wod.jpg',
    title: 'WOD Классика',
    subtitle: 'Базовый CrossFit',
    desc: 'Силовой блок плюс высокоинтенсивный комплекс (Метакон). Разнообразие упражнений под руководством тренера.',
    time: 'Пн / Ср / Пт | Утро 7:00–9:00 · Вечер 17:30–19:40',
  },
  {
    image: '/olympic-lift.jpg',
    title: 'Olympic Lifting',
    subtitle: 'Тяжёлая атлетика',
    desc: 'Группа по тяжёлой атлетике. Рывок, толчок, подготовка к соревнованиям. Технически выверенный подход.',
    time: 'Чт 19:40 | Запись обязательна',
  },
  {
    image: '/team-wod.jpg',
    title: 'Team WOD',
    subtitle: 'Командный CrossFit',
    desc: 'Командные кроссфит тренировки. Работаешь в паре или группе — поддержка и азарт обеспечены.',
    time: 'Сб 9:00 · Команда',
  },
  {
    image: '/open-gym.jpg',
    title: 'Open Gym',
    subtitle: 'Свободное посещение',
    desc: 'Самостоятельная тренировка без тренера. Полный доступ к оборудованию залу в свободное расписание.',
    time: 'Пн/Ср/Пт 13:30 · Сб 13:00',
  },
  {
    image: '/women-gpp.jpg',
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
              className="feature-card scroll-animate program-card"
              style={{
                transitionDelay: `${i * 80}ms`,
                height: '100%',
                padding: 0,
                overflow: 'hidden',
              }}
            >
              {/* Photo */}
              <div
                className="program-card__img-wrap"
                style={{
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
                {/* Subtle gradient overlay at bottom for text readability */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60px',
                    background: 'linear-gradient(to top, var(--color-surface-mid), transparent)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Text content */}
              <div style={{ padding: '24px 32px 32px' }}>
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
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .program-card:hover .program-card__img-wrap img {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}
