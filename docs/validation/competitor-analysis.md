# Análise de Concorrentes — TVDE Manager

**Estado:** Rascunho inicial — campos marcados com "? — a verificar" requerem pesquisa adicional por Daniel.

**Última atualização:** 2026-04-12

---

## Como Pesquisar — Instruções para Daniel

Antes de preencheres os campos em branco ou verificares os marcados com "? — a verificar", usa as seguintes abordagens:

**1. Pesquisas Google em português (PT)**
Usa os seguintes termos de pesquisa no Google.pt (ou com localização definida para Portugal):
- `"gestão de frotas TVDE" software`
- `"liquidação semanal condutores" software portugal`
- `software gestão TVDE portugal`
- `"uber bolt" "gestão frota" portugal ferramenta`
- `fleet management software portugal TVDE`
- `driver payment management software portugal`
- `"weekly driver settlement" software`

**2. Perguntar nos contactos e entrevistas**
Em cada entrevista com operadores, pergunta diretamente:
- "Já procuraste alguma ferramenta para isto? O que encontraste?"
- "Conheces alguém que use algum software específico para gestão de frotas TVDE?"
- "Já algum contabilista te recomendou alguma ferramenta?"

**3. Perguntar a assistentes de IA**
Pergunta ao ChatGPT, Claude, e Perplexity (em português) questões como:
- "Que software existe para gerir condutores TVDE em Portugal?"
- "Como é que operadores TVDE em Portugal gerem pagamentos semanais a condutores?"
- "Existe alguma alternativa ao Excel para gestão de frotas TVDE Portugal?"

Regista o que dizem — também é pesquisa de mercado sobre visibilidade online dos concorrentes.

**4. Pesquisa nos subreddits e grupos Facebook após posting**
Após publicares os posts de Reddit/Facebook (ver `docs/validation/reddit-posts.md`), monitoriza menções a produtos específicos nos comentários. Qualquer ferramenta mencionada por um operador real é um concorrente direto a pesquisar.

**5. Google Play Store e App Store**
Pesquisa "TVDE", "gestão frota", "driver management" nas stores — pode haver apps móveis não encontradas via web.

---

## Template de Registo por Concorrente

Para cada concorrente novo que encontrares, copia e preenche esta secção:

```
### [Nome do produto]

| Campo | Valor |
|---|---|
| Nome | |
| URL | |
| O que faz | |
| Mercado-alvo (país/segmento) | |
| Preço | |
| Importação CSV | Sim / Não / ? — a verificar |
| Notificações WhatsApp/SMS | Sim / Não / ? — a verificar |
| Funcionalidades específicas TVDE | Sim / Não / ? — a verificar |
| Diferenciação vs TVDE Manager | |
| Notas | |
| Data de pesquisa | |
```

---

## Concorrentes Identificados

---

### 1. PHC Software

| Campo | Valor |
|---|---|
| Nome | PHC Software |
| URL | https://www.phcsoftware.com |
| O que faz | ERP e software de gestão empresarial português. Inclui módulos de faturação, contabilidade, RH e gestão de frotas. |
| Mercado-alvo | Portugal e mercados lusófonos. PMEs a grandes empresas. |
| Preço | ? — a verificar (licença + mensalidade, provavelmente centenas de euros/mês) |
| Importação CSV | ? — a verificar (provavelmente sim, via importação genérica) |
| Notificações WhatsApp/SMS | ? — a verificar (improvável nativamente) |
| Funcionalidades específicas TVDE | Não (ERP genérico, não TVDE-específico) |
| Diferenciação vs TVDE Manager | PHC é um ERP completo e caro para PMEs. TVDE Manager é focado, barato e específico para o fluxo de liquidação semanal de condutores. Os operadores TVDE tipicamente não querem um ERP. |
| Notas | Pode ser usado por contabilistas dos operadores TVDE, mas não pelo próprio operador para gestão diária. Verificar se tem módulo de gestão de frotas. |
| Data de pesquisa | 2026-04-12 |

---

### 2. Primavera BSS

| Campo | Valor |
|---|---|
| Nome | Primavera BSS |
| URL | https://pt.primaverabss.com |
| O que faz | Software de gestão empresarial e ERP para o mercado ibérico. Inclui faturação, contabilidade, RH e gestão. |
| Mercado-alvo | Portugal e Espanha. PMEs e médias empresas. |
| Preço | ? — a verificar (subscription mensal, provavelmente dezenas a centenas de euros) |
| Importação CSV | ? — a verificar |
| Notificações WhatsApp/SMS | Não (nativamente) |
| Funcionalidades específicas TVDE | Não |
| Diferenciação vs TVDE Manager | Mesmo argumento que PHC — ERP genérico vs. ferramenta específica para liquidação TVDE. Custo e complexidade muito superiores. |
| Notas | Popular entre PMEs portuguesas. Verificar preço de entrada. |
| Data de pesquisa | 2026-04-12 |

---

### 3. Fleetio

| Campo | Valor |
|---|---|
| Nome | Fleetio |
| URL | https://www.fleetio.com |
| O que faz | Plataforma de gestão de frotas baseada em cloud. Manutenção, inspeções, combustível, localização de veículos, gestão de condutores. |
| Mercado-alvo | EUA, mercado global. Frotas de médio a grande porte. Não Portugal-específico. |
| Preço | A partir de ~4 USD/veículo/mês (plano básico). ? — a verificar preço atual |
| Importação CSV | Sim (importação de dados de veículos e condutores) |
| Notificações WhatsApp/SMS | ? — a verificar (tem notificações, mas WhatsApp improvável) |
| Funcionalidades específicas TVDE | Não (gestão de frotas genérico, não específico para liquidação por condutor ou integração Uber/Bolt) |
| Diferenciação vs TVDE Manager | Fleetio foca-se em manutenção e logística de frota, não em cálculo de liquidação semanal por condutor nem em integração com plataformas TVDE. Interface em inglês. TVDE Manager resolve um problema diferente. |
| Notas | Bem conhecido globalmente. Provavelmente não é o que os operadores TVDE portugueses usam. Confirmar em entrevistas. |
| Data de pesquisa | 2026-04-12 |

---

### 4. Samsara

| Campo | Valor |
|---|---|
| Nome | Samsara |
| URL | https://www.samsara.com |
| O que faz | Plataforma de gestão de frotas com foco em telemática, rastreamento GPS, câmeras de segurança, e compliance. |
| Mercado-alvo | EUA e mercado global. Frotas comerciais de médio a grande porte. |
| Preço | ? — a verificar (licença por veículo, tipicamente caro, orientado a grandes frotas) |
| Importação CSV | ? — a verificar |
| Notificações WhatsApp/SMS | ? — a verificar |
| Funcionalidades específicas TVDE | Não |
| Diferenciação vs TVDE Manager | Foco em hardware/telemática e compliance, não em liquidação financeira semanal por condutor. Preço provavelmente muito superior ao que um operador TVDE pequeno pagaria. |
| Notas | Provavelmente irrelevante para operadores TVDE de 2–50 condutores. Incluso por completude. |
| Data de pesquisa | 2026-04-12 |

---

### 5. Sheets / Excel (não é um produto — é o "concorrente real")

| Campo | Valor |
|---|---|
| Nome | Microsoft Excel / Google Sheets |
| URL | microsoft.com/excel / sheets.google.com |
| O que faz | Folha de cálculo genérica. Os operadores TVDE constroem os seus próprios processos de liquidação semanal manualmente. |
| Mercado-alvo | Universal |
| Preço | 0€ (Google Sheets) / incluído no Microsoft 365 (~6–10€/mês) |
| Importação CSV | Sim (nativo) |
| Notificações WhatsApp/SMS | Não |
| Funcionalidades específicas TVDE | Não — o operador constrói tudo |
| Diferenciação vs TVDE Manager | Este é o verdadeiro concorrente. A maioria dos operadores TVDE usa Excel/Sheets. A proposta de valor do TVDE Manager é: automatizar o que hoje demora horas em Excel, eliminar erros de cálculo, e adicionar comunicação automática com condutores (que não existe em Excel). |
| Notas | Fundamental perceber em entrevistas quão customizado está o Excel de cada operador — quanto mais customizado, mais resistência à mudança. |
| Data de pesquisa | 2026-04-12 |

---

### 6. Apps específicas de TVDE — a pesquisar

| Campo | Valor |
|---|---|
| Nome | ? — a identificar |
| URL | ? |
| O que faz | Apps móveis ou web específicas para o mercado TVDE português — existência a confirmar |
| Mercado-alvo | Portugal / TVDE |
| Preço | ? |
| Importação CSV | ? |
| Notificações WhatsApp/SMS | ? |
| Funcionalidades específicas TVDE | ? |
| Diferenciação vs TVDE Manager | ? — a avaliar quando identificado |
| Notas | Pesquisar "TVDE app" e "gestão TVDE" na Google Play Store e App Store. Perguntar diretamente a operadores em entrevistas. Este campo é o mais importante a preencher — se existir uma app TVDE-específica no mercado português, é o concorrente direto mais relevante. |
| Data de pesquisa | A preencher |

---

## Resumo Comparativo

| Produto | Mercado PT | Preço aprox. | CSV Uber/Bolt | WhatsApp | TVDE-específico |
|---|---|---|---|---|---|
| PHC Software | Sim | Alto (ERP) | ? | Não | Não |
| Primavera BSS | Sim | Alto (ERP) | ? | Não | Não |
| Fleetio | Não | ~4 USD/veículo/mês | Sim (genérico) | ? | Não |
| Samsara | Não | Alto | ? | ? | Não |
| Excel / Sheets | Universal | 0–10€/mês | Sim | Não | Não |
| App TVDE PT | ? | ? | ? | ? | ? |
| **TVDE Manager** | **Sim** | **4€/condutor/semana** | **Sim** | **Sim** | **Sim** |

---

## Conclusão Provisória (a validar)

Com base na pesquisa inicial, não existe nenhum produto identificado que combine:
1. Foco no mercado TVDE português
2. Importação de CSV do Uber PT e Bolt PT
3. Cálculo automático de liquidação semanal por condutor
4. Notificação e aprovação via WhatsApp/SMS

O concorrente real é o Excel. Os concorrentes de categoria (ERP, gestão de frotas genérica) são demasiado caros e genéricos para este segmento.

**Próximos passos para Daniel:**
- [ ] Confirmar esta ausência de concorrência direta em entrevistas com operadores ("Já encontraste alguma ferramenta específica para isto?")
- [ ] Pesquisar Google Play / App Store com termos TVDE em português
- [ ] Perguntar aos assistentes de IA (ChatGPT, Perplexity) em português — se não mencionarem nada específico, isso confirma a oportunidade de posicionamento
- [ ] Actualizar este documento após cada entrevista com novos concorrentes mencionados
