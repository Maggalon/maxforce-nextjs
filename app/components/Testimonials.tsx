'use client';
import { useRef } from 'react';
import useScrollAnimate from '../hooks/useScrollAnimate';

const testimonials = [
  {
    quote:
      'Я думал, что CrossFit — это не для меня. Слишком интенсивно, слишком страшно. Через 3 месяца в MaxForce я скинул 11 кг, поднял личный рекорд в приседе и завёл друзей, с которыми встречаюсь вне зала. Самая лучшая инвестиция в себя за последние годы.',
    name: 'Алексей М., 34 года',
    role: 'Менеджер по продажам',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100',
  },
  {
    quote:
      'После декрета думала, что форму уже не вернуть. MaxForce доказал обратное. Тренеры всегда рядом, атмосфера — огонь. Я снова чувствую себя собой, полна сил и энергии на весь день.',
    name: 'Марина К., 29 лет',
    role: 'Маркетолог',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100',
  },
];

function Stars() {
  return (
    <div style={{ display: 'flex', gap: '3px', color: 'var(--color-accent-gold)' }} aria-label="5 звёзд">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const titleRef = useRef<HTMLDivElement>(null);
  useScrollAnimate(titleRef);

  return (
    <section
      id="reviews"
      style={{
        padding: 'var(--space-24) 0',
        background: 'var(--color-bg)',
      }}
    >
      <div className="container">
        <div
          ref={titleRef}
          className="scroll-animate"
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>
            Отзывы
          </span>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: 'var(--color-text-primary)' }}>
            Реальные люди. Реальные результаты.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="scroll-animate"
              style={{
                background: 'var(--color-surface-mid)',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid var(--color-brand-red)',
                padding: '32px',
                borderRadius: 'var(--radius-md)',
                position: 'relative',
                transitionDelay: `${i * 150}ms`,
              }}
            >
              {/* Quote mark */}
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '20px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '80px',
                  color: 'var(--color-brand-red)',
                  opacity: 0.35,
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                style={{
                  fontStyle: 'italic',
                  fontSize: '17px',
                  lineHeight: 1.75,
                  color: 'var(--color-text-primary)',
                  marginBottom: '32px',
                  marginTop: '32px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {t.quote}
              </p>

              <div className="divider" />

              {/* Author */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  paddingTop: '16px',
                }}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  style={{
                    borderRadius: '50%',
                    border: '3px solid var(--color-brand-red)',
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                />
                <div>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--color-text-secondary)',
                      marginBottom: '6px',
                    }}
                  >
                    {t.role}
                  </p>
                  <Stars />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
