'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import GalleryModal from './GalleryModal';

interface OutdoorEvent {
  id: string;
  date: string; // ISO format: 2026-04-15
  dayOfWeek: string;
  title: string;
  location: string;
  description: string;
  image: string;
  tags: string[];
  gallery: string[];
  link?: string;
}

const events: OutdoorEvent[] = [
  {
    id: '1',
    date: '2026-06-28',
    dayOfWeek: 'СБ',
    title: 'Летний турнир MaxForce',
    location: 'Парк Победы, Новосибирск',
    description:
      'Самый жаркий кроссфит-турнир лета! Командные и индивидуальные WOD-ы на открытом воздухе. Призовой фонд, DJ-сет и зона отдыха для болельщиков.',
    image: '/outdoor-event-1.png',
    tags: ['ТУРНИР', 'КОМАНДНЫЙ', 'ОТКРЫТЫЙ'],
    gallery: [
      'https://picsum.photos/seed/mf-summer1/960/640',
      'https://picsum.photos/seed/mf-summer2/960/640',
      'https://picsum.photos/seed/mf-summer3/960/640',
      'https://picsum.photos/seed/mf-summer4/960/640',
      'https://picsum.photos/seed/mf-summer5/960/640',
    ],
  },
  {
    id: '2',
    date: '2026-06-14',
    dayOfWeek: 'ВС',
    title: 'Утренний WOD на рассвете',
    location: 'Набережная Оби, Новосибирск',
    description:
      'Групповая тренировка на рассвете у воды. Функциональные упражнения, бег и работа с собственным весом. Участие бесплатно для членов клуба.',
    image: '/outdoor-event-2.png',
    tags: ['ТРЕНИРОВКА', 'БЕСПЛАТНО'],
    gallery: [
      'https://picsum.photos/seed/mf-dawn1/960/640',
      'https://picsum.photos/seed/mf-dawn2/960/640',
      'https://picsum.photos/seed/mf-dawn3/960/640',
      'https://picsum.photos/seed/mf-dawn4/960/640',
    ],
  },
  {
    id: '3',
    date: '2026-05-24',
    dayOfWeek: 'СБ',
    title: 'Полоса препятствий',
    location: 'Лесопарк Заельцовский, Новосибирск',
    description:
      'Забег с препятствиями по лесной трассе: грязь, вода, верёвки и командная работа. 5 км настоящего испытания. Приходи с командой или найди её на месте!',
    image: '/outdoor-event-3.png',
    tags: ['ЗАБЕГ', 'ПРЕПЯТСТВИЯ', 'КОМАНДА'],
    gallery: [
      'https://picsum.photos/seed/mf-mud1/960/640',
      'https://picsum.photos/seed/mf-mud2/960/640',
      'https://picsum.photos/seed/mf-mud3/960/640',
      'https://picsum.photos/seed/mf-mud4/960/640',
      'https://picsum.photos/seed/mf-mud5/960/640',
      'https://picsum.photos/seed/mf-mud6/960/640',
    ],
  },
  {
    id: '4',
    date: '2026-05-10',
    dayOfWeek: 'ВС',
    title: 'Ночной WOD под прожекторами',
    location: 'Стадион «Спартак», Новосибирск',
    description:
      'Тренировка под прожекторами на стадионе. Атмосферная вечерняя программа: деадлифты, wall balls, бег. Фото и видеосъёмка включены.',
    image: '/outdoor-event-4.png',
    tags: ['НОЧНОЙ', 'АТМОСФЕРА', 'СТАДИОН'],
    gallery: [
      'https://picsum.photos/seed/mf-night1/960/640',
      'https://picsum.photos/seed/mf-night2/960/640',
      'https://picsum.photos/seed/mf-night3/960/640',
      'https://picsum.photos/seed/mf-night4/960/640',
    ],
  },
  {
    id: '5',
    date: '2026-04-26',
    dayOfWeek: 'СБ',
    title: 'Пляжный WOD',
    location: 'Пляж «Наутилус», Обское водохранилище',
    description:
      'Кроссфит на песке — парные работы, kettlebell swings, carries и плавание. Идеальная тренировка для подготовки к пляжному сезону.',
    image: '/outdoor-event-5.png',
    tags: ['ПЛЯЖ', 'ПАРНЫЕ', 'ФУНКЦИОНАЛ'],
    gallery: [
      'https://picsum.photos/seed/mf-beach1/960/640',
      'https://picsum.photos/seed/mf-beach2/960/640',
      'https://picsum.photos/seed/mf-beach3/960/640',
      'https://picsum.photos/seed/mf-beach4/960/640',
      'https://picsum.photos/seed/mf-beach5/960/640',
    ],
  },
  {
    id: '6',
    date: '2026-04-12',
    dayOfWeek: 'ВС',
    title: 'Хайкинг + силовая тренировка',
    location: 'Ботанический сад, Новосибирск',
    description:
      'Совмещаем хайкинг по живописным тропам с функциональными станциями. Sandbag carries, выпады, планки с видом на город.',
    image: '/outdoor-event-6.png',
    tags: ['ХАЙКИНГ', 'ПРИРОДА', 'СИЛА'],
    gallery: [
      'https://picsum.photos/seed/mf-trail1/960/640',
      'https://picsum.photos/seed/mf-trail2/960/640',
      'https://picsum.photos/seed/mf-trail3/960/640',
      'https://picsum.photos/seed/mf-trail4/960/640',
    ],
  },
];

// Group events by month-year (newest first)
function groupEventsByMonth(events: OutdoorEvent[]) {
  const sorted = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const groups: { key: string; label: string; events: OutdoorEvent[] }[] = [];

  for (const event of sorted) {
    const d = new Date(event.date);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    const monthNames = [
      'ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ',
      'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ',
    ];
    const label = `${monthNames[d.getMonth()]} ${d.getFullYear()}`;

    const existing = groups.find((g) => g.key === key);
    if (existing) {
      existing.events.push(event);
    } else {
      groups.push({ key, label, events: [event] });
    }
  }

  return groups;
}

function EventCard({ event, index, onOpenGallery }: { event: OutdoorEvent; index: number; onOpenGallery: () => void }) {
  const d = new Date(event.date);
  const day = d.getDate().toString().padStart(2, '0');
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="scroll-animate"
      style={{
        display: 'grid',
        gridTemplateColumns: '60px 1fr',
        gap: 0,
        minHeight: '180px',
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Left: Day + Day of week */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '24px',
          borderRight: '2px solid var(--color-border)',
          position: 'relative',
        }}
      >
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-body)',
          }}
        >
          {event.dayOfWeek}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '42px',
            lineHeight: 1,
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          {day}
        </span>
        {/* Timeline dot */}
        <div
          style={{
            position: 'absolute',
            right: '-7px',
            top: '32px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: 'var(--color-brand-red)',
            border: '3px solid var(--color-bg)',
            boxShadow: '0 0 12px rgba(200, 57, 26, 0.4)',
          }}
        />
      </div>

      {/* Right: Event card */}
      <div
        onClick={onOpenGallery}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'grid',
          gridTemplateColumns: '180px 1fr auto',
          gap: '24px',
          padding: '24px',
          marginLeft: '24px',
          background: hovered ? 'var(--color-surface-mid)' : 'var(--color-surface-dark)',
          borderRadius: 'var(--radius-lg)',
          border: `1px solid ${hovered ? 'var(--color-brand-red)' : 'var(--color-border)'}`,
          transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
          boxShadow: hovered
            ? '0 8px 32px rgba(200, 57, 26, 0.15)'
            : '0 2px 12px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          alignItems: 'start',
        }}
      >
        {/* Thumbnail */}
        <div
          style={{
            width: '180px',
            height: '120px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            style={{
              objectFit: 'cover',
              transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
            }}
            sizes="180px"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0 }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '24px',
              color: 'var(--color-text-primary)',
              letterSpacing: '0.02em',
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {event.title}
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-brand-red)"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span
              style={{
                fontSize: '13px',
                color: 'var(--color-text-secondary)',
                fontWeight: 500,
              }}
            >
              {event.location}
            </span>
          </div>

          <p
            style={{
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              margin: 0,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {event.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
            {event.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(200, 57, 26, 0.1)',
                  border: '1px solid rgba(200, 57, 26, 0.25)',
                  color: 'var(--color-brand-red)',
                  fontFamily: 'var(--font-body)',
                  textTransform: 'uppercase',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow icon */}
        <div
          style={{
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius-md)',
            background: hovered ? 'var(--color-brand-red)' : 'transparent',
            border: `1px solid ${hovered ? 'var(--color-brand-red)' : 'var(--color-border)'}`,
            transition: 'all 250ms',
            flexShrink: 0,
            marginTop: '2px',
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={hovered ? '#fff' : 'var(--color-text-muted)'}
            strokeWidth="2"
            style={{ transition: 'stroke 250ms, transform 250ms', transform: hovered ? 'translate(2px, -2px)' : 'translate(0,0)' }}
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* Mobile Event Card — stacked layout for small screens */
function MobileEventCard({ event, onOpenGallery }: { event: OutdoorEvent; onOpenGallery: () => void }) {
  const d = new Date(event.date);
  const day = d.getDate().toString().padStart(2, '0');
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="scroll-animate"
      style={{
        display: 'grid',
        gridTemplateColumns: '48px 1fr',
        gap: 0,
      }}
    >
      {/* Left: Day column */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '16px',
          borderRight: '2px solid var(--color-border)',
          position: 'relative',
        }}
      >
        <span
          style={{
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-body)',
          }}
        >
          {event.dayOfWeek}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '32px',
            lineHeight: 1,
            color: 'var(--color-text-primary)',
          }}
        >
          {day}
        </span>
        <div
          style={{
            position: 'absolute',
            right: '-6px',
            top: '24px',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'var(--color-brand-red)',
            border: '2px solid var(--color-bg)',
            boxShadow: '0 0 8px rgba(200, 57, 26, 0.4)',
          }}
        />
      </div>

      {/* Right: Stacked card */}
      <div
        onClick={onOpenGallery}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          marginLeft: '16px',
          marginBottom: '16px',
          background: 'var(--color-surface-dark)',
          borderRadius: 'var(--radius-lg)',
          border: `1px solid ${hovered ? 'var(--color-brand-red)' : 'var(--color-border)'}`,
          overflow: 'hidden',
          transition: 'border-color 300ms',
        }}
      >
        {/* Image */}
        <div style={{ width: '100%', height: '160px', position: 'relative' }}>
          <Image
            src={event.image}
            alt={event.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 767px) 100vw, 300px"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%)',
            }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: '16px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              color: 'var(--color-text-primary)',
              lineHeight: 1.15,
              margin: '0 0 6px',
            }}
          >
            {event.title}
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '8px' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-red)" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
              {event.location}
            </span>
          </div>

          <p
            style={{
              fontSize: '13px',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.55,
              margin: '0 0 10px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {event.description}
          </p>

          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {event.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(200, 57, 26, 0.1)',
                  border: '1px solid rgba(200, 57, 26, 0.25)',
                  color: 'var(--color-brand-red)',
                  textTransform: 'uppercase',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OutdoorTimeline() {
  const groups = groupEventsByMonth(events);
  const [galleryEvent, setGalleryEvent] = useState<OutdoorEvent | null>(null);

  const openGallery = useCallback((event: OutdoorEvent) => {
    setGalleryEvent(event);
  }, []);

  const closeGallery = useCallback(() => {
    setGalleryEvent(null);
  }, []);

  return (
    <section
      id="outdoor-events"
      style={{
        padding: '80px 0 100px',
        position: 'relative',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(200,57,26,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Page Header */}
        <div
          className="scroll-animate"
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span className="section-label">События на улице</span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 6vw, 64px)',
              color: 'var(--color-text-primary)',
              lineHeight: 1.05,
              margin: '0 0 16px',
            }}
          >
            События на{' '}
            <span className="gradient-text">открытом воздухе</span>
          </h1>
          <p
            style={{
              fontSize: '17px',
              color: 'var(--color-text-secondary)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Тренировки, забеги и турниры за стенами зала. Следи за расписанием
            и не пропусти ни одного ивента MaxForce.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {groups.map((group) => (
            <div key={group.key} style={{ marginBottom: '48px' }}>
              {/* Month header */}
              <div
                className="scroll-animate"
                style={{
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    background: 'var(--color-brand-red)',
                    color: '#fff',
                    fontFamily: 'var(--font-display)',
                    fontSize: '16px',
                    letterSpacing: '0.08em',
                    borderRadius: 'var(--radius-sm)',
                    lineHeight: 1.3,
                  }}
                >
                  {group.label}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--color-border) 0%, transparent 100%)',
                  }}
                />
              </div>

              {/* Desktop cards */}
              <div className="outdoor-desktop-cards" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {group.events.map((event, idx) => (
                  <EventCard key={event.id} event={event} index={idx} onOpenGallery={() => openGallery(event)} />
                ))}
              </div>

              {/* Mobile cards */}
              <div className="outdoor-mobile-cards" style={{ display: 'none', flexDirection: 'column', gap: '8px' }}>
                {group.events.map((event) => (
                  <MobileEventCard key={event.id} event={event} onOpenGallery={() => openGallery(event)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <GalleryModal
        images={galleryEvent?.gallery ?? []}
        eventTitle={galleryEvent?.title ?? ''}
        isOpen={galleryEvent !== null}
        onClose={closeGallery}
      />

      <style>{`
        @media (max-width: 767px) {
          .outdoor-desktop-cards { display: none !important; }
          .outdoor-mobile-cards  { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
