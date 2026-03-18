'use client';
import { useRef } from 'react';
import useScrollAnimate from '../hooks/useScrollAnimate';

type CellType = 'class' | 'open' | 'team' | 'olymp' | 'closed' | 'empty' | 'zapisk';

interface Cell {
  label: string;
  type: CellType;
  sub?: string;
}

const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

// schedule[timeIndex][dayIndex]
const timeSlots = [
  {
    time: '7:00',
    cells: [
      { label: 'CLASS', type: 'class' as CellType },
      { label: '—', type: 'empty' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: '—', type: 'empty' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: 'TEAM', type: 'team' as CellType, sub: '9:00' },
      { label: 'ЗАКРЫТО', type: 'closed' as CellType },
    ],
  },
  {
    time: '8:00',
    cells: [
      { label: 'CLASS', type: 'class' as CellType },
      { label: '—', type: 'empty' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: '—', type: 'empty' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: '—', type: 'empty' as CellType },
      { label: 'ЗАКРЫТО', type: 'closed' as CellType },
    ],
  },
  {
    time: '9:00',
    cells: [
      { label: 'CLASS', type: 'class' as CellType },
      { label: '—', type: 'empty' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: '—', type: 'empty' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: '—', type: 'empty' as CellType },
      { label: 'ЗАКРЫТО', type: 'closed' as CellType },
    ],
  },
  {
    time: '13:30',
    cells: [
      { label: 'OPEN GYM', type: 'open' as CellType },
      { label: '—', type: 'empty' as CellType },
      { label: 'OPEN GYM', type: 'open' as CellType },
      { label: '—', type: 'empty' as CellType },
      { label: 'OPEN GYM', type: 'open' as CellType },
      { label: 'OPEN GYM', type: 'open' as CellType, sub: '13:00' },
      { label: 'ЗАКРЫТО', type: 'closed' as CellType },
    ],
  },
  {
    time: '17:30',
    cells: [
      { label: 'CLASS', type: 'class' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: '—', type: 'empty' as CellType },
      { label: 'ЗАКРЫТО', type: 'closed' as CellType },
    ],
  },
  {
    time: '18:30',
    cells: [
      { label: 'CLASS', type: 'class' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: '—', type: 'empty' as CellType },
      { label: 'ЗАКРЫТО', type: 'closed' as CellType },
    ],
  },
  {
    time: '19:40',
    cells: [
      { label: 'CLASS', type: 'class' as CellType },
      { label: 'ЗАПИСЬ', type: 'zapisk' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: 'OLYMP LIFT', type: 'olymp' as CellType },
      { label: 'CLASS', type: 'class' as CellType },
      { label: '—', type: 'empty' as CellType },
      { label: 'ЗАКРЫТО', type: 'closed' as CellType },
    ],
  },
];

function getCellStyle(type: CellType): React.CSSProperties {
  switch (type) {
    case 'class':
      return {
        background: 'rgba(200, 57, 26, 0.10)',
        color: 'var(--color-text-primary)',
        fontWeight: 700,
        fontSize: '11px',
        letterSpacing: '0.05em',
      };
    case 'open':
      return {
        background: 'rgba(200, 119, 26, 0.10)',
        color: 'var(--color-accent-gold)',
        fontWeight: 600,
        fontSize: '10px',
        letterSpacing: '0.03em',
      };
    case 'team':
      return {
        background: 'rgba(34, 197, 94, 0.08)',
        color: '#22C55E',
        fontWeight: 700,
        fontSize: '11px',
      };
    case 'olymp':
      return {
        background: 'rgba(129, 140, 248, 0.10)',
        color: '#818cf8',
        fontWeight: 600,
        fontSize: '9px',
        letterSpacing: '0.03em',
      };
    case 'zapisk':
      return {
        background: 'rgba(200, 57, 26, 0.06)',
        color: 'var(--color-brand-red)',
        fontWeight: 600,
        fontSize: '9px',
        letterSpacing: '0.03em',
      };
    case 'closed':
      return {
        color: 'var(--color-text-muted)',
        fontSize: '10px',
        fontStyle: 'italic',
      };
    default:
      return { color: 'var(--color-text-muted)', fontSize: '14px' };
  }
}

const legend = [
  { type: 'class', label: 'Class — классический кроссфит в группе с тренером', color: 'rgba(200,57,26,0.6)' },
  { type: 'open', label: 'Open Gym — свободное посещение без тренера', color: '#C8771A' },
  { type: 'team', label: 'Team — командный кроссфит', color: '#22C55E' },
  { type: 'olymp', label: 'Olympic Lifting — группа по тяжёлой атлетике', color: '#818cf8' },
];

export default function Schedule() {
  const titleRef = useRef<HTMLDivElement>(null);
  useScrollAnimate(titleRef);

  return (
    <section
      id="schedule"
      style={{
        background: 'var(--color-surface-dark)',
        padding: 'var(--space-24) 0',
      }}
    >
      <div className="container">
        <div
          ref={titleRef}
          className="scroll-animate"
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>
            Расписание
          </span>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', color: 'var(--color-text-primary)', marginBottom: '12px' }}>
            Расписание занятий
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--color-text-secondary)' }}>
            Тренировки каждый день кроме воскресенья — вписывайся в свой график
          </p>
        </div>

        {/* Scrollable wrapper for mobile */}
        <div style={{ overflowX: 'auto', borderRadius: 'var(--radius-md)', marginBottom: '32px' }}>
          <table
            className="schedule-table scroll-animate"
            style={{ minWidth: '640px' }}
          >
            <thead>
              <tr>
                <th style={{ width: '60px', borderRight: '2px solid var(--color-border)' }}>Время</th>
                {days.map((d) => (
                  <th key={d}>{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((slot) => (
                <tr key={slot.time}>
                  <td className="cell-time" style={getCellStyle('empty')}>{slot.time}</td>
                  {slot.cells.map((cell, ci) => (
                    <td
                      key={ci}
                      style={{
                        ...getCellStyle(cell.type),
                        padding: '10px 6px',
                        border: '1px solid var(--color-border)',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                      }}
                    >
                      {cell.label}
                      {cell.sub && (
                        <div style={{ fontSize: '9px', opacity: 0.7 }}>{cell.sub}</div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
          }}
        >
          {legend.map((item) => (
            <div
              key={item.type}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                color: 'var(--color-text-secondary)',
              }}
            >
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '3px',
                  background: item.color,
                  flexShrink: 0,
                }}
              />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
