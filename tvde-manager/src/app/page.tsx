"use client";

import { useEffect, useState } from 'react'

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

const faqs = [
  {
    q: "O TVDE Manager funciona com Uber e Bolt?",
    a: "Sim. Importamos os ficheiros CSV exportados pelo Uber Portugal e pelo Bolt Portugal. O sistema deteta o formato automaticamente — não precisas de configurar nada.",
  },
  {
    q: "Quanto custa exatamente?",
    a: "4€ por condutor por semana — cerca de 16€/mês por condutor. Só pagas pelos condutores ativos. Sem taxas de instalação, sem contratos, sem surpresas.",
  },
  {
    q: "Como é que o condutor recebe e confirma o valor?",
    a: 'O condutor recebe uma mensagem no WhatsApp com o resumo semanal — ganhos, custos, valor acordado, e o total a receber. Ele responde "SIM" para confirmar. Se não usar WhatsApp, enviamos por SMS.',
  },
  {
    q: "Preciso de instalar alguma aplicação?",
    a: "Não. O TVDE Manager é uma aplicação web — funciona diretamente no browser, no computador ou no telemóvel. Os condutores também não precisam de instalar nada.",
  },
  {
    q: "E se um condutor recusar ou não responder?",
    a: 'Se o condutor não responder em 48 horas, a liquidação fica em estado "notificado" e decides o próximo passo. Se responder "NÃO", o sistema marca como disputado e notifica-te imediatamente.',
  },
  {
    q: "Posso usar para um único condutor?",
    a: "Sim. O mínimo é 1 condutor, a 4€/semana. Escala à medida que a tua frota cresce — sem tetos.",
  },
  {
    q: "Os dados ficam seguros? E o RGPD?",
    a: "Sim. Os dados ficam armazenados em servidores europeus. O sistema foi desenhado com RGPD em mente — os condutores dão consentimento para receber notificações e podem retirar esse consentimento a qualquer momento.",
  },
];

export default function LandingPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [submitted1, setSubmitted1] = useState(false);
  const [submitted2, setSubmitted2] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const stored = parseInt(localStorage.getItem("tvde_waitlist_count") || "0");
    setCount(stored);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function signup(
    email: string,
    setSubmitted: (v: boolean) => void,
    setError: (v: boolean) => void
  ) {
    if (!email || !email.includes("@")) {
      setError(true);
      setTimeout(() => setError(false), 1500);
      return;
    }
    setSubmitted(true);
    setCount((prev) => {
      const next = prev + 1;
      localStorage.setItem("tvde_waitlist_count", String(next));
      return next;
    });
  }

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="logo">
          TVDE<span>Manager</span>
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
          <button className="nav-cta" onClick={() => {
            document.getElementById("cta-email")?.focus();
            document.querySelector(".cta-section")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Entrar na lista →
          </button>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div>
          <div className="hero-badge">Lista de espera aberta</div>
          <h1>
            Gestão de condutores TVDE,{" "}
            <em>sem as planilhas de Excel.</em>
          </h1>
          <p className="hero-sub">
            Importa os CSVs do Uber e Bolt, calcula automaticamente o que cada
            condutor recebe por semana, e envia a confirmação diretamente para o
            telemóvel dele via WhatsApp.
          </p>

          <div className="signup-block">
            {!submitted1 ? (
              <>
                <div className={`signup-row${error1 ? " error" : ""}`}>
                  <input
                    type="email"
                    value={email1}
                    onChange={(e) => setEmail1(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && signup(email1, setSubmitted1, setError1)
                    }
                    placeholder="O teu melhor email"
                    autoComplete="email"
                  />
                  <button onClick={() => signup(email1, setSubmitted1, setError1)}>
                    Entrar na lista →
                  </button>
                </div>
                <p className="signup-note">
                  Sem spam. Só avisamos quando abrirmos o acesso antecipado.
                </p>
                <div className="waitlist-count">
                  <span className="waitlist-dot" />
                  <span>
                    {count === 0
                      ? "Sê dos primeiros a entrar"
                      : `${count} ${count === 1 ? "pessoa já na lista" : "pessoas já na lista"}`}
                  </span>
                </div>
              </>
            ) : (
              <div className="success-msg" style={{ display: "block" }}>
                ✓ Estás na lista. Vamos avisar-te quando abrirmos o acesso.
              </div>
            )}
          </div>
        </div>

        {/* PHONE MOCKUP */}
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-header">
              <div className="phone-avatar">🚗</div>
              <div>
                <div className="phone-contact">TVDE Manager</div>
                <div className="phone-status">● Online</div>
              </div>
            </div>
            <div className="bubble">
              Olá <strong>João</strong>, aqui está o teu resumo semanal:
              <br /><br />
              📅 Semana 07/04 a 13/04
              <br />
              ✅ Ganhos: <strong>487,40€</strong>
              <br />
              ⛽ Custos: <strong>-89,20€</strong>
              <br />
              📋 Acordo: <strong>-280,00€</strong>
              <br /><br />
              💰 <strong>A RECEBER: 118,20€</strong>
              <br /><br />
              Responde <strong>SIM</strong> para confirmar.
              <div className="bubble-time">14:32 ✓✓</div>
            </div>
            <div className="bubble-reply">SIM ✓</div>
            <div className="bubble-time" style={{ marginTop: "0.25rem" }}>14:35</div>
          </div>
        </div>
      </div>

      {/* PLATFORMS STRIP */}
      <div className="platforms-strip">
        <span className="platforms-label">Funciona com</span>
        <span className="platform-tag">
          <span className="platform-dot" style={{ background: "#000" }} />
          Uber Portugal
        </span>
        <span className="platform-tag">
          <span className="platform-dot" style={{ background: "#34D186" }} />
          Bolt Portugal
        </span>
        <span className="platform-tag">
          <span className="platform-dot" style={{ background: "#25D366" }} />
          WhatsApp
        </span>
      </div>

      {/* STATS */}
      <div className="stats-section reveal">
        <div className="stat-card">
          <div className="stat-value">4€</div>
          <div className="stat-label">por condutor por semana</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">&lt;5 min</div>
          <div className="stat-label">para fechar a semana inteira</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">100%</div>
          <div className="stat-label">confirmação por WhatsApp</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">0</div>
          <div className="stat-label">planilhas de Excel necessárias</div>
        </div>
      </div>

      {/* PROBLEM */}
      <section>
        <div className="reveal">
          <div className="section-label">O problema</div>
          <h2>Gerir condutores TVDE é <em>demasiado manual.</em></h2>
          <p className="section-sub">
            Cada semana, os operadores perdem horas a reconciliar CSVs de várias plataformas,
            calcular pagamentos em planilhas de Excel e enviar mensagens manualmente para cada condutor.
          </p>
        </div>
        <div className="problem-grid reveal">
          <div className="problem-card">
            <div className="problem-icon">📂</div>
            <h3>CSVs de múltiplas plataformas</h3>
            <p>Uber e Bolt têm formatos diferentes. Reconciliar tudo à mão é lento e gera erros semana após semana.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">🧮</div>
            <h3>Cálculos manuais toda semana</h3>
            <p>Ganhos, combustível, custos, valor acordado — a mesma planilha de Excel, as mesmas horas perdidas.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">📱</div>
            <h3>Sem confirmação formal</h3>
            <p>Mandar o valor por mensagem e esperar resposta manual. Sem registo, sem histórico, sem proteção legal.</p>
          </div>
          <div className="problem-card">
            <div className="problem-icon">📉</div>
            <h3>Zero visibilidade</h3>
            <p>Não sabes quais condutores são mais rentáveis, nem consegues ver tendências ao longo do tempo.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps-section" style={{ maxWidth: "100%", padding: "5rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem 3rem" }} className="reveal">
          <div className="section-label">Como funciona</div>
          <h2>Da importação à confirmação <em>em minutos.</em></h2>
        </div>
        <div className="steps">
          <div className="step reveal">
            <div className="step-num">01</div>
            <div className="step-badge">Uma vez</div>
            <h3>Carrega a lista de condutores</h3>
            <p>Importa um CSV com os teus condutores — nome, telemóvel, matrícula, valor acordado. Feito uma vez.</p>
          </div>
          <div className="step reveal">
            <div className="step-num">02</div>
            <div className="step-badge">Cada semana</div>
            <h3>Importa os CSVs das plataformas</h3>
            <p>Arrasta os ficheiros do Uber e Bolt. O sistema deteta o formato automaticamente e calcula tudo.</p>
          </div>
          <div className="step reveal">
            <div className="step-num">03</div>
            <div className="step-badge">Automático</div>
            <h3>Envia as notificações</h3>
            <p>Com um clique, cada condutor recebe o resumo semanal no WhatsApp e responde para confirmar.</p>
          </div>
          <div className="step reveal">
            <div className="step-num">04</div>
            <div className="step-badge">Arquivo</div>
            <h3>Semana fechada e registada</h3>
            <p>O condutor confirma com &quot;SIM&quot;. Histórico completo guardado, auditável a qualquer momento.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section">
        <div className="reveal">
          <div className="section-label">Preço</div>
          <h2 style={{ margin: "0 auto", textAlign: "center" }}>Simples. Sem surpresas.</h2>
        </div>
        <div className="pricing-card reveal">
          <div className="price-amount">4€</div>
          <div className="price-period">por condutor · por semana</div>
          <div className="price-divider" />
          <ul className="price-features">
            <li>Importação CSV (Uber, Bolt e outros)</li>
            <li>Cálculo automático de liquidações semanais</li>
            <li>Notificação via WhatsApp + SMS</li>
            <li>Confirmação e aprovação do condutor</li>
            <li>Histórico completo e exportação PDF</li>
            <li>Gestão de custos (combustível, portagens, outros)</li>
            <li>Suporte em português</li>
          </ul>
          <div className="pricing-note">
            10 condutores = 40€/semana · ~160€/mês<br />
            Quanto tempo gastas a fazer isto manualmente hoje?
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="reveal">
          <div className="section-label">Perguntas frequentes</div>
          <h2>Tens dúvidas? <em>Normal.</em></h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${faqOpen === i ? " open" : ""}`}>
              <button
                className="faq-q"
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
              >
                {faq.q}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="reveal">
          <div className="section-label" style={{ color: "#4ADE80", marginBottom: "1rem" }}>
            Acesso antecipado
          </div>
          <h2>Começa a gerir melhor. <em>A sério.</em></h2>
          <p className="cta-sub">
            Entra na lista de espera. Quando abrirmos o acesso beta, vais ser dos primeiros a saber.
          </p>
          <div className="cta-form">
            {!submitted2 ? (
              <>
                <div className={`cta-signup-row${error2 ? " error" : ""}`}>
                  <input
                    id="cta-email"
                    type="email"
                    value={email2}
                    onChange={(e) => setEmail2(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && signup(email2, setSubmitted2, setError2)
                    }
                    placeholder="O teu email"
                    autoComplete="email"
                  />
                  <button onClick={() => signup(email2, setSubmitted2, setError2)}>
                    Quero entrar →
                  </button>
                </div>
                <p className="cta-note">Sem compromisso. Sem cartão de crédito.</p>
              </>
            ) : (
              <div className="cta-success" style={{ display: "block" }}>
                ✓ Estás na lista! Vamos avisar-te em breve.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <a href="#" className="logo">TVDE<span>Manager</span></a>
        <span className="footer-note">© 2026 TVDE Manager · Portugal · Em desenvolvimento</span>
      </footer>
    </>
  );
}
