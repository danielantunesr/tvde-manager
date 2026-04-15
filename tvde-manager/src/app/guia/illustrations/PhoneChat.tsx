export function IllustrationPhoneChat() {
  return (
    <figure className="guide-illustration">
      <svg viewBox="0 0 480 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Phone body */}
        <rect x="160" y="20" width="160" height="220" rx="20" fill="var(--surface)" stroke="var(--border)" strokeWidth="2" />
        {/* Screen area */}
        <rect x="170" y="50" width="140" height="170" rx="6" fill="var(--color-green-2)" />
        {/* Status bar */}
        <rect x="195" y="28" width="90" height="6" rx="3" fill="var(--border)" />
        {/* Home indicator */}
        <rect x="215" y="228" width="50" height="4" rx="2" fill="var(--border)" />
        {/* Chat header */}
        <rect x="170" y="50" width="140" height="28" rx="6" fill="var(--color-green-9)" />
        <rect x="170" y="64" width="140" height="14" fill="var(--color-green-9)" />
        <circle cx="190" cy="64" r="8" fill="white" opacity="0.3" />
        <rect x="204" y="60" width="52" height="6" rx="2" fill="white" opacity="0.8" />
        <rect x="204" y="69" width="36" height="4" rx="2" fill="white" opacity="0.5" />

        {/* Message bubble — received (gray, left) */}
        <rect x="176" y="92" width="104" height="46" rx="10" fill="var(--surface)" stroke="var(--border)" strokeWidth="1" />
        <rect x="184" y="100" width="70" height="5" rx="2" fill="var(--muted, #94a3b8)" opacity="0.6" />
        <rect x="184" y="110" width="84" height="5" rx="2" fill="var(--muted, #94a3b8)" opacity="0.6" />
        <rect x="184" y="120" width="60" height="5" rx="2" fill="var(--muted, #94a3b8)" opacity="0.6" />
        <rect x="184" y="130" width="78" height="5" rx="2" fill="var(--muted, #94a3b8)" opacity="0.6" />

        {/* Message bubble — sent (green, right) */}
        <rect x="196" y="152" width="104" height="28" rx="10" fill="var(--color-green-9)" />
        <rect x="204" y="161" width="40" height="5" rx="2" fill="white" opacity="0.9" />
        <rect x="204" y="170" width="28" height="5" rx="2" fill="white" opacity="0.6" />

        {/* Message bubble — received small */}
        <rect x="176" y="194" width="80" height="18" rx="8" fill="var(--surface)" stroke="var(--border)" strokeWidth="1" />
        <rect x="184" y="200" width="52" height="5" rx="2" fill="var(--color-green-9)" opacity="0.7" />

        {/* Decorative dots left */}
        <circle cx="80" cy="100" r="5" fill="var(--color-green-4)" />
        <circle cx="60" cy="130" r="8" fill="var(--color-green-3)" />
        <circle cx="95" cy="160" r="4" fill="var(--color-green-5)" />
        {/* Decorative dots right */}
        <circle cx="400" cy="110" r="6" fill="var(--color-green-4)" />
        <circle cx="420" cy="150" r="4" fill="var(--color-green-3)" />
        <circle cx="395" cy="185" r="8" fill="var(--color-green-5)" />
      </svg>
      <figcaption>Notificação e confirmação da liquidação por WhatsApp</figcaption>
    </figure>
  );
}
