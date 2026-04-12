# TVDE Manager — Product Specification Document (SDD)

**Version:** 0.5.1-draft  
**Status:** Market Validation Phase  
**Last Updated:** 2026-04-10 (consistency pass)  
**Owner:** Daniel  

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Market Validation](#2-market-validation)
3. [Target Users](#3-target-users)
4. [Pricing Strategy](#4-pricing-strategy)
5. [Core Features](#5-core-features)
6. [Data Model](#6-data-model)
7. [CSV Import Specification](#7-csv-import-specification)
8. [Weekly Driver Settlement Flow](#8-weekly-driver-settlement-flow)
9. [Driver Notification & Approval](#9-driver-notification--approval)
10. [Cost & Agreement Tracking](#10-cost--agreement-tracking)
11. [Reporting & History](#11-reporting--history)
12. [Technical Architecture](#12-technical-architecture)
13. [Repository Structure](#13-repository-structure)
14. [Product Revenue Gate](#14-product-revenue-gate)
15. [Development Timeline](#15-development-timeline)
16. [AI-Driven Growth Strategy](#16-ai-driven-growth-strategy)
17. [Out of Scope (v1)](#17-out-of-scope-v1)
18. [Open Questions](#18-open-questions)
19. [Validation Checklist](#19-validation-checklist)

---

## 1. Project Overview

**TVDE Manager** is a SaaS platform designed for managing TVDE (Transporte de Veículos Descaracterizados a partir de Plataforma Eletrónica) operations in Portugal.

It targets fleet owners and operators who manage multiple TVDE drivers and need to:
- Calculate how much each driver should receive (or pay) per week
- Import earnings data from multiple ride-hailing platforms (Uber, Bolt, etc.)
- Notify drivers of their weekly balance automatically via WhatsApp/SMS
- Get driver confirmation/approval of the weekly settlement
- Track all associated costs per driver and vehicle

### Problem Statement

TVDE operators in Portugal currently:
- Manually reconcile earnings from multiple platform CSV exports (Uber, Bolt, etc.)
- Track fuel and operational costs in spreadsheets
- Calculate weekly driver settlements manually — error-prone and time-consuming
- Have no automated way to communicate settlements to drivers
- Have no unified view of profitability per driver/vehicle

### Solution

A lightweight, affordable web platform that:
- Imports a **driver list CSV** with driver attributes (name, phone number, vehicle, etc.)
- Ingests platform earning CSVs (Uber, Bolt) and cost CSVs (fuel, other)
- Calculates, for each driver: **how much they should receive that week**
- Sends the weekly settlement amount **directly to the driver's phone number** (WhatsApp/SMS)
- Receives driver **approval** and marks the settlement as confirmed
- Maintains a full audit trail of all settlements

---

## 2. Market Validation

> **No development starts until this section is signed off.**

### 2.1 Hypothesis

There is a segment of Portuguese TVDE operators who currently rely on manual spreadsheets and would pay **4€/driver/week** for an automated solution that also handles driver notification and approval. The primary beachhead is operators managing 2–50 drivers, but there is no technical ceiling — the platform should scale to any fleet size.

### 2.2 Validation Methods

| Method | Goal | Success Criteria | Status |
|---|---|---|---|
| Competitor analysis | Understand existing tools | Document 3+ competitors with pricing | TODO |
| Operator interviews | Validate pain points | 5+ TVDE operators interviewed | TODO |
| Landing page + waitlist | Measure market intent | 50+ signups in 30 days | TODO |
| Pricing sensitivity test | Validate 4€/week price point | >70% say "definitely/probably would pay" | TODO |
| Platform CSV audit | Confirm CSV format feasibility | Uber + Bolt CSVs mapped | TODO |
| Driver notification test | Validate WhatsApp flow | Operators confirm it is useful | TODO |

### 2.3 Pricing Validation Notes

The original price considered was **2€/driver/week**. After reflection, this may signal low quality or lack of seriousness to potential customers.

**Current working assumption: 4€/driver/week.**

Rationale:
- 4€/week = ~16€/month per driver — still highly competitive vs. manual effort
- At 2€, the product may not be taken seriously during early validation
- Pricing can always decrease; increasing after launch is much harder
- During interviews, test at 4€ first; if strong resistance, test at 3€

See Section 4 for the full pricing model.

### 2.4 Competitor Landscape

*(To be filled during validation phase)*

| Tool | Target Market | Pricing | Key Weakness |
|---|---|---|---|
| TBD | TBD | TBD | TBD |

### 2.5 Regulatory Context

- TVDE activity is regulated by IMT (Instituto da Mobilidade e dos Transportes)
- Operators must be licensed; platform must be GDPR-compliant
- Weekly settlement records may be relevant for IRS/tax purposes
- Phone number storage and messaging requires explicit GDPR consent from drivers

### 2.6 Validation Sign-Off

- [ ] 5+ operator interviews completed
- [ ] 4€/week pricing confirmed acceptable by at least 3 operators
- [ ] Competitor pricing documented
- [ ] Landing page live with waitlist
- [ ] CSV formats from Uber PT and Bolt PT obtained
- [ ] Driver WhatsApp notification validated as useful
- [ ] Owner sign-off: **Daniel**

---

## 3. Target Users

### Primary: TVDE Operator / Fleet Owner

- Manages any number of drivers (2 to 200+)
- Owns or rents the vehicles
- Responsible for weekly settlement with each driver
- Wants to stop doing this manually in spreadsheets
- Not necessarily tech-savvy — UI must be simple

### Secondary: Independent TVDE Driver

- Single driver/car, self-managed
- Wants personal earnings tracking across platforms
- Receives automated weekly settlement notification on phone

### Scaling Note

- The platform must be designed to handle any fleet size from day one
- Features like multi-user roles (accountant access, manager roles) are deferred to v2, but driver count is never a ceiling

---

## 4. Pricing Strategy

### Working Model (subject to validation)

| Tier | Price | Notes |
|---|---|---|
| Per driver/car | **4€ / week** | All features for that unit |
| Monthly equivalent | ~16€ / driver/car | Billed weekly or monthly prepaid |
| Minimum | 1 driver/car | 4€/week minimum |

### Price Sensitivity Testing Plan

Test in order during validation interviews:
1. **4€/week** — primary hypothesis
2. **3€/week** — fallback if strong resistance
3. **2€/week** — last resort; risks signalling low quality

### Business Targets

| Metric | Value |
|---|---|
| Owner full-time threshold | **5,000€ net/month** |
| Driver-slots needed at 4€/week | ~313 |
| Operators needed (avg 5 drivers) | ~63 operators |

### Payment Methods (v1)

- **MB Way** — launch method, essential for Portuguese market
- **IBAN transfer** — second option, after MB Way is stable
- **Multibanco reference codes** — third option for operators who prefer it
- Stripe / Credit card — deferred, not at launch (see OQ-004)
- NIF/invoice generation — required by law on all invoices issued (OQ-003 resolved)

---

## 5. Core Features

### 5.1 Feature List (Prioritized)

| ID | Feature | Priority | Version |
|---|---|---|---|
| F-001 | Driver list CSV import (name, phone, vehicle, agreed value, etc.) | P0 | v1 |
| F-002 | CSV import — Platform earnings (Uber, Bolt) | P0 | v1 |
| F-003 | CSV import — Fuel costs | P0 | v1 |
| F-004 | CSV import — Other costs (generic) | P0 | v1 |
| F-005 | Dynamic CSV column mapping engine (platform format detection) | P0 | v1 |
| F-006 | Weekly settlement calculation per driver | P0 | v1 |
| F-007 | Pre-agreed weekly value per driver | P0 | v1 |
| F-008 | WhatsApp/SMS notification to driver with weekly amount | P0 | v1 |
| F-009 | Driver approval flow (reply to confirm settlement) | P0 | v1 |
| F-010 | Settlement status tracking (pending / notified / approved / done) | P0 | v1 |
| F-011 | Driver profile management | P1 | v1 |
| F-012 | Vehicle profile management | P1 | v1 |
| F-013 | Dashboard — weekly overview per driver | P1 | v1 |
| F-014 | Historical reports per driver | P1 | v1 |
| F-015 | Export to PDF/Excel (weekly settlement sheet) | P1 | v1 |
| F-016 | Manual entry fallback (no CSV) | P2 | v1 |
| F-017 | Multi-platform CSV format version management | P2 | v1 |
| F-018 | In-platform payment by operator to driver | P3 | v3+ |

### 5.2 Key Feature Descriptions

#### F-001: Driver List CSV Import

The master driver list is the **foundation of the system**. All other imports reference drivers from this list.

Driver attributes (minimum):

```csv
name,phone,nif,license_number,vehicle_plate,weekly_agreed_value,status
João Silva,+351912345678,123456789,T-001,00-AA-00,300.00,active
Maria Costa,+351961234567,987654321,T-002,00-BB-11,280.00,active
```

The system must:
- Validate required fields (name, phone)
- Warn on missing optional fields
- Detect and handle duplicate entries (by phone or NIF)
- Support re-import to update existing drivers (upsert)

#### F-005: Dynamic CSV Column Mapping Engine

Because platforms change their CSV formats, the engine must:
- Detect the platform from file headers (fingerprinting)
- Map known columns to internal schema automatically
- Flag unknown columns and let the operator map them manually
- Save mappings per platform so future imports are automatic
- Support multiple format versions per platform

This is the **most technically complex part of v1**.

#### F-008 & F-009: Driver Notification & Approval

See Section 9 for full specification.

#### F-018: In-Platform Payment (v3+)

Gated at the **5,000€ net/month sustained for 3 months** revenue milestone.  
See Section 14.

---

## 6. Data Model

*(Preliminary)*

```
Operator
  id, name, nif, email, plan_tier, billing_start, created_at

Driver
  id, operator_id, name, phone, nif, license_number
  weekly_agreed_value, status, created_at, updated_at

Vehicle
  id, operator_id, plate, make, model, year, status

DriverVehicleAssignment
  id, driver_id, vehicle_id, week_start, week_end

PlatformEarningsRecord
  id, driver_id, vehicle_id, platform, week_start
  gross_earnings, platform_fees, net_earnings, trips_count
  source_file, column_mapping_version, imported_at

CostRecord
  id, vehicle_id, driver_id (nullable), category, description
  amount, date, source_file, imported_at

WeeklyAgreement
  id, driver_id, week_start, agreed_value, notes, created_by

WeeklySettlement
  id, driver_id, vehicle_id, week_start
  total_earnings, total_costs, agreed_value, net_to_driver
  notification_sent_at, notification_channel, driver_approved_at
  status [pending | notified | approved | done | disputed]

CsvColumnMapping
  id, platform, format_version, detected_headers_hash
  column_map (JSON), created_at, created_by
```

---

## 7. CSV Import Specification

### 7.1 Import Priority Order

Files must be imported in this order — the system enforces it:

1. **Driver list** (F-001) — imported first; all records reference these drivers
2. **Platform earnings** (F-002) — per driver, per platform, per week
3. **Fuel costs** (F-003) — per vehicle
4. **Other costs** (F-004) — per vehicle or per driver

If a platform earnings CSV references a driver not found in the system, the import is **blocked** and the operator sees which drivers are missing.

### 7.2 Uber Portugal — Format

*(To be mapped during validation — obtain real export from an operator)*

```
Expected columns: TBD
Date format: TBD
Encoding: TBD (often UTF-8 with BOM)
```

### 7.3 Bolt Portugal — Format

*(To be mapped during validation)*

```
Expected columns: TBD
Date format: TBD
Encoding: TBD
```

### 7.4 Generic Fuel Cost CSV (our template)

```csv
date,liters,price_per_liter,total,vehicle_plate,notes
2026-04-01,45.2,1.759,79.51,00-AA-00,BP Sintra
```

### 7.5 Generic Other Costs CSV (our template)

```csv
date,category,description,amount,vehicle_plate,driver_phone,notes
2026-04-02,Toll,A5,3.20,00-AA-00,,
2026-04-03,Maintenance,Oil change,89.00,00-AA-00,,
2026-04-04,Fine,Parking,60.00,,+351912345678,Driver fault
```

### 7.6 Import Error Handling

| Error Type | Behaviour |
|---|---|
| Missing required column | Reject file, show clear error message |
| Unknown columns | Warn, skip unknowns, continue import |
| Invalid amount | Flag row, allow manual correction |
| Driver not found | Block import, list missing drivers |
| Duplicate file re-import | Deduplicate by content hash, skip duplicates |
| Encoding issues (CP1252) | Auto-detect and convert to UTF-8 |

---

## 8. Weekly Driver Settlement Flow

### 8.1 Week Definition

Week = Monday 00:00 to Sunday 23:59, Europe/Lisbon timezone.

### 8.2 Settlement Formula

```
Gross Earnings  = Sum of all platform earnings (net of platform fees)
Total Costs     = Fuel + Other costs allocated to this driver/vehicle this week
Agreed Value    = Pre-agreed weekly value for this driver

Net to Driver   = Gross Earnings - Total Costs - Agreed Value

If Net > 0: Operator pays driver this amount
If Net < 0: Driver owes operator this amount (tracked, carried to next week or settled manually)
```

### 8.3 Operator Workflow (step by step)

```
1. Operator opens weekly view → selects week
2. System shows all active driver/vehicle pairs
3. Operator imports CSVs for that week (platform earnings, costs)
4. System calculates settlement per driver
5. Operator reviews — can override any line item with a note
6. Operator triggers "Send notifications"
7. Each driver receives WhatsApp/SMS with their amount
8. Drivers reply to approve
9. Operator marks settled drivers as "Done"
10. PDF settlement sheet generated, available for download
```

---

## 9. Driver Notification & Approval

### 9.1 Overview

After the weekly settlement is calculated, each driver receives a message on their registered phone number with a summary and a simple approval prompt.

### 9.2 Notification Channels (v1)

| Channel | Priority | Notes |
|---|---|---|
| WhatsApp (via WhatsApp Business API) | P0 | Most used in PT; requires Meta Business verification |
| SMS fallback | P1 | For drivers without WhatsApp |

### 9.3 Message Template (draft — Portuguese)

```
Olá [Nome],

Aqui está o teu resumo semanal TVDE:
Semana: [DD/MM] a [DD/MM/YYYY]

✅ Ganhos da semana: [X]€
⛽ Custos deduzidos: [X]€
📋 Valor acordado: [X]€

💰 TOTAL A RECEBER: [X]€

Responde SIM para confirmar.
Responde NÃO ou contacta o teu operador se houver dúvidas.

[Nome do Operador] | TVDE Manager
```

### 9.4 Approval Logic

| Driver Reply | System Action |
|---|---|
| SIM / sim / s / yes | Settlement marked **approved** |
| NÃO / nao / n / no | Settlement flagged **disputed**, operator notified |
| No reply within 48h | Settlement remains **notified**, operator decides |

All messages (sent + received) are logged per settlement record.


### 9.5 GDPR Notes

- Driver phone number requires explicit consent at registration
- Drivers may opt out of WhatsApp (SMS fallback applied)
- Message logs retained for audit purposes
- Data retention policy must be defined before launch

### 9.6 Driver View — Magic Link (No Account Required)

Drivers do not have a login or account in the system. Instead, operators can share a permanent magic link per driver.

**How it works:**
- Each driver has a unique, permanent token (e.g. `UUID v4`)
- The operator can share the link: `tvdemanager.pt/d/[driver-token]`
- Anyone with the link can view that driver's settlement history (read-only)
- The link is permanent — the driver bookmarks it and uses it forever
- The link shows: all weekly settlements, status of each, earnings breakdown

**Access control options (operator chooses per driver):**
- `Link active` — anyone with the link can view
- `Link disabled` — link returns 404 (used if driver leaves)

**What the driver sees at the link:**
- Their name and vehicle
- List of all weeks: date range, total earned, total deducted, net amount, approval status
- Each week expandable for full breakdown

**What the driver does NOT see:**
- Other drivers' data
- Cost breakdown detail (operator can configure this)
- Any operator financial information

**Security note:**
- Token must be long enough to be unguessable (UUID v4 = 2¹²² combinations — sufficient)
- Operator can rotate the token if the link is shared with the wrong person
- No personal data beyond the driver's own settlements is exposed

This replaces the need for any driver login system entirely.

---

## 10. Cost & Agreement Tracking

### 10.1 Agreed Weekly Value

- Default set per driver (from driver CSV or UI)
- Can be overridden for a specific week with a note
- Positive = driver owes operator (vehicle rental, etc.)
- Negative = operator owes driver (rare but supported)

### 10.2 Cost Allocation Rules

| Cost Type | Allocation |
|---|---|
| Fuel / vehicle maintenance | Split equally among drivers who used that vehicle that week |
| Driver fine / penalty | 100% attributed to that driver |
| Operator overhead (insurance, etc.) | Optional — operator configures allocation |

---

## 11. Reporting & History

### 11.1 Reports (v1)

| Report | Granularity | Export |
|---|---|---|
| Weekly Settlement Summary | Per driver/vehicle | PDF, CSV |
| Earnings Breakdown | Per platform per driver | CSV |
| Cost Analysis | Per vehicle per period | CSV |
| Driver Profitability | Per driver over time | PDF, CSV |
| Fleet Overview | All drivers, current week | Screen only |

### 11.2 Data Retention Policy

- All imported CSV data: retained indefinitely
- Settlement records: **never deleted** (full audit trail)
- Notification/message logs: retained per settlement record
- Drivers/vehicles: soft-delete only

---

## 12. Technical Architecture

*(Preliminary — finalise before first line of app code)*

### 12.1 Stack Decision — Firebase vs Next.js + Supabase

Two real options exist. Daniel has direct Firebase experience. This comparison is specific to TVDE Manager's needs.

**The core problem:** TVDE Manager's settlement calculation is inherently relational:

```
Driver → PlatformEarningsRecord (multiple, per week, per platform)
Driver → CostRecord (via vehicle)
Driver → WeeklyAgreement
→ WeeklySettlement = Earnings - Costs - AgreedValue
```

Every week this query runs for every driver. In PostgreSQL: one JOIN. In Firestore: multiple collection reads assembled in application code — slow, expensive at scale, and error-prone.

**Side-by-side:**

| Area | Firebase | Next.js + Supabase | Better |
|---|---|---|---|
| Data model fit | NoSQL — fights relational joins | PostgreSQL — natural fit | Supabase |
| Settlement calculation | Assemble from multiple reads in JS | Single SQL query | Supabase |
| Daniel's prior experience | Yes | Less familiar | Firebase |
| Time to first working prototype | Faster (familiar) | +1–2 weeks learning curve | Firebase |
| CSV processing | Cloud Functions — 9MB limit, cold starts | Next.js API route — no limits, always warm | Supabase |
| Twilio webhook (driver replies) | Cloud Functions — cold start adds latency | Next.js API route — instant | Supabase |
| Magic link access control | Firestore doc with token — works | Supabase RLS on token table — elegant | Supabase |
| Reporting queries | No joins — painful for reports | SQL — trivial | Supabase |
| Pricing at scale | Per-read billing — can surprise | Flat $25/month after free tier | Supabase |
| Vendor lock-in | High (Google) | Low (open-source PostgreSQL) | Supabase |

**Can Firebase eliminate the backend?** No, for this project specifically:
- Settlement calculation must be server-side (financial logic cannot run in the browser)
- Twilio webhook requires a reliable server endpoint
- CSV parsing with encoding detection belongs server-side
- Invoice/PDF generation needs a server

Both options need server code. Next.js API routes are simpler to manage than Cloud Functions for these use cases.

**Recommendation: Next.js + Supabase.**
Fallback: if the learning curve threatens the 2-month Phase 1 target, prototype in Firebase and migrate. Speed to first operator beats architectural purity.

> ⚠️ **[OWNER-LOCK candidate]:** Once this decision is finalised, the core stack choice will be locked. Changes after development starts require explicit owner sign-off and a CHANGELOG entry.

### 12.2 Agreed Stack

| Layer | Choice | Notes |
|---|---|---|
| Frontend | Next.js 14+ (App Router) | React, TypeScript |
| API / Backend | Next.js API Routes (same repo) | No separate backend server |
| Database | Supabase (PostgreSQL) | Hosted, free tier for v1 |
| Auth | Supabase Auth | Email for operators; magic link for drivers |
| File Storage | Supabase Storage | CSV uploads |
| WhatsApp / SMS | Twilio | WhatsApp Business API + SMS fallback |
| Payments | MB Way first → IBAN → Multibanco refs | Stripe later |
| Hosting | Vercel | Frontend + API routes, single deploy |
| Language | TypeScript (strict) | Frontend and backend unified |

### 12.3 Key Decisions Pending

- [ ] Twilio vs Meta direct API — cost per message in PT (OQ-009)
- [ ] CSV processing: confirm server-side via API route
- [ ] Mobile-first confirmed (operators likely on phone)
- [ ] Final stack sign-off by Daniel before `app/` development begins

---

## 13. Repository Structure

```
tvde-manager/
├── app/              ← Application code (starts AFTER validation sign-off)
├── landing/          ← Marketing landing page (built DURING validation)
├── docs/
│   ├── SPEC.md           ← This file
│   ├── OWNER-LOCK.md     ← Owner-lock convention and registry
│   └── interviews/       ← Operator interview notes
├── CHANGELOG.md
└── README.md
```

### Rules

- `landing/` may be worked on at any time
- `app/` is **blocked** until Section 17 (Validation Checklist) P0 items are signed off
- All documentation changes require a `CHANGELOG.md` entry

---

## 14. Product Revenue Gate

Feature development is gated on business revenue milestones.

The owner's independence threshold (leaving another employer) is **5,000€ net/month**.  
In-platform payments (F-018) only make sense to build when there is meaningful revenue to move through the platform.

### Revenue Milestones

| Milestone | Net MRR | Unlocks |
|---|---|---|
| M0 | 0€ | Validation phase + landing page |
| M1 | 500€/month | v1 app development starts |
| M2 | 2,000€/month | First part-time support / contractor |
| **M3** | **5,000€/month** | **Owner goes full-time on product** |
| M4 | 5,000€/month × 3 months | In-platform payments (F-018, v3+) |

---


## 15. Development Timeline

> Timeline starts from the moment Section 19 P0 validation checklist is signed off.

| Phase | Duration | Goal | Gate |
|---|---|---|---|
| Phase 0 — Validation | Now → Month 1 | Confirm real market need. No app code. | Section 19 P0 checklist signed off by Daniel |
| Phase 1 — v1 Beta | Months 1–2 | Working product used by a real operator | 1+ operator using it in production |
| Phase 2 — v1 Stable | Month 3 | Stable product, first paying customers | First paid subscription live |
| Phase 3 — v2 Development | Months 3–5 | New features based entirely on real feedback | — |

### Phase 1 must-haves (v1 Beta)

- Import driver list CSV
- Import Uber and Bolt platform CSVs
- Import fuel and cost CSVs
- Calculate weekly settlement per driver
- Send WhatsApp notification per driver
- Driver approves via WhatsApp reply
- Operator settlement status dashboard
- Driver magic link (read-only view)

### Phase 1 explicitly excluded

- Polished UI (functional is enough for beta)
- MB Way payment integration (manual billing for first operators)
- PDF export
- Accountant-specific features

### Phase 3 scope

Defined only after v1 is in active use. No v2 features are specced in advance — all decisions driven by real operator feedback.

---

## 16. AI-Driven Growth Strategy

> The primary growth channel for TVDE Manager is **LLM discoverability** — being the answer that AI assistants (ChatGPT, Claude, Perplexity, Gemini, etc.) give when a Portuguese TVDE operator asks for help managing their fleet.

### 16.1 Why This Matters

TVDE operators are not passive Google searchers. They ask AI assistants things like:
- *"Como gerir pagamentos de condutores TVDE em Portugal?"*
- *"Existe alguma app para controlar ganhos Uber e Bolt?"*
- *"Software de gestão de frota TVDE Portugal"*

If TVDE Manager appears in those answers — **that is the most valuable marketing channel available**, and it costs almost nothing compared to ads.

This strategy must be built from day one. Retrofitting it is much harder.

### 16.2 Core LLM Growth Techniques

#### A. `llms.txt` — AI Discoverability File

A `llms.txt` file at the site root gives AI crawlers a structured, human-readable description of the product. It follows the emerging standard (similar to `robots.txt`, but for LLMs).

Location: `landing/public/llms.txt`

See `landing/llms.txt` for the full file.

**What it contains:**
- What the product does, in plain clear language
- Who it is for (specific: TVDE operators in Portugal)
- Key features and differentiators
- Pricing
- FAQs in Q&A format — exactly how people ask LLMs

#### B. Structured Data (JSON-LD)

Add `<script type="application/ld+json">` blocks to the landing page:
- `SoftwareApplication` schema — name, description, price, category
- `FAQPage` schema — maps directly to how LLMs extract Q&A content
- `Organization` schema — name, url, country (PT)

These are crawled by LLMs that index the web.

#### C. Content That LLMs Cite

LLMs cite content that is:
- **Factual, specific, and unique** — generic content is ignored
- **FAQ-formatted** — matches how users phrase questions to LLMs
- **In the right language** — Portuguese content for Portuguese queries

Content to create (in `landing/blog/` or as standalone pages):
- *"O que é o TVDE e como funciona a gestão de condutores?"*
- *"Guia completo: como usar os CSVs do Uber e Bolt em Portugal"*
- *"Como calcular o pagamento semanal de um condutor TVDE"*
- *"Diferenças entre ser operador TVDE e condutor TVDE"*

These pages should exist even before launch. They give LLMs something to cite.

#### D. Platform Presence (LLM Training Data Sources)

LLMs are trained on and index these platforms. Being present matters:

| Platform | Action | Priority |
|---|---|---|
| GitHub | **Private repo** — spec, pricing strategy and source code must not be public | — |
| Product Hunt | Launch when v1 is ready | P1 |
| Reddit (r/portugal, r/contabilidade, r/empreendedorismo_pt) | Honest validation questions — see Section 16.2H | P0 — start now |
| Hacker News (Show HN) | Post when launched | P1 |
| IndieHackers | Build-in-public journey | P0 — start now |
| Crunchbase | Free company listing | P1 |
| LinkedIn | Company page with product description | P1 |
| G2 / Capterra | List the product (even free tier) | P2 |

#### E. Build-in-Public (LLM-Indexed Content)

Posting publicly about building TVDE Manager creates a trail of indexed content that LLMs pick up. Post regularly on:
- **X/Twitter** — progress updates with specific keywords: "TVDE", "gestão de frota", "Portugal", "Uber Bolt CSV"
- **LinkedIn** — more detailed posts for the B2B operator audience
- **IndieHackers** — milestones, revenue updates (LLMs heavily index this)
- **GitHub README** — keep it detailed and keyword-rich

Rule: **always use the full product name** ("TVDE Manager") and specific keywords in every post. LLMs learn product names from repeated, consistent references.

#### F. LLM-Optimized FAQ on Landing Page

Add a visible FAQ section to the landing page with real questions operators ask:
- *"O TVDE Manager funciona com Uber e Bolt?"*
- *"Quanto custa por condutor?"*
- *"Como funciona a notificação para condutores?"*
- *"Preciso de instalar alguma coisa?"*
- *"Funciona para um único condutor?"*

These exact phrases, answered clearly, are what LLMs extract and cite.


#### H. Reddit — Honest Validation Questions (Not Promotion)

Reddit is one of the highest-quality LLM training data sources and also a genuine validation channel. The approach must be **completely honest** — no promotion, no product mentions, just real questions from someone building something and wanting to understand the market.

**Target subreddits:**
- r/portugal
- r/contabilidade (or equivalent PT accountant communities)
- r/empreendedorismo_pt (if active)
- Facebook groups for TVDE operators (not Reddit but same approach)

**Questions to post — draft templates:**

*Thread 1 — For accountants (contabilistas):*
> Trabalho com operadores TVDE e estou a tentar perceber: os contabilistas que gerem contas de operadores TVDE têm dificuldade em receber a informação sobre os ganhos semanais de cada condutor? Pedem relatórios específicos? Algum de vocês já teve clientes TVDE e pode partilhar como funciona esse processo?

*Thread 2 — For operators:*
> Sou operador TVDE com X condutores. Curioso: como é que outros operadores gerem os pagamentos semanais aos condutores? Usam folhas de cálculo, alguma app, fazem à mão? Pergunto porque estou a tentar perceber se é um problema comum ou se já há boas soluções.

*Thread 3 — Pricing signal:*
> Pergunta honesta: se existisse uma ferramenta que automatizasse a gestão de pagamentos TVDE (importar CSVs do Uber/Bolt, calcular o que cada condutor recebe, enviar por WhatsApp para confirmar) — quanto achavam justo pagar por condutor por semana? 2€? 4€? 10€? Ou não pagariam nada e preferiam continuar em Excel?

**Rules for posting:**
- Never mention TVDE Manager by name
- Never link to the landing page
- Be genuinely curious, not sales-y
- Engage with replies honestly — the goal is learning, not converting
- Save every reply — they are primary market research data
- If anyone asks "are you building this?" — be honest: yes, I'm exploring it

**What to do with the answers:**
- Log replies in `docs/interviews/reddit-[date].md`
- Pay special attention to: accountants who say they need this, operators who mention a price they'd pay, anyone who says "I already use X for this" (competitor signal)

#### G. Competitor Gap (Opportunity)

Currently, if someone asks an LLM about TVDE management software in Portuguese, the answer is likely generic or empty. **Being first to fill that gap is the entire strategy.** The Portuguese TVDE niche is small enough that consistent, specific content dominates quickly.

### 16.3 Implementation Checklist

| Task | When | Priority |
|---|---|---|
| Create `llms.txt` in landing root | Now (validation phase) | P0 |
| Add JSON-LD structured data to landing page | Now | P0 |
| Add FAQ section to landing page | Now | P0 |
| Keep GitHub repo **private** — use llms.txt + landing page for LLM indexing instead | Always | P0 |
| Start IndieHackers build-in-public thread | This week | P0 |
| Post honest validation questions on Reddit (operators + accountants) | Now | P0 |
| Write 3 SEO/LLM articles (Portuguese) | Before launch | P1 |
| Product Hunt launch | v1 launch | P2 |
| List on G2/Capterra | Post-launch | P2 |

### 16.4 Metrics to Track

- LLM mention tracking: monthly, ask ChatGPT/Claude/Perplexity in Portuguese "que software existe para gerir condutores TVDE em Portugal?" — record what they say
- Organic search clicks (Google Search Console)
- Referral traffic source breakdown (how many from AI chat, Reddit, IndieHackers)
- Waitlist signups by source (UTM parameters on all links)

---

## 17. Out of Scope (v1)

- Real-time trip tracking (GPS)
- Direct API integration with Uber/Bolt (requires partner program)
- Driver mobile app
- Accountant / multi-user roles
- Tax filing automation
- Vehicle maintenance scheduling
- Driver performance/rating tracking
- In-platform payments (F-018 — gated at M4)

---

## 18. Open Questions

> ⚠️ **Policy:** Open questions are not resolved by assumption. They wait for real market data — operator interviews, Reddit signals, or technical research. Assumptions written here are hypotheses only, clearly marked as such.

### Resolved

| # | Question | Resolution | Date |
|---|---|---|---|
| OQ-003 | Do operators need NIF-based invoicing? | **Yes — legally required.** Portuguese invoices must include the client's NIF even if the client does not specifically request it. NIF field is mandatory on all invoices we issue. | 2026-04-09 |
| OQ-005 | Weekly vs monthly billing? | **Weekly billing confirmed.** Operators work in weekly cycles; billing should match usage rhythm. | 2026-04-09 |
| OQ-006 | Should 4€ include IVA (23%)? | **No — price is VAT-exclusive.** 4€ + IVA (23%) = 4,92€/driver/week. Invoices must show the IVA line separately. | 2026-04-09 |
| OQ-008 | Should drivers have a login view? | **No login.** Replaced by permanent magic link per driver (see Section 9.6). No account needed. Operator shares the URL. Driver bookmarks it. | 2026-04-09 |

### Active — Awaiting Market Data

| # | Question | Hypothesis (⚠️ unvalidated) | How to resolve |
|---|---|---|---|
| OQ-001 | Exact Uber PT CSV format | — | Daniel to obtain real export from an operator |
| OQ-002 | Exact Bolt PT CSV format | — | Daniel to obtain real export from an operator |
| OQ-004 | Payment method at launch | Start MB Way only. Then add IBAN transfer + Multibanco reference codes. Stripe integration later, not day 1. | Operator interviews — does anyone refuse MB Way? |
| OQ-007 | Free trial duration + post-trial pricing | Hypothesis: first 2 months free (full product, no credit card), then full price from month 3. Secondary hypothesis: price may increase after trial period ends — the free period sets anchor, paid period is the real test. Do NOT decide until market price is validated. Consider: does a higher post-trial price feel fair to operators who got value during free period? | Decide after pricing validation (OQ-014 must be resolved first) |
| OQ-009 | Twilio WhatsApp cost per message in PT | ~0.05–0.10€/message estimated | Twilio pricing page + volume estimate |
| OQ-010 | How do operators handle driver disputes today? | Manually, by phone | Operator interviews |
| OQ-011 | Is 48h approval window right? | Probably yes for PT market | Operator interviews |
| OQ-012 | Should debt carry to next week automatically? | Yes — with operator confirmation | Operator interviews |
| OQ-013 | Would Portuguese accountants (contabilistas) use or recommend this — either as direct users OR as a distribution channel (recommending to their TVDE operator clients)? | Unknown — contabilistas could be a very efficient B2B channel: one accountant with 10 TVDE clients = 10 operators reached | Reddit posts + direct outreach to contabilistas (see Section 16.2H) |
| OQ-014 | Is 4€/week the right price, or is it perceived as too cheap or too expensive? | Unknown — needs market testing | Operator interviews + Reddit pricing thread |

---

## 19. Validation Checklist

> **`app/` development does not start until all P0 items are checked and signed off by Daniel.**

### P0 — Required before any app code

- [ ] 5+ operator interviews documented in `docs/interviews/`
- [ ] Uber PT CSV format obtained and mapped (OQ-001)
- [ ] Bolt PT CSV format obtained and mapped (OQ-002)
- [ ] 4€/week pricing confirmed acceptable by at least 3 operators
- [ ] Driver WhatsApp notification flow validated as useful
- [ ] Weekly settlement flow confirmed to match real operator workflow
- [ ] Landing page live with active waitlist
- [ ] **Owner sign-off: Daniel**

### P1 — Required before v1 public launch

- [ ] MB Way feasibility confirmed (OQ-004)
- [ ] Twilio cost per WhatsApp message confirmed (OQ-009)
- [ ] GDPR compliance approach reviewed
- [ ] 1+ operator willing to beta test
- [ ] IVA treatment of 4€ confirmed (OQ-006)

### P2 — Nice to have before launch

- [ ] Free trial duration decided after pricing validation (OQ-007)
- [ ] Debt carry-forward logic decided (OQ-012)
- [ ] Accountant validation answered (OQ-013)
- [ ] Payment method confirmed — MB Way, IBAN, Multibanco references (OQ-004)

### Resolved before v1 starts (no longer in checklist)

- [x] Driver access model decided — magic link, no login (OQ-008)
- [x] NIF on invoices — required by law (OQ-003)
- [x] Billing cycle — weekly confirmed (OQ-005)
- [x] IVA treatment — price is VAT-exclusive (OQ-006)

---

*This document is the single source of truth for all development decisions.*  
*Every change must be recorded in `CHANGELOG.md`.*
