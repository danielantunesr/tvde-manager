export function IllustrationSettlement() {
  return (
    <figure className="guide-illustration">
      <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Box: Ganhos */}
        <rect x="20" y="60" width="96" height="100" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="20" y="60" width="96" height="28" rx="8" fill="var(--color-green-4)" />
        <rect x="20" y="80" width="96" height="8" fill="var(--color-green-4)" />
        <text x="68" y="79" textAnchor="middle" fontSize="9" fill="var(--color-green-11)" fontWeight="600" fontFamily="system-ui, sans-serif">GANHOS</text>
        <rect x="36" y="102" width="64" height="7" rx="2" fill="var(--color-green-9)" opacity="0.7" />
        <rect x="36" y="116" width="48" height="7" rx="2" fill="var(--color-green-9)" opacity="0.5" />
        <rect x="36" y="130" width="56" height="7" rx="2" fill="var(--color-green-9)" opacity="0.3" />
        <text x="68" y="151" textAnchor="middle" fontSize="11" fill="var(--color-green-9)" fontWeight="700" fontFamily="system-ui, sans-serif">800€</text>

        {/* Minus sign */}
        <rect x="132" y="107" width="20" height="3" rx="1.5" fill="var(--muted, #94a3b8)" />

        {/* Box: Custos */}
        <rect x="168" y="60" width="96" height="100" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="168" y="60" width="96" height="28" rx="8" fill="var(--color-green-3)" />
        <rect x="168" y="80" width="96" height="8" fill="var(--color-green-3)" />
        <text x="216" y="79" textAnchor="middle" fontSize="9" fill="var(--muted, #64748b)" fontWeight="600" fontFamily="system-ui, sans-serif">CUSTOS</text>
        <rect x="184" y="102" width="64" height="7" rx="2" fill="var(--muted, #94a3b8)" opacity="0.5" />
        <rect x="184" y="116" width="40" height="7" rx="2" fill="var(--muted, #94a3b8)" opacity="0.4" />
        <text x="216" y="151" textAnchor="middle" fontSize="11" fill="var(--muted, #64748b)" fontWeight="700" fontFamily="system-ui, sans-serif">113€</text>

        {/* Minus sign */}
        <rect x="280" y="104" width="20" height="3" rx="1.5" fill="var(--muted, #94a3b8)" />
        <rect x="288" y="96" width="4" height="19" rx="2" fill="var(--muted, #94a3b8)" />

        {/* Box: Acordado */}
        <rect x="316" y="60" width="96" height="100" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="316" y="60" width="96" height="28" rx="8" fill="var(--color-green-3)" />
        <rect x="316" y="80" width="96" height="8" fill="var(--color-green-3)" />
        <text x="364" y="79" textAnchor="middle" fontSize="8" fill="var(--muted, #64748b)" fontWeight="600" fontFamily="system-ui, sans-serif">ACORDADO</text>
        <rect x="332" y="102" width="64" height="7" rx="2" fill="var(--muted, #94a3b8)" opacity="0.4" />
        <text x="364" y="151" textAnchor="middle" fontSize="11" fill="var(--muted, #64748b)" fontWeight="700" fontFamily="system-ui, sans-serif">400€</text>

        {/* Equals + Result */}
        <text x="430" y="113" textAnchor="middle" fontSize="20" fill="var(--color-green-9)" fontWeight="300" fontFamily="system-ui, sans-serif">=</text>

        {/* Result label */}
        <rect x="20" y="175" width="440" height="1" rx="1" fill="var(--border)" />
        <text x="240" y="198" textAnchor="middle" fontSize="13" fill="var(--color-green-9)" fontWeight="700" fontFamily="system-ui, sans-serif">287€ a receber pelo condutor</text>
      </svg>
      <figcaption>Fórmula da liquidação semanal: ganhos − custos − valor acordado</figcaption>
    </figure>
  );
}
