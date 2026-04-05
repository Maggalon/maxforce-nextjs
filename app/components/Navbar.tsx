'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '#programs', label: 'Программы' },
  { href: '#schedule', label: 'Расписание' },
  { href: '#pricing', label: 'Цены' },
  { href: '#rules', label: 'Правила' },
  { href: '#merch', label: 'Мерч' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    setMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleNavClick = (href: string) => {
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          height: '72px',
          background: scrolled
            ? 'rgba(12, 10, 8, 0.97)'
            : 'rgba(12, 10, 8, 0.85)',
          backdropFilter: 'blur(16px) saturate(180%)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          transition: 'background 300ms linear, box-shadow 300ms linear',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div
          className="container"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              opacity: 1,
              transition: 'opacity 200ms',
              textDecoration: 'none',
            }}
            aria-label="MaxForce CrossFit — на главную"
          >
            <Image
              src="/logo.jpg"
              alt="MaxForce Logo"
              width={44}
              height={44}
              style={{ borderRadius: '50%', border: '2px solid var(--color-brand-red)' }}
              priority
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '26px',
                color: 'var(--color-text-primary)',
                letterSpacing: '0.04em',
                lineHeight: 1,
              }}
            >
              MAX<span style={{ color: 'var(--color-brand-red)' }}>FORCE</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'var(--color-text-secondary)',
                  transition: 'color 150ms',
                  padding: '4px',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="desktop-nav">
            <a
              href="#join"
              onClick={(e) => { e.preventDefault(); handleNavClick('#join'); }}
              className="btn-primary"
              style={{ padding: '10px 20px', fontSize: '13px' }}
            >
              Записаться →
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={openMenu}
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
            className="mobile-nav-btn"
            style={{
              display: 'none',
              padding: '8px',
              color: 'var(--color-text-primary)',
              minHeight: '44px',
              minWidth: '44px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-md)',
              transition: 'color 150ms',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Навигационное меню"
      >
        <button
          onClick={closeMenu}
          aria-label="Закрыть меню"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '8px',
            color: 'var(--color-text-primary)',
            minHeight: '44px',
            minWidth: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Logo in mobile menu */}
        <Image
          src="/logo.jpg"
          alt="MaxForce Logo"
          width={72}
          height={72}
          style={{ borderRadius: '50%', border: '3px solid var(--color-brand-red)', marginBottom: '8px' }}
        />

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '36px',
              letterSpacing: '0.05em',
              color: 'var(--color-text-primary)',
              transition: 'color 150ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-brand-red)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-primary)')}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#join"
          onClick={(e) => { e.preventDefault(); handleNavClick('#join'); }}
          className="btn-primary"
          style={{ marginTop: '1rem', padding: '16px 40px', fontSize: '16px' }}
        >
          Записаться бесплатно
        </a>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
