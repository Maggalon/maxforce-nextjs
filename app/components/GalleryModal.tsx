'use client';

import { useState, useEffect, useCallback } from 'react';

interface GalleryModalProps {
  images: string[];
  eventTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryModal({
  images,
  eventTitle,
  isOpen,
  onClose,
}: GalleryModalProps) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const [animateIn, setAnimateIn] = useState(false);

  // Reset index when opening
  useEffect(() => {
    if (isOpen) {
      setCurrent(0);
      setLoaded({});
      // Small delay for CSS enter animation
      requestAnimationFrame(() => setAnimateIn(true));
      document.body.style.overflow = 'hidden';
    } else {
      setAnimateIn(false);
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose, prev, next]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          background: 'rgba(0, 0, 0, 0.92)',
          backdropFilter: 'blur(20px)',
          opacity: animateIn ? 1 : 0,
          transition: 'opacity 300ms ease',
        }}
      />

      {/* Modal container */}
      <div
        role="dialog"
        aria-label={`Фотогалерея: ${eventTitle}`}
        aria-modal="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2001,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          opacity: animateIn ? 1 : 0,
          transform: animateIn ? 'scale(1)' : 'scale(0.96)',
          transition: 'opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
        }}
      >
        {/* Top bar: title + close */}
        <div
          style={{
            width: '100%',
            maxWidth: '960px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            pointerEvents: 'auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 3vw, 28px)',
                color: '#fff',
                margin: 0,
                letterSpacing: '0.02em',
              }}
            >
              {eventTitle}
            </h2>
            <span
              style={{
                fontSize: '13px',
                color: 'var(--color-text-muted)',
                fontWeight: 600,
              }}
            >
              {current + 1} / {images.length}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Закрыть галерею"
            style={{
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#fff',
              transition: 'background 200ms',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.16)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')
            }
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Main image area */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '960px',
            flex: '1 1 auto',
            minHeight: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'auto',
          }}
        >
          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Предыдущее фото"
            style={{
              position: 'absolute',
              left: '-8px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 200ms, transform 200ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(200, 57, 26, 0.7)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Image */}
          <div
            style={{
              width: '100%',
              height: '100%',
              maxHeight: 'calc(100vh - 200px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              background: 'var(--color-surface-dark)',
              position: 'relative',
            }}
          >
            {/* Loading spinner */}
            {!loaded[current] && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    border: '3px solid var(--color-border)',
                    borderTopColor: 'var(--color-brand-red)',
                    borderRadius: '50%',
                    animation: 'gallerySpinner 700ms linear infinite',
                  }}
                />
              </div>
            )}

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={current}
              src={images[current]}
              alt={`${eventTitle} — фото ${current + 1}`}
              onLoad={() => setLoaded((prev) => ({ ...prev, [current]: true }))}
              style={{
                maxWidth: '100%',
                maxHeight: 'calc(100vh - 200px)',
                objectFit: 'contain',
                borderRadius: 'var(--radius-lg)',
                opacity: loaded[current] ? 1 : 0,
                transition: 'opacity 300ms ease',
              }}
            />
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Следующее фото"
            style={{
              position: 'absolute',
              right: '-8px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 200ms, transform 200ms',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(200, 57, 26, 0.7)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Thumbnail strip */}
        <div
          style={{
            marginTop: '16px',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            maxWidth: '960px',
            width: '100%',
            padding: '4px 0',
            justifyContent: 'center',
            pointerEvents: 'auto',
          }}
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Фото ${idx + 1}`}
              style={{
                width: '64px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                border:
                  idx === current
                    ? '2px solid var(--color-brand-red)'
                    : '2px solid transparent',
                opacity: idx === current ? 1 : 0.5,
                cursor: 'pointer',
                transition: 'opacity 200ms, border-color 200ms',
                flexShrink: 0,
                padding: 0,
                background: 'var(--color-surface-mid)',
              }}
              onMouseEnter={(e) => {
                if (idx !== current) e.currentTarget.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                if (idx !== current) e.currentTarget.style.opacity = '0.5';
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gallerySpinner {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 767px) {
          /* Make nav buttons smaller on mobile */
        }
      `}</style>
    </>
  );
}
