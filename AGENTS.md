# Agent Orchestration Framework

**Author:** Daniel  
**Version:** 0.1.0-draft  
**Status:** Design phase — framework not yet chosen  
**Scope:** General — applies to any software project, not specific to TVDE Manager  

---

## Purpose

This document defines a general approach to building software using **multiple AI agents**, each owning a specific domain, coordinated by an orchestrator. The goal is to work faster, with less context switching, and with a clear visual picture of what is happening at any moment.

This is a **reusable framework**. The agent structure adapts per project, but the principles, roles, and conventions stay the same.

---

## Table of Contents

1. [Core Principles](#1-core-principles)
2. [Agent Roles](#2-agent-roles)
3. [Orchestrator](#3-orchestrator)
4. [How a Task Flows](#4-how-a-task-flows)
5. [Visual Interface Concept](#5-visual-interface-concept)
6. [Human-in-the-Loop Touchpoints](#6-human-in-the-loop-touchpoints)
7. [Conventions All Agents Must Follow](#7-conventions-all-agents-must-follow)
8. [Project-Specific Agent Map](#8-project-specific-agent-map)
9. [Framework Choice](#9-framework-choice)
10. [Open Questions](#10-open-questions)

---

## 1. Core Principles

**1. One agent, one domain.**  
Each agent has a clearly bounded area of responsibility. It does not touch other agents' territory unless explicitly delegated to.

**2. The orchestrator routes, it does not implement.**  
The orchestrator breaks down tasks, assigns them to the right agent, and resolves conflicts. It does not write features itself.

**3. The owner approves, agents propose.**  
Agents produce output. The owner (human) reviews and approves before anything merges into the main branch. No agent has unilateral merge rights.

**4. Every action is logged.**  
Every agent action that touches the codebase produces a log entry (CHANGELOG or equivalent). Nothing is invisible.

**5. Locked sections are sacred.**  
Any codebase using the `[OWNER-LOCK]` convention (see `docs/OWNER-LOCK.md` in a project repo) is strictly off-limits to all agents. If a task requires touching a locked section, the agent stops and asks the owner.

**6. Agents are stateless between sessions.**  
An agent does not remember previous sessions. All state lives in the codebase, the task queue, and the spec. Agents read the spec before acting.

---

## 2. Agent Roles

### Standing Roles (present in every project)

#### 🧭 Orchestrator
- Reads the spec and backlog
- Breaks features into tasks
- Assigns tasks to the right domain agent
- Monitors progress and resolves blockers
- Escalates to the owner when blocked by ambiguity or a locked section
- Does **not** implement features

#### 📐 Architect Agent
- Owns the high-level structure: folder layout, module boundaries, data model
- Reviews decisions that span multiple domains
- Updates the spec's technical architecture section when decisions change
- Acts before feature agents start — defines the shape of the thing to be built

#### 📝 Spec Agent
- Keeps the spec in sync with what is actually being built
- Flags when an implementation diverges from the spec
- Updates CHANGELOG with every significant decision
- Does **not** make product decisions — raises them to the owner

#### 🔒 Review Agent
- Reviews all agent output before it is presented to the owner
- Checks for: spec compliance, OWNER-LOCK violations, missing CHANGELOG entries, obvious bugs
- Can reject output and send it back to the domain agent with feedback
- Is the last gate before owner review

### Domain Roles (defined per project — see Section 8)

Domain agents are scoped to a specific area of the codebase. Each project defines its own domain agents based on its natural boundaries.

Examples of domain agent types:
- **Data Agent** — schema, migrations, database queries
- **API Agent** — server-side endpoints, business logic, validation
- **UI Agent** — frontend components, pages, interactions
- **Integration Agent** — third-party services (payments, messaging, etc.)
- **Test Agent** — writes and runs tests for completed features
- **Docs Agent** — README, user-facing documentation

---

## 3. Orchestrator

The orchestrator is the central coordinator. It is the only agent that communicates with all other agents.

### Responsibilities

- **Intake:** Receives a feature request or task from the owner
- **Decomposition:** Breaks it into domain-specific subtasks
- **Assignment:** Routes subtasks to the correct domain agent(s) in the right order
- **Dependency management:** Knows which agent must finish before another can start (e.g. Data Agent before API Agent)
- **Conflict resolution:** If two agents need to touch the same file, the orchestrator sequences them and merges their outputs
- **Escalation:** Stops and asks the owner when: the task is ambiguous, a locked section would be touched, or two valid approaches exist

### What the orchestrator does NOT do

- Does not write code or content
- Does not make product decisions
- Does not bypass the Review Agent
- Does not touch `[OWNER-LOCK]` sections

### Orchestrator Task Decomposition Example

Input from owner:
> "Add weekly settlement calculation for a driver"

Orchestrator breaks this into:

```
1. [Architect Agent]  Confirm data model covers all needed fields
2. [Data Agent]       Write migration for WeeklySettlement table
3. [API Agent]        Implement calculation endpoint
4. [Test Agent]       Write unit tests for the calculation
5. [Review Agent]     Review all output
6. [Owner]            Approve and merge
```

---

## 4. How a Task Flows

```
Owner
  │
  ▼
Orchestrator ──→ Architect Agent (if structural decisions needed)
  │
  ├──→ Domain Agent A (e.g. Data Agent)
  │         │
  │         ▼
  │    Domain Agent B (e.g. API Agent) ← depends on A
  │         │
  │         ▼
  │    Domain Agent C (e.g. UI Agent) ← depends on B
  │
  ▼
Review Agent ──→ [back to domain agent if rejected]
  │
  ▼
Owner review & approval
  │
  ▼
Merged / deployed
```

### Parallel vs Sequential

- Agents that have no shared files can run **in parallel** (e.g. UI Agent and Test Agent can work simultaneously on different files)
- Agents that share files run **sequentially**, ordered by the orchestrator
- The orchestrator is responsible for identifying parallelism opportunities

---

## 5. Visual Interface Concept

A dashboard that shows the current state of all agents in real time. The owner can see at a glance what is happening and where attention is needed.

### Layout Concept — Kanban Board

```
┌─────────────────────────────────────────────────────────────────────┐
│  PROJECT: TVDE Manager  │  Week of Apr 14  │  Active agents: 3      │
├──────────────┬───────────────────┬──────────────────┬───────────────┤
│   BACKLOG    │   IN PROGRESS     │   REVIEW         │   DONE        │
├──────────────┼───────────────────┼──────────────────┼───────────────┤
│              │ 🗄 Data Agent      │ 🔒 Review Agent   │               │
│ Feature: PDF │ Task: migrations  │ Task: settlement │ ✅ Magic link  │
│ export       │ Files: schema.sql │ API              │ ✅ CSV import  │
│              │ Status: running   │ Status: checking │               │
│              │                   │                  │               │
│ Feature: MB  │ 🔌 API Agent       │                  │               │
│ Way payments │ Task: settlement  │                  │               │
│              │ calculation       │                  │               │
│              │ Files: settle.ts  │                  │               │
│              │ Status: waiting   │                  │               │
│              │ for Data Agent    │                  │               │
├──────────────┴───────────────────┴──────────────────┴───────────────┤
│  ⚠️  NEEDS OWNER ATTENTION                                           │
│  Review Agent flagged: settlement formula touches candidate          │
│  OWNER-LOCK section. Awaiting approval to proceed.  [REVIEW] [SKIP] │
└─────────────────────────────────────────────────────────────────────┘
```

### Card Contents (per agent)

Each card shows:
- Agent name and type
- Current task name
- Files currently being modified
- Status: `waiting` / `running` / `blocked` / `review` / `done`
- Blocker reason (if blocked)
- Time on current task

### Alert Bar

A persistent bar at the bottom shows items that need owner attention:
- OWNER-LOCK section flagged
- Agent blocked on ambiguous spec
- Review Agent rejected output (shows reason)
- Long-running tasks (possible agent stuck)

### Implementation

This interface is a separate tool — not part of the project being built. Options:
- A simple web app (React/Next.js) that reads agent state from a shared JSON file or database
- A terminal UI (TUI) for CLI-first workflow
- Integrated into the chosen orchestration framework's UI (if it has one)

> ⬜ **To decide:** Which form — web dashboard, TUI, or framework-native UI?

---

## 6. Human-in-the-Loop Touchpoints

The owner is not a passive observer. These are the moments where human judgment is required:

| Trigger | What the agent does | What the owner does |
|---|---|---|
| Task received | Orchestrator decomposes and starts | Owner receives a summary of the plan before execution (optional confirm) |
| OWNER-LOCK section encountered | Agent stops immediately | Owner reviews, either unlocks or provides an alternative approach |
| Ambiguous spec | Agent stops and asks a specific question | Owner answers; agent resumes |
| Review Agent rejects | Agent output blocked, reason shown | Owner can override or send back to domain agent |
| Feature complete | Review Agent passes | Owner reviews final output before merge |
| Architectural decision needed | Architect Agent presents options | Owner chooses |
| All tasks done | Orchestrator marks feature complete | Owner signs off and triggers deploy |

**The owner can also intervene at any time:**
- Pause a running agent
- Reprioritize the backlog
- Cancel a task
- Directly edit an agent's output before merge

---

## 7. Conventions All Agents Must Follow

These apply to every agent in every project, without exception.

### Code Conventions

- Respect `[OWNER-LOCK]` markers — never modify code between `[OWNER-LOCK:START]` and `[OWNER-LOCK:END]`
- Never delete files — deprecate and mark for removal instead
- Never rename public interfaces without explicit orchestrator instruction
- Commit messages follow: `type(scope): description` (e.g. `feat(settlement): add weekly calculation endpoint`)

### Documentation Conventions

- Every meaningful code change gets a CHANGELOG entry
- CHANGELOG entries are written by the Spec Agent (not the domain agent)
- Spec Agent flags when implementation diverges from spec — it does not silently update the spec

### Review Conventions

- Review Agent checks every output before owner sees it
- Review checklist (minimum):
  - [ ] No OWNER-LOCK violations
  - [ ] CHANGELOG entry present
  - [ ] No files from outside the agent's domain modified without orchestrator approval
  - [ ] Spec compliance — does this match what SPEC.md describes?
  - [ ] Tests written or updated (if Test Agent is active)

---

## 8. Project-Specific Agent Map

Each project defines its own domain agents. This section is filled in per project.

### Template

```
Project: [Name]
Orchestration framework: [TBD]

Agents:
  Orchestrator:     [model / instance]
  Architect:        [model / instance]
  Spec:             [model / instance]
  Review:           [model / instance]
  
  Domain agents:
  - [Agent name]:   [Domain description] | Files owned: [glob pattern]
  - [Agent name]:   [Domain description] | Files owned: [glob pattern]
  ...
```

### TVDE Manager — Agent Map (draft)

```
Project: TVDE Manager
Orchestration framework: Claude Code — native Agent tool (see Section 9)

Agents:
  Orchestrator:     Main Claude Code conversation session (Daniel + Claude)
  Architect:        Background subagent (general-purpose), spawned when structural decisions needed
  Spec:             Background subagent (general-purpose), owns docs/SPEC.md updates + CHANGELOG
  Review:           Background subagent (general-purpose), sequential gate after domain agents

  Validation-phase agents (active now — before Section 19 P0 sign-off):

  - Validation Agent:   Market validation tasks — NOT product code
                        Files: docs/interviews/**
                               docs/validation/**
                               public/llms.txt
                        Does NOT touch: src/app/** (product code), app/lib/**
                        Outputs: drafted documents for Daniel to review and act on
                        Note: Reddit posts are drafted by this agent, posted by Daniel.
                              Interviews are templated by this agent, conducted by Daniel.

  - Landing Agent:      Public-facing pages and waitlist infrastructure
                        Files: src/app/page.tsx
                               src/app/layout.tsx
                               src/app/api/waitlist/**
                               public/**
                        Does NOT touch: src/app/(dashboard)/**, app/lib/**
                        Note: Active during validation phase. After product launch,
                              this agent is merged into Dashboard Agent scope.

  - Growth Agent:       Distribution, discoverability, community presence
                        Files: public/llms.txt (shared with Validation Agent during validation)
                               docs/growth/**
                               src/app/(marketing)/**  (future SEO pages)
                        Does NOT touch: app/**, billing/**, settlement/**
                        Note: Defined now, activated after validation sign-off.
                              Validation Agent hands off to Growth Agent at product launch.

  Product agents (blocked until Section 19 P0 sign-off):

  - CSV Agent:          CSV parsing, format detection, column mapping
                        Files: app/lib/csv/**, app/api/import/**

  - Settlement Agent:   Weekly settlement calculation, agreed values
                        Files: app/lib/settlement/**, app/api/settlement/**
                        ⚠️ OWNER-LOCK candidate — financial formula

  - Notification Agent: Twilio WhatsApp/SMS send + receive + webhook
                        Files: app/lib/notifications/**, app/api/webhooks/**

  - Driver Agent:       Magic link, driver profile, read-only view
                        Files: app/lib/driver/**, app/d/[token]/**

  - Dashboard Agent:    Operator UI — weekly view, driver list, statuses
                        Files: app/(dashboard)/**

  - Billing Agent:      MB Way, IBAN, Multibanco refs, invoice PDF
                        Files: app/lib/billing/**, app/api/billing/**

  - Test Agent:         Unit + integration tests for all domains
                        Files: app/**/*.test.ts, app/**/*.spec.ts
```

---

## 9. Framework Choice

> ✅ **Decided: 2026-04-12**

```
Chosen framework:    Claude Code — native Agent tool (no additional npm packages)

Why:                 Claude Code can spawn isolated subagents in parallel using its
                     built-in Agent tool with run_in_background: true and git worktree
                     isolation. This requires zero infrastructure — no task queue DB,
                     no orchestration server, no additional dependencies.
                     The main Claude Code conversation IS the orchestrator.

How agents are run:  Each domain agent = one background Agent call, spawned by the
                     orchestrator (main session). Each agent gets its own git worktree
                     (isolated repo copy on a new branch). Multiple agents run
                     simultaneously when they own non-overlapping file globs.
                     Agents that share files are run sequentially by the orchestrator.
                     Blocker protocol: if blocked, agent returns:
                       BLOCKED: [reason]
                       NEEDS: [what is needed to unblock]
                       FILES_MODIFIED: [list or "none"]

State management:    Stateless between sessions. Shared truth lives in:
                       docs/SPEC.md       — product spec (read-only for domain agents)
                       AGENTS.md          — agent roles and file ownership
                       CHANGELOG.md       — append-only decision log
                     Intra-session state: agent output text is captured by the
                     orchestrator and passed as input to the next dependent agent.

Visual UI:           React artifact (Claude artifact) polling public/agent-status.json
                     for v1. The orchestrator writes JSON status entries per agent;
                     the artifact renders a live kanban board (Backlog / In Progress /
                     Review / Done / Blocked). No separate web server needed —
                     Next.js dev server serves public/ statically.

Reference repo:      /Users/danielantunes/Documents/repositories/teste/tvde-manager
```

---

## 10. Open Questions

| # | Question | Answer | Decided |
|---|---|---|---|
| AQ-001 | Which orchestration framework? | Claude Code native Agent tool. Main session = orchestrator. Background Agent calls with worktrees = domain agents. | 2026-04-12 |
| AQ-002 | Web dashboard vs TUI for the visual interface? | React artifact polling `public/agent-status.json`, served by Next.js dev server. No extra packages. | 2026-04-12 |
| AQ-003 | How are agent boundaries enforced technically? | File glob declared in AGENTS.md Section 8. Each agent prompt includes its authorized glob. Review Agent diffs for out-of-scope files. | 2026-04-12 |
| AQ-004 | Parallel agent execution — is the framework capable? | Yes. Single orchestrator message with multiple `run_in_background: true` Agent calls. Agents with non-overlapping file globs run simultaneously. | 2026-04-12 |
| AQ-005 | How does an agent communicate a blocker to the orchestrator? | Returns text starting with `BLOCKED: [reason] / NEEDS: [what] / FILES_MODIFIED: [list or "none"]`. Orchestrator parses the first word. | 2026-04-12 |
| AQ-006 | Where is the task queue stored? | Orchestrator's context window for v1. For v2: `tasks.json` in repo root, read at session start. | 2026-04-12 |
| AQ-007 | Can the visual interface be a Claude artifact (React)? | Yes. React artifact polls `public/agent-status.json`. Orchestrator writes JSON; artifact renders kanban. No separate packages needed. | 2026-04-12 |

---

*This document is general and reusable. Copy it into any new project and fill in Section 8 and Section 9.*
