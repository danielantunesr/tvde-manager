# Changelog — TVDE Manager

All notable changes to this project are documented here.

This file is the **source of truth for project history**.  
Every change — spec updates, architectural decisions, code changes, lock changes — must be recorded.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

### Planned
- Mapping of Uber PT and Bolt PT CSV formats (OQ-001, OQ-002)
- Operator interview documentation (docs/interviews/)
- Deployment of landing page to Vercel

---

## [0.10.0] — 2026-04-12

### Added
- `tvde-manager/src/providers/ThemeProvider.tsx` — Context + `useTheme()` hook global para toda a app
  - Lê preferência de `localStorage` (`tvde_theme`)
  - Fallback para `prefers-color-scheme` do sistema
  - Aplica `data-theme` no `<html>` element
  - Exporta `{ theme, toggleTheme }` via context
- `tvde-manager/src/app/layout.tsx` — Script inline no `<head>` para prevenir FOUC (flash of wrong theme): aplica `data-theme` antes da hidratação React
- `tvde-manager/src/app/layout.tsx` — `<ThemeProvider>` a envolver toda a app: tema disponível em qualquer página ou componente
- `tvde-manager/src/app/page.tsx` — Botão de toggle tema no nav (ícone lua/sol SVG)
  - `aria-label` e `title` descritivos
  - Ícone alterna dinamicamente com o tema activo
- `tvde-manager/vitest.config.ts` — Infraestrutura de testes com Vitest 4 + jsdom + @vitejs/plugin-react
- `tvde-manager/src/test/setup.ts` — Setup global de testes com `@testing-library/jest-dom`
- `tvde-manager/src/providers/ThemeProvider.test.tsx` — 7 testes de unidade para ThemeProvider
  - Preferência de sistema (light / dark)
  - Restauro de preferência guardada em localStorage
  - Toggle light→dark e dark→light
  - Persistência em localStorage após toggle
  - Aplicação de `data-theme` no `<html>`
  - Erro ao usar `useTheme()` fora do provider

### Changed
- `tvde-manager/package.json` — Adicionados scripts `test`, `test:watch`, `test:coverage`
- `tvde-manager/package.json` — Dependências de desenvolvimento: `vitest`, `@vitejs/plugin-react`, `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`, `jsdom`
- `tvde-manager/src/app/page.tsx` — Lógica de tema inline migrada para `useTheme()` hook

### Decisions
- Tema global via CSS custom properties (`data-theme` em `<html>`) — não requer JavaScript após hidratação para páginas adicionais
- `useTheme()` throw explícito se usado fora do provider — falha silenciosa seria mais difícil de detectar
- `npm run test` para CI (sem watch); `npm run test:watch` para desenvolvimento
- Node.js 24.14.1 obrigatório para Vitest 4 (rolldown native bindings)

---

## [0.9.0] — 2026-04-12

### Added
- `tvde-manager/src/app/globals.css` — Paleta de cores Radix Green completa (12 steps + alpha variants)
  - Escala light: `--green-1` (#fafefb) a `--green-12` (#193d22)
  - Escala dark: `--green-1` (#0c130d) a `--green-12` (#b8f3c1)
  - Suporte a `color(display-p3)` via `@supports` + `@media (color-gamut: p3)` para ecrãs P3 (Mac, iPhone)
  - Tokens adicionais: `--green-contrast`, `--green-surface`, `--green-indicator`, `--green-track`
  - Alpha variants para cada step em ambos os temas
- `tvde-manager/src/app/globals.css` — Semantic aliases que mapeiam os nomes antigos para a escala Radix
  - Light: `--green-50`→`--green-1`, `--green-100`→`--green-3`, `--green-500`→`--green-9`, `--green-700`→`--green-10`, `--green-900`→`--green-12`
  - Dark: `--green-900`→`--green-9` (brand green como fundo da secção CTA em modo escuro)

### Decisions
- Paleta Radix escolhida sobre paleta Tailwind para maior precisão de cor e suporte nativo a P3
- Aliases semânticos mantêm retrocompatibilidade com todo o CSS existente — zero breaking changes
- No dark mode, `--green-900` remapeado para `--green-9` em vez de `--green-12` (que é cor clara no dark scale)
- Fonte de referência: radix-ui.com/colors (escala Green)

---

## [0.8.0] — 2026-04-12

### Added
- `tvde-manager/src/app/globals.css` — Sistema de tema claro/escuro via CSS custom properties
  - Variáveis semânticas: `--bg`, `--surface`, `--border`, `--border-strong`, `--text`, `--muted`, `--nav-bg`, `--shadow-card`, `--shadow-hover`
  - Selector `html[data-theme="dark"]` com override completo de todas as variáveis
  - Transição CSS de 0.25s em `background-color` e `color` no `html` element
- `tvde-manager/src/app/globals.css` — `.theme-toggle` — estilo do botão de tema no nav (36×36px, borda, hover verde)
- `tvde-manager/src/app/layout.tsx` — Import da fonte Outfit via `next/font/google` substituindo Plus Jakarta Sans

### Fixed
- `tvde-manager/src/app/layout.tsx` linha 103: referência residual a `plusJakartaSans.variable` após mudança de fonte — substituída por `outfit.className`
- `tvde-manager/src/app/globals.css`: variável circular `--font-sans: var(--font-sans)` removida; `body` usa `font-family: inherit` (herda `outfit.className` do `<html>`)
- Nav background hardcoded `rgba(255,255,255,0.92)` → `var(--nav-bg)` para funcionar em ambos os temas
- Sombras hardcoded em `.stat-card`, `.problem-card`, `.pricing-card` → `var(--shadow-card)` / `var(--shadow-hover)`
- `.stat-value` e `.price-amount`: cor `--green-900` → `--green-500` para visibilidade em dark mode

### Decisions
- `data-theme` no elemento `<html>` é o mecanismo de controlo — CSS puro, sem JS em runtime após hidratação
- Preferência persistida em `localStorage` com chave `tvde_theme`

---

## [0.7.0] — 2026-04-12

### Added
- `tvde-manager/src/app/page.tsx` — Landing page como rota raiz do Next.js (`/`)
  - Componente React (`"use client"`) com estado para FAQ accordion, formulários de email e contador de waitlist via localStorage
  - IntersectionObserver para scroll reveal animations
  - Enter key support nos formulários de email
  - FAQ renderizado a partir de array (sem onclick inline)
- `tvde-manager/src/app/layout.tsx` — Layout Next.js com metadados, fontes e JSON-LD
  - Fontes via `next/font/google`: Syne (display), DM Mono (mono), Inter (body)
  - Metadata completo: title, description em português
  - JSON-LD estruturado: SoftwareApplication + FAQPage schemas
- `tvde-manager/src/app/globals.css` — Estilos completos da landing page (substituiu boilerplate Next.js)

### Changed
- Fonte de corpo: `Lora` (serif editorial) → `Inter` (desenhada para ecrã)
  - Razão: Lora em fundo escuro a tamanhos pequenos tem legibilidade reduzida; Inter tem x-height maior e letterforms optimizados para pixel rendering
- `--muted` cor: `#7A7570` → `#9A9590` (contraste aumentado de ~3.8:1 para ~5.2:1)
- Texto de cards e steps: `0.88–0.9rem` → `0.95rem` com `line-height: 1.7`
- `body` font-size: `17px` → `1rem` com `-webkit-font-smoothing: antialiased`

### Fixed
- Bug crítico: função `toggleFaq()` estava declarada dentro da tag `<script type="application/ld+json">` no ficheiro HTML de referência — nunca executava. Corrigido na versão Next.js com React state.

### Decisions
- Landing page vive em `tvde-manager/src/app/page.tsx` como rota raiz do domínio
- Tailwind removido de `globals.css` — landing page usa vanilla CSS para controlo total de tipografia e layout
- `docs/landing_page_example.html` mantido como referência HTML standalone

---

## [0.5.1] — 2026-04-10 (consistency pass)

### Fixed
- `docs/SPEC.md` Section 4: Payment methods corrected — Stripe removed from v1 list.
  Correct order: MB Way (launch) → IBAN → Multibanco reference codes → Stripe (deferred).
- `docs/SPEC.md` Sections 9.5 and 9.6 were in wrong order — 9.6 (magic link) appeared
  before 9.5 (GDPR). Corrected to 9.5 → 9.6.
- `docs/SPEC.md` Section 16 subsections were still numbered 15.x — corrected to 16.x.

### Changed
- `docs/SPEC.md` OQ-013 expanded: accountants (contabilistas) framed explicitly as both
  potential direct users AND a B2B distribution channel (one accountant with 10 TVDE
  clients = 10 operators reached with a single conversation).
- `docs/SPEC.md` OQ-007 expanded: free trial nuance added — hypothesis is 2 months free
  then full price, but also captures the possibility of a price increase post-trial.
  Explicitly linked to OQ-014 (pricing validation must come first).
- `README.md` rewritten: corrected price (2€ → 4€), added full file map, added AGENTS.md
  reference, added next steps checklist, switched to Portuguese.

---

## [0.6.0] — 2026-04-10

### Added
- `AGENTS.md` — General-purpose AI agent orchestration framework (not TVDE-specific, reusable across any project)
  - Section 1: Core principles (one agent/one domain, orchestrator routes not implements, owner approves, every action logged, OWNER-LOCK sacred, agents are stateless)
  - Section 2: Agent roles — Orchestrator, Architect, Spec, Review (standing); domain agents defined per project
  - Section 3: Orchestrator — responsibilities, what it does NOT do, decomposition example
  - Section 4: Task flow diagram — sequential and parallel execution
  - Section 5: Visual interface concept — kanban board layout, card contents, alert bar, implementation options
  - Section 6: Human-in-the-loop touchpoints — 7 trigger types with owner actions
  - Section 7: Conventions all agents must follow (code, documentation, review checklist)
  - Section 8: Project-specific agent map template + TVDE Manager draft (7 domain agents)
  - Section 9: Framework choice placeholder (owner researching)
  - Section 10: Open questions AQ-001 through AQ-007

### Changed
- `docs/DEVELOPMENT.md` deleted — content redistributed into `docs/SPEC.md`
- `docs/SPEC.md` v0.5.0:
  - Section 12 expanded with full Firebase vs Supabase comparison (14-dimension table, backend question answered, recommendation and fallback stated)
  - Section 15 (new): Development Timeline — Phase 0–3 with gates, must-haves for v1 beta, explicit exclusions
  - Sections 16–19 renumbered accordingly (was 15–18)
  - TOC updated

### Decisions
- `AGENTS.md` lives at repo root — it is general infrastructure, not project documentation
- DEVELOPMENT.md is abolished as a concept — timeline belongs in SPEC, stack belongs in SPEC, orchestration belongs in AGENTS
- TVDE Manager's settlement agent is flagged as OWNER-LOCK candidate in the agent map

---

## [0.5.0-dev] — 2026-04-10

### Added
- `docs/DEVELOPMENT.md` — New document covering development planning (separate from SPEC.md)
  - Section 1: Timeline — Phase 0 (validation), Phase 1 (v1 beta, 2 months), Phase 2 (v1 stable, month 3), Phase 3 (v2 development, months 3–5)
  - Section 2: Technology stack decision — Firebase vs Next.js+Supabase full analysis
  - Section 3: Agentic development orchestration — intent, domain map, constraints, placeholder for owner to fill after research

### Decisions
- **DEVELOPMENT.md created as a separate concern from SPEC.md**: what to build vs. how to build it belong in different documents
- **Stack recommendation: Next.js + Supabase** — primary reason is the data model. TVDE Manager's settlement calculation requires relational joins across drivers, vehicles, weeks, earnings, costs, and agreements. Firestore fights this at every step. PostgreSQL is the natural fit.
- **Firebase remains a valid fallback** — if the Supabase learning curve threatens the 2-month Phase 1 target, Firebase is acceptable for prototyping with a migration plan.
- **No "backend-free" with Firebase** — settlement calculations, Twilio webhooks, CSV processing, and invoice generation all require server-side code. Both options need it. Next.js API routes are simpler than Cloud Functions for this use case.
- **Agentic orchestration is intentionally a placeholder** — Daniel is researching frameworks independently. The section captures intent, domain map (7 natural agent boundaries), and non-negotiable constraints (OWNER-LOCK respect, CHANGELOG entries per agent action). Framework choice deferred.
- **Timeline set**: v1 beta in 2 months, v2 development starting month 3

---

## [0.4.0-spec] — 2026-04-10

### Added
- `docs/SPEC.md` Section 15.2H: Reddit validation strategy — honest question posts targeting
  operators and Portuguese accountants (contabilistas). Three draft post templates included
  in Portuguese. Rules for authentic engagement. Instructions to log all replies as market
  research in `docs/interviews/reddit-[date].md`.
- `docs/SPEC.md` Section 9.6: Driver View — Magic Link specification
  - No driver login or account required
  - Permanent UUID token per driver → `tvdemanager.pt/d/[token]`
  - Operator shares link; driver bookmarks it forever
  - Read-only: settlements, status, earnings breakdown per week
  - Operator can disable the link if driver leaves
  - Token rotation available if link is shared incorrectly
- OQ-013: Would Portuguese accountants (contabilistas) use or recommend this? → market question
- OQ-014: Is 4€/week correctly priced or perceived as too cheap/expensive? → market question

### Changed
- `docs/SPEC.md` Section 15.2D: Reddit platform entry updated to include r/contabilidade
  and r/empreendedorismo_pt alongside r/portugal
- `docs/SPEC.md` Section 15.3: Reddit post task upgraded from P1 → P0, moved to "Now"
- `docs/SPEC.md` Section 17: Open Questions restructured into two tables:
  "Resolved" (with answers and dates) and "Active — Awaiting Market Data" (with hypotheses
  clearly marked as unvalidated)
- `docs/SPEC.md` Section 18: Validation checklist updated — resolved OQs moved to a
  "Resolved before v1 starts" block; new OQ-013 and OQ-004 added to P2

### Resolved
- OQ-003: NIF on invoices → **Yes, legally required.** Portuguese law mandates client NIF
  on all invoices regardless of client preference. NIF field mandatory.
- OQ-005: Billing cycle → **Weekly confirmed.** Matches operator workflow rhythm.
- OQ-006: IVA treatment → **Price is VAT-exclusive.** 4€ + 23% IVA = 4,92€/driver/week.
  IVA shown as separate line on invoice.
- OQ-008: Driver access → **No login. Magic link only.** Permanent shareable URL per driver,
  no account needed. See Section 9.6 for full spec.

### Active Decisions Captured (hypotheses, not resolved)
- OQ-004: Payment at launch → hypothesis: MB Way first, then IBAN + Multibanco reference
  codes, Stripe integration later. Not decided until market validation.
- OQ-007: Free trial → hypothesis: 2 months free then full price from month 3.
  Not decided until pricing is validated with real operators.
- OQ-014: Pricing perception → 4€ may feel too cheap or too expensive depending on market
  segment. Accountants may have different willingness to pay than operators.
  Needs testing — do not assume.

### Policy Added
- Open questions section now carries a warning: questions are not resolved by assumption.
  All hypotheses are clearly marked as unvalidated. Resolution requires real market data.

---

## [0.3.1-spec] — 2026-04-09

### Changed
- `docs/SPEC.md` Section 2.1: Removed arbitrary 2–20 driver cap from market hypothesis.
  New framing: beachhead is operators with 2–50 drivers but there is no technical ceiling.
- `docs/SPEC.md` Section 3: Primary target user no longer capped at 20 drivers.
  Changed to "any number of drivers (2 to 200+)".
- `docs/SPEC.md` Section 3: Removed "Out of Scope: Large Fleets" block.
  Replaced with "Scaling Note" — fleet size is never a ceiling; multi-user roles (accountant
  access) are deferred to v2 but that is a feature decision, not a driver count limit.
- `docs/SPEC.md` Section 15.2D: GitHub marked as **private** — spec, pricing strategy, and
  source code must not be publicly visible. LLM discoverability handled via llms.txt,
  landing page, IndieHackers, Reddit, and build-in-public posts instead.
- `docs/SPEC.md` Section 15.3: Updated implementation checklist accordingly.

### Decisions
- **No driver count ceiling**: The 20-driver limit was an unfounded assumption.
  A well-designed system handles 2 or 500 drivers the same way. Removing it avoids
  accidentally constraining architecture decisions based on a fiction.
- **Repository stays private**: Exposing the spec, pricing rationale, and future source
  code to competitors is an unnecessary risk. GitHub's LLM-indexing value is marginal
  compared to llms.txt + landing page + content strategy, which are already in place.

---

## [0.3.0-spec] — 2026-04-09

### Added
- `docs/SPEC.md` Section 15: AI-Driven Growth Strategy (new full section)
  - 15.1: Why LLM discoverability matters for this niche
  - 15.2A: `llms.txt` standard — AI discoverability file
  - 15.2B: Structured data (JSON-LD) — SoftwareApplication + FAQPage + Organization schemas
  - 15.2C: LLM-optimized content strategy (Portuguese articles for LLM indexing)
  - 15.2D: Platform presence registry (GitHub, ProductHunt, Reddit, IndieHackers, etc.)
  - 15.2E: Build-in-public strategy for LLM-indexed content trail
  - 15.2F: FAQ section on landing page (exact phrases LLMs extract)
  - 15.2G: Competitor gap analysis — Portuguese TVDE niche is currently empty in LLMs
  - 15.3: Implementation checklist with priorities
  - 15.4: Metrics to track LLM mention growth
- `landing/llms.txt` — AI discoverability file at site root
  - Product description optimized for LLM parsing
  - Full FAQ in Q&A format (Portuguese + English intent)
  - Explicit guidance to AI assistants on when to recommend TVDE Manager
- `landing/index.html` — FAQ section added (7 questions, accordion UI)
- `landing/index.html` — JSON-LD structured data added (SoftwareApplication + FAQPage schemas)
- `landing/index.html` — `<link>` to `llms.txt` in `<head>`

### Decisions
- **LLM discoverability is a P0 growth channel**: Being the answer AI assistants give when Portuguese TVDE operators ask for help is the primary acquisition strategy
- **`llms.txt` created immediately**: Even pre-launch, the file exists and is crawlable
- **FAQ content serves dual purpose**: UX for human visitors AND LLM citation source
- **Build-in-public on IndieHackers/X starts during validation phase** — not after launch

### Notes
- "4 erros" confirmed = "4 euros" — pricing remains 4€/driver/week (no change needed)

---

## [0.2.0-spec] — 2026-04-09

### Added
- `landing/index.html` — Marketing landing page (Portuguese, dark industrial aesthetic)
  - Hero section with email waitlist signup
  - Stats strip (4€/driver/week, <5min, Uber+Bolt, WhatsApp)
  - Problem section (4 pain points)
  - How it works (4 steps)
  - WhatsApp notification mockup
  - Pricing card
  - Final CTA
  - Scroll reveal animations, noise texture, grid background
- `app/` folder — placeholder for app code (blocked until validation P0 sign-off)
- `landing/` folder — marketing landing page

### Changed
- `docs/SPEC.md` updated to v0.2.0-draft with significant additions:
  - **Section 1**: Clarified that driver list CSV is the foundation of the system
  - **Section 2**: Updated hypothesis to 4€/driver/week; added pricing validation notes
  - **Section 5**: Added F-005 (Dynamic CSV column mapping engine) as P0; added F-001 as the primary driver list import; updated F-018 to be gated at M4 revenue milestone
  - **Section 5.2**: Detailed driver CSV format with phone number as required field
  - **Section 5.2**: Specified dynamic column mapping engine as most technically complex part of v1
  - **Section 6**: Updated data model with CsvColumnMapping entity and notification fields on WeeklySettlement
  - **Section 7**: Added import priority order (driver list must come first)
  - **Section 9**: New full section on Driver Notification & Approval (WhatsApp/SMS, message template in Portuguese, approval logic, GDPR notes)
  - **Section 13**: Formalized repository structure (app/ and landing/ folders)
  - **Section 14**: New section — Product Revenue Gate (M0–M4 milestones, owner independence threshold at 5k€/month)
  - **Section 16**: Added OQ-009 to OQ-012 (Twilio cost, dispute handling, approval window, debt carry-forward)
  - **Section 17**: Updated validation checklist to include WhatsApp notification validation

### Decisions
- **Pricing revised**: 2€ → 4€/driver/week as working hypothesis for market validation
  - Rationale: 2€ may signal low quality; test at 4€ first, fall back to 3€ if needed
- **Owner independence threshold set**: 5,000€ net/month (~313 active driver-slots at 4€/week)
- **F-018 (in-platform payments) explicitly gated** at M4 (5k€/month × 3 months)
- **app/ folder blocked**: No app code until validation P0 checklist signed off by Daniel
- **Driver list CSV is foundation**: All other imports reference drivers; import must be ordered
- **Dynamic column mapping engine** identified as most complex v1 component

### Open Questions Added
- OQ-009: Twilio WhatsApp cost per message in Portugal
- OQ-010: How operators currently handle driver disputes
- OQ-011: Is 48h approval window correct or should it be configurable?
- OQ-012: Should uncollected driver debt carry to next week automatically?

---

## [0.1.0-spec] — 2026-04-08

### Added
- `README.md` — Project overview and conventions summary
- `docs/SPEC.md` v0.1.0-draft — Full Spec-Driven Development document
  - Section 1: Project overview and problem statement
  - Section 2: Market validation phase with sign-off checklist
  - Section 3: Target users (operator, driver, out of scope: large fleets)
  - Section 4: Pricing strategy — 2€/driver/car/week
  - Section 5: Feature list F-001 through F-015 with priority
  - Section 6: Preliminary data model
  - Section 7: CSV import specification (Uber PT, Bolt PT, generic cost format)
  - Section 8: Weekly driver/car management and settlement flow
  - Section 9: Cost and agreement tracking logic
  - Section 10: Reporting and history requirements
  - Section 11: Technical architecture candidates (Next.js + Supabase recommended)
  - Section 12: Out of scope for v1
  - Section 13: Open questions registry (OQ-001 through OQ-008)
  - Section 14: Validation checklist (P0/P1/P2 gates)
- `docs/OWNER-LOCK.md` — Owner-lock convention and registry
- `CHANGELOG.md` — This file

### Decisions
- **SDD approach adopted**: No code written before spec is validated
- **Market validation gates development**: P0 checklist in SPEC.md must pass first
- **Pricing locked as design constraint**: 2€/driver/car/week
- **OWNER-LOCK convention established**: See `docs/OWNER-LOCK.md`

### Open Questions (from initial spec)
- OQ-001: Uber PT CSV format
- OQ-002: Bolt PT CSV format
- OQ-003: NIF-based invoicing requirement
- OQ-004: MB Way vs Stripe-only at launch
- OQ-005: Billing period preference (weekly vs monthly)
- OQ-006: IVA inclusion in 2€ price
- OQ-007: Free trial period
- OQ-008: Driver login view scope

---

*Entries below this line will be added as the project evolves.*

---

## Changelog Entry Format

```
## [VERSION] — YYYY-MM-DD

### Added
- New features or files

### Changed  
- Changes to existing functionality or spec

### Removed
- Removed features or decisions

### Fixed
- Bug fixes

### [OWNER-LOCK-CHANGE]
- ref:OL-XXX — Description of what changed in a locked section and why

### Decisions
- Key architectural or product decisions made

### Open Questions
- New open questions added (OQ-XXX)

### Resolved
- Open questions resolved (OQ-XXX: answer)
```
