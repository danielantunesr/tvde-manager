import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TVDE Manager — Gestão de condutores TVDE em Portugal",
  description:
    "A plataforma mais acessível para gerir condutores TVDE em Portugal. Importa CSVs do Uber e Bolt, calcula pagamentos semanais e notifica os condutores automaticamente.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "TVDE Manager",
      description:
        "Plataforma SaaS para gestão de condutores TVDE em Portugal. Importa CSVs do Uber e Bolt, calcula liquidações semanais por condutor e envia notificações automáticas via WhatsApp.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "4.00",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "4.00",
          priceCurrency: "EUR",
          referenceQuantity: {
            "@type": "QuantitativeValue",
            value: "1",
            unitText: "condutor/semana",
          },
        },
      },
      availableOnDevice: "Desktop, Mobile",
      inLanguage: "pt-PT",
      areaServed: { "@type": "Country", name: "Portugal" },
      url: "https://tvdemanager.pt",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O TVDE Manager funciona com Uber e Bolt?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O TVDE Manager importa os ficheiros CSV exportados pelo Uber Portugal e pelo Bolt Portugal e deteta automaticamente o formato de cada ficheiro.",
          },
        },
        {
          "@type": "Question",
          name: "Quanto custa o TVDE Manager?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "4 euros por condutor por semana, aproximadamente 16 euros por condutor por mês. Só pagas pelos condutores ativos. Sem taxas de instalação nem contratos.",
          },
        },
        {
          "@type": "Question",
          name: "Como é que o condutor recebe o valor semanal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "O condutor recebe uma mensagem no WhatsApp (ou SMS se não usar WhatsApp) com um resumo dos ganhos, deduções e o valor final. Responde com SIM para confirmar.",
          },
        },
        {
          "@type": "Question",
          name: "Preciso de instalar alguma coisa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Não. O TVDE Manager é uma aplicação web que funciona em qualquer browser, no computador ou no telemóvel.",
          },
        },
        {
          "@type": "Question",
          name: "Funciona para um único condutor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O mínimo é um condutor, a 4 euros por semana.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={outfit.className}
    >
      <head>
        {/* Prevent flash of wrong theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('tvde_theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',s||p);})()`,
          }}
        />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="LLM-readable description"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
