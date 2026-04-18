"use client";

import { useTheme } from '@/providers/ThemeProvider'

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function SiteNav() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav>
      <a href="/" className="logo">
        Gestor de <span>Frota</span>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
          title={theme === "light" ? "Modo escuro" : "Modo claro"}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
        <a href="/#waitlist" className="nav-cta">
          Entrar na lista →
        </a>
      </div>
    </nav>
  );
}
