'use client';
import { useState, useEffect } from 'react';

export default function MerchButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <a
        href="/merch"
        aria-label="Перейти в магазин мерча"
        className={`merch-fab ${visible ? 'merch-fab--visible' : ''}`}
      >
        {/* T-shirt icon */}
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
        </svg>
      </a>

      <style>{`
        .merch-fab {
          position: fixed;
          bottom: 96px;
          right: 24px;
          z-index: 999;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--color-brand-red, #C8391A);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 18px rgba(200, 57, 26, 0.45), 0 2px 8px rgba(0,0,0,0.3);
          transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 300ms ease,
                      opacity 500ms ease;
          opacity: 0;
          transform: scale(0.5) translateY(20px);
          pointer-events: none;
          text-decoration: none;
        }

        .merch-fab--visible {
          opacity: 1;
          transform: scale(1) translateY(0);
          pointer-events: auto;
        }

        .merch-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(200, 57, 26, 0.6), 0 4px 12px rgba(0,0,0,0.3);
        }

        .merch-fab:active {
          transform: scale(0.95);
        }

        @media (max-width: 767px) {
          .merch-fab {
            bottom: 80px;
            right: 16px;
            width: 46px;
            height: 46px;
          }
          .merch-fab svg {
            width: 22px;
            height: 22px;
          }
        }
      `}</style>
    </>
  );
}
