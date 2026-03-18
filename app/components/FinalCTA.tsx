'use client';
import { useState } from 'react';

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate form submission
    setStatus('success');
    setEmail('');
  };

  return (
    <section
      id="join"
      style={{
        position: 'relative',
        background: 'var(--color-brand-red)',
        overflow: 'hidden',
        padding: 'var(--space-24) 0',
      }}
    >
      {/* Animated radial glow */}
      <div
        className="animate-pulse-bg"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.18) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Texture overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 0px, transparent 50%)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '800px',
          textAlign: 'center',
        }}
      >
        {/* Headline */}
        <h2
          style={{
            fontSize: 'clamp(40px, 7vw, 80px)',
            lineHeight: 0.95,
            color: '#ffffff',
            marginBottom: '24px',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}
        >
          Хватит смотреть <br />
          на тех, кто в форме.
        </h2>

        <p
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.88)',
            marginBottom: '40px',
            maxWidth: '500px',
            margin: '0 auto 40px',
            lineHeight: 1.65,
            fontWeight: 500,
          }}
        >
          Твоя лучшая версия тренируется в MaxForce прямо сейчас.
          Запишись на бесплатный пробный день.
        </p>

        {/* Subscription Form */}
        {status === 'success' ? (
          <div
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.35)',
              borderRadius: 'var(--radius-md)',
              padding: '24px 32px',
              maxWidth: '480px',
              margin: '0 auto 24px',
              backdropFilter: 'blur(8px)',
            }}
          >
            <p style={{ fontSize: '20px', color: '#ffffff', fontWeight: 700 }}>
              ✓ Отлично! Мы свяжемся с тобой в ближайшее время.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: '12px',
              maxWidth: '480px',
              margin: '0 auto 24px',
              flexWrap: 'wrap',
            }}
            noValidate
          >
            <label htmlFor="cta-email" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
              Твой email адрес
            </label>
            <input
              id="cta-email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Твой email адрес"
              required
              className="input-email"
              style={{ flex: 1, minWidth: '200px' }}
              autoComplete="email"
            />
            <button
              type="submit"
              className="btn-primary-invert"
              style={{ padding: '16px 28px', fontSize: '14px' }}
            >
              Записаться бесплатно
            </button>
          </form>
        )}

        {/* Contact buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '24px',
          }}
        >
          <a
            href="https://t.me/Shevelevtelegram"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#ffffff',
              padding: '12px 20px',
              borderRadius: 'var(--radius-md)',
              fontSize: '14px',
              fontWeight: 600,
              transition: 'background 200ms',
              backdropFilter: 'blur(8px)',
              textDecoration: 'none',
              minHeight: '44px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.013 9.492c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.876.729z" />
            </svg>
            Telegram
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=79089768849&text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%B8%D0%B9%D1%82%D0%B8%20%D0%BA%20%D0%B2%D0%B0%D0%BC%20%D0%BD%D0%B0%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8%21"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#ffffff',
              padding: '12px 20px',
              borderRadius: 'var(--radius-md)',
              fontSize: '14px',
              fontWeight: 600,
              transition: 'background 200ms',
              backdropFilter: 'blur(8px)',
              textDecoration: 'none',
              minHeight: '44px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Urgency line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            color: '#ffe5a0',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          <span style={{ fontWeight: 600, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Осталось 5 мест на эту неделю
          </span>
        </div>
      </div>
    </section>
  );
}
