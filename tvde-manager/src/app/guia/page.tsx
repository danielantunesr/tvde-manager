import { guides } from "./data/guides";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guias de Gestão de Frota TVDE | TVDE Manager",
  description:
    "Guias práticos para operadores TVDE em Portugal: liquidação semanal, exportação de CSV, custos operacionais, comunicação com condutores e muito mais.",
  alternates: { canonical: "https://tvdemanager.pt/guia" },
  openGraph: {
    title: "Guias de Gestão de Frota TVDE | TVDE Manager",
    description:
      "Guias práticos para operadores TVDE em Portugal: liquidação semanal, exportação de CSV, custos operacionais, comunicação com condutores e muito mais.",
    url: "https://tvdemanager.pt/guia",
    siteName: "TVDE Manager",
    locale: "pt_PT",
    type: "website",
  },
};

export default function GuiaHub() {
  return (
    <main className="guide-page">
      <div className="guide-container">
        <nav className="guide-breadcrumb" aria-label="Breadcrumb">
          <a href="/">TVDE Manager</a>
          <span aria-hidden="true">→</span>
          <span>Guias</span>
        </nav>

        <h1>Guias de gestão de frota TVDE</h1>
        <p className="guide-intro">
          Recursos práticos para operadores TVDE em Portugal. Sem publicidade,
          sem fluff — só o que precisas de saber para gerir a tua frota semana
          a semana.
        </p>

        <ul className="guide-list">
          {guides.map((g) => (
            <li key={g.slug}>
              <a href={`/guia/${g.slug}`}>
                <strong>{g.title}</strong>
                <span>{g.metaDescription}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
