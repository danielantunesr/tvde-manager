export function IllustrationGrowthChart() {
  return (
    <figure className="guide-illustration">
      <svg viewBox="0 0 480 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Grid lines */}
        <line x1="60" y1="40" x2="60" y2="185" stroke="var(--border)" strokeWidth="1" />
        <line x1="60" y1="185" x2="440" y2="185" stroke="var(--border)" strokeWidth="1" />
        <line x1="60" y1="145" x2="440" y2="145" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="60" y1="105" x2="440" y2="105" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="60" y1="65" x2="440" y2="65" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4 4" />

        {/* Y axis labels */}
        <text x="48" y="189" textAnchor="end" fontSize="8" fill="var(--muted, #94a3b8)" fontFamily="system-ui, sans-serif">0</text>
        <text x="48" y="149" textAnchor="end" fontSize="8" fill="var(--muted, #94a3b8)" fontFamily="system-ui, sans-serif">10</text>
        <text x="48" y="109" textAnchor="end" fontSize="8" fill="var(--muted, #94a3b8)" fontFamily="system-ui, sans-serif">25</text>
        <text x="48" y="69" textAnchor="end" fontSize="8" fill="var(--muted, #94a3b8)" fontFamily="system-ui, sans-serif">50</text>

        {/* Bars */}
        {/* Bar 1 — 3 drivers */}
        <rect x="80" y="161" width="42" height="24" rx="4" fill="var(--color-green-5)" />
        <text x="101" y="206" textAnchor="middle" fontSize="8" fill="var(--muted, #94a3b8)" fontFamily="system-ui, sans-serif">Jan</text>

        {/* Bar 2 — 5 drivers */}
        <rect x="148" y="149" width="42" height="36" rx="4" fill="var(--color-green-6)" />
        <text x="169" y="206" textAnchor="middle" fontSize="8" fill="var(--muted, #94a3b8)" fontFamily="system-ui, sans-serif">Mar</text>

        {/* Bar 3 — 10 drivers */}
        <rect x="216" y="125" width="42" height="60" rx="4" fill="var(--color-green-7)" />
        <text x="237" y="206" textAnchor="middle" fontSize="8" fill="var(--muted, #94a3b8)" fontFamily="system-ui, sans-serif">Mai</text>

        {/* Bar 4 — 20 drivers */}
        <rect x="284" y="97" width="42" height="88" rx="4" fill="var(--color-green-8)" />
        <text x="305" y="206" textAnchor="middle" fontSize="8" fill="var(--muted, #94a3b8)" fontFamily="system-ui, sans-serif">Jul</text>

        {/* Bar 5 — 35 drivers */}
        <rect x="352" y="68" width="42" height="117" rx="4" fill="var(--color-green-9)" />
        <text x="373" y="206" textAnchor="middle" fontSize="8" fill="var(--muted, #94a3b8)" fontFamily="system-ui, sans-serif">Set</text>

        {/* Growth arrow overlay */}
        <polyline
          points="101,173 169,167 237,155 305,141 373,114"
          stroke="white"
          strokeWidth="2"
          strokeDasharray="5 3"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Labels on bars */}
        <text x="101" y="157" textAnchor="middle" fontSize="9" fill="var(--color-green-11)" fontWeight="600" fontFamily="system-ui, sans-serif">3</text>
        <text x="169" y="145" textAnchor="middle" fontSize="9" fill="var(--color-green-11)" fontWeight="600" fontFamily="system-ui, sans-serif">5</text>
        <text x="237" y="121" textAnchor="middle" fontSize="9" fill="var(--color-green-11)" fontWeight="600" fontFamily="system-ui, sans-serif">10</text>
        <text x="305" y="93" textAnchor="middle" fontSize="9" fill="white" fontWeight="600" fontFamily="system-ui, sans-serif">20</text>
        <text x="373" y="64" textAnchor="middle" fontSize="9" fill="white" fontWeight="600" fontFamily="system-ui, sans-serif">35</text>

        {/* Title */}
        <text x="250" y="228" textAnchor="middle" fontSize="9" fill="var(--muted, #94a3b8)" fontFamily="system-ui, sans-serif">Condutores activos ao longo do tempo</text>
      </svg>
      <figcaption>Evolução real de uma frota TVDE: de 3 condutores em Janeiro a 35 em Setembro — cada passo controlado, sem perder a visão do conjunto</figcaption>
    </figure>
  );
}
