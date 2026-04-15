export function IllustrationCsvTable() {
  const font = "system-ui, -apple-system, sans-serif";
  return (
    <figure className="guide-illustration">
      <svg viewBox="0 0 480 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Card shadow */}
        <rect x="28" y="32" width="424" height="200" rx="10" fill="var(--color-green-3)" />
        {/* Card */}
        <rect x="24" y="28" width="424" height="200" rx="10" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        {/* Header row background */}
        <rect x="24" y="28" width="424" height="36" rx="10" fill="var(--color-green-9)" />
        <rect x="24" y="46" width="424" height="18" fill="var(--color-green-9)" />

        {/* Column dividers */}
        <line x1="186" y1="64" x2="186" y2="228" stroke="var(--border)" strokeWidth="1" />
        <line x1="278" y1="64" x2="278" y2="228" stroke="var(--border)" strokeWidth="1" />
        <line x1="362" y1="64" x2="362" y2="228" stroke="var(--border)" strokeWidth="1" />

        {/* Header labels */}
        <text x="38" y="51" fontSize="9" fontWeight="700" fill="white" fontFamily={font}>Condutor</text>
        <text x="232" y="51" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily={font}>Uber €</text>
        <text x="320" y="51" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily={font}>Bolt €</text>
        <text x="405" y="51" textAnchor="middle" fontSize="9" fontWeight="700" fill="white" fontFamily={font}>Liquidação €</text>

        {/* Row 1 — João Silva */}
        <text x="38" y="88" fontSize="9" fontWeight="600" fill="var(--color-green-11)" fontFamily={font}>João Silva</text>
        <text x="273" y="88" textAnchor="end" fontSize="9" fill="var(--fg, #1e293b)" fontFamily={font}>620 €</text>
        <text x="357" y="88" textAnchor="end" fontSize="9" fill="var(--fg, #1e293b)" fontFamily={font}>180 €</text>
        <text x="441" y="88" textAnchor="end" fontSize="9" fontWeight="700" fill="var(--color-green-9)" fontFamily={font}>287 €</text>
        <line x1="32" y1="100" x2="440" y2="100" stroke="var(--border)" strokeWidth="1" />

        {/* Row 2 — Maria Santos */}
        <text x="38" y="121" fontSize="9" fontWeight="600" fill="var(--color-green-11)" fontFamily={font}>Maria Santos</text>
        <text x="273" y="121" textAnchor="end" fontSize="9" fill="var(--fg, #1e293b)" fontFamily={font}>510 €</text>
        <text x="357" y="121" textAnchor="end" fontSize="9" fill="var(--muted, #94a3b8)" fontFamily={font}>—</text>
        <text x="441" y="121" textAnchor="end" fontSize="9" fontWeight="700" fill="var(--color-green-9)" fontFamily={font}>210 €</text>
        <line x1="32" y1="133" x2="440" y2="133" stroke="var(--border)" strokeWidth="1" />

        {/* Row 3 — Carlos Melo */}
        <text x="38" y="154" fontSize="9" fontWeight="600" fill="var(--color-green-11)" fontFamily={font}>Carlos Melo</text>
        <text x="273" y="154" textAnchor="end" fontSize="9" fill="var(--muted, #94a3b8)" fontFamily={font}>—</text>
        <text x="357" y="154" textAnchor="end" fontSize="9" fill="var(--fg, #1e293b)" fontFamily={font}>390 €</text>
        <text x="441" y="154" textAnchor="end" fontSize="9" fontWeight="700" fill="var(--color-green-9)" fontFamily={font}>175 €</text>
        <line x1="32" y1="166" x2="440" y2="166" stroke="var(--color-green-5)" strokeWidth="1.5" />

        {/* Totals row */}
        <text x="38" y="200" fontSize="9" fontWeight="700" fill="var(--color-green-11)" fontFamily={font}>Total semana</text>
        <text x="273" y="200" textAnchor="end" fontSize="9" fontWeight="600" fill="var(--fg, #1e293b)" fontFamily={font}>1 130 €</text>
        <text x="357" y="200" textAnchor="end" fontSize="9" fontWeight="600" fill="var(--fg, #1e293b)" fontFamily={font}>570 €</text>
        <text x="441" y="200" textAnchor="end" fontSize="12" fontWeight="700" fill="var(--color-green-9)" fontFamily={font}>672 €</text>
      </svg>
      <figcaption>Exemplo de tabela semanal: 3 condutores, ganhos Uber + Bolt separados, liquidação calculada automaticamente para cada um</figcaption>
    </figure>
  );
}
