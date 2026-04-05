'use client';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '720px',
        height: '100svh',
        paddingTop: '128px',
        paddingBottom: '96px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <img
          src="./hero-image.jpg"
          alt="Атлет выполняет современную кроссфит тренировку"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />
        <div
          className="hero-overlay"
          style={{ position: 'absolute', inset: 0 }}
        />
      </div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div className="hero-content">

          {/* Overline */}
          <div className="hero-animate-1">
            <span className="section-label">CrossFit. Powered by Community</span>
          </div>

          {/* Headline */}
          <h1
            className="hero-animate-2 hero-headline"
            style={{
              lineHeight: 0.95,
              color: 'var(--color-text-primary)',
              marginBottom: '24px',
            }}
          >
            Один час.<br />
            Максимальная <br />
            <span className="gradient-text">отдача.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="hero-animate-3"
            style={{
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              marginBottom: '40px',
              maxWidth: '520px',
            }}
          >
            MaxForce — это CrossFit-зал для тех, кто ценит время. Силовые тренировки, жиросжигание и живое комьюнити — всё в 1 часе в день, пять дней в неделю.
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-animate-4 hero-cta-row"
          >
            <a href="#join" className="btn-primary" style={{ padding: '16px 40px' }}>
              Запишись бесплатно
            </a>
            <a href="#programs" className="btn-secondary" style={{ marginLeft: '0' }}>
              Узнать больше
            </a>
          </div>

          {/* Social proof strip */}
          <div
            className="hero-animate-5"
            style={{
              marginTop: '48px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '2px',
                color: 'var(--color-accent-gold)',
              }}
              aria-hidden="true"
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-primary)' }}>
              1 200+ атлетов
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#programs"
        className="animate-bounce"
        aria-label="Прокрутить вниз"
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0.6,
          color: 'var(--color-text-primary)',
          padding: '8px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 200ms',
          zIndex: 10,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="4" x2="12" y2="20" />
          <polyline points="18 14 12 20 6 14" />
        </svg>
      </a>

      <style>{`
        .hero-content {
          width: 55%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          max-width: 100%;
        }
        /* Responsive headline font sizes */
        .hero-headline {
          font-size: 96px;
          word-break: keep-all;
          overflow-wrap: normal;
        }
        @media (max-width: 1199px) {
          .hero-headline { font-size: 80px; }
        }
        @media (max-width: 1023px) {
          .hero-headline { font-size: 68px; }
        }
        @media (max-width: 767px) {
          .hero-headline { font-size: 56px; }
          .hero-content {
            width: 100%;
          }
        }
        @media (max-width: 620px) {
          .hero-headline { font-size: 46px; }
        }
        @media (max-width: 480px) {
          .hero-headline { font-size: 38px; }
        }
        @media (max-width: 360px) {
          .hero-headline { font-size: 32px; }
        }
        .hero-cta-row {
          display: flex;
          flex-direction: row;
          gap: 16px;
          flex-wrap: wrap;
        }
        @media (max-width: 767px) {
          .hero-cta-row {
            flex-direction: column;
            width: 100%;
          }
          .hero-cta-row .btn-primary,
          .hero-cta-row .btn-secondary {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
