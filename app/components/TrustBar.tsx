const items = [
  '✦ 1 200+ АТЛЕТОВ',
  '✦ CROSSFIT AFFILIATE',
  '✦ КОМАНДА ПО КРОССФИТУ',
  '✦ МН/ВТ/СР/ЧТ/ПТ/СБ',
  '✦ OLYMPIC LIFTING',
  '✦ OPEN GYM',
  '✦ WOMEN\'S GPP',
  '✦ TEAM WORKOUTS',
];

export default function TrustBar() {
  const doubled = [...items, ...items];
  return (
    <section
      id="trust"
      style={{
        height: '64px',
        background: 'var(--color-brand-red)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
      aria-label="Достижения MaxForce"
    >
      <div className="marquee-wrapper" style={{ width: '100%', overflow: 'hidden' }}>
        <div className="animate-marquee" style={{ display: 'inline-flex', gap: 0 }}>
          {doubled.map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.12em',
                textTransform: 'uppercase' as const,
                padding: '0 32px',
                whiteSpace: 'nowrap',
                opacity: i % items.length === 0 ? 1 : (item.startsWith('✦') ? 0.65 : 1),
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
