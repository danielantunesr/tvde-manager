# AI Strategy — Gestor de Frota

**Version:** 0.1-draft
**Status:** In progress
**Last updated:** 2026-04-17
**Owner:** Daniel

---

## Purpose

This document defines how AI is used in this project across two dimensions:

1. **Development AI** — how AI tools (Claude Code, LLMs) are used to build the product
2. **Product AI** — how AI features are embedded into the product to deliver value to operators

Both dimensions must be cost-conscious. This document sets the rules.

---

## Part 1 — Development AI

### 1.1 Tools in use

| Tool | Purpose | Cost model |
|---|---|---|
| Claude Code (claude-sonnet-4-6) | Primary development assistant — code, spec, research | Per token (Anthropic API) |
| Claude Code (claude-haiku-4-5) | Fast, low-cost tasks — formatting, search, simple edits | Per token — ~5x cheaper than Sonnet |
| Claude Code (claude-opus-4-6) | Reserved for architectural decisions only | Per token — most expensive |

### 1.2 Model selection rules

Use the cheapest model that can do the job:

| Task type | Model to use |
|---|---|
| Codebase search, file reading, grep | Haiku |
| Writing/editing code, debugging | Sonnet |
| Spec review, architectural decisions, critical planning | Opus (only when Sonnet is insufficient) |
| Batch file edits, renaming, formatting | Haiku |
| Complex multi-step reasoning (data model, pricing logic) | Sonnet first, escalate to Opus only if needed |

**Rule:** Never use Opus for tasks Sonnet can handle. Never use Sonnet for tasks Haiku can handle.

### 1.3 Prompt caching

All production Claude API calls must use prompt caching where the Anthropic SDK supports it.

Priority targets for caching:
- System prompts (operator context, driver list, platform config)
- Static document context (SPEC, CSV format definitions)
- Repeated tool descriptions in multi-turn agent loops

Cache TTL is 5 minutes for standard cache. For long-running sessions, structure prompts so the cached prefix doesn't change between turns.

### 1.4 OWNER-LOCK applies to AI-generated code

AI assistants (Claude Code, Copilot, etc.) must never modify any section marked `[OWNER-LOCK:START]` / `[OWNER-LOCK:END]`. See `docs/OWNER-LOCK.md`.

This applies especially to:
- Billing and pricing calculation logic
- Weekly settlement calculation (core algorithm)
- WhatsApp message templates sent to drivers

### 1.5 Agent orchestration

See `AGENTS.md` for the full agent framework. Summary of cost constraints:

- Subagents run in background only when the task is genuinely parallelizable
- Subagents use git worktree isolation — no shared state pollution
- Each subagent action must be logged in CHANGELOG.md
- Subagents never touch OWNER-LOCK sections
- Prefer one focused agent over multiple chained agents for simple tasks

---

## Part 2 — Product AI

### 2.1 Philosophy

AI in the product must:
- Solve a problem the operator actually has (not be AI for AI's sake)
- Be invisible when it works — the operator should feel the product is smart, not that they're "using AI"
- Never add latency to time-critical flows (settlement calculation, WhatsApp send)
- Have a hard cost ceiling per operator per month

### 2.2 Candidate AI features (to investigate)

The following are hypotheses. None are confirmed for v1. Each requires validation before implementation.

---

#### AI-001 — CSV format auto-detection

**What it does:** When an operator uploads a CSV from Uber or Bolt, the system detects the platform and column mapping automatically — no manual setup required.

**Why it matters:** Uber PT and Bolt PT change their CSV formats occasionally. A static parser breaks silently. An AI-assisted detector adapts.

**Implementation approach:**
- Rule-based first: fingerprint known column headers (fast, free, zero LLM cost)
- LLM fallback: only invoke an LLM if fingerprinting fails (unknown format version)
- Model: Haiku (low cost, task is classification not reasoning)
- Expected cost: near zero — most uploads will be handled by rules

**Priority:** P0 (required for v1 — but implement rule-based first)

**Research needed:**
- [ ] Obtain real CSV samples from Uber PT and Bolt PT (see SPEC.md OQ-001, OQ-002)
- [ ] Map all known column name variations across format versions
- [ ] Determine failure rate of rule-based approach before investing in LLM fallback

---

#### AI-002 — Settlement anomaly detection

**What it does:** Before sending a settlement to a driver via WhatsApp, the system flags unusual values — e.g., a driver's weekly amount is 60% below their 4-week average, or a cost entry is 3x the usual value.

**Why it matters:** Operators make calculation errors. A driver dispute after the fact is worse than catching it before sending. This is a trust-builder.

**Implementation approach:**
- Statistical baseline: compute rolling average per driver over last 4 weeks
- Flag if deviation exceeds configurable threshold (e.g., >30% below average)
- No LLM required for basic anomaly detection — pure arithmetic
- LLM optional for natural language explanation of the anomaly to the operator

**Priority:** P1 (not required for v1 launch, but high value)

**Research needed:**
- [ ] Validate with operators in interviews: "If the system warned you before sending that a driver's amount looked unusual, would you find that useful?"
- [ ] Define threshold — operators may have legitimate reasons for high variance

---

#### AI-003 — Natural language settlement query

**What it does:** Operator types "how much did João receive last month?" or "which driver had the most disputes in Q1?" and gets an instant answer — without navigating tables.

**Why it matters:** Operators are not power users. They will not learn a reporting interface. A chat box they can type into is lower friction.

**Implementation approach:**
- Structured query over PostgreSQL (via Supabase)
- LLM translates natural language → SQL (or filters an API response)
- Model: Haiku for simple queries, Sonnet for complex multi-table joins
- Hard limit: max 10 queries/operator/day on free tier, 50/day on paid

**Priority:** P2 (post-v1, nice to have)

**Research needed:**
- [ ] Validate in interviews: do operators ask these questions today? How?
- [ ] Assess whether a simple filter UI covers 90% of cases (if so, skip AI entirely)

---

#### AI-004 — WhatsApp message personalization

**What it does:** Instead of a fixed template, the settlement WhatsApp message adapts slightly based on context — e.g., if the amount is lower than usual, adds a brief note explaining why (fuel cost spike that week).

**Why it matters:** Drivers dispute settlements when they don't understand the number. A brief explanation reduces friction.

**Implementation approach:**
- Template-first: most messages use a fixed Portuguese template (zero cost)
- AI only triggers when a cost deduction differs from the driver's 4-week average
- Model: Haiku — short text generation, no complex reasoning needed
- Cost estimate: ~100 tokens per message × 1000 drivers/week = ~100K tokens/week ≈ <€1/week at Haiku pricing

**Priority:** P2 (post-v1)

**Research needed:**
- [ ] Validate in interviews: "Would a brief explanation in the WhatsApp reduce driver disputes?"
- [ ] Confirm operators are comfortable with AI-generated messages to their drivers

---

### 2.3 AI cost ceiling per operator

**Rule:** AI inference cost must never exceed 5% of operator revenue for Gestor de Frota.

At 4€/driver/week (working hypothesis), a 10-driver operator generates ~€160/month.
5% ceiling = €8/month in AI inference costs for that operator.

Practical implication: bulk of AI usage must be rule-based or cached. LLM calls are the exception, not the default.

| Feature | Expected AI cost/operator/month | Status |
|---|---|---|
| AI-001 CSV auto-detection | <€0.10 (most handled by rules) | Acceptable |
| AI-002 Anomaly detection | €0 (pure arithmetic) | Acceptable |
| AI-003 NL query (50/day) | ~€0.50–€2 depending on query complexity | Monitor |
| AI-004 WhatsApp personalization | <€0.50 at 40 messages/week | Acceptable |
| **Total** | **<€3/operator/month estimated** | **Within ceiling** |

---

### 2.4 What AI will NOT do in v1

The following are explicitly out of scope for v1:

- **Predictive analytics** — forecasting driver earnings, churn prediction, etc.
- **Automated dispute resolution** — AI mediating between operator and driver
- **Invoice generation via AI** — invoices are generated by deterministic logic, not LLM
- **Voice or image input** — v1 is text and CSV only
- **Autonomous settlement approval** — a human operator always initiates each settlement cycle

---

## Part 3 — Investigation Roadmap

Before implementing any AI feature, the following research must be completed:

### Phase 0 — CSV format research (blocks v1)

- [ ] **OQ-001:** Obtain real Uber PT CSV export — recruit an operator to share a sample (anonymized). Document all column names and format version.
- [ ] **OQ-002:** Obtain real Bolt PT CSV export — same approach.
- [ ] Build a reference map of known column variations per platform.
- [ ] Determine: can rule-based fingerprinting handle 95%+ of real uploads? If yes, LLM fallback is optional. If no, LLM fallback is P0.

### Phase 1 — Anomaly detection baseline (post-v1 launch)

- [ ] After 4 weeks of live settlement data, compute per-driver variance baselines.
- [ ] Define alert threshold with real data, not assumptions.
- [ ] Ship as a non-AI feature first (simple threshold check), then add LLM explanation layer if operators find alerts useful.

### Phase 2 — Query interface (post product-market fit)

- [ ] Only investigate if operators report frustration with the reporting UI.
- [ ] Do not build speculative AI features — wait for evidence of the problem.

---

## Change Log

| Date | Change | Author |
|---|---|---|
| 2026-04-17 | Document created — initial draft covering development AI, product AI candidates, cost ceiling, investigation roadmap | Daniel + Claude |
