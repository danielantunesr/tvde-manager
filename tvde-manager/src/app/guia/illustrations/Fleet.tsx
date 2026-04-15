export function IllustrationFleet() {
  const font = "system-ui, -apple-system, sans-serif";
  return (
    <figure className="guide-illustration">
      <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">

        {/* ── Road ── */}
        <rect x="0" y="160" width="480" height="40" fill="var(--color-green-3)" />
        <line x1="0" y1="162" x2="480" y2="162" stroke="var(--border)" strokeWidth="1" />
        <line x1="0" y1="196" x2="480" y2="196" stroke="var(--border)" strokeWidth="1" />
        {/* Road dashes */}
        <rect x="50"  y="178" width="38" height="3" rx="1.5" fill="var(--color-green-5)" opacity="0.5" />
        <rect x="148" y="178" width="38" height="3" rx="1.5" fill="var(--color-green-5)" opacity="0.5" />
        <rect x="246" y="178" width="38" height="3" rx="1.5" fill="var(--color-green-5)" opacity="0.5" />
        <rect x="344" y="178" width="38" height="3" rx="1.5" fill="var(--color-green-5)" opacity="0.5" />

        {/* ── Car 1 (green, featured — left) ── */}
        {/* Body */}
        <rect x="72" y="116" width="124" height="48" rx="8" fill="var(--color-green-9)" />
        {/* Cabin */}
        <rect x="90" y="90" width="86" height="34" rx="8" fill="var(--color-green-10)" />
        {/* Windows */}
        <rect x="96"  y="96" width="32" height="22" rx="4" fill="white" opacity="0.25" />
        <rect x="134" y="96" width="36" height="22" rx="4" fill="white" opacity="0.25" />
        {/* Wheels */}
        <circle cx="104" cy="164" r="14" fill="var(--fg, #1e293b)" />
        <circle cx="104" cy="164" r="6"  fill="var(--border)" />
        <circle cx="172" cy="164" r="14" fill="var(--fg, #1e293b)" />
        <circle cx="172" cy="164" r="6"  fill="var(--border)" />
        {/* Headlight (front/right) */}
        <rect x="192" y="130" width="6" height="10" rx="3" fill="white" opacity="0.9" />
        {/* Tail light (rear/left) */}
        <rect x="70"  y="130" width="6" height="10" rx="3" fill="var(--color-green-5)" />
        {/* Platform badge */}
        <rect x="96" y="58" width="64" height="22" rx="6" fill="var(--color-green-9)" opacity="0.15" stroke="var(--color-green-9)" strokeWidth="1" />
        <text x="128" y="73" textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--color-green-11)" fontFamily={font}>Uber · Bolt</text>

        {/* ── Car 2 (muted, back — right) ── */}
        {/* Body */}
        <rect x="268" y="120" width="112" height="44" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        {/* Cabin */}
        <rect x="284" y="98"  width="78"  height="30" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        {/* Windows */}
        <rect x="290" y="104" width="30" height="18" rx="4" fill="var(--color-green-3)" />
        <rect x="326" y="104" width="30" height="18" rx="4" fill="var(--color-green-3)" />
        {/* Wheels */}
        <circle cx="294" cy="164" r="13" fill="var(--fg, #1e293b)" opacity="0.55" />
        <circle cx="294" cy="164" r="6"  fill="var(--border)" />
        <circle cx="358" cy="164" r="13" fill="var(--fg, #1e293b)" opacity="0.55" />
        <circle cx="358" cy="164" r="6"  fill="var(--border)" />
        {/* Headlight */}
        <rect x="376" y="132" width="5" height="9" rx="2.5" fill="var(--border)" opacity="0.7" />
        {/* Platform badge */}
        <rect x="290" y="62" width="56" height="22" rx="6" fill="var(--color-green-3)" stroke="var(--border)" strokeWidth="1" />
        <text x="318" y="77" textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--muted, #64748b)" fontFamily={font}>Uber · Bolt</text>

        {/* ── Fleet count badge (top right) ── */}
        <circle cx="436" cy="76" r="30" fill="var(--color-green-9)" opacity="0.1" stroke="var(--color-green-5)" strokeWidth="1" />
        <text x="436" y="70" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--color-green-9)" fontFamily={font}>2</text>
        <text x="436" y="86" textAnchor="middle" fontSize="8"  fill="var(--color-green-9)" fontFamily={font}>veículos</text>

      </svg>
      <figcaption>Gestão centralizada de 2 veículos activos em simultâneo nas plataformas Uber e Bolt — um único painel para toda a frota</figcaption>
    </figure>
  );
}
