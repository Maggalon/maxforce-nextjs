'use client';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#000000',
        borderTop: '1px solid var(--color-border)',
        padding: '48px 0',
      }}
    >
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px',
              }}
            >
              <Image
                src="/logo.jpg"
                alt="MaxForce Logo"
                width={40}
                height={40}
                style={{ borderRadius: '50%', border: '2px solid var(--color-brand-red)' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '24px',
                  color: 'var(--color-text-primary)',
                  letterSpacing: '0.04em',
                }}
              >
                MAX<span style={{ color: 'var(--color-brand-red)' }}>FORCE</span>
              </span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.7, maxWidth: '280px' }}>
              Сила. Скорость. Комьюнити.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <a
                href="https://instagram.com/Max_force_team/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MaxForce в Instagram"
                className="footer-social-icon"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://t.me/CrossFitMaxForce"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MaxForce в Telegram"
                className="footer-social-icon"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.013 9.492c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.876.729z" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=79089768849"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MaxForce в WhatsApp"
                className="footer-social-icon"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p
              style={{
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Навигация
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '#programs', label: 'Программы' },
                { href: '#schedule', label: 'Расписание' },
                { href: '#pricing', label: 'Цены' },
                { href: '#rules', label: 'Правила' },
                { href: '#merch', label: 'Мерч' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: '14px',
                    color: 'var(--color-text-secondary)',
                    transition: 'color 150ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Map */}
          <div
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              minHeight: '200px',
            }}
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae45ea351aa14d6d1c8dde846b9cc9ea89b2d5dbad21c3345597425b8c98d4874&amp;source=constructor"
              style={{ width: '100%', height: '100%', minHeight: '200px', border: 0, display: 'block' }}
              title="Расположение MaxForce на карте"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: '24px',
            paddingTop: '24px',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
            © {year} MaxForce CrossFit. Все права защищены.
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr auto 1.5fr;
          gap: 40px;
          align-items: start;
        }
        .footer-social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--color-surface-mid);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          color: var(--color-text-secondary);
          transition: border-color 200ms, color 200ms;
        }
        .footer-social-icon:hover {
          border-color: var(--color-brand-red);
          color: var(--color-text-primary);
        }
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </footer>
  );
}
