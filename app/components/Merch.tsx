'use client';
import { useRef } from 'react';
import useScrollAnimate from '../hooks/useScrollAnimate';

const merchItems = [
  {
    name: 'Футболка MaxForce',
    desc: 'Хлопок 100%, плотность 180 г/м². Классический крой, логотип MaxForce на груди.',
    price: '2 500 ₽',
    colors: ['#111', '#F5F0E8', '#C8391A'],
    tag: 'Хит',
  },
  {
    name: 'Худи MaxForce',
    desc: 'Плотный флис 320 г/м² с капюшоном. Вышитый логотип. Идеально для разминки и дороги домой.',
    price: '5 900 ₽',
    colors: ['#111', '#2E2A22'],
    tag: null,
  },
  {
    name: 'Шорты MaxForce',
    desc: 'Лёгкие тренировочные шорты с карманом. Быстросохнущая ткань, свобода движений.',
    price: '2 200 ₽',
    colors: ['#111', '#C8391A'],
    tag: null,
  },
  {
    name: 'Скакалка MaxForce',
    desc: 'Скоростная скакалка с подшипниками. Регулируемая длина, стальной трос в оплётке.',
    price: '1 800 ₽',
    colors: [],
    tag: 'Новинка',
  },
  {
    name: 'Напульсники MaxForce',
    desc: 'Плотные тканевые напульсники для защиты запястий при подтягиваниях и рывках.',
    price: '800 ₽',
    colors: ['#111', '#C8391A'],
    tag: null,
  },
  {
    name: 'Бутылка MaxForce',
    desc: 'Спортивная бутылка 750 мл с крышкой-непроливайкой. BPA-free, с логотипом.',
    price: '1 200 ₽',
    colors: ['#111', '#F5F0E8'],
    tag: null,
  },
];

export default function Merch() {
  const titleRef = useRef<HTMLDivElement>(null);
  useScrollAnimate(titleRef);

  return (
    <section
      id="merch"
      style={{
        padding: 'var(--space-24) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src="/merch-image.jpg"
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(12,10,8,0.92) 0%, rgba(12,10,8,0.85) 50%, rgba(12,10,8,0.92) 100%)',
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
            <span className="section-label">Мерч</span>
            <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: 'var(--color-text-primary)' }}>
              Атрибутика MaxForce
            </h2>
          </div>
          <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)', maxWidth: '400px' }}>
            Официальный мерч клуба. Покупай на ресепшене или бронируй через менеджера.
          </p>
        </div>

        {/* Merch grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {merchItems.map((item, i) => (
            <div
              key={i}
              className="feature-card scroll-animate"
              style={{
                transitionDelay: `${i * 80}ms`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Tag badge */}
              {item.tag && (
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: item.tag === 'Хит' ? 'var(--color-brand-red)' : 'var(--color-accent-amber)',
                    color: '#fff',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {item.tag}
                </div>
              )}

              {/* Product icon placeholder */}
              <div
                style={{
                  width: '100%',
                  height: '140px',
                  background: 'var(--color-surface-elevated)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  overflow: 'hidden',
                }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-text-muted)"
                  strokeWidth="1"
                  style={{ opacity: 0.5 }}
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M12 4v16M2 12h20" />
                  <path d="M7 4c0 0 0 4 5 4s5-4 5-4" />
                </svg>
              </div>

              {/* Product info */}
              <h3
                style={{
                  fontSize: '22px',
                  color: 'var(--color-text-primary)',
                  marginBottom: '8px',
                  lineHeight: 1.2,
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '16px',
                  flex: 1,
                }}
              >
                {item.desc}
              </p>

              {/* Colors */}
              {item.colors.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    gap: '6px',
                    marginBottom: '16px',
                  }}
                >
                  {item.colors.map((color, ci) => (
                    <div
                      key={ci}
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: color,
                        border: `2px solid ${color === '#F5F0E8' ? 'var(--color-border)' : 'transparent'}`,
                      }}
                      title={color}
                    />
                  ))}
                </div>
              )}

              <div className="divider" />

              {/* Price */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '28px',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {item.price}
                </span>
                <a
                  href="https://api.whatsapp.com/send?phone=79089768849&text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D0%BC%D0%B5%D1%80%D1%87%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    padding: '8px 16px',
                    fontSize: '12px',
                  }}
                >
                  Купить
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
