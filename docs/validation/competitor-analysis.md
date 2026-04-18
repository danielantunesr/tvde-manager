# Competitor Analysis — Gestor de Frota

**Status:** Updated with 5 direct TVDE-specific competitors found in April 2026.

**Last updated:** 2026-04-17

---

## How to Research — Instructions for Daniel

Before filling in blank fields or verifying items marked "? — to verify", use the following approaches:

**1. Google searches in Portuguese (PT)**
Use these search terms on Google.pt (or with location set to Portugal):
- `"gestão de frotas TVDE" software`
- `"liquidação semanal condutores" software portugal`
- `software gestão TVDE portugal`
- `"uber bolt" "gestão frota" portugal ferramenta`
- `fleet management software portugal TVDE`
- `driver payment management software portugal`
- `"weekly driver settlement" software`

**2. Ask during interviews**
In every operator interview, ask directly:
- "Have you ever searched for a tool for this? What did you find?"
- "Do you know anyone who uses specific software for TVDE fleet management?"
- "Has any accountant ever recommended a tool to you?"
- "Have you heard of TVDEManager.pt, NexiaFleet, Frota360, gestVDE?"

**3. Ask AI assistants**
Ask ChatGPT, Claude, and Perplexity (in Portuguese) questions like:
- "What software exists to manage TVDE drivers in Portugal?"
- "How do TVDE operators in Portugal manage weekly driver payments?"
- "Is there an alternative to Excel for TVDE fleet management in Portugal?"

Record what they say — it's also market research about each competitor's online visibility.

**4. Monitor Reddit / Facebook groups after posting**
After posting the threads in `docs/validation/reddit-posts.md`, watch for product mentions in comments. Any tool mentioned by a real operator is a direct competitor to investigate.

**5. Instagram**
Search "TVDE gestão" and related terms on Instagram — PrismaFleet was discovered this way with only 1 post. Early-stage competitors appear here before Google indexes them.

**6. Google Play Store and App Store**
Search "TVDE", "gestão frota", "driver management" in the stores — there may be mobile apps not found via web search.

---

## Competitor Entry Template

For each new competitor found, copy and fill this section:

```
### [Product name]

| Field | Value |
|---|---|
| Name | |
| URL | |
| What it does | |
| Target market (country/segment) | |
| Pricing | |
| CSV import (Uber/Bolt) | Yes / No / ? — to verify |
| WhatsApp/SMS notifications | Yes / No / ? — to verify |
| Driver approval flow | Yes / No / ? — to verify |
| TVDE-specific features | Yes / No / ? — to verify |
| Differentiation vs Gestor de Frota | |
| Notes | |
| Research date | |
```

---

## Identified Competitors

---

## TIER 1 — Direct Competitors (TVDE-specific, Portugal)

These are the most relevant competitors. All target the same market with overlapping features.

---

### 1. TVDEManager.pt

| Field | Value |
|---|---|
| Name | TVDEManager.pt |
| URL | https://tvdemanager.pt |
| What it does | Financial management platform for TVDE companies. Manages driver payments, tax calculations, and fleet finances. |
| Target market | Portugal — TVDE operators, from single driver to unlimited |
| Pricing | Básico: €14.99/month (5 drivers) · Pequena Empresa: €49.99/month (20 drivers) · Premium: €99.99/month (unlimited) |
| Effective cost per driver | ~€3/driver/month (Básico) · ~€2.50 (Pequena Empresa) · ~€1/driver at 100 drivers (Premium) |
| Free trial | 15 days |
| CSV import (Uber/Bolt) | Yes — Uber, Bolt, Prio, Radius, Via Verde |
| WhatsApp/SMS notifications | ? — to verify |
| Driver approval flow | ? — to verify |
| Driver portal | Yes — drivers can view earnings and approve reports |
| SEPA bank file export | Yes |
| Tax calculations (IVA/IRC) | Yes |
| TVDE-specific features | Yes |
| Differentiation vs Gestor de Frota | Most feature-complete public competitor with transparent pricing. Possible gap: WhatsApp notification flow and driver approval via message not clearly advertised. |
| Notes | Closest direct competitor. Pricing is per-cap, not per-driver/week. Their "driver approves reports" feature may overlap with our driver approval flow — needs verification. |
| Research date | 2026-04-17 |

---

### 2. NexiaFleet

| Field | Value |
|---|---|
| Name | NexiaFleet |
| URL | https://nexiafleet.pt |
| What it does | Fleet management software for TVDE operators. Automates financial operations, processes Uber/Bolt earnings, generates driver payroll. |
| Target market | Portugal — TVDE fleet managers and operators |
| Pricing | MICRO: €19.80/month (5 vehicles) · STARTER: €34.90 (10v) · GROWTH: €49.90 (15v) · BUSINESS: €69.90 (25v) · PROFESSIONAL: €129.90 (40v) · ENTERPRISE: custom (unlimited) |
| Effective cost per driver | ~€4/driver/month (MICRO) · ~€3.50 (STARTER) · ~€3.30 (GROWTH) · ~€2.80 (BUSINESS) |
| Free trial | 15 days |
| CSV import (Uber/Bolt) | Yes |
| WhatsApp/SMS notifications | ? — to verify |
| Driver approval flow | ? — to verify |
| Bank file export | Yes (GROWTH plan and above) |
| TVDE-specific features | Yes |
| Differentiation vs Gestor de Frota | Granular vehicle-based tiers. Bank export only on mid/high plans. Possible gap: WhatsApp/driver communication not clearly present. |
| Notes | More tiers than TVDEManager.pt, priced by vehicle not driver. Chat support only from GROWTH tier. |
| Research date | 2026-04-17 |

---

### 3. Frota360

| Field | Value |
|---|---|
| Name | Frota360 |
| URL | https://frota360.pt |
| What it does | TVDE fleet management with native Uber/Bolt integration. Automates driver payments, commission calculations, document management. Includes AI assistant (FrotIA). |
| Target market | Portugal — TVDE fleet operators and managers |
| Pricing | Pro: €49.99/month (20 drivers included, +€4/driver/month extra) · Premium: €149.90/month (50 drivers included, +€2/driver/month extra) |
| Effective cost per driver | Pro: ~€2.50/driver/month base · Premium: ~€3/driver/month base · Overage: €4/driver/month (Pro) or €2/driver/month (Premium) |
| Free trial | Yes (duration not confirmed) |
| CSV import (Uber/Bolt) | Yes — Uber, Bolt |
| WhatsApp/SMS notifications | ? — to verify |
| Driver approval flow | ? — to verify |
| AI assistant | Yes — FrotIA (freemium) and FrotIA+ (premium upgrade) |
| Multi-language | Yes — PT, EN, ES, FR, DE, IT |
| TVDE-specific features | Yes |
| Differentiation vs Gestor de Frota | Most polished of the public competitors. AI assistant is a unique feature. Pricing structure reveals market tolerance: their €4/driver/month overage rate is the same as our weekly hypothesis — but per month, not per week. |
| Notes | The €4/driver/month overage on the Pro plan is market signal: operators accept €4/month per marginal driver. This anchors the competitive price ceiling. |
| Research date | 2026-04-17 |

---

### 4. gestVDE

| Field | Value |
|---|---|
| Name | gestVDE |
| URL | https://gestvde.pt |
| What it does | Fleet management software for TVDE operators. Payment processing, document management, maintenance scheduling, multi-operator support. |
| Target market | Portugal — TVDE fleet managers |
| Pricing | Hidden — demo/contact required. Notable: **free first year** offer. |
| Free trial | First year free |
| CSV import (Uber/Bolt) | ? — to verify |
| WhatsApp/SMS notifications | ? — to verify (has "automatic notifications" between managers and drivers, medium unclear) |
| Driver approval flow | ? — to verify |
| TVDE-specific features | Yes |
| Differentiation vs Gestor de Frota | "Free first year" is aggressive — signals the market is still in acquisition mode and customers need to be convinced to switch from Excel. |
| Notes | The free first year offer is the most aggressive acquisition tactic seen. Worth watching: if they convert well, it validates that price is a real barrier. If not, it validates that price is not the real problem. |
| Research date | 2026-04-17 |

---

### 5. PrismaFleet

| Field | Value |
|---|---|
| Name | PrismaFleet |
| URL | https://www.prismafleet.pt |
| What it does | TVDE fleet management for Portuguese operators. Automated settlements, Uber/Bolt data imports, driver portal. |
| Target market | Portugal — TVDE operators, 1 to 100+ vehicles |
| Pricing | None yet — product launched this week (April 2026) |
| Free trial | 14 days, no credit card required |
| CSV import (Uber/Bolt) | Yes — Uber, Bolt mentioned |
| WhatsApp/SMS notifications | ? — to verify |
| Driver approval flow | ? — to verify |
| TVDE-specific features | Yes |
| Differentiation vs Gestor de Frota | Very early stage — discovered via a single Instagram post that generated 10+ comments immediately. Strong signal of organic demand in the market. No pricing defined yet. |
| Notes | **Instagram signal (2026-04-17):** PrismaFleet's Instagram profile was created in April 2026. Their first post received 10+ comments — extraordinary engagement for a brand-new product. This confirms: (1) the TVDE operator community is active on Instagram, (2) there is organic appetite for new tools, (3) Instagram is a valid discovery and acquisition channel for this market. Monitor their pricing when announced. |
| Research date | 2026-04-17 |

---

## TIER 2 — Indirect Competitors (Generic, not TVDE-specific)

These are irrelevant for daily feature decisions but included for completeness.

---

### 6. PHC Software

| Field | Value |
|---|---|
| Name | PHC Software |
| URL | https://www.phcsoftware.com |
| What it does | Portuguese ERP and business management software. Includes invoicing, accounting, HR, and fleet modules. |
| Target market | Portugal and lusophone markets. SMEs to large enterprises. |
| Pricing | ? — to verify (license + monthly, likely hundreds of euros/month) |
| CSV import (Uber/Bolt) | ? — possibly via generic import |
| WhatsApp/SMS notifications | ? — unlikely natively |
| TVDE-specific features | No (generic ERP) |
| Differentiation vs Gestor de Frota | Full ERP for SMEs — overkill and expensive for TVDE operators. Gestor de Frota is focused, affordable, and specific to the weekly driver settlement flow. |
| Notes | May be used by accountants of TVDE operators, but not by the operator for daily management. |
| Research date | 2026-04-12 |

---

### 7. Primavera BSS

| Field | Value |
|---|---|
| Name | Primavera BSS |
| URL | https://pt.primaverabss.com |
| What it does | Business management and ERP software for the Iberian market. Invoicing, accounting, HR. |
| Target market | Portugal and Spain. SMEs and mid-size companies. |
| Pricing | ? — to verify (monthly subscription, likely tens to hundreds of euros) |
| CSV import (Uber/Bolt) | ? — to verify |
| WhatsApp/SMS notifications | No (natively) |
| TVDE-specific features | No |
| Differentiation vs Gestor de Frota | Same argument as PHC — generic ERP vs. a focused TVDE settlement tool. Much higher cost and complexity. |
| Notes | Popular among Portuguese SMEs. Check entry-level pricing. |
| Research date | 2026-04-12 |

---

### 8. Fleetio

| Field | Value |
|---|---|
| Name | Fleetio |
| URL | https://www.fleetio.com |
| What it does | Cloud fleet management platform. Maintenance, inspections, fuel tracking, vehicle location, driver management. |
| Target market | USA, global. Medium to large fleets. Not Portugal-specific. |
| Pricing | From ~$4 USD/vehicle/month (basic plan). ? — to verify current pricing |
| CSV import (Uber/Bolt) | Yes (generic vehicle/driver data import — not Uber/Bolt specific) |
| WhatsApp/SMS notifications | ? — has notifications, WhatsApp unlikely |
| TVDE-specific features | No (generic fleet ops, no driver settlement or Uber/Bolt integration) |
| Differentiation vs Gestor de Frota | Focuses on maintenance and fleet logistics, not weekly driver settlement. Interface in English. Solves a different problem. |
| Notes | Globally known. Unlikely to be what Portuguese TVDE operators use. Confirm in interviews. |
| Research date | 2026-04-12 |

---

### 9. Excel / Google Sheets — The Real Competitor

| Field | Value |
|---|---|
| Name | Microsoft Excel / Google Sheets |
| URL | microsoft.com/excel / sheets.google.com |
| What it does | Generic spreadsheet. TVDE operators build their own weekly settlement processes manually. |
| Target market | Universal |
| Pricing | €0 (Google Sheets) / included in Microsoft 365 (~€6–10/month) |
| CSV import (Uber/Bolt) | Yes (native) |
| WhatsApp/SMS notifications | No |
| TVDE-specific features | No — the operator builds everything |
| Differentiation vs Gestor de Frota | **This is the true competitor.** Most TVDE operators use Excel/Sheets today. Gestor de Frota's value proposition is: automate what currently takes hours in Excel, eliminate calculation errors, and add automatic driver communication — which Excel cannot do. |
| Notes | Key interview question: how customized is their current Excel setup? The more customized, the more switching resistance. |
| Research date | 2026-04-12 |

---

## Comparative Summary

| Product | PT Market | Pricing model | Approx. cost (10 drivers) | CSV Uber/Bolt | WhatsApp | Driver approval | TVDE-specific |
|---|---|---|---|---|---|---|---|
| TVDEManager.pt | Yes | Flat cap tiers | ~€50/month | Yes | ? | ? | Yes |
| NexiaFleet | Yes | Flat cap tiers | ~€35/month | Yes | ? | ? | Yes |
| Frota360 | Yes | Flat + per-driver overage | ~€50/month (Pro, 10/20 incl.) | Yes | ? | ? | Yes |
| gestVDE | Yes | Hidden (free yr 1) | — | ? | ? | ? | Yes |
| PrismaFleet | Yes | None yet (just launched) | — | Yes | ? | ? | Yes |
| PHC Software | Yes | High (ERP) | High | ? | No | No | No |
| Primavera BSS | Yes | High (ERP) | High | ? | No | No | No |
| Fleetio | No | ~$4/vehicle/month | ~$40/month | Generic | ? | No | No |
| Excel / Sheets | Universal | €0–10/month | €0 | Yes | No | No | No |
| **Gestor de Frota** | **Yes** | **TBD — see pricing note** | **TBD** | **Yes** | **Yes** | **Yes** | **Yes** |

---

## Pricing Model Analysis

### Market reference prices (per driver, per month)

| Product | Effective cost/driver/month at 10 drivers |
|---|---|
| TVDEManager.pt | ~€5 (Pequena Empresa: €49.99/20) |
| NexiaFleet | ~€3.50 (STARTER: €34.90/10) |
| Frota360 | ~€2.50 (Pro: €49.99/20 incl.) |
| **Market range** | **€2.50–€5/driver/month** |

### Gestor de Frota pricing direction (working hypothesis, 2026-04-17)

The original 4€/driver/week hypothesis (~€16/driver/month) is 3–6x above the market range. A revised approach:

**Introductory pricing (first 2–3 months):**
Match or undercut competitors to drive adoption and remove price friction. Target: €2–3/driver/month equivalent.

**Standard pricing (after introductory period):**
Move to competitive market rate (~€3–5/driver/month) with the WhatsApp notification + driver approval flow as clear differentiators that justify parity or slight premium over the flat-tier competitors.

**Key insight from Frota360:**
Their Pro overage is €4/driver/month — which means operators accept €4/month per additional driver beyond the included cap. This is the market's revealed ceiling for marginal driver pricing.

**Pricing model to test in interviews:**
Rather than per-driver/week, test flat monthly tiers with driver caps — this matches competitor framing and reduces mental friction for operators comparing options.

---

## Key Differentiation Gap (to validate in interviews)

None of the 5 direct TVDE competitors clearly advertise:
1. WhatsApp message sent directly to the driver with their weekly amount
2. Driver confirms/approves the settlement via reply
3. Operator gets a confirmation audit trail

If operators confirm this flow is valuable in interviews, it is the core differentiator. If not, the product competes purely on price and UX.

**Question to ask in every interview:**
> "If the system automatically sent each driver their weekly amount via WhatsApp and waited for them to confirm — would that save you meaningful time or conflict?"

---

## Instagram as a Discovery Channel

**Signal from PrismaFleet (2026-04-17):**
PrismaFleet was discovered via a single Instagram post on a newly created profile (April 2026). That post received 10+ comments immediately — unusually high engagement for a zero-follower account.

**Implication:** The TVDE operator community is active on Instagram. This is both a competitor discovery channel and a potential acquisition channel for Gestor de Frota. Worth testing before or alongside the Reddit/Facebook strategy.

---

## Provisional Conclusion (updated 2026-04-17)

The market is **not a blue ocean** — 5 direct TVDE-specific competitors exist in Portugal. However:

1. The market is still early — gestVDE offers a free first year, PrismaFleet launched this week with no pricing
2. Only 2 of 5 publish pricing openly — room for a transparent, self-serve product
3. No competitor clearly advertises WhatsApp notification + driver approval flow
4. Excel/Sheets is still the dominant "competitor" — the real conversion is from spreadsheets, not from other SaaS tools

**Next steps for Daniel:**
- [ ] Update SPEC.md Section 2.4 with this competitive landscape
- [ ] In all operator interviews, ask: "Have you heard of / tried TVDEManager.pt, NexiaFleet, Frota360?"
- [ ] Validate the WhatsApp + approval flow differentiation explicitly in interviews
- [ ] Test flat monthly tier pricing model in interviews (not per-driver/week)
- [ ] Monitor PrismaFleet pricing when announced
- [ ] Search Instagram for TVDE operator community — potential acquisition channel
- [ ] Search Google Play / App Store for TVDE apps in Portuguese
