export function IllustrationDocumentCheck() {
  return (
    <figure className="guide-illustration">
      <svg viewBox="0 0 480 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Document shadow */}
        <rect x="134" y="28" width="160" height="200" rx="10" fill="var(--color-green-3)" />
        {/* Document body */}
        <rect x="130" y="24" width="160" height="200" rx="10" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
        {/* Folded corner */}
        <path d="M254 24 L290 24 L290 60 Z" fill="var(--color-green-4)" />
        <path d="M254 24 L254 60 L290 60" stroke="var(--border)" strokeWidth="1.5" fill="none" />

        {/* Document lines — title */}
        <rect x="148" y="44" width="88" height="9" rx="3" fill="var(--color-green-9)" opacity="0.8" />

        {/* Document lines — body */}
        <rect x="148" y="68" width="116" height="6" rx="2" fill="var(--border)" />
        <rect x="148" y="80" width="100" height="6" rx="2" fill="var(--border)" />
        <rect x="148" y="92" width="110" height="6" rx="2" fill="var(--border)" />
        <rect x="148" y="104" width="80" height="6" rx="2" fill="var(--border)" />

        {/* Divider */}
        <line x1="148" y1="122" x2="274" y2="122" stroke="var(--border)" strokeWidth="1" />

        {/* Document lines — section 2 */}
        <rect x="148" y="134" width="104" height="6" rx="2" fill="var(--border)" />
        <rect x="148" y="146" width="116" height="6" rx="2" fill="var(--border)" />
        <rect x="148" y="158" width="88" height="6" rx="2" fill="var(--border)" />

        {/* Checkmark circle */}
        <circle cx="340" cy="130" r="46" fill="var(--color-green-9)" opacity="0.12" />
        <circle cx="340" cy="130" r="36" fill="var(--color-green-9)" opacity="0.2" />
        <circle cx="340" cy="130" r="26" fill="var(--color-green-9)" />
        {/* Check icon */}
        <polyline
          points="328,130 336,139 354,120"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Stamp label */}
        <text x="340" y="175" textAnchor="middle" fontSize="8" fill="var(--color-green-11)" fontWeight="600" fontFamily="system-ui, sans-serif">Confirmado</text>
      </svg>
      <figcaption>Cada liquidação fica registada e confirmada — o operador tem sempre prova do que foi acordado, sem depender de mensagens ou papel</figcaption>
    </figure>
  );
}
