export interface GuideSection {
  heading: string;
  body: string;
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  sections: GuideSection[];
  faq: GuideFaq[];
  relatedSlugs: string[];
}

export const guides: Guide[] = [
  {
    slug: "liquidacao-semanal-condutores-tvde",
    title: "Como calcular a liquidação semanal de condutores TVDE",
    seoTitle: "Liquidação Semanal Condutores TVDE: Guia Completo | TVDE Manager",
    metaDescription:
      "Aprende a calcular corretamente a liquidação semanal dos teus condutores TVDE. Ganhos brutos, deduções, valor acordado e acerto final — passo a passo.",
    intro:
      "A liquidação semanal é o processo central da operação TVDE: determinar quanto cada condutor recebe (ou deve) no final de cada semana. Feito manualmente em folhas de cálculo, é uma das tarefas mais propensas a erro de toda a operação. Este guia explica como fazer corretamente, do início ao fim.",
    sections: [
      {
        heading: "O que é a liquidação semanal TVDE",
        body: "A liquidação semanal é o acerto financeiro entre o operador e cada condutor ao fim de cada semana de trabalho. O operador recebe os ganhos brutos das plataformas (Uber, Bolt), deduz os custos associados ao veículo e ao condutor, e apura o valor final a pagar — ou a receber, caso o condutor fique em débito.\n\nEm Portugal, a maioria dos operadores TVDE trabalha com um modelo de valor acordado semanal: o condutor tem um montante fixo pré-estabelecido a pagar ao operador por semana (que cobre depreciação do veículo, seguro, manutenção, etc.), independentemente do que ganhou nas plataformas. O acerto final pode ser a favor do condutor ou do operador.",
      },
      {
        heading: "Os componentes da liquidação",
        body: "Para calcular a liquidação semanal de um condutor, precisas de quatro valores:\n\n1. Ganhos brutos — o total que o condutor gerou nas plataformas nessa semana (Uber + Bolt combinados, antes de qualquer dedução do operador).\n\n2. Custos operacionais — combustível, portagens, lavagens, e outros custos diretamente imputáveis ao condutor nessa semana. Estes são registados separadamente e deduzidos dos ganhos.\n\n3. Valor acordado semanal — o montante fixo que o condutor deve ao operador por semana. Este valor é negociado no início da relação e cobre a utilização do veículo.\n\n4. Acerto final — o resultado: (Ganhos brutos) − (Custos operacionais) − (Valor acordado) = valor a pagar ao condutor. Se o resultado for negativo, o condutor fica em débito e esse valor é transportado para a semana seguinte.",
      },
      {
        heading: "Exemplo prático de cálculo",
        body: "Considera o condutor João, com um valor acordado semanal de 400€.\n\nNa semana de 7 a 13 de abril:\n— Ganhos Uber: 620€\n— Ganhos Bolt: 180€\n— Total bruto: 800€\n— Combustível: 95€\n— Portagens: 18€\n— Total custos: 113€\n\nCálculo: 800€ − 113€ − 400€ = 287€ a pagar ao João.\n\nSe o João tivesse ganho apenas 480€ no total: 480€ − 113€ − 400€ = −33€. O João ficaria em débito de 33€, que seria somado ao valor acordado da semana seguinte.",
      },
      {
        heading: "Erros mais comuns na liquidação manual",
        body: "Os erros mais frequentes em operações manuais são: usar os ganhos líquidos das plataformas em vez dos brutos (as plataformas retêm comissões que não te pertencem, mas os ganhos brutos do condutor são a base correta); não registar todos os custos da semana antes de fechar a liquidação; calcular com valores da semana errada quando há atrasos no export dos CSVs; e não comunicar ao condutor o detalhe do cálculo, gerando disputas.\n\nA falta de um registo formal de cada liquidação é também um problema sério: sem auditoria, é impossível resolver disputas retroativamente.",
      },
      {
        heading: "Como comunicar a liquidação ao condutor",
        body: "A boa prática é enviar ao condutor um resumo escrito da liquidação antes de efectuar qualquer pagamento — idealmente com detalhe de cada componente. Por WhatsApp (ou SMS como fallback), o resumo deve incluir: período da semana, ganhos brutos por plataforma, cada custo deduzido, valor acordado, e o total final.\n\nO condutor deve ter a oportunidade de confirmar ou contestar antes de o pagamento ser processado. Uma janela de 48 horas é o padrão razoável para o mercado português.",
      },
    ],
    faq: [
      {
        q: "O valor acordado semanal inclui o IVA?",
        a: "Depende do contrato. Em Portugal, os serviços entre operador e condutor podem ou não estar sujeitos a IVA dependendo da natureza jurídica da relação. Consulta o teu contabilista para confirmar o tratamento correto no teu caso específico.",
      },
      {
        q: "O que acontece se o condutor não confirmar a liquidação?",
        a: "A liquidação fica em estado pendente. A boa prática é aguardar 48 horas e, se não houver resposta, tentar contacto direto. Se o condutor não responder de forma consistente, pode indicar um problema na relação de trabalho que convém resolver pessoalmente.",
      },
      {
        q: "Posso usar o Excel para gerir liquidações de 10 condutores?",
        a: "É possível, mas arriscado. Com 10 condutores e dois CSVs por semana (Uber + Bolt), o volume de dados e o risco de erro humano são significativos. A partir de 3-4 condutores, uma solução dedicada começa a justificar-se pelo tempo e pelos erros evitados.",
      },
      {
        q: "Como registro o débito de um condutor para a semana seguinte?",
        a: "O débito deve ser registado explicitamente — idealmente num documento partilhado ou sistema — e somado ao valor acordado da semana seguinte. Não basta guardar mentalmente: em caso de disputa, precisas de documentação.",
      },
    ],
    relatedSlugs: [
      "exportar-csv-uber-portugal",
      "exportar-csv-bolt-portugal",
      "disputas-pagamentos-condutores",
    ],
  },
  {
    slug: "exportar-csv-uber-portugal",
    title: "Como exportar os dados de ganhos do Uber Portugal (CSV)",
    seoTitle: "Exportar CSV de Ganhos Uber Portugal: Guia Passo a Passo | TVDE Manager",
    metaDescription:
      "Guia passo a passo para exportar o ficheiro CSV de ganhos semanais do Uber Portugal. Onde encontrar, como descarregar e o que significam as colunas.",
    intro:
      "Para calcular a liquidação semanal dos teus condutores, precisas dos dados de ganhos de cada plataforma. O Uber Portugal permite exportar esses dados em formato CSV a partir do portal de parceiros. Este guia explica exatamente onde encontrar essa opção e como interpretar o ficheiro.",
    sections: [
      {
        heading: "Aceder ao portal de parceiros Uber",
        body: "Os dados de ganhos dos condutores estão disponíveis no portal de parceiros Uber (partners.uber.com). Faz login com as credenciais da tua conta de operador — não confundir com a conta pessoal de passageiro ou de condutor individual.\n\nSe geres uma frota com vários condutores, deves ter acesso a uma conta de operador ou gestão de frota. Caso não tenhas acesso, contacta o suporte Uber para Portugal e solicita as permissões correctas para o teu tipo de conta.",
      },
      {
        heading: "Navegar até aos relatórios de ganhos",
        body: "Dentro do portal, procura a secção de Pagamentos ou Relatórios — o nome exacto pode variar consoante a versão do portal. O caminho típico é: Menu → Pagamentos → Relatórios de ganhos → Seleccionar período semanal.\n\nO Uber disponibiliza relatórios por semana (segunda a domingo). Selecciona a semana pretendida e escolhe a opção de exportação em CSV. O ficheiro será descarregado automaticamente.",
      },
      {
        heading: "Estrutura do ficheiro CSV do Uber Portugal",
        body: "O CSV do Uber Portugal contém tipicamente as seguintes colunas relevantes para a liquidação: nome do condutor, UUID do condutor (identificador único), período da semana, total de viagens, ganhos brutos da semana, gorjetas, e eventuais bónus ou ajustes.\n\nA coluna mais importante é os ganhos brutos — este é o valor que o condutor gerou antes de qualquer dedução da plataforma. É este valor que usas como base de cálculo, não os ganhos líquidos que o condutor recebe directamente do Uber.",
      },
      {
        heading: "Problemas comuns na exportação",
        body: "Alguns problemas frequentes: o relatório da semana actual só fica disponível após o fecho do ciclo de pagamentos (normalmente alguns dias após o fim da semana); condutores novos podem não aparecer no relatório se ainda não completaram viagens suficientes; e o formato das colunas pode mudar sem aviso quando o Uber actualiza o portal.\n\nGuarda sempre os CSVs originais num local seguro antes de os processar — são o teu registo auditável dos dados reportados pela plataforma.",
      },
      {
        heading: "Combinar com os dados do Bolt",
        body: "Para uma liquidação completa, precisas de combinar o CSV do Uber com o CSV do Bolt. O desafio é que os dois ficheiros têm formatos e colunas diferentes, e os identificadores de condutor não coincidem entre plataformas — tens de fazer o mapeamento pelo nome ou por um identificador interno que tu próprio geras.\n\nEste processo de combinação manual é uma das principais fontes de erro e demora nas operações com múltiplos condutores em múltiplas plataformas.",
      },
    ],
    faq: [
      {
        q: "Com que frequência estão disponíveis os relatórios Uber?",
        a: "Os relatórios semanais ficam disponíveis normalmente 2 a 3 dias úteis após o fim de cada semana de pagamento. O ciclo exacto depende do tipo de conta e dos acordos com o Uber Portugal.",
      },
      {
        q: "Posso exportar dados de múltiplos condutores num único ficheiro?",
        a: "Sim, se tiveres uma conta de gestão de frota configurada correctamente, o relatório consolida todos os condutores associados à tua conta num único CSV. Se cada condutor tem conta individual, tens de exportar separadamente.",
      },
      {
        q: "O CSV inclui as comissões retidas pelo Uber?",
        a: "O CSV inclui os ganhos brutos gerados pelo condutor e, dependendo da versão do relatório, pode incluir também a comissão Uber deduzida. Para a liquidação com o condutor, usa sempre os ganhos brutos como base de cálculo.",
      },
    ],
    relatedSlugs: [
      "exportar-csv-bolt-portugal",
      "liquidacao-semanal-condutores-tvde",
      "gestao-frota-tvde-portugal",
    ],
  },
  {
    slug: "exportar-csv-bolt-portugal",
    title: "Como exportar os dados de ganhos do Bolt Portugal (CSV)",
    seoTitle: "Exportar CSV de Ganhos Bolt Portugal: Guia Passo a Passo | TVDE Manager",
    metaDescription:
      "Guia passo a passo para exportar o ficheiro CSV de ganhos semanais do Bolt Portugal. Portal Bolt Business, onde encontrar os relatórios e como ler as colunas.",
    intro:
      "O Bolt Portugal disponibiliza relatórios de ganhos por condutor através do portal Bolt Business. O processo é semelhante ao do Uber mas com diferenças importantes no formato dos dados e na periodicidade dos relatórios. Este guia explica como exportar e interpretar o CSV do Bolt.",
    sections: [
      {
        heading: "Aceder ao Bolt Business Portal",
        body: "Os dados de ganhos do Bolt estão disponíveis em business.bolt.eu. Faz login com a conta de operador ou de empresa — não a conta pessoal de condutor. Se geriste o registo da tua frota directamente com o Bolt Portugal, deves ter recebido credenciais de acesso aquando do onboarding.\n\nCaso não tenhas acesso ao portal ou não encontres a secção de relatórios, contacta o suporte Bolt para Portugal. A equipa local normalmente consegue configurar o acesso correcto em poucos dias.",
      },
      {
        heading: "Localizar e exportar os relatórios de ganhos",
        body: "Dentro do Bolt Business Portal, navega para a secção Finanças ou Relatórios — o caminho exacto depende da versão do portal activa para a tua conta. Procura por 'Driver earnings', 'Relatórios de condutores' ou equivalente.\n\nO Bolt permite filtrar por período (semana, mês, intervalo personalizado) e por condutor. Para a liquidação semanal, selecciona sempre o mesmo período semanal que usas para o Uber, para que os dados sejam comparáveis. Exporta em formato CSV ou Excel — preferência pelo CSV por ser mais fácil de processar programaticamente.",
      },
      {
        heading: "Estrutura do ficheiro CSV do Bolt",
        body: "O CSV do Bolt Portugal inclui tipicamente: identificador do condutor (interno Bolt), nome do condutor, número de viagens, ganhos brutos, gorjetas, e eventuais bónus de desempenho ou incentivos.\n\nUma diferença importante em relação ao Uber: o Bolt pode apresentar os dados em colunas com nomes em inglês mesmo para a versão portuguesa do portal. As colunas relevantes são normalmente 'Gross earnings' (ganhos brutos) e 'Driver ID' ou 'Driver email' para identificar o condutor.",
      },
      {
        heading: "Diferenças de formato entre Uber e Bolt",
        body: "Os dois CSVs raramente têm o mesmo formato. As principais diferenças são: nomes de colunas distintos para o mesmo conceito; identificadores de condutor incompatíveis (Uber usa UUID, Bolt usa ID próprio ou email); e períodos de corte semanal que podem não coincidir exactamente.\n\nQuando combines os dois ficheiros para calcular a liquidação, usa sempre o nome completo do condutor como chave de correspondência — é o único campo que tende a ser consistente nos dois sistemas. Mantém uma tabela de mapeamento entre os IDs das duas plataformas para cada condutor.",
      },
      {
        heading: "Periodicidade e disponibilidade dos dados",
        body: "O Bolt Portugal tipicamente disponibiliza os dados de ganhos com um desfasamento de 2 a 5 dias úteis após o fim de cada semana. Este prazo pode variar consoante o tipo de conta e o volume de operações.\n\nSe precisas dos dados mais rapidamente para fechar a liquidação da semana, verifica se o portal Bolt permite ver dados preliminares em tempo real — alguns tipos de conta têm acesso a um painel com dados actualizados diariamente, mesmo que o relatório formal só fique disponível mais tarde.",
      },
    ],
    faq: [
      {
        q: "E se o condutor trabalha em Uber e Bolt na mesma semana?",
        a: "Tens de combinar os ganhos das duas plataformas para obter o total bruto da semana. Some simplesmente os ganhos brutos de cada plataforma — o total é a base de cálculo da liquidação.",
      },
      {
        q: "O Bolt envia relatórios por email automaticamente?",
        a: "Alguns tipos de conta Bolt Business permitem configurar relatórios automáticos por email. Verifica nas definições do portal se esta opção está disponível — pode poupar tempo significativo na recolha semanal de dados.",
      },
      {
        q: "O que faço se o CSV do Bolt não inclui um condutor que trabalhou essa semana?",
        a: "Confirma que o condutor está correctamente associado à tua conta de operador no Bolt. Condutores que fizeram poucas viagens ou que completaram o onboarding no Bolt durante essa semana podem não aparecer no primeiro relatório. Contacta o suporte Bolt com o nome e ID do condutor.",
      },
    ],
    relatedSlugs: [
      "exportar-csv-uber-portugal",
      "liquidacao-semanal-condutores-tvde",
      "custos-operacionais-frota-tvde",
    ],
  },
  {
    slug: "gestao-frota-tvde-portugal",
    title: "Guia completo de gestão de frota TVDE em Portugal",
    seoTitle: "Gestão de Frota TVDE Portugal: Guia Completo para Operadores | TVDE Manager",
    metaDescription:
      "Tudo o que um operador TVDE em Portugal precisa de saber: licenciamento, gestão semanal, condutores, plataformas e ferramentas. Guia prático e direto.",
    intro:
      "Gerir uma frota TVDE em Portugal é muito mais do que ter carros na estrada. É uma operação com obrigações legais, gestão financeira semanal, comunicação com condutores e coordenação com múltiplas plataformas. Este guia cobre os fundamentos que qualquer operador deve dominar.",
    sections: [
      {
        heading: "O que é um operador TVDE e quais as suas responsabilidades",
        body: "TVDE significa Transporte de Veículos Descaracterizados a partir de Plataforma Eletrónica — o regime legal português para serviços de transporte por aplicação como Uber e Bolt, regulado pelo IMT (Instituto da Mobilidade e dos Transportes).\n\nO operador TVDE é a entidade licenciada que disponibiliza os veículos e, em muitos casos, gere também os condutores. As responsabilidades incluem: manter a licença TVDE activa, garantir que os veículos cumprem os requisitos legais (seguro, inspecção, características do veículo), gerir a relação contratual com os condutores, e cumprir obrigações fiscais e de reporte.",
      },
      {
        heading: "O ciclo semanal de uma operação TVDE",
        body: "A semana de um operador TVDE tem um ritmo previsível: durante a semana, os condutores trabalham nas plataformas; no final da semana (tipicamente sexta ou sábado), exportas os CSVs de ganhos do Uber e do Bolt; calculas a liquidação de cada condutor; envias o resumo a cada condutor para confirmação; e após confirmação, processas os pagamentos.\n\nEste ciclo repete-se todas as semanas, e com múltiplos condutores torna-se rapidamente o processo que mais tempo consome na operação. Operadores com 10 ou mais condutores reportam gastar 3 a 5 horas por semana apenas nesta tarefa.",
      },
      {
        heading: "Gerir condutores: contrato, onboarding e saída",
        body: "A relação entre operador e condutor deve ser formalizada por contrato escrito — que define o valor acordado semanal, as responsabilidades de cada parte, o que acontece em caso de acidente, e as condições de saída.\n\nO onboarding de um novo condutor implica: registá-lo nas plataformas associado à tua conta de operador, definir o valor acordado semanal, explicar o processo de liquidação e confirmação, e garantir que tem acesso ao veículo e documentação necessária. A saída de um condutor requer fechar liquidações pendentes e desassociá-lo das plataformas.",
      },
      {
        heading: "Ferramentas para gerir uma frota TVDE",
        body: "A maioria dos operadores começa com Excel ou Google Sheets. É suficiente para 1-3 condutores, mas os problemas escalam rapidamente: erros de cálculo, CSVs de formatos diferentes, falta de auditoria, e comunicação manual com cada condutor.\n\nPara frotas acima de 5 condutores, faz sentido investir numa solução dedicada que automatize a importação de CSVs, o cálculo da liquidação, e a notificação dos condutores. O custo de um erro de liquidação — ou de uma disputa por falta de documentação — supera rapidamente o custo de qualquer ferramenta.",
      },
      {
        heading: "Crescer a frota de forma sustentável",
        body: "O erro mais comum ao crescer uma frota TVDE é não documentar os processos enquanto a operação é pequena. Quando tens 2 condutores, guardas tudo na cabeça. Quando tens 15, o caos instala-se.\n\nAntes de adicionar cada novo condutor, garante que tens: um processo documentado de onboarding, um contrato padrão revisto por advogado, um sistema de liquidação que escale sem aumentar proporcionalmente o teu tempo, e uma forma de comunicar com todos os condutores de forma consistente.",
      },
    ],
    faq: [
      {
        q: "Preciso de licença TVDE para gerir uma frota?",
        a: "Sim. O operador TVDE tem de estar licenciado pelo IMT. A licença tem requisitos específicos sobre capitais próprios, seguros e tipo de veículos. Consulta o site do IMT ou um advogado especializado para os requisitos actuais.",
      },
      {
        q: "Posso ter condutores que trabalham apenas numa plataforma?",
        a: "Sim. Alguns condutores preferem trabalhar exclusivamente em Uber ou exclusivamente em Bolt. A liquidação simplifica-se — só precisas de um CSV por semana para esse condutor.",
      },
      {
        q: "Qual é o número mínimo de condutores para uma frota TVDE ser rentável?",
        a: "Depende dos custos fixos da operação e das margens por condutor. Como referência geral, operadores com menos de 5 condutores têm dificuldade em cobrir os custos administrativos e de licenciamento. A maioria das operações estáveis começa com 8-10 condutores.",
      },
    ],
    relatedSlugs: [
      "liquidacao-semanal-condutores-tvde",
      "obrigacoes-legais-operador-tvde",
      "escalar-frota-tvde",
    ],
  },
  {
    slug: "custos-operacionais-frota-tvde",
    title: "Como controlar os custos operacionais de uma frota TVDE",
    seoTitle: "Custos Operacionais Frota TVDE: Como Registar e Controlar | TVDE Manager",
    metaDescription:
      "Aprende a registar e controlar os custos operacionais de uma frota TVDE: combustível, portagens, manutenção, seguros e como imputá-los por condutor.",
    intro:
      "Os custos operacionais são o segundo maior factor na liquidação semanal dos condutores TVDE — a seguir aos ganhos brutos. Controlá-los com rigor é essencial para a rentabilidade da operação e para a transparência com os condutores.",
    sections: [
      {
        heading: "Tipos de custos numa operação TVDE",
        body: "Os custos de uma frota TVDE dividem-se em duas categorias: custos por veículo/condutor (imputáveis directamente a cada condutor na liquidação semanal) e custos gerais da operação (não imputáveis directamente a nenhum condutor específico).\n\nCustos por condutor: combustível, portagens, lavagens do veículo, multas de trânsito (se aplicável), reparações causadas pelo condutor.\n\nCustos gerais: seguro da frota, revisões programadas, pneus, documentação e licenciamento. Estes são normalmente cobertos pelo valor acordado semanal.",
      },
      {
        heading: "Registar o combustível correctamente",
        body: "O combustível é tipicamente o maior custo variável semanal. A melhor prática é usar um cartão de combustível por veículo — os extratos mensais servem como documentação fiscal e facilitam o apuramento semanal.\n\nSe usas dinheiro ou cartão pessoal para combustível, exige sempre recibo com a matrícula do veículo e guarda-os organizados por semana e por condutor. Sem recibos, não tens base documental para a dedução na liquidação.",
      },
      {
        heading: "Portagens e outros custos variáveis",
        body: "As portagens em Portugal são facilmente rastreáveis se usares um dispositivo Via Verde associado a cada veículo. O extrato mensal discrimina todas as passagens com data e hora, o que facilita o apuramento semanal.\n\nOutros custos variáveis a registar: parques de estacionamento (se o condutor paga em serviço), limpezas extraordinárias (por deterioração causada por passageiro — neste caso o custo pode ser recuperado junto da plataforma), e pequenas reparações urgentes.",
      },
      {
        heading: "Imputar custos por condutor na liquidação",
        body: "Cada custo variável da semana deve ser associado a um condutor específico antes de fechar a liquidação. O processo manual é: para cada recibo ou extrato da semana, identificar o veículo, o condutor que usou esse veículo nesse período, e o valor exacto.\n\nSe um veículo foi usado por dois condutores na mesma semana (turnos diferentes), o custo divide-se proporcionalmente pelas horas trabalhadas por cada um — ou por acordo prévio documentado no contrato.",
      },
      {
        heading: "Custos fixos cobertos pelo valor acordado",
        body: "O valor acordado semanal que o condutor paga ao operador deve ser calculado para cobrir os custos fixos imputáveis ao veículo: depreciação, seguro, revisões programadas, e uma margem para imprevistos.\n\nUm erro comum é calcular o valor acordado apenas com base nos custos actuais sem incluir uma provisão para manutenção futura. Quando o carro avaria ou precisa de pneus, o operador fica sem margem. Recomenda-se calcular o custo total de propriedade do veículo ao longo de 3-4 anos e dividir pelo número de semanas de operação.",
      },
    ],
    faq: [
      {
        q: "Posso deduzir os custos de combustível mesmo sem recibo?",
        a: "Para efeitos da liquidação com o condutor, podes deduzir o que acordarem. Para efeitos fiscais da tua empresa, sem recibo não tens documentação de suporte para a dedução. Exige sempre recibo.",
      },
      {
        q: "O que acontece se o condutor causar um acidente e o seguro não cobrir tudo?",
        a: "Depende do que está definido no contrato entre operador e condutor. É importante ter cláusulas claras sobre responsabilidade em caso de sinistro — nomeadamente se a franquia ou custos não cobertos pelo seguro são imputáveis ao condutor.",
      },
      {
        q: "Como estimo o valor acordado semanal correcto para um novo condutor?",
        a: "Calcula o custo total anual do veículo (seguro, revisões, pneus, depreciação) e divide por 52 semanas. Adiciona a tua margem de operação. Compara com o que o condutor consegue gerar em média por semana para garantir que o modelo é sustentável para ambos.",
      },
    ],
    relatedSlugs: [
      "liquidacao-semanal-condutores-tvde",
      "gestao-frota-tvde-portugal",
      "disputas-pagamentos-condutores",
    ],
  },
  {
    slug: "comunicacao-condutores-whatsapp",
    title: "Como comunicar com condutores TVDE via WhatsApp",
    seoTitle: "Comunicação com Condutores TVDE via WhatsApp: Guia Prático | TVDE Manager",
    metaDescription:
      "Usa o WhatsApp para notificar condutores TVDE da liquidação semanal e receber confirmação. Templates de mensagem, boas práticas e como gerir respostas.",
    intro:
      "O WhatsApp é o canal de comunicação preferido pelos condutores TVDE em Portugal. Usá-lo correctamente para enviar a liquidação semanal e receber confirmação poupa tempo, reduz disputas e cria um registo auditável de cada acerto.",
    sections: [
      {
        heading: "Porquê o WhatsApp para liquidações TVDE",
        body: "A maioria dos condutores TVDE em Portugal usa o WhatsApp como principal meio de comunicação — mais do que email, e certamente mais do que qualquer portal ou aplicação dedicada. Enviar a liquidação semanal por WhatsApp garante que o condutor recebe e lê a mensagem, e permite uma resposta rápida de confirmação.\n\nAlém disso, o WhatsApp cria automaticamente um histórico de conversas que serve como registo informal (mas útil) de cada liquidação confirmada. Em caso de disputa futura, tens a confirmação escrita do condutor com data e hora.",
      },
      {
        heading: "Template de mensagem de liquidação semanal",
        body: "Uma boa mensagem de liquidação semanal deve ser clara, completa e fácil de ler num ecrã de telemóvel. Aqui está um template que podes adaptar:\n\n---\nOlá [Nome]! Aqui está o resumo da semana de [data início] a [data fim]:\n\n📱 Uber: [valor]€\n🚗 Bolt: [valor]€\nTotal bruto: [valor]€\n\n⛽ Combustível: [valor]€\n🛣️ Portagens: [valor]€\nTotal custos: [valor]€\n\n✅ Valor acordado: [valor]€\n\n💶 A receber: [valor]€\n\nResponde SIM para confirmar ou NÃO se tiveres alguma dúvida.\n---\n\nO formato com emojis melhora a legibilidade, mas mantém-no consistente semana a semana para que o condutor se habitue à estrutura.",
      },
      {
        heading: "Gerir as respostas dos condutores",
        body: "Após enviar a liquidação, podes receber três tipos de resposta: confirmação (SIM ou equivalente), rejeição (NÃO com ou sem motivo), ou silêncio.\n\nPara confirmações, regista a data e processa o pagamento. Para rejeições, pede ao condutor que indique especificamente o que está errado — e resolve antes de prosseguir. Para silêncio depois de 48 horas, tenta um segundo contacto ou uma chamada directa. Não processar pagamentos sem confirmação é uma boa prática, mas em casos de silêncio persistente tens de tomar uma decisão operacional.",
      },
      {
        heading: "WhatsApp Business vs WhatsApp pessoal",
        body: "Se ainda usas um número pessoal para comunicar com os condutores, considera mudar para o WhatsApp Business. As vantagens para operadores TVDE incluem: perfil de empresa com nome e descrição, respostas automáticas para fora de horas, e etiquetas para organizar conversas por estado (liquidação enviada, confirmada, pendente).\n\nPara volumes maiores (20+ condutores), a API do WhatsApp Business permite integrar o envio de mensagens com sistemas externos — as plataformas de gestão de frota mais avançadas usam esta API para automatizar o envio da liquidação semanal.",
      },
      {
        heading: "Guardar um registo formal das confirmações",
        body: "O WhatsApp não deve ser o único registo das liquidações. Complementa sempre com um registo estruturado: uma folha de cálculo, um sistema de gestão, ou pelo menos uma pasta organizada com capturas de ecrã das confirmações por semana e por condutor.\n\nEm caso de disputa, ter apenas o histórico do WhatsApp pode não ser suficiente — especialmente se o telemóvel for perdido, trocado, ou se o número for alterado.",
      },
    ],
    faq: [
      {
        q: "O que faço se um condutor não tem WhatsApp?",
        a: "Usa SMS como alternativa. O template de mensagem é o mesmo, mas sem emojis. Se o condutor não responde por SMS, considera uma chamada para confirmar verbalmente — e regista o resultado.",
      },
      {
        q: "Posso enviar a liquidação a vários condutores de uma vez?",
        a: "Não deves usar grupos de WhatsApp para liquidações — cada condutor deve receber os seus dados em privado. Para envio em massa com personalização, precisas de uma solução que use a API do WhatsApp Business.",
      },
      {
        q: "A confirmação por WhatsApp tem validade legal?",
        a: "A confirmação por mensagem escrita tem validade como elemento de prova, mas não substitui um contrato formal. Para segurança jurídica, o contrato inicial entre operador e condutor deve definir o processo de liquidação — a confirmação semanal por WhatsApp é a execução desse contrato.",
      },
    ],
    relatedSlugs: [
      "liquidacao-semanal-condutores-tvde",
      "disputas-pagamentos-condutores",
      "gestao-frota-tvde-portugal",
    ],
  },
  {
    slug: "uber-vs-bolt-operadores-tvde",
    title: "Uber vs Bolt: o que muda para o operador TVDE em Portugal",
    seoTitle: "Uber vs Bolt para Operadores TVDE Portugal: Diferenças e Comparação | TVDE Manager",
    metaDescription:
      "Comparação prática entre Uber e Bolt para operadores TVDE em Portugal: comissões, relatórios, suporte, pagamentos e o que muda na gestão diária da frota.",
    intro:
      "A maioria dos operadores TVDE em Portugal trabalha com Uber e Bolt em simultâneo. As duas plataformas têm diferenças significativas que afectam a gestão diária — desde os relatórios de ganhos até ao suporte e à forma como os pagamentos chegam. Este guia compara o que importa para o operador.",
    sections: [
      {
        heading: "Comissões e estrutura de ganhos",
        body: "Tanto o Uber como o Bolt retêm uma comissão sobre os ganhos brutos de cada viagem. As percentagens exactas variam e não são publicamente divulgadas de forma consistente — estão sujeitas a acordos individuais com operadores de maior volume.\n\nO que importa para a liquidação semanal é sempre o ganho bruto do condutor (antes da comissão da plataforma), não o que a plataforma efectivamente paga. Os CSVs de ambas as plataformas incluem esta informação, mas em colunas com nomes diferentes.",
      },
      {
        heading: "Relatórios e exportação de dados",
        body: "Esta é uma das diferenças mais práticas para o operador. O Uber Portugal disponibiliza relatórios semanais consolidados com todos os condutores da frota num único ficheiro CSV. O Bolt tem uma estrutura semelhante mas com formatos de coluna diferentes e, em alguns casos, com acesso mais fragmentado por condutor.\n\nO Uber tende a ter um portal de parceiros mais maduro e com mais funcionalidades de reporting. O Bolt tem melhorado, mas historicamente o acesso a dados detalhados de frota era mais limitado. Verifica sempre qual a versão do portal que tens activa, pois actualizações frequentes mudam a navegação.",
      },
      {
        heading: "Ciclo de pagamento",
        body: "O ciclo de pagamento das plataformas aos operadores pode diferir. Tipicamente, ambas as plataformas pagam semanalmente, mas os dias exactos de corte e de pagamento efectivo podem não coincidir entre Uber e Bolt.\n\nIsto cria um desfasamento: quando fechas a liquidação semanal com os condutores, os dados de uma plataforma podem ainda não estar disponíveis enquanto a outra já está fechada. Define um dia fixo de corte para as tuas liquidações (por exemplo, domingo à noite) e usa os dados disponíveis até essa hora — mesmo que o relatório formal só chegue mais tarde.",
      },
      {
        heading: "Suporte ao operador",
        body: "A qualidade do suporte para operadores de frota difere entre as duas plataformas. O Uber tem canais de suporte mais estabelecidos para parceiros de frota, incluindo gestores de conta para operações de maior dimensão. O Bolt tem vindo a melhorar o suporte empresarial em Portugal mas pode ser mais lento a resolver questões complexas.\n\nPara operadores com mais de 10 condutores, vale a pena solicitar activamente um gestor de conta em ambas as plataformas — o suporte prioritário pode fazer uma diferença significativa quando há um problema com um condutor ou um pagamento.",
      },
      {
        heading: "Estratégia de plataformas para a tua frota",
        body: "A maioria dos operadores incentiva os condutores a trabalhar em ambas as plataformas — maximiza os ganhos em períodos de menor procura numa plataforma e reduz a dependência de uma única fonte de rendimento.\n\nAlguns condutores preferem focar-se numa plataforma por simplicidade. Respeita essa preferência mas explica as vantagens do multi-plataforma. Para a gestão da frota, condutores que trabalham em ambas as plataformas geram mais dados para gerir — mas também mais ganhos brutos para a liquidação.",
      },
    ],
    faq: [
      {
        q: "Posso registar condutores em Uber e Bolt ao mesmo tempo?",
        a: "Sim. O registo nas plataformas é independente — um condutor pode estar activo em Uber e Bolt simultaneamente, desde que cumpra os requisitos de cada plataforma.",
      },
      {
        q: "As plataformas sabem que o condutor trabalha nas duas?",
        a: "Sim, as plataformas sabem que há concorrência no mercado. Não há exclusividade contratual para a maioria dos condutores — cada plataforma quer maximizar a disponibilidade, por isso geralmente não penaliza condutores multi-plataforma.",
      },
      {
        q: "Se um condutor tem um problema com o Bolt, isso afecta o Uber?",
        a: "Não directamente. As contas são independentes. No entanto, problemas sérios como suspensão por comportamento inadequado numa plataforma podem influenciar a avaliação noutras, dependendo da natureza do incidente.",
      },
    ],
    relatedSlugs: [
      "exportar-csv-uber-portugal",
      "exportar-csv-bolt-portugal",
      "gestao-frota-tvde-portugal",
    ],
  },
  {
    slug: "escalar-frota-tvde",
    title: "Como escalar uma frota TVDE de 1 para 50 condutores",
    seoTitle: "Escalar Frota TVDE: De 1 para 50 Condutores em Portugal | TVDE Manager",
    metaDescription:
      "Guia prático para operadores TVDE que querem crescer a frota. O que muda em cada fase de crescimento, que processos documentar e quando automatizar.",
    intro:
      "Crescer uma frota TVDE não é apenas adicionar mais carros e condutores — é escalar uma operação com processos, ferramentas e relações humanas que funcionam de forma diferente a cada fase. Este guia descreve o que muda em cada etapa do crescimento e o que precisas de preparar antes de avançar.",
    sections: [
      {
        heading: "Fase 1: 1 a 3 condutores — o início manual",
        body: "Com 1 a 3 condutores, a operação cabe num Excel e numa conversa de WhatsApp. Ainda consegues gerir tudo manualmente sem grande stress — mas é exactamente aqui que deves documentar os processos que vão escalar.\n\nO que fazer nesta fase: cria um contrato padrão com cláusulas claras sobre o valor acordado, custos, e processo de liquidação; define o teu dia de corte semanal e mantém-no consistente; regista cada liquidação num ficheiro mesmo que seja simples; e estabelece o hábito de guardar todos os recibos de custos.",
      },
      {
        heading: "Fase 2: 4 a 10 condutores — os processos tornam-se críticos",
        body: "Entre 4 e 10 condutores, o tempo semanal gasto em liquidações começa a ser significativo. Com dois CSVs por semana por condutor, facilmente tens 20 ficheiros para processar. Os erros manuais começam a acontecer e as disputas aumentam.\n\nNesta fase, o investimento numa ferramenta de gestão começa a justificar-se claramente. O tempo que poupas nas liquidações semanais compensa o custo — e reduz erros que podem custar mais do que qualquer ferramenta. Considera também contratar alguém a part-time para apoio administrativo.",
      },
      {
        heading: "Fase 3: 10 a 25 condutores — automatizar ou afogar",
        body: "Acima de 10 condutores, a gestão manual torna-se insustentável sem suporte dedicado. As liquidações semanais podem ocupar um dia inteiro de trabalho, e qualquer erro tem impacto directo na confiança dos condutores.\n\nOs processos que devem estar automatizados ou delegados nesta fase: importação e processamento dos CSVs das plataformas, cálculo das liquidações, notificação dos condutores, e registo de confirmações. A comunicação directa com cada condutor ainda é importante, mas as tarefas repetitivas devem ser sistematizadas.",
      },
      {
        heading: "Fase 4: 25 a 50 condutores — operação profissional",
        body: "Acima de 25 condutores, a operação TVDE é uma empresa de pleno direito — com departamento financeiro, gestão de RH, e processos de qualidade. As liquidações semanais são apenas uma das muitas responsabilidades.\n\nNesta fase, a tecnologia não é opcional. Precisas de sistemas que integrem directamente com as plataformas, calculem automaticamente, e reportem em tempo real. A margem por condutor pode ser menor do que nas fases anteriores porque os custos fixos de operação são maiores — mas o volume compensa.",
      },
      {
        heading: "O que não escala: o que deves eliminar cedo",
        body: "Há práticas que funcionam com 2 condutores mas falham com 10. Elimina-as antes de cresceres: não uses o mesmo número de telefone pessoal para comunicar com todos os condutores — cria um número de empresa; não guardes os CSVs no desktop sem estrutura; não faças cálculos directamente nos CSVs originais (trabalha sempre em cópias); e não deixa liquidações por resolver de uma semana para a outra.",
      },
    ],
    faq: [
      {
        q: "Qual é o número ideal de condutores para começar?",
        a: "Não existe um número ideal universal. Depende dos teus custos fixos e da tua capacidade de gestão. Muitos operadores bem-sucedidos começam com 2-3 condutores e crescem organicamente.",
      },
      {
        q: "Preciso de mais veículos ou de mais condutores para crescer?",
        a: "Depende do modelo. Alguns operadores têm mais condutores do que veículos (condutores que partilham o mesmo carro em turnos). Outros têm veículos parados por falta de condutores. O equilíbrio certo depende da tua operação específica.",
      },
      {
        q: "Quando devo contratar alguém para me ajudar na gestão?",
        a: "Quando estiveres a gastar mais de 8-10 horas por semana em tarefas administrativas (liquidações, comunicação com condutores, documentação) que outra pessoa poderia fazer. O teu tempo como operador deve ser investido em crescimento, não em operações repetitivas.",
      },
    ],
    relatedSlugs: [
      "gestao-frota-tvde-portugal",
      "obrigacoes-legais-operador-tvde",
      "custos-operacionais-frota-tvde",
    ],
  },
  {
    slug: "obrigacoes-legais-operador-tvde",
    title: "Obrigações legais do operador TVDE em Portugal",
    seoTitle: "Obrigações Legais Operador TVDE Portugal: Licença, RGPD e Contratos | TVDE Manager",
    metaDescription:
      "Resumo das principais obrigações legais do operador TVDE em Portugal: licença IMT, requisitos de veículos, contratos com condutores, RGPD e fiscalidade.",
    intro:
      "Operar uma frota TVDE em Portugal implica obrigações legais específicas que vão além das responsabilidades de qualquer outro negócio. Este guia resume as principais áreas — licenciamento, veículos, condutores, RGPD e fiscalidade — sem substituir aconselhamento jurídico especializado.",
    sections: [
      {
        heading: "Licença de operador TVDE — IMT",
        body: "Para operar legalmente como empresa TVDE em Portugal, a entidade precisa de licença emitida pelo IMT (Instituto da Mobilidade e dos Transportes). A licença tem requisitos de capital social mínimo, seguros obrigatórios, e idoneidade dos sócios.\n\nA licença deve ser renovada periodicamente e o IMT pode realizir inspecções. Perder a licença (por incumprimento ou por não renovação) significa ter de parar a operação completamente. Mantém um calendário de renovações e garante que os documentos de suporte estão sempre actualizados.",
      },
      {
        heading: "Requisitos dos veículos TVDE",
        body: "Os veículos utilizados na operação TVDE têm requisitos específicos definidos na legislação portuguesa: idade máxima do veículo, inspecção técnica obrigatória actualizada, seguro de responsabilidade civil específico para TVDE, e características técnicas mínimas.\n\nAlém dos requisitos legais, as plataformas (Uber, Bolt) têm os seus próprios requisitos de veículos que podem ser mais exigentes do que a lei. Um veículo pode cumprir os requisitos legais mas não ser aceite por uma plataforma específica.",
      },
      {
        heading: "Contratos com condutores",
        body: "A relação jurídica entre operador TVDE e condutor pode assumir várias formas — trabalhador por conta de outrem, trabalhador independente (recibos verdes), ou sócio de empresa. Cada forma tem implicações fiscais e laborais muito diferentes.\n\nIndependentemente da forma escolhida, o contrato deve definir: o valor acordado semanal, a forma de cálculo da liquidação, responsabilidades em caso de acidente ou multa, e condições de rescisão. Consulta um advogado especializado em direito do trabalho para garantir que o contrato que usas é adequado à relação real existente.",
      },
      {
        heading: "RGPD — dados de condutores e passageiros",
        body: "Como operador TVDE, recolhes e processas dados pessoais de condutores (nome, NIF, contactos, dados bancários, localização) e indirectamente de passageiros (através dos dados das plataformas). O RGPD (Regulamento Geral de Protecção de Dados) aplica-se.\n\nObrigações básicas de RGPD: ter uma base legal para processar os dados (contrato, consentimento, ou interesse legítimo), informar os condutores dos dados que recolhes e para que fins, guardar os dados de forma segura, e não os partilhar com terceiros sem base legal. Para dados de menor escala (frota de até 20-30 condutores), uma política de privacidade simples e práticas básicas de segurança são normalmente suficientes.",
      },
      {
        heading: "Fiscalidade — o básico para operadores TVDE",
        body: "A operação TVDE é um negócio tributável em Portugal. O operador paga IRC (ou IRS se for trabalhador independente) sobre os lucros da operação, e pode deduzir custos operacionais legítimos (combustível, manutenção, seguros, etc.).\n\nAs receitas cobradas aos condutores (o valor acordado semanal) são rendimento da empresa e devem ser facturadas. A emissão de factura electrónica é obrigatória. Consulta o teu contabilista para garantir que o tratamento fiscal da tua operação — incluindo o IVA — está correcto para o teu caso específico.",
      },
    ],
    faq: [
      {
        q: "Posso operar como TVDE como trabalhador independente (recibos verdes)?",
        a: "Sim, mas com limitações. A licença TVDE pode ser emitida para pessoas singulares em determinadas condições. Para operações com múltiplos condutores e veículos, a forma societária (empresa) é geralmente mais adequada.",
      },
      {
        q: "O que acontece se operar sem licença TVDE?",
        a: "Operar sem licença TVDE é uma contra-ordenação sujeita a coima. As plataformas também exigem comprovativo de licença para registar operadores — sem licença, não consegues operar legalmente nas plataformas.",
      },
      {
        q: "Preciso de seguro específico para TVDE ou o seguro normal de automóvel chega?",
        a: "Precisas de seguro específico para TVDE. O seguro automóvel normal não cobre o transporte remunerado de passageiros. As plataformas verificam o tipo de seguro — e sem o seguro correcto, o operador pode ter responsabilidade não coberta em caso de sinistro.",
      },
    ],
    relatedSlugs: [
      "gestao-frota-tvde-portugal",
      "escalar-frota-tvde",
      "comunicacao-condutores-whatsapp",
    ],
  },
  {
    slug: "disputas-pagamentos-condutores",
    title: "Como gerir disputas de pagamento com condutores TVDE",
    seoTitle: "Disputas de Pagamento Condutores TVDE: Como Prevenir e Resolver | TVDE Manager",
    metaDescription:
      "Guia prático para prevenir e resolver disputas de pagamento com condutores TVDE. Documentação, comunicação e o processo de resolução passo a passo.",
    intro:
      "As disputas de pagamento são uma das maiores fontes de conflito na relação entre operador TVDE e condutor. A maioria surge de falta de clareza ou de documentação insuficiente — não de má-fé. Este guia explica como prevenir e, quando inevitável, como resolver disputas de forma justa e rápida.",
    sections: [
      {
        heading: "As causas mais comuns de disputa",
        body: "As disputas de pagamento em operações TVDE surgem tipicamente de: discrepâncias entre os dados que o condutor vê na app da plataforma e os valores da liquidação (porque o operador usa ganhos brutos e a app mostra ganhos líquidos); custos que o condutor contesta (combustível que não reconhece, ou valores que considera excessivos); valor acordado semanal que o condutor acha incorrecto; e débitos acumulados de semanas anteriores que o condutor não acompanhou.\n\nA maioria destas situações resolve-se com transparência — mostrar exactamente de onde veio cada número.",
      },
      {
        heading: "A melhor prevenção: documentação desde o início",
        body: "Uma disputa é muito mais difícil de gerir quando não tens documentação. As práticas preventivas mais eficazes são: enviar sempre a liquidação detalhada antes de processar o pagamento (não apenas o valor final); guardar os CSVs originais das plataformas para cada semana; guardar recibos de todos os custos; e registar a confirmação do condutor (por escrito, WhatsApp ou outro canal).\n\nCom estes documentos, qualquer disputa pode ser resolvida em minutos — mostras os dados originais, explicas o cálculo, e o condutor pode verificar.",
      },
      {
        heading: "O processo de resolução de disputas",
        body: "Quando um condutor contesta a liquidação, segue este processo:\n\n1. Pede ao condutor que identifique exactamente o que está errado — um valor específico, uma dedução que não reconhece.\n\n2. Verifica os documentos originais: CSV da plataforma, recibos de custos, liquidação enviada.\n\n3. Se encontrares um erro da tua parte, corrige e pede desculpa — acontece, e a forma como respondes importa para a relação.\n\n4. Se os dados confirmam a liquidação, explica ao condutor passo a passo de onde veio cada número. Muitas disputas resolvem-se com esta explicação.\n\n5. Se o desacordo persistir, reúne pessoalmente — alguns assuntos são mais fáceis de resolver cara a cara.",
      },
      {
        heading: "Quando o condutor tem razão",
        body: "Erros acontecem. Importar o CSV errado, usar os dados de outra semana, ou esquecer um custo — são situações reais. Quando o condutor tem razão, a resposta correcta é reconhecer o erro, corrigir a liquidação, e ajustar o pagamento.\n\nA forma como geres os erros teus tem um impacto enorme na confiança a longo prazo. Um operador que reconhece erros rapidamente tem muito menos conflitos do que um operador que resiste a correcções.",
      },
      {
        heading: "Quando a disputa não se resolve — opções de escalada",
        body: "Se a disputa persistir após todos os passos anteriores, tens algumas opções: mediação por um terceiro de confiança para ambas as partes; consulta a um advogado trabalhista se a relação com o condutor for de natureza laboral; ou, em último caso, rescisão do contrato se a relação se tornar insustentável.\n\nAntes de chegar a escalada formal, documenta todo o processo de resolução — os emails, mensagens de WhatsApp, e o resultado de cada reunião. Esta documentação pode ser crucial se o assunto chegar a meios formais.",
      },
    ],
    faq: [
      {
        q: "O condutor pode recusar-se a confirmar a liquidação sem justificação?",
        a: "Pode. Mas sem confirmação, o pagamento fica em suspenso — o que não é bom para nenhuma das partes. Em caso de silêncio persistente (mais de 48 horas), tenta contacto directo. Se o condutor sistematicamente não confirma sem justificação, é um sinal de que há algo mais sério na relação.",
      },
      {
        q: "Posso reter o pagamento de um condutor em caso de disputa?",
        a: "Depende do contrato e da natureza jurídica da relação. Reter salários sem base legal pode ter consequências legais sérias. Consulta um advogado antes de tomar esta decisão.",
      },
      {
        q: "Como evito que o mesmo tipo de disputa se repita?",
        a: "Após resolver uma disputa, identifica a causa raiz e ajusta o processo. Se o condutor não entendia o cálculo de ganhos brutos vs líquidos, adiciona uma explicação ao template de mensagem. Se o erro foi num registo de custos, melhora o processo de registo. Cada disputa é uma oportunidade de melhorar a operação.",
      },
    ],
    relatedSlugs: [
      "liquidacao-semanal-condutores-tvde",
      "comunicacao-condutores-whatsapp",
      "custos-operacionais-frota-tvde",
    ],
  },
];
