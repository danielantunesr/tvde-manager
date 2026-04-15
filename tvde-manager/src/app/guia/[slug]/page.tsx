import { guides } from "../data/guides";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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
      siteName: "TVDE Manager",
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
    author: { "@type": "Organization", name: "TVDE Manager" },
    publisher: {
      "@type": "Organization",
      name: "TVDE Manager",
      url: "https://tvdemanager.pt",
    },
    url: `https://tvdemanager.pt/guia/${guide.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="guide-page">
        <div className="guide-container">
          <nav className="guide-breadcrumb" aria-label="Breadcrumb">
            <a href="/">TVDE Manager</a>
            <span aria-hidden="true">→</span>
            <a href="/guia">Guias</a>
            <span aria-hidden="true">→</span>
            <span>{guide.title}</span>
          </nav>

          <article>
            <h1>{guide.title}</h1>
            <p className="guide-intro">{guide.intro}</p>

            {guide.sections.map((section, i) => (
              <section key={i}>
                <h2>{section.heading}</h2>
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </section>
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
              Quer automatizar este processo? O TVDE Manager trata de tudo —
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
