# 🔐 OWNER-LOCK Convention

**This document defines the `[OWNER-LOCK]` system for the Gestor de Frota project.**

---

## Purpose

Some sections of code contain critical logic that must **never be modified by AI assistants or collaborators** without explicit written approval from the repository owner (Daniel).

This exists because:
- AI tools can hallucinate changes to sensitive sections
- Some business logic is intentionally opinionated and must remain stable
- Billing, pricing, and security-related code requires human review

---

## Convention

### In Code Files

Surround protected sections with these exact markers:

```javascript
// ⚠️ [OWNER-LOCK:START] ref:OL-001
// Description: Weekly price calculation — DO NOT MODIFY
// Locked by: Daniel | Date: 2026-04-08
// Reason: Core pricing logic. Any change requires explicit owner approval.

const PRICE_PER_DRIVER_PER_WEEK = 2.00; // EUR, exc. IVA
// ... protected code ...

// ⚠️ [OWNER-LOCK:END] ref:OL-001
```

### In Config / YAML / SQL Files

```yaml
# ⚠️ [OWNER-LOCK:START] ref:OL-002
# Description: Billing cycle definition
# ... protected config ...
# ⚠️ [OWNER-LOCK:END] ref:OL-002
```

---

## Rules for AI Assistants

When working in this repository, AI assistants (Claude, Copilot, etc.) **must**:

1. **Never modify** any line between `[OWNER-LOCK:START]` and `[OWNER-LOCK:END]`
2. **Never suggest** refactoring or reformatting locked sections
3. **Stop and ask the owner** if a task requires changing a locked section
4. **Acknowledge** the lock if asked to modify nearby code

If a task cannot be completed without touching a locked section, the AI must say:  
> *"This task requires modifying a locked section (ref: OL-XXX). Please review and approve the change manually."*

---

## Registry of Locked Sections

| Ref | File | Description | Locked Date |
|---|---|---|---|
| *(none yet — added as code is written)* | | | |

---

## Adding a New Lock

1. Choose the next available `OL-XXX` number from the registry above
2. Add the markers around the code
3. Add an entry to the registry table in this file
4. Record the lock in `CHANGELOG.md`

---

## Removing or Modifying a Lock

Only the owner (Daniel) may:
- Remove a `[OWNER-LOCK]` marker
- Modify code within a locked section
- Change the description or reason of a lock

Any such change must be recorded in `CHANGELOG.md` with the tag `[OWNER-LOCK-CHANGE]`.

---

## Linting (Future)

A pre-commit hook can be added to detect if locked sections were modified:

```bash
# .github/hooks/pre-commit (planned for v1)
# Detects changes to OWNER-LOCK sections and blocks commit
```

*(Not implemented yet — added to backlog)*
