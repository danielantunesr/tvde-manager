# 🚗 Gestor de Frota — Portugal

> Plataforma SaaS para gestão de condutores TVDE em Portugal. Importa CSVs do Uber e Bolt, calcula liquidações semanais por condutor, e envia notificações automáticas via WhatsApp.

---

## ⚠️ Filosofia de Desenvolvimento

Este projeto segue **Spec-Driven Development (SDD)**:  
**Nenhum código é escrito sem uma especificação validada primeiro.**

Cada feature deve existir em `docs/SPEC.md` antes de ser implementada.  
Cada alteração deve ser registada em `CHANGELOG.md`.

---

## 🔐 Convenção Owner-Lock

Secções de código marcadas com `[OWNER-LOCK]` só podem ser modificadas pelo dono do repositório.  
Assistentes de IA e colaboradores **não podem tocar** nestas secções.

```
// ⚠️ [OWNER-LOCK:START] ref:OL-001
// ... código protegido ...
// ⚠️ [OWNER-LOCK:END] ref:OL-001
```

Ver `docs/OWNER-LOCK.md` para a convenção completa e o registo de secções bloqueadas.

---

## 📁 Estrutura do Repositório

```
tvde-manager/
├── app/              ← Código da aplicação (bloqueado até validação estar completa)
├── landing/          ← Landing page de marketing (ativa durante a validação)
│   ├── index.html
│   └── llms.txt      ← Ficheiro de descoberta para AI/LLMs
├── docs/
│   ├── SPEC.md           ← Especificação completa do produto (fonte de verdade)
│   ├── OWNER-LOCK.md     ← Convenção de proteção de código
│   └── interviews/       ← Notas de entrevistas com operadores
├── AGENTS.md         ← Framework geral de orquestração de agentes de IA
├── CHANGELOG.md      ← Histórico completo de todas as alterações e decisões
└── README.md         ← Este ficheiro
```

---

## 💰 Modelo de Preços

**4€ por condutor/semana** (+ IVA 23% = 4,92€)  
Ver `docs/SPEC.md` secção 4 para o modelo completo e estratégia de validação de preço.

---

## 🤖 Orquestração de Agentes

Ver [`AGENTS.md`](AGENTS.md) para o framework geral de desenvolvimento com múltiplos agentes de IA.  
O mapa de agentes específico deste projeto está na secção 8 desse documento.

---

## 🚧 Estado

`FASE: Validação de Mercado` — Nenhum código de produção ainda.  
Ver checklist de validação em `docs/SPEC.md` secção 19.

**Próximos passos:**
- [ ] 5+ entrevistas com operadores TVDE
- [ ] Obter CSVs reais do Uber PT e Bolt PT
- [ ] Publicar landing page e abrir lista de espera
- [ ] Posts de validação no Reddit (r/portugal, r/contabilidade)
