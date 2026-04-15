export function IllustrationSettlement() {
  const font = "system-ui, -apple-system, sans-serif";
  return (
    <figure className="guide-illustration">
      <svg viewBox="0 0 480 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">

        {/* ── Card 1: GANHOS ── */}
        <rect x="18" y="30" width="128" height="130" rx="8" fill="var(--surface)" stroke="var(--color-green-9)" strokeWidth="2" />
        {/* Header */}
        <rect x="18" y="30" width="128" height="30" rx="8" fill="var(--color-green-9)" />
        <rect x="18" y="50" width="128" height="10" fill="var(--color-green-9)" />
        <text x="82" y="50" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily={font}>GANHOS</text>
        {/* Rows */}
        <text x="32" y="82" fontSize="9" fill="var(--muted, #64748b)" fontFamily={font}>Uber</text>
        <text x="138" y="82" textAnchor="end" fontSize="9" fontWeight="600" fill="var(--fg, #1e293b)" fontFamily={font}>620 €</text>
        <text x="32" y="98" fontSize="9" fill="var(--muted, #64748b)" fontFamily={font}>Bolt</text>
        <text x="138" y="98" textAnchor="end" fontSize="9" fontWeight="600" fill="var(--fg, #1e293b)" fontFamily={font}>180 €</text>
        <line x1="28" y1="110" x2="138" y2="110" stroke="var(--border)" strokeWidth="1" />
        <text x="32" y="126" fontSize="9" fontWeight="600" fill="var(--color-green-11)" fontFamily={font}>Total bruto</text>
        <text x="138" y="126" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--color-green-9)" fontFamily={font}>800 €</text>

        {/* ── Operator: minus 1 ── */}
        <text x="160" y="106" textAnchor="middle" fontSize="26" fontWeight="300" fill="var(--muted, #94a3b8)" fontFamily={font}>−</text>

        {/* ── Card 2: CUSTOS ── */}
        <rect x="178" y="30" width="128" height="130" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="178" y="30" width="128" height="30" rx="8" fill="var(--color-green-3)" />
        <rect x="178" y="50" width="128" height="10" fill="var(--color-green-3)" />
        <text x="242" y="50" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--muted, #64748b)" fontFamily={font}>CUSTOS</text>
        {/* Rows */}
        <text x="192" y="82" fontSize="9" fill="var(--muted, #64748b)" fontFamily={font}>Combustível</text>
        <text x="298" y="82" textAnchor="end" fontSize="9" fontWeight="600" fill="var(--fg, #1e293b)" fontFamily={font}>95 €</text>
        <text x="192" y="98" fontSize="9" fill="var(--muted, #64748b)" fontFamily={font}>Portagens</text>
        <text x="298" y="98" textAnchor="end" fontSize="9" fontWeight="600" fill="var(--fg, #1e293b)" fontFamily={font}>18 €</text>
        <line x1="188" y1="110" x2="298" y2="110" stroke="var(--border)" strokeWidth="1" />
        <text x="192" y="126" fontSize="9" fontWeight="600" fill="var(--muted, #64748b)" fontFamily={font}>Total custos</text>
        <text x="298" y="126" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--muted, #64748b)" fontFamily={font}>113 €</text>

        {/* ── Operator: minus 2 ── */}
        <text x="320" y="106" textAnchor="middle" fontSize="26" fontWeight="300" fill="var(--muted, #94a3b8)" fontFamily={font}>−</text>

        {/* ── Card 3: ACORDADO ── */}
        <rect x="338" y="30" width="124" height="130" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        <rect x="338" y="30" width="124" height="30" rx="8" fill="var(--color-green-3)" />
        <rect x="338" y="50" width="124" height="10" fill="var(--color-green-3)" />
        <text x="400" y="50" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--muted, #64748b)" fontFamily={font}>VALOR ACORDADO</text>
        <text x="400" y="90" textAnchor="middle" fontSize="9" fill="var(--muted, #64748b)" fontFamily={font}>Valor semanal</text>
        <text x="400" y="114" textAnchor="middle" fontSize="22" fontWeight="700" fill="var(--fg, #1e293b)" fontFamily={font}>400 €</text>
        <text x="400" y="132" textAnchor="middle" fontSize="8" fill="var(--muted, #94a3b8)" fontFamily={font}>fixo por semana</text>

        {/* ── Result bar ── */}
        <rect x="18" y="178" width="444" height="56" rx="8" fill="var(--color-green-2)" stroke="var(--color-green-5)" strokeWidth="1" />
        <text x="240" y="200" textAnchor="middle" fontSize="9" fill="var(--color-green-11)" fontFamily={font}>800 − 113 − 400 =</text>
        <text x="240" y="222" textAnchor="middle" fontSize="17" fontWeight="700" fill="var(--color-green-9)" fontFamily={font}>287 € a pagar ao condutor esta semana</text>
      </svg>
      <figcaption>Como se calcula a liquidação: total de ganhos (Uber + Bolt) menos custos operacionais, menos o valor acordado — o resultado é o que o operador paga ao condutor</figcaption>
    </figure>
  );
}
