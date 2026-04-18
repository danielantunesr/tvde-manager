import { guides, type IllustrationKey } from "../data/guides";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { IllustrationCsvTable } from "../illustrations/CsvTable";
import { IllustrationSettlement } from "../illustrations/Settlement";
import { IllustrationPhoneChat } from "../illustrations/PhoneChat";
import { IllustrationFleet } from "../illustrations/Fleet";
import { IllustrationGrowthChart } from "../illustrations/GrowthChart";
import { IllustrationDocumentCheck } from "../illustrations/DocumentCheck";

function Illustration({ id }: { id: IllustrationKey }) {
  switch (id) {
    case "csv-table":      return <IllustrationCsvTable />;
    case "settlement":     return <IllustrationSettlement />;
    case "phone-chat":     return <IllustrationPhoneChat />;
    case "fleet":          return <IllustrationFleet />;
    case "growth-chart":   return <IllustrationGrowthChart />;
    case "document-check": return <IllustrationDocumentCheck />;
  }
}

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: guide.seoTitle,
    description: guide.metaDescription,
    alternates: { canonical: `https://tvdemanager.pt/guia/${guide.slug}` },
    openGraph: {
      title: guide.seoTitle,
      description: guide.metaDescription,
      url: `https://tvdemanager.pt/guia/${guide.slug}`,
      siteName: "Gestor de Frota",
      locale: "pt_PT",
      type: "article",
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const related = guides.filter((g) => guide.relatedSlugs.includes(g.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    inLanguage: "pt-PT",
    author: { "@type": "Organization", name: "Gestor de Frota" },
    publisher: {
      "@type": "Organization",
      name: "Gestor de Frota",
      url: "https://tvdemanager.pt",
    },
    url: `https://tvdemanager.pt/guia/${guide.slug}`,
  };

  // Illustration placement: show illus[0] after section 0, illus[1] after section 2, illus[2] after section 4
  const illusAt = new Map<number, IllustrationKey>([
    [0, guide.illustrations[0]],
    [2, guide.illustrations[1]],
    ...(guide.illustrations[2] ? ([[4, guide.illustrations[2]]] as [number, IllustrationKey][]) : []),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="guide-page">
        <div className="guide-container">
          <nav className="guide-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Gestor de Frota</a>
            <span aria-hidden="true">→</span>
            <a href="/guia">Guias</a>
            <span aria-hidden="true">→</span>
            <span>{guide.title}</span>
          </nav>

          <article>
            <h1>{guide.title}</h1>
            <p className="guide-intro">{guide.intro}</p>

            {guide.sections.map((section, i) => (
              <>
                <section key={i}>
                  <h2>{section.heading}</h2>
                  {section.body.split("\n\n").map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </section>
                {illusAt.has(i) && <Illustration key={`illus-${i}`} id={illusAt.get(i)!} />}
              </>
            ))}

            <section className="guide-faq">
              <h2>Perguntas frequentes</h2>
              {guide.faq.map((item, i) => (
                <div key={i} className="guide-faq-item">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </section>
          </article>

          <div className="guide-cta">
            <p>
              Quer automatizar este processo? O Gestor de Frota trata de tudo —
              importação de CSV, cálculo da liquidação e notificação ao
              condutor.
            </p>
            <a href="/#waitlist" className="guide-cta-link">
              Entrar na lista de espera →
            </a>
          </div>

          {related.length > 0 && (
            <nav className="guide-related" aria-label="Guias relacionados">
              <h2>Guias relacionados</h2>
              <ul>
                {related.map((g) => (
                  <li key={g.slug}>
                    <a href={`/guia/${g.slug}`}>{g.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </main>
    </>
  );
}
