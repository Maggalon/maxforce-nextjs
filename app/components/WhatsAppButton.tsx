'use client';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=79089768849&text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%B8%D0%B9%D1%82%D0%B8%20%D0%BA%20%D0%B2%D0%B0%D0%BC%20%D0%BD%D0%B0%20%D1%82%D1%80%D0%B5%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8%21"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
        className={`whatsapp-fab ${visible ? 'whatsapp-fab--visible' : ''}`}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <style>{`
        .whatsapp-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0,0,0,0.3);
          transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 300ms ease,
                      opacity 500ms ease;
          opacity: 0;
          transform: scale(0.5) translateY(20px);
          pointer-events: none;
        }

        .whatsapp-fab--visible {
          opacity: 1;
          transform: scale(1) translateY(0);
          pointer-events: auto;
        }

        .whatsapp-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 28px rgba(37, 211, 102, 0.55), 0 4px 12px rgba(0,0,0,0.3);
        }

        .whatsapp-fab:active {
          transform: scale(0.95);
        }

        /* Pulsing ring animation */
        .whatsapp-fab--visible::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.3);
          animation: wa-pulse 2s infinite;
          z-index: -1;
        }

        @keyframes wa-pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        @media (max-width: 767px) {
          .whatsapp-fab {
            bottom: 16px;
            right: 16px;
            width: 54px;
            height: 54px;
          }
          .whatsapp-fab svg {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>
    </>
  );
}
