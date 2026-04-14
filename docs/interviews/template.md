# Guia de Entrevista — Operadores TVDE

**Para uso interno de Daniel — não partilhar com o entrevistado**

**Objetivo:** Perceber se o processo manual de liquidação semanal de condutores TVDE é um problema real, quanto tempo custa, que ferramentas usam hoje, e se pagariam por uma solução automatizada.

**Duração alvo:** 20 a 30 minutos. Se a conversa fluir, deixa correr. Se o operador estiver com pressa, foca-te nas secções de Dor e Preço.

**Tom:** Conversa informal, curioso, sem agenda. Não estás a vender nada — estás genuinamente a tentar aprender. Se perguntarem o que estás a construir, podes dizer honestamente que estás a explorar se faz sentido construir uma ferramenta para este problema.

---

## Antes de começar — preparação

- [ ] Telemóvel ou papel para notas
- [ ] Saber o nome da pessoa e o tamanho aproximado da frota (se souberes de antemão)
- [ ] Ler a secção de notas no fim deste guia para preencheres depois da chamada

---

## 1. Aquecimento — contexto e perfil (3–5 min)

*Objetivo: perceber quem é a pessoa, o que faz, sem entrar ainda nas dores.*

- "Quanto tempo tens a operar em TVDE?"
- "Quantos condutores tens neste momento?"
- "Trabalhas com Uber, Bolt, ou ambos? Alguma outra plataforma?"
- "Tens uma empresa constituída ou operas como singular?"

*Nota interna: fleet size é importante para estimar receita potencial por operador. Um operador com 10 condutores = 40€/semana de receita.*

---

## 2. Fluxo atual — como fazem hoje (5–8 min)

*Objetivo: perceber o processo real, sem sugerir nada. Deixa o operador descrever o caos (ou a ausência de caos).*

- "Como fazes hoje para calcular o que cada condutor recebe ao fim da semana?"
- "Podes descrever-me o processo passo a passo, desde que recebes os dados do Uber/Bolt até pagares ao condutor?"
- "Quanto tempo te demora este processo, de início a fim? Por semana?"
- "Usas alguma ferramenta — Excel, Google Sheets, alguma app? Ou fazes à mão?"
- "Com que frequência cometes erros neste processo? Já houve problemas com condutores por causa de erros de cálculo?"

*Sonda se necessário:*
- "E os custos de combustível e outros — como é que os integras no cálculo?"
- "Tens um valor acordado fixo por semana com cada condutor, ou varia?"

---

## 3. Dor real — intensidade do problema (3–5 min)

*Objetivo: calibrar se isto é uma dor forte ou apenas uma inconveniência menor.*

- "Numa escala de 1 a 10, o quanto este processo te incomoda ou te tira tempo?"
- "Se pudesses eliminar esta tarefa completamente amanhã, quanto valeria para ti? Em tempo? Em dinheiro?"
- "Já procuraste alguma solução? Encontraste alguma coisa que se aproximasse do que precisas?"
- "Qual é a parte do processo que mais odeias?"

*Nota interna: resposta abaixo de 6/10 é sinal fraco. Resposta acima de 7/10 com resposta emocional = sinal forte de dor.*

---

## 4. Comunicação com condutores (3–5 min)

*Objetivo: validar o fluxo de notificação e aprovação por WhatsApp.*

- "Como é que comunicas o valor semanal a cada condutor? Usas WhatsApp, telefone, pessoalmente?"
- "Os teus condutores têm todos WhatsApp?"
- "Se enviasses o valor por WhatsApp e pedisses ao condutor para confirmar, eles fariam isso? Em quanto tempo habitualmente respondem a mensagens?"
- "Já alguma vez houve um condutor que contestou o valor calculado? Como resolveste?"
- "Uma janela de 48 horas para o condutor confirmar o valor parece realista para o teu caso?"

---

## 5. Preço — sensibilidade (3–5 min)

*Objetivo: testar disposição a pagar. Começar sempre em 4€. Só descer se houver resistência clara.*

- "Pagas por alguma ferramenta de gestão hoje? (Contabilista, software de gestão, apps, etc.) Quanto?"
- "Se existisse uma ferramenta que automatizasse tudo isto — importar os ficheiros do Uber e Bolt, calcular o valor de cada condutor, enviar por WhatsApp e registar a confirmação — o que achas que seria um preço justo por condutor por semana?"

*[Deixa o operador responder antes de sugerires qualquer número.]*

- "E se o preço fosse 4€ por condutor por semana — o que te parece?"
  - Se reação positiva: "Porquê achas que vale isso? O que esperarias receber por esse preço?"
  - Se reação negativa ou resistência: "E 3€ por condutor por semana?"
  - Se ainda resistência: nota o valor máximo que mencionam e passa à frente

- "A que custo deixaria de fazer sentido? Há um número em que definitivamente não pagarias?"

*Nota interna: se disserem 4€ sem hesitar, ótimo. Se disserem "demasiado caro", pergunta o que seria certo — não defends o preço.*

---

## 6. Formato CSV — auditoria técnica (2–3 min)

*Objetivo: confirmar se conseguem fornecer CSVs reais do Uber PT e Bolt PT.*

- "Quando exportas os dados do Uber/Bolt, recebes um ficheiro? Que formato é — CSV, Excel, PDF?"
- "Já exportaste alguma vez? Sabes como se faz?"
- "Estarias disponível para partilhar um exemplo desse ficheiro comigo (com dados fictícios ou anonimizados)? Seria muito útil para perceber o formato exato."

*Nota interna: este ponto é crítico para a viabilidade técnica. Se o operador não sabe como exportar ou nunca exportou, pode ser sinal de que a funcionalidade de importação de CSV tem fricção de adoção.*

---

## 7. Fecho — próximos passos (2–3 min)

*Objetivo: testar disposição a avançar e obter referências.*

- "Se existisse uma versão beta desta ferramenta — completamente grátis durante os primeiros 2 meses — estarias disposto a experimentar?"
- "Que funcionalidade seria obrigatória para teres para experimentares? Qual seria o mínimo aceitável?"
- "Conheces outros operadores TVDE que possam ter este problema? Podias apresentar-me?"
- "Posso entrar em contacto contigo mais tarde quando tiver algo concreto para mostrar?"

---

## 8. Perguntas abertas — se houver tempo

- "Há alguma coisa que eu não perguntei e que achasses relevante partilhar?"
- "O que é que faria desta ferramenta algo que recomendarias a outros operadores?"

---

---

## NOTAS DA ENTREVISTA

*(Preencher durante ou imediatamente após a chamada)*

**Data:** _______________
**Nome / alcunha:** _______________
**Número de condutores:** _______________
**Plataformas:** Uber / Bolt / Ambos / Outra: _______________

---

**Processo atual (resumo):**


---

**Nível de dor (1–10):** ___ / 10

**Citação mais forte (palavras exatas se possível):**


---

**Reação ao preço 4€/condutor/semana:**
- [ ] Positiva sem hesitar
- [ ] Positiva com reservas
- [ ] Negativa — mencionou: ___€ como valor aceitável
- [ ] Indiferente / não sabe

---

**Tem WhatsApp nos condutores?** Sim / Não / Maioria sim

**Janela de 48h parece realista?** Sim / Não / Depende

---

**Tem CSVs do Uber/Bolt?** Sim / Não / Não sabe exportar

**Disponível para partilhar sample CSV?** Sim / Não

---

**Referências (outros operadores a contactar):**


---

**Signal de compra (1–5):** ___ / 5
*(1 = não pagaria, 3 = talvez, 5 = quer experimentar agora)*

**Notas adicionais / surpresas / citações:**


---

**Próximo passo acordado:**

