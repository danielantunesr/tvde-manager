export function IllustrationFleet() {
  return (
    <figure className="guide-illustration">
      <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Road */}
        <rect x="0" y="158" width="480" height="36" rx="0" fill="var(--color-green-3)" />
        <rect x="0" y="172" width="480" height="2" fill="var(--border)" />
        <rect x="0" y="190" width="480" height="2" fill="var(--border)" />
        {/* Road dashes */}
        <rect x="60" y="180" width="40" height="3" rx="1.5" fill="var(--color-green-5)" opacity="0.6" />
        <rect x="160" y="180" width="40" height="3" rx="1.5" fill="var(--color-green-5)" opacity="0.6" />
        <rect x="260" y="180" width="40" height="3" rx="1.5" fill="var(--color-green-5)" opacity="0.6" />
        <rect x="360" y="180" width="40" height="3" rx="1.5" fill="var(--color-green-5)" opacity="0.6" />

        {/* Car 1 (green, front) */}
        {/* Body */}
        <rect x="60" y="114" width="120" height="48" rx="8" fill="var(--color-green-9)" />
        {/* Cabin */}
        <rect x="78" y="90" width="82" height="34" rx="8" fill="var(--color-green-10)" />
        {/* Windows */}
        <rect x="84" y="96" width="30" height="22" rx="4" fill="var(--color-green-2)" opacity="0.8" />
        <rect x="120" y="96" width="34" height="22" rx="4" fill="var(--color-green-2)" opacity="0.8" />
        {/* Wheels */}
        <circle cx="90" cy="162" r="14" fill="var(--fg, #1e293b)" />
        <circle cx="90" cy="162" r="7" fill="var(--border)" />
        <circle cx="160" cy="162" r="14" fill="var(--fg, #1e293b)" />
        <circle cx="160" cy="162" r="7" fill="var(--border)" />
        {/* Headlight */}
        <rect x="176" y="128" width="6" height="10" rx="3" fill="white" opacity="0.9" />
        {/* Tail light */}
        <rect x="58" y="128" width="6" height="10" rx="3" fill="var(--color-green-5)" />

        {/* Car 2 (muted, back) */}
        <rect x="270" y="118" width="110" height="44" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="286" y="96" width="76" height="32" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="292" y="102" width="28" height="20" rx="4" fill="var(--color-green-3)" />
        <rect x="326" y="102" width="28" height="20" rx="4" fill="var(--color-green-3)" />
        <circle cx="296" cy="162" r="13" fill="var(--fg, #1e293b)" opacity="0.6" />
        <circle cx="296" cy="162" r="6" fill="var(--border)" />
        <circle cx="360" cy="162" r="13" fill="var(--fg, #1e293b)" opacity="0.6" />
        <circle cx="360" cy="162" r="6" fill="var(--border)" />
        <rect x="376" y="130" width="5" height="9" rx="2.5" fill="var(--border)" opacity="0.7" />

        {/* Platform icons above cars */}
        <rect x="88" y="60" width="60" height="22" rx="6" fill="var(--color-green-9)" opacity="0.15" stroke="var(--color-green-9)" strokeWidth="1" />
        <text x="118" y="75" textAnchor="middle" fontSize="9" fill="var(--color-green-11)" fontWeight="600" fontFamily="system-ui, sans-serif">Uber · Bolt</text>

        <rect x="292" y="60" width="52" height="22" rx="6" fill="var(--border)" />
        <text x="318" y="75" textAnchor="middle" fontSize="9" fill="var(--muted, #64748b)" fontWeight="600" fontFamily="system-ui, sans-serif">Uber · Bolt</text>

        {/* Count badge */}
        <circle cx="420" cy="80" r="28" fill="var(--color-green-9)" opacity="0.12" />
        <text x="420" y="75" textAnchor="middle" fontSize="18" fill="var(--color-green-9)" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
        <text x="420" y="90" textAnchor="middle" fontSize="8" fill="var(--color-green-9)" fontFamily="system-ui, sans-serif">veículos</text>
      </svg>
      <figcaption>Frota TVDE activa nas plataformas Uber e Bolt</figcaption>
    </figure>
  );
}
