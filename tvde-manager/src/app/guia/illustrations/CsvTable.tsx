export function IllustrationCsvTable() {
  return (
    <figure className="guide-illustration">
      <svg viewBox="0 0 480 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Card shadow */}
        <rect x="28" y="32" width="424" height="200" rx="10" fill="var(--color-green-3)" />
        {/* Card */}
        <rect x="24" y="28" width="424" height="200" rx="10" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        {/* Header row */}
        <rect x="24" y="28" width="424" height="38" rx="10" fill="var(--color-green-9)" />
        <rect x="24" y="46" width="424" height="20" fill="var(--color-green-9)" />
        {/* Header labels */}
        <rect x="44" y="40" width="72" height="8" rx="3" fill="white" opacity="0.9" />
        <rect x="164" y="40" width="56" height="8" rx="3" fill="white" opacity="0.9" />
        <rect x="268" y="40" width="64" height="8" rx="3" fill="white" opacity="0.9" />
        <rect x="380" y="40" width="48" height="8" rx="3" fill="white" opacity="0.9" />
        {/* Column dividers */}
        <line x1="150" y1="66" x2="150" y2="220" stroke="var(--border)" strokeWidth="1" />
        <line x1="254" y1="66" x2="254" y2="220" stroke="var(--border)" strokeWidth="1" />
        <line x1="362" y1="66" x2="362" y2="220" stroke="var(--border)" strokeWidth="1" />
        {/* Row 1 */}
        <rect x="44" y="80" width="80" height="7" rx="2.5" fill="var(--color-green-11)" opacity="0.7" />
        <rect x="170" y="80" width="48" height="7" rx="2.5" fill="var(--muted, #94a3b8)" opacity="0.5" />
        <rect x="272" y="80" width="60" height="7" rx="2.5" fill="var(--muted, #94a3b8)" opacity="0.5" />
        <rect x="378" y="80" width="44" height="7" rx="2.5" fill="var(--color-green-9)" opacity="0.8" />
        {/* Row divider */}
        <line x1="32" y1="100" x2="440" y2="100" stroke="var(--border)" strokeWidth="1" />
        {/* Row 2 */}
        <rect x="44" y="113" width="68" height="7" rx="2.5" fill="var(--color-green-11)" opacity="0.7" />
        <rect x="170" y="113" width="52" height="7" rx="2.5" fill="var(--muted, #94a3b8)" opacity="0.5" />
        <rect x="272" y="113" width="44" height="7" rx="2.5" fill="var(--muted, #94a3b8)" opacity="0.5" />
        <rect x="378" y="113" width="44" height="7" rx="2.5" fill="var(--color-green-9)" opacity="0.8" />
        {/* Row divider */}
        <line x1="32" y1="132" x2="440" y2="132" stroke="var(--border)" strokeWidth="1" />
        {/* Row 3 */}
        <rect x="44" y="146" width="76" height="7" rx="2.5" fill="var(--color-green-11)" opacity="0.7" />
        <rect x="170" y="146" width="40" height="7" rx="2.5" fill="var(--muted, #94a3b8)" opacity="0.5" />
        <rect x="272" y="146" width="56" height="7" rx="2.5" fill="var(--muted, #94a3b8)" opacity="0.5" />
        <rect x="378" y="146" width="44" height="7" rx="2.5" fill="var(--color-green-9)" opacity="0.8" />
        {/* Row divider */}
        <line x1="32" y1="164" x2="440" y2="164" stroke="var(--border)" strokeWidth="1" />
        {/* Row 4 — muted */}
        <rect x="44" y="178" width="60" height="7" rx="2.5" fill="var(--muted, #94a3b8)" opacity="0.3" />
        <rect x="170" y="178" width="48" height="7" rx="2.5" fill="var(--muted, #94a3b8)" opacity="0.3" />
        <rect x="272" y="178" width="52" height="7" rx="2.5" fill="var(--muted, #94a3b8)" opacity="0.3" />
        <rect x="378" y="178" width="44" height="7" rx="2.5" fill="var(--muted, #94a3b8)" opacity="0.3" />
        {/* Row divider */}
        <line x1="32" y1="196" x2="440" y2="196" stroke="var(--border)" strokeWidth="1" />
        {/* Row 5 — muted */}
        <rect x="44" y="210" width="72" height="7" rx="2.5" fill="var(--muted, #94a3b8)" opacity="0.2" />
        <rect x="170" y="210" width="36" height="7" rx="2.5" fill="var(--muted, #94a3b8)" opacity="0.2" />
        <rect x="272" y="210" width="60" height="7" rx="2.5" fill="var(--muted, #94a3b8)" opacity="0.2" />
        <rect x="378" y="210" width="44" height="7" rx="2.5" fill="var(--muted, #94a3b8)" opacity="0.2" />
      </svg>
      <figcaption>Dados de ganhos exportados em CSV — prontos para processar</figcaption>
    </figure>
  );
}
