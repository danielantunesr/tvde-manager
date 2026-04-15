export function IllustrationPhoneChat() {
  const font = "system-ui, -apple-system, sans-serif";
  return (
    <figure className="guide-illustration">
      <svg viewBox="0 0 480 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Phone body */}
        <rect x="160" y="18" width="160" height="224" rx="22" fill="var(--surface)" stroke="var(--border)" strokeWidth="2" />
        {/* Status bar notch */}
        <rect x="200" y="26" width="80" height="6" rx="3" fill="var(--border)" />
        {/* Screen area */}
        <rect x="170" y="48" width="140" height="176" rx="4" fill="var(--color-green-2)" />
        {/* Home indicator */}
        <rect x="215" y="230" width="50" height="4" rx="2" fill="var(--border)" />

        {/* ── WhatsApp header ── */}
        <rect x="170" y="48" width="140" height="36" fill="var(--color-green-9)" />
        {/* Back chevron */}
        <text x="176" y="69" fontSize="12" fontWeight="300" fill="white" fontFamily={font}>‹</text>
        {/* Avatar circle */}
        <circle cx="196" cy="66" r="11" fill="white" opacity="0.2" />
        <text x="196" y="70" textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily={font}>J</text>
        {/* Contact name + status */}
        <text x="212" y="62" fontSize="8.5" fontWeight="700" fill="white" fontFamily={font}>João Silva</text>
        <text x="212" y="74" fontSize="7" fill="white" opacity="0.85" fontFamily={font}>online</text>

        {/* ── Received message bubble (system / operator) ── */}
        <rect x="173" y="90" width="116" height="76" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="1" />
        {/* Bubble tail */}
        <polygon points="173,100 163,106 173,112" fill="var(--surface)" />
        <polyline points="173,100 163,106 173,112" stroke="var(--border)" strokeWidth="1" fill="none" />
        {/* Message content */}
        <text x="181" y="103" fontSize="7.5" fontWeight="700" fill="var(--fg, #1e293b)" fontFamily={font}>Liquidação semana 15</text>
        <line x1="181" y1="107" x2="281" y2="107" stroke="var(--border)" strokeWidth="0.5" />
        <text x="181" y="118" fontSize="7" fill="var(--muted, #64748b)" fontFamily={font}>Ganhos:   800 €</text>
        <text x="181" y="129" fontSize="7" fill="var(--muted, #64748b)" fontFamily={font}>Custos:    113 €</text>
        <text x="181" y="140" fontSize="7" fill="var(--muted, #64748b)" fontFamily={font}>Acordado: 400 €</text>
        <line x1="181" y1="144" x2="281" y2="144" stroke="var(--border)" strokeWidth="0.5" />
        <text x="181" y="156" fontSize="8" fontWeight="700" fill="var(--color-green-9)" fontFamily={font}>= 287 € a receber ✓</text>
        <text x="281" y="162" textAnchor="end" fontSize="6" fill="var(--muted, #94a3b8)" fontFamily={font}>09:34</text>

        {/* ── Sent message bubble (driver reply) ── */}
        <rect x="207" y="174" width="96" height="26" rx="8" fill="var(--color-green-9)" />
        {/* Bubble tail right */}
        <polygon points="303,182 313,188 303,194" fill="var(--color-green-9)" />
        <text x="255" y="191" textAnchor="middle" fontSize="8.5" fontWeight="600" fill="white" fontFamily={font}>Confirmado ✓✓</text>
        <text x="299" y="198" textAnchor="end" fontSize="6" fill="white" opacity="0.7" fontFamily={font}>09:35</text>

        {/* ── Input bar ── */}
        <rect x="170" y="206" width="140" height="18" fill="var(--surface)" />
        <rect x="173" y="208" width="106" height="14" rx="7" fill="var(--color-green-3)" />
        <text x="179" y="218" fontSize="6.5" fill="var(--muted, #94a3b8)" fontFamily={font}>Mensagem</text>
        <circle cx="301" cy="215" r="7" fill="var(--color-green-9)" />
        <text x="301" y="218" textAnchor="middle" fontSize="8" fontWeight="700" fill="white" fontFamily={font}>↑</text>

        {/* Decorative dots left */}
        <circle cx="82" cy="100" r="5" fill="var(--color-green-4)" />
        <circle cx="62" cy="132" r="8" fill="var(--color-green-3)" />
        <circle cx="96" cy="165" r="4" fill="var(--color-green-5)" />
        {/* Decorative dots right */}
        <circle cx="398" cy="112" r="6" fill="var(--color-green-4)" />
        <circle cx="418" cy="150" r="4" fill="var(--color-green-3)" />
        <circle cx="396" cy="186" r="8" fill="var(--color-green-5)" />
      </svg>
      <figcaption>O condutor recebe o resumo completo da semana (ganhos, custos e valor a receber) e confirma directamente pelo WhatsApp</figcaption>
    </figure>
  );
}
