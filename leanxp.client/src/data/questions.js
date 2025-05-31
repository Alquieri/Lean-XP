const questions = [
  {
    "id": 1,
    "question": "Qual é o foco principal da filosofia Lean?",
    "options": [
      "Aumentar o número de funcionalidades entregues, independentemente do custo.",
      "Maximizar o valor para o cliente enquanto se minimiza o desperdício.",
      "Seguir rigorosamente um plano predefinido, evitando mudanças.",
      "Reduzir o tamanho da equipe para cortar custos operacionais."
    ],
    "answer": "Maximizar o valor para o cliente enquanto se minimiza o desperdício."
  },
  {
    "id": 2,
    "question": "Onde se originou o pensamento Lean, antes de ser adaptado para o desenvolvimento de software?",
    "options": [
      "No Vale do Silício, com as primeiras startups de tecnologia.",
      "Nas teorias de gerenciamento de projetos da NASA.",
      "No Sistema Toyota de Produção (TPS), no Japão.",
      "Nas grandes manufaturas americanas durante a Segunda Guerra Mundial."
    ],
    "answer": "No Sistema Toyota de Produção (TPS), no Japão."
  },
  {
    "id": 3,
    "question": "Qual dos itens abaixo NÃO é um dos 5 princípios do Pensamento Enxuto definidos por Womack & Jones?",
    "options": [
      "Valor (Value)",
      "Fluxo de Valor (Value Stream)",
      "Documentação Extensiva (Extensive Documentation)",
      "Perfeição (Perfection)"
    ],
    "answer": "Documentação Extensiva (Extensive Documentation)"
  },
  {
    "id": 4,
    "question": "Por que a filosofia Lean é particularmente relevante para o desenvolvimento de software?",
    "options": [
      "Porque o software raramente precisa de manutenção após a entrega.",
      "Porque o desenvolvimento de software é um processo com baixa incerteza e requisitos estáveis.",
      "Porque ajuda a gerenciar a alta incerteza, a complexidade e a necessidade de aprendizado contínuo inerentes ao software.",
      "Porque garante que todas as funcionalidades planejadas inicialmente sejam entregues, sem exceção."
    ],
    "answer": "Porque ajuda a gerenciar a alta incerteza, a complexidade e a necessidade de aprendizado contínuo inerentes ao software."
  },
  {
    "id": 5,
    "question": "Além da Melhoria Contínua (Kaizen), qual é o outro pilar fundamental que sustenta o pensamento Lean, especialmente no Sistema Toyota de Produção?",
    "options": [
      "Competição interna entre as equipes.",
      "Hierarquia rígida e centralização de decisões.",
      "Respeito pelas Pessoas.",
      "Maximização da utilização de todos os recursos, o tempo todo."
    ],
    "answer": "Respeito pelas Pessoas."
  },
  {
    "id": 6,
    "question": "No contexto do Lean Software Development, o que melhor define 'Muda' (Desperdício)?",
    "options": [
      "Qualquer tarefa técnica que seja considerada complexa pela equipe.",
      "Código que foi escrito mas ainda não passou pela revisão de um desenvolvedor sênior.",
      "Qualquer atividade que consome recursos (tempo, dinheiro, esforço) mas não agrega valor sob a perspectiva do cliente.",
      "Atrasos no cronograma causados por longas discussões de requisitos com o cliente."
    ],
    "answer": "Qualquer atividade que consome recursos (tempo, dinheiro, esforço) mas não agrega valor sob a perspectiva do cliente."
  },
  {
    "id": 7,
    "question": "Qual dos seguintes exemplos melhor descreve o desperdício de 'Funcionalidades Extras' (Extra Features) no desenvolvimento de software?",
    "options": [
      "Entregar um software com vários bugs que precisam ser corrigidos após o lançamento.",
      "Desenvolver uma interface de usuário com inúmeras opções de configuração que o cliente não solicitou e provavelmente não usará.",
      "Ter código importante em uma branch separada aguardando para ser integrado à linha principal por várias semanas.",
      "Um desenvolvedor aguardando por dias a aprovação de um design de interface para poder começar a codificar."
    ],
    "answer": "Desenvolver uma interface de usuário com inúmeras opções de configuração que o cliente não solicitou e provavelmente não usará."
  },
  {
    "id": 8,
    "question": "'Trabalho Parcialmente Concluído' (Partially Done Work ou WIP excessivo) é considerado um desperdício Lean principalmente porque:",
    "options": [
      "Aumenta a necessidade de documentação técnica detalhada para cada tarefa incompleta.",
      "Frequentemente exige que a equipe realize horas extras para tentar finalizar tudo.",
      "Não entrega valor ao cliente, pode esconder problemas subjacentes no fluxo e corre o risco de se tornar obsoleto.",
      "Demonstra uma falta de comprometimento da equipe em relação às metas estabelecidas para a entrega."
    ],
    "answer": "Não entrega valor ao cliente, pode esconder problemas subjacentes no fluxo e corre o risco de se tornar obsoleto."
  },
  {
    "id": 9,
    "question": "Qual técnica Lean é frequentemente utilizada para visualizar todas as etapas do processo de entrega de valor, desde a concepção até o cliente, identificando gargalos, filas e atividades que não agregam valor?",
    "options": [
      "A Análise dos 5 Porquês (5 Whys)",
      "Gemba Walks (Ir ao Local Real)",
      "Mapeamento do Fluxo de Valor (Value Stream Mapping - VSM)",
      "Retrospectivas da Equipe focadas em brainstorming"
    ],
    "answer": "Mapeamento do Fluxo de Valor (Value Stream Mapping - VSM)"
  },
  {
    "id": 10,
    "question": "A 'Troca de Contexto' (Task Switching) é considerada um desperdício significativo no Lean Software Development principalmente porque:",
    "options": [
      "Exige o uso de ferramentas de gerenciamento de tarefas mais sofisticadas e caras.",
      "Reduz a produtividade e a qualidade do trabalho devido ao overhead mental necessário para alternar o foco entre tarefas não relacionadas.",
      "Impede que os membros da equipe colaborem de forma eficaz quando estão trabalhando em diferentes projetos simultaneamente.",
      "Geralmente leva a um aumento na quantidade de documentação necessária para rastrear o progresso de múltiplas tarefas."
    ],
    "answer": "Reduz a produtividade e a qualidade do trabalho devido ao overhead mental necessário para alternar o foco entre tarefas não relacionadas."
  },
  {
    "id": 11,
    "question": "Por que o princípio 'Amplificar o Aprendizado' é especialmente crucial no desenvolvimento de software, segundo a filosofia Lean?",
    "options": [
      "Para garantir que toda a documentação técnica seja criada antes do início da codificação, minimizando erros futuros.",
      "Porque o desenvolvimento de software é inerentemente um processo de descoberta contínua e lida com alta incerteza sobre requisitos e soluções.",
      "Para permitir que os desenvolvedores utilizem as tecnologias mais recentes e avançadas, independentemente dos requisitos específicos do projeto.",
      "Para justificar prazos de entrega mais longos e orçamentos maiores, acomodando o tempo necessário para pesquisa e desenvolvimento."
    ],
    "answer": "Porque o desenvolvimento de software é inerentemente um processo de descoberta contínua e lida com alta incerteza sobre requisitos e soluções."
  },
  {
    "id": 12,
    "question": "O ciclo 'Construir-Medir-Aprender' (Build-Measure-Learn), popularizado pelo Lean Startup, enfatiza qual abordagem para o desenvolvimento de produtos?",
    "options": [
      "Construir o produto completo de uma só vez, medir a satisfação do cliente no final do projeto e aprender com os resultados para o próximo grande lançamento.",
      "Focar primariamente na fase de 'Construir', dedicando a maior parte do tempo e recursos para desenvolver um conjunto robusto de funcionalidades antes de qualquer medição.",
      "Criar rapidamente uma versão mínima do produto (MVP) para coletar dados reais de uso e feedback dos usuários, aprender com esses dados e iterar ou pivotar a solução.",
      "Medir o desempenho individual da equipe de desenvolvimento em termos de linhas de código escritas por dia e aprender como otimizar essa métrica para aumentar a produtividade."
    ],
    "answer": "Criar rapidamente uma versão mínima do produto (MVP) para coletar dados reais de uso e feedback dos usuários, aprender com esses dados e iterar ou pivotar a solução."
  },
  {
    "id": 13,
    "question": "No contexto de 'Amplificar o Aprendizado' através da experimentação, o que é um 'Spike' (ou Prova de Conceito Técnica)?",
    "options": [
      "Um aumento inesperado e acentuado no número de bugs críticos encontrados durante a fase final de testes de um software.",
      "Uma funcionalidade completa, detalhadamente polida e robusta, entregue ao cliente com o objetivo de obter um feedback exaustivo sobre sua qualidade.",
      "Uma investigação técnica curta, com tempo rigidamente limitado (time-boxed), focada em reduzir incertezas sobre uma tecnologia específica, uma abordagem de design complexa ou a viabilidade de uma solução.",
      "Um tipo de reunião de retrospectiva de equipe focada exclusivamente em analisar e aprender com as falhas técnicas ocorridas durante uma iteração."
    ],
    "answer": "Uma investigação técnica curta, com tempo rigidamente limitado (time-boxed), focada em reduzir incertezas sobre uma tecnologia específica, uma abordagem de design complexa ou a viabilidade de uma solução."
  },
  {
    "id": 14,
    "question": "Qual é a visão Lean sobre documentação no desenvolvimento de software, alinhada com o princípio de 'Amplificar o Aprendizado'?",
    "options": [
      "A documentação deve ser o mais extensa, detalhada e formal possível, criada integralmente antes do início do desenvolvimento para servir como um contrato imutável.",
      "A documentação é considerada um desperdício (Muda) e deve ser evitada ao máximo, priorizando a comunicação verbal para acelerar a entrega de código.",
      "A documentação deve ser 'viva', concisa, útil para o compartilhamento de conhecimento essencial e a colaboração, sendo criada 'just-in-time' e mantida atualizada pela equipe.",
      "A principal e única forma de documentação válida deve ser o próprio código-fonte, bem comentado, dispensando a necessidade de qualquer outra forma de registro escrito."
    ],
    "answer": "A documentação deve ser 'viva', concisa, útil para o compartilhamento de conhecimento essencial e a colaboração, sendo criada 'just-in-time' e mantida atualizada pela equipe."
  },
  {
    "id": 15,
    "question": "Para efetivamente 'Amplificar o Aprendizado' e fomentar uma cultura de melhoria contínua, qual dos seguintes aspectos culturais é MAIS importante em uma equipe de desenvolvimento de software?",
    "options": [
      "Uma estrutura hierárquica bem definida, com todas as decisões técnicas importantes centralizadas na figura do líder técnico ou arquiteto sênior.",
      "Um ambiente de alta competitividade individual entre os desenvolvedores, com rankings e bônus para estimular a performance e a busca por soluções inovadoras.",
      "Segurança psicológica, onde os membros da equipe se sentem à vontade para experimentar, admitir erros como oportunidades de aprendizado e questionar ideias sem medo de represálias.",
      "Um foco exclusivo em seguir rigorosamente os processos e ferramentas definidos pela organização, evitando desvios ou questionamentos para garantir a padronização."
    ],
    "answer": "Segurança psicológica, onde os membros da equipe se sentem à vontade para experimentar, admitir erros como oportunidades de aprendizado e questionar ideias sem medo de represálias."
  },
  {
    "id": 16,
    "question": "Qual é o principal benefício de aplicar o princípio Lean 'Decidir o Mais Tarde Possível' no desenvolvimento de software?",
    "options": [
      "Garantir que todas as decisões sejam tomadas pela gerência sênior, que possui mais experiência acumulada.",
      "Aumentar a flexibilidade para se adaptar a mudanças e tomar decisões com base em mais conhecimento e feedback real, em vez de suposições.",
      "Reduzir o número total de decisões que precisam ser tomadas ao longo do ciclo de vida do projeto, simplificando o gerenciamento.",
      "Acelerar a fase inicial do projeto, pois menos tempo é gasto em análise de requisitos e planejamento detalhado."
    ],
    "answer": "Aumentar a flexibilidade para se adaptar a mudanças e tomar decisões com base em mais conhecimento e feedback real, em vez de suposições."
  },
  {
    "id": 17,
    "question": "O que define o 'Último Momento Responsável' (Last Responsible Moment - LRM) para tomar uma decisão no contexto Lean?",
    "options": [
      "O momento exato em que a equipe de desenvolvimento se sente mais pressionada pelos stakeholders para apresentar uma solução definitiva.",
      "O ponto no tempo em que, se a decisão não for tomada, uma oportunidade importante e valiosa é perdida ou as consequências negativas de não decidir se tornam significativas.",
      "O final de cada sprint ou iteração, estabelecido como um prazo fixo para que todas as decisões pendentes daquele ciclo sejam resolvidas pela equipe.",
      "O início formal do projeto, durante a fase de planejamento, para garantir que todos os riscos sejam identificados e mitigados antecipadamente."
    ],
    "answer": "O ponto no tempo em que, se a decisão não for tomada, uma oportunidade importante e valiosa é perdida ou as consequências negativas de não decidir se tornam significativas."
  },
  {
    "id": 18,
    "question": "Qual das seguintes práticas de desenvolvimento de software MELHOR suporta o princípio de 'Decidir o Mais Tarde Possível'?",
    "options": [
      "Criar um plano de projeto extremamente detalhado e completo no início, com todas as especificações técnicas e de design já definidas e aprovadas.",
      "Adotar uma arquitetura de software monolítica e rigidamente definida desde o começo para garantir a estabilidade e a performance do sistema a longo prazo.",
      "Utilizar desenvolvimento iterativo e incremental, com arquiteturas flexíveis e evolutivas que permitem o design emergente com base no aprendizado contínuo.",
      "Realizar todas as escolhas de tecnologia, frameworks e ferramentas principais antes mesmo de escrever a primeira linha de código do produto."
    ],
    "answer": "Utilizar desenvolvimento iterativo e incremental, com arquiteturas flexíveis e evolutivas que permitem o design emergente com base no aprendizado contínuo."
  },
  {
    "id": 19,
    "question": "Por que decisões prematuras sobre arquitetura ou a escolha de tecnologias específicas podem ser particularmente custosas no desenvolvimento de software?",
    "options": [
      "Porque geralmente levam a discussões técnicas mais longas e complexas nas reuniões de planejamento da equipe.",
      "Porque podem gerar um 'lock-in' tecnológico, dificultando a adaptação a novas necessidades e exigindo retrabalho extenso se a decisão inicial se mostrar inadequada à medida que mais se aprende.",
      "Porque demonstram uma falta de confiança da equipe de desenvolvimento em suas próprias habilidades de tomar decisões rápidas e assertivas sob pressão.",
      "Porque inevitavelmente atrasam o início da fase de codificação do projeto, já que a equipe precisa esperar por essas definições."
    ],
    "answer": "Porque podem gerar um 'lock-in' tecnológico, dificultando a adaptação a novas necessidades e exigindo retrabalho extenso se a decisão inicial se mostrar inadequada à medida que mais se aprende."
  },
  {
    "id": 20,
    "question": "Em qual das seguintes situações NÃO seria apropriado aplicar o princípio de 'Decidir o Mais Tarde Possível', correndo o risco de cair em 'paralisia por análise'?",
    "options": [
      "Ao escolher uma paleta de cores final para a interface do usuário, quando ainda há uma incerteza considerável sobre a identidade visual da marca.",
      "Ao definir todos os detalhes da arquitetura de um módulo de software altamente complexo e interdependente, antes de ter clareza sobre todos os seus requisitos de integração.",
      "Quando uma decisão, mesmo que pequena e facilmente reversível, é necessária para desbloquear um ciclo de aprendizado crucial e rápido para a equipe sobre uma hipótese de produto.",
      "Ao selecionar um provedor de serviços de nuvem específico e todas as suas configurações no primeiro dia do projeto, antes mesmo de avaliar as necessidades reais de escalabilidade e custo."
    ],
    "answer": "Quando uma decisão, mesmo que pequena e facilmente reversível, é necessária para desbloquear um ciclo de aprendizado crucial e rápido para a equipe sobre uma hipótese de produto."
  },
  {
    "id": 21,
    "question": "Qual é um dos principais motivos pelos quais o princípio Lean 'Entregar o Mais Rápido Possível' é enfatizado no desenvolvimento de software?",
    "options": [
      "Para pressionar a equipe de desenvolvimento a trabalhar mais horas e, assim, aumentar a produção individual de código.",
      "Para reduzir o 'Custo do Atraso' (Cost of Delay), obtendo valor e aprendizado mais cedo através de ciclos de feedback mais curtos com os usuários.",
      "Para permitir que a equipe de desenvolvimento possa pular etapas consideradas burocráticas, como testes automatizados e documentação, focando exclusivamente na codificação.",
      "Para que a empresa possa faturar os projetos mais rapidamente junto aos clientes, independentemente da qualidade ou do valor real entregue."
    ],
    "answer": "Para reduzir o 'Custo do Atraso' (Cost of Delay), obtendo valor e aprendizado mais cedo através de ciclos de feedback mais curtos com os usuários."
  },
  {
    "id": 22,
    "question": "Por que trabalhar com 'Pequenos Lotes de Entrega' (Small Batches) é uma prática recomendada para entregar software mais rápido de forma Lean?",
    "options": [
      "Porque lotes maiores permitem um planejamento mais detalhado no início, resultando em menos revisões de código e maior velocidade de desenvolvimento individual.",
      "Porque facilita a detecção precoce de erros, reduz o Trabalho em Progresso (WIP), acelera o ciclo de feedback e diminui o risco associado a cada implantação.",
      "Porque permite que mais funcionalidades sejam desenvolvidas em paralelo por diferentes membros da equipe, mesmo que essas funcionalidades não sejam integradas frequentemente.",
      "Porque exige menos investimento em automação de testes, já que cada lote pequeno pode ser inspecionado manualmente com mais facilidade antes da entrega."
    ],
    "answer": "Porque facilita a detecção precoce de erros, reduz o Trabalho em Progresso (WIP), acelera o ciclo de feedback e diminui o risco associado a cada implantação."
  },
  {
    "id": 23,
    "question": "O que é 'Entrega Contínua' (Continuous Delivery - CD) no contexto de Lean e desenvolvimento de software?",
    "options": [
      "A prática de entregar o software completo para os clientes apenas uma vez por ano, após um longo e exaustivo ciclo de desenvolvimento e testes.",
      "Um processo onde cada desenvolvedor da equipe entrega seu código novo ou alterado diretamente para o ambiente de produção, sem a necessidade de passar por testes automatizados.",
      "Uma abordagem de engenharia de software onde o código está sempre em um estado que pode ser liberado para produção com um clique de botão, após passar com sucesso por um pipeline automatizado de build e testes.",
      "A automação exclusiva da fase de testes de software, sem que isso impacte ou modifique o processo manual de build ou implantação em produção."
    ],
    "answer": "Uma abordagem de engenharia de software onde o código está sempre em um estado que pode ser liberado para produção com um clique de botão, após passar com sucesso por um pipeline automatizado de build e testes."
  },
  {
    "id": 24,
    "question": "Como o uso de um sistema Kanban pode ajudar uma equipe a 'Entregar o Mais Rápido Possível' de acordo com os princípios Lean?",
    "options": [
      "Aumentando o número máximo de tarefas que cada pessoa da equipe pode ter em andamento (limite de WIP individual mais alto) para maximizar a utilização.",
      "Focando exclusivamente em medir o tempo gasto em cada tarefa individual, sem a necessidade de visualizar o fluxo de trabalho completo da equipe.",
      "Tornando o fluxo de trabalho visível, limitando o Trabalho em Progresso (WIP) em cada etapa do processo e expondo gargalos que impedem a entrega rápida.",
      "Eliminando a necessidade de reuniões diárias de acompanhamento (daily stand-ups), já que o quadro Kanban substitui essa comunicação."
    ],
    "answer": "Tornando o fluxo de trabalho visível, limitando o Trabalho em Progresso (WIP) em cada etapa do processo e expondo gargalos que impedem a entrega rápida."
  },
  {
    "id": 25,
    "question": "Ao aplicar o princípio Lean 'Entregar o Mais Rápido Possível', qual é a visão correta sobre a qualidade do software e o ritmo de trabalho da equipe?",
    "options": [
      "A velocidade de entrega é o objetivo primordial, mesmo que isso signifique sacrificar a qualidade do código e levar a equipe a um estado de burnout.",
      "A qualidade do software pode ser temporariamente comprometida para acelerar as entregas, pois os defeitos identificados podem ser corrigidos em versões futuras.",
      "A velocidade deve ser alcançada através da eficiência do fluxo, da automação inteligente e da eliminação de desperdícios, mantendo um ritmo sustentável e construindo qualidade desde o início.",
      "A equipe deve focar em realizar 'sprints' de trabalho extremamente intensos e rápidos, seguidos por longos períodos de descanso e recuperação para evitar a exaustão."
    ],
    "answer": "A velocidade deve ser alcançada através da eficiência do fluxo, da automação inteligente e da eliminação de desperdícios, mantendo um ritmo sustentável e construindo qualidade desde o início."
  },
  {
    "id": 26,
    "question": "No contexto do Lean Software Development, o que significa fundamentalmente 'Empoderar a Equipe'?",
    "options": [
      "Apenas delegar um volume maior de tarefas para os membros da equipe, mantendo a autoridade decisória centralizada na gerência.",
      "Permitir que a equipe escolha livremente os projetos e as tecnologias em que deseja trabalhar, independentemente das prioridades estratégicas da empresa.",
      "Cultivar um ambiente de alta confiança, concedendo autonomia para a equipe decidir como realizar seu trabalho, e responsabilidade compartilhada pelos resultados e pela qualidade.",
      "Realizar avaliações de desempenho individuais mais frequentes e rigorosas para garantir que todos os membros da equipe estejam produzindo no máximo de sua capacidade técnica."
    ],
    "answer": "Cultivar um ambiente de alta confiança, concedendo autonomia para a equipe decidir como realizar seu trabalho, e responsabilidade compartilhada pelos resultados e pela qualidade."
  },
  {
    "id": 27,
    "question": "Qual é o papel principal de um 'Líder Servidor' (Servant Leader) ao buscar empoderar uma equipe Lean?",
    "options": [
      "Tomar todas as decisões técnicas importantes pela equipe para assegurar que os erros sejam minimizados e os padrões sejam seguidos.",
      "Controlar de perto o progresso de cada tarefa individual e microgerenciar os membros da equipe para garantir a conformidade com o plano.",
      "Fornecer a visão e os objetivos claros, remover impedimentos, facilitar o trabalho colaborativo da equipe e apoiar ativamente o desenvolvimento e crescimento de seus membros.",
      "Definir metas de produtividade individuais e extremamente rígidas para cada membro da equipe e cobrar os resultados de forma incisiva e direta."
    ],
    "answer": "Fornecer a visão e os objetivos claros, remover impedimentos, facilitar o trabalho colaborativo da equipe e apoiar ativamente o desenvolvimento e crescimento de seus membros."
  },
  {
    "id": 28,
    "question": "Qual das seguintes alternativas é uma característica marcante de uma equipe Lean que foi efetivamente empoderada?",
    "options": [
      "Uma forte dependência de um único especialista ou arquiteto sênior para tomar todas as decisões técnicas e direcionar o trabalho.",
      "Ser um time multifuncional (cross-functional), possuindo as habilidades necessárias para entregar valor de ponta a ponta, e auto-organizável na gestão de suas tarefas e processos.",
      "Uma comunicação estritamente formal e hierárquica, onde todas as informações importantes fluem através de canais predefinidos pela gerência.",
      "Um foco em seguir precisamente as instruções e os processos definidos pela liderança, com pouca iniciativa para questionar ou propor melhorias."
    ],
    "answer": "Ser um time multifuncional (cross-functional), possuindo as habilidades necessárias para entregar valor de ponta a ponta, e auto-organizável na gestão de suas tarefas e processos."
  },
  {
    "id": 29,
    "question": "Um dos benefícios mais significativos de empoderar as equipes no desenvolvimento de software, segundo os princípios Lean, é:",
    "options": [
      "A redução da necessidade de comunicação e colaboração entre os membros da equipe, já que cada indivíduo se torna plenamente autônomo em suas tarefas.",
      "O aumento da competição interna saudável entre os membros, o que naturalmente leva a um desempenho individual superior e mais inovação.",
      "Maior motivação, engajamento e senso de propriedade da equipe, resultando em soluções mais criativas e eficazes devido ao aproveitamento do conhecimento local.",
      "A garantia de que a equipe seguirá sempre e rigorosamente os processos e padrões definidos pela organização, evitando desvios ou experimentos não autorizados."
    ],
    "answer": "Maior motivação, engajamento e senso de propriedade da equipe, resultando em soluções mais criativas e eficazes devido ao aproveitamento do conhecimento local."
  },
  {
    "id": 30,
    "question": "Por que a 'segurança psicológica' é considerada um elemento fundamental para o empoderamento de uma equipe e para a sustentação de uma cultura Lean?",
    "options": [
      "Porque garante que os membros da equipe sempre cheguem a um consenso rapidamente, evitando conflitos e discussões prolongadas.",
      "Porque permite que a equipe trabalhe em um ritmo mais lento e com menos pressão, focando apenas nas tarefas consideradas mais fáceis e agradáveis.",
      "Porque cria um ambiente onde os indivíduos se sentem seguros para experimentar, propor ideias, admitir erros como oportunidades de aprendizado e oferecer feedback honesto sem medo de punição ou humilhação.",
      "Porque assegura que apenas as ideias e sugestões previamente aprovadas pela alta gerência sejam discutidas e implementadas pela equipe, garantindo o alinhamento estratégico."
    ],
    "answer": "Porque cria um ambiente onde os indivíduos se sentem seguros para experimentar, propor ideias, admitir erros como oportunidades de aprendizado e oferecer feedback honesto sem medo de punição ou humilhação."
  },
  {
    "id": 31,
    "question": "Qual é a filosofia central do princípio Lean 'Construir Qualidade Desde o Início' (Built-in Quality) no desenvolvimento de software?",
    "options": [
      "A qualidade é uma responsabilidade exclusiva da equipe de QA, que deve realizar testes exaustivos e detalhados apenas no final do ciclo de desenvolvimento.",
      "A qualidade deve ser integrada em cada etapa do processo de desenvolvimento por todos os membros da equipe, com um forte foco na prevenção de defeitos em vez de apenas na sua detecção tardia.",
      "A principal forma de garantir a qualidade do software é através da criação de documentação técnica extremamente detalhada de todos os requisitos e especificações antes do início da codificação.",
      "Priorizar a velocidade de entrega de novas funcionalidades acima de tudo, pois os defeitos podem ser corrigidos posteriormente através de atualizações e patches, minimizando o impacto inicial."
    ],
    "answer": "A qualidade deve ser integrada em cada etapa do processo de desenvolvimento por todos os membros da equipe, com um forte foco na prevenção de defeitos em vez de apenas na sua detecção tardia."
  },
  {
    "id": 32,
    "question": "O que caracteriza o ciclo principal do Test-Driven Development (TDD), uma prática chave para construir qualidade desde o início?",
    "options": [
      "Codificar a funcionalidade completa -> Escrever todos os testes unitários -> Refatorar o código e os testes -> Documentar as mudanças.",
      "Analisar todos os Requisitos -> Desenvolver um conjunto completo de Testes de Aceitação -> Escrever todo o Código para atender os testes -> Integrar e testar manualmente.",
      "Escrever um Teste Automatizado para uma pequena funcionalidade (que inicialmente falha) -> Escrever o Código Mínimo necessário para fazer o teste passar -> Refatorar o Código (e os testes, se necessário) para melhorar o design e a clareza.",
      "Planejar a arquitetura -> Codificar os módulos principais -> Realizar Revisões de Código exaustivas -> Executar Testes Manuais exploratórios em um ambiente de homologação."
    ],
    "answer": "Escrever um Teste Automatizado para uma pequena funcionalidade (que inicialmente falha) -> Escrever o Código Mínimo necessário para fazer o teste passar -> Refatorar o Código (e os testes, se necessário) para melhorar o design e a clareza."
  },
  {
    "id": 33,
    "question": "Qual é a importância fundamental de ter uma 'Definição de 'Feito'' (Definition of Done - DoD) clara, compartilhada e consistentemente aplicada pela equipe de desenvolvimento?",
    "options": [
      "Serve principalmente como um checklist para o gerente de projetos monitorar o progresso individual dos desenvolvedores e calcular bônus de produtividade.",
      "Garante um entendimento comum e explícito sobre o que significa um incremento de software estar realmente completo e com o nível de qualidade esperado, evitando o desperdício de 'trabalho parcialmente concluído'.",
      "É um documento formal e contratual que descreve em detalhes todas as funcionalidades que serão entregues ao cliente ao final do projeto, sem possibilidade de alteração.",
      "Define as metas de performance de código (ex: tempo de execução de algoritmos) e a velocidade de desenvolvimento que a equipe deve alcançar em cada sprint ou iteração."
    ],
    "answer": "Garante um entendimento comum e explícito sobre o que significa um incremento de software estar realmente completo e com o nível de qualidade esperado, evitando o desperdício de 'trabalho parcialmente concluído'."
  },
  {
    "id": 34,
    "question": "Qual dos seguintes itens NÃO é tipicamente considerado um exemplo do 'Custo da Não-Qualidade' (Cost of Poor Quality - CoPQ) no desenvolvimento de software?",
    "options": [
      "O tempo e esforço gastos pela equipe em retrabalho, depuração e correção de bugs encontrados tardiamente no ciclo de vida ou em produção.",
      "O investimento realizado em ferramentas de automação de testes, treinamento da equipe em práticas de TDD/BDD e tempo dedicado a revisões de código.",
      "A perda de confiança e satisfação do cliente devido a falhas frequentes, usabilidade ruim ou performance inadequada do software.",
      "O impacto negativo na produtividade de desenvolvimentos futuros devido à dificuldade de manter, evoluir e adicionar novas funcionalidades a um código de baixa qualidade e alta complexidade."
    ],
    "answer": "O investimento realizado em ferramentas de automação de testes, treinamento da equipe em práticas de TDD/BDD e tempo dedicado a revisões de código."
  },
  {
    "id": 35,
    "question": "A prática de 'Programação em Par' (Pair Programming) contribui para 'Construir Qualidade Desde o Início' no desenvolvimento de software principalmente porque:",
    "options": [
      "Permite que dois desenvolvedores produzam aproximadamente o dobro do volume de código no mesmo período, aumentando a velocidade de entrega de funcionalidades.",
      "Reduz significativamente a necessidade de comunicação verbal e documentação escrita, já que ambos os desenvolvedores compartilham o mesmo contexto o tempo todo.",
      "Facilita a revisão contínua do código em tempo real, melhora o design através da discussão de ideias, promove a disseminação de conhecimento e boas práticas, resultando em menos defeitos.",
      "Garante que o desenvolvedor mais experiente do par dite todas as soluções e a arquitetura, assegurando que a melhor abordagem técnica seja sempre implementada."
    ],
    "answer": "Facilita a revisão contínua do código em tempo real, melhora o design através da discussão de ideias, promove a disseminação de conhecimento e boas práticas, resultando em menos defeitos."
  },
  {
    "id": 36,
    "question": "Qual é o foco principal do princípio Lean 'Otimizar o Todo' no desenvolvimento de software?",
    "options": [
      "Garantir que cada desenvolvedor individual atinja sua máxima produtividade e eficiência, independentemente do impacto nas outras áreas ou no fluxo geral.",
      "Melhorar o desempenho do sistema de entrega de valor como um todo, desde a concepção da ideia até a entrega ao cliente, em vez de focar apenas em otimizar partes isoladas do processo.",
      "Implementar o maior número possível de ferramentas de automação em todas as equipes de forma independente, mesmo que essas ferramentas não estejam integradas ou alinhadas com um fluxo de valor comum.",
      "Reduzir os custos operacionais de cada departamento (desenvolvimento, QA, operações) individualmente, sem necessariamente considerar o impacto dessas reduções no fluxo de valor global para o cliente."
    ],
    "answer": "Melhorar o desempenho do sistema de entrega de valor como um todo, desde a concepção da ideia até a entrega ao cliente, em vez de focar apenas em otimizar partes isoladas do processo."
  },
  {
    "id": 37,
    "question": "O que é 'subotimização' no contexto do pensamento sistêmico Lean, e por que é considerado um problema?",
    "options": [
      "É a situação em que uma equipe específica não consegue atingir suas metas locais de eficiência, o que acaba prejudicando o desempenho geral do sistema.",
      "É a prática de otimizar uma parte isolada do sistema (uma equipe, uma ferramenta, um processo) de tal forma que o desempenho global do sistema é prejudicado ou, na melhor das hipóteses, não melhora significativamente.",
      "Refere-se à falta de ferramentas de software adequadas para otimizar cada etapa do processo de desenvolvimento de forma individual e especializada.",
      "É o processo estratégico de dividir um grande sistema de software em partes menores e mais gerenciáveis para facilitar a otimização de cada uma delas separadamente, garantindo a eficiência do todo."
    ],
    "answer": "É a prática de otimizar uma parte isolada do sistema (uma equipe, uma ferramenta, um processo) de tal forma que o desempenho global do sistema é prejudicado ou, na melhor das hipóteses, não melhora significativamente."
  },
  {
    "id": 38,
    "question": "A Teoria das Restrições (Theory of Constraints - TOC) é uma abordagem útil para 'Otimizar o Todo'. Segundo a TOC, onde deve estar o foco principal dos esforços de melhoria em um sistema?",
    "options": [
      "Em melhorar a eficiência de todas as etapas e recursos do processo simultaneamente e com igual prioridade, para garantir um avanço equilibrado.",
      "Em reduzir o número de pessoas trabalhando no sistema, pois menos pessoas geralmente significam menos complexidade e mais agilidade.",
      "Em identificar e gerenciar o gargalo (constraint) do sistema, pois a capacidade do gargalo é o que, em última instância, limita o desempenho (throughput) de todo o sistema.",
      "Em aumentar a quantidade de trabalho em progresso (WIP) em todas as etapas, para garantir que todos os recursos e pessoas estejam sempre ocupados e maximizando sua utilização."
    ],
    "answer": "Em identificar e gerenciar o gargalo (constraint) do sistema, pois a capacidade do gargalo é o que, em última instância, limita o desempenho (throughput) de todo o sistema."
  },
  {
    "id": 39,
    "question": "Ao aplicar o princípio 'Otimizar o Todo', por que é crucial focar em métricas globais (como Lead Time total do sistema ou Throughput do sistema) em vez de se basear apenas em métricas locais (como a velocidade individual de uma equipe ou a utilização de um servidor específico)?",
    "options": [
      "Porque métricas globais são geralmente mais fáceis de coletar, calcular e reportar para a alta gerência da empresa.",
      "Porque métricas locais, quando melhoram, sempre refletem com precisão as melhorias no sistema como um todo, tornando as métricas globais redundantes.",
      "Porque métricas locais podem incentivar comportamentos de subotimização, onde uma equipe melhora seu desempenho local à custa do fluxo de valor de ponta a ponta ou de outras partes do sistema.",
      "Porque métricas globais são as únicas que podem ser usadas para realizar benchmarking e comparar o desempenho da empresa com seus concorrentes diretos no mercado."
    ],
    "answer": "Porque métricas locais podem incentivar comportamentos de subotimização, onde uma equipe melhora seu desempenho local à custa do fluxo de valor de ponta a ponta ou de outras partes do sistema."
  },
  {
    "id": 40,
    "question": "Como o princípio Lean 'Empoderar a Equipe' se relaciona e contribui para o princípio de 'Otimizar o Todo'?",
    "options": [
      "Equipes empoderadas tendem a focar excessivamente em suas próprias otimizações locais e metas específicas, o que geralmente dificulta a otimização do sistema como um todo.",
      "O empoderamento da equipe é, na verdade, irrelevante para a otimização do sistema, pois esta é uma responsabilidade exclusiva da alta gerência e dos arquitetos de sistema.",
      "Equipes empoderadas, que possuem entendimento do sistema, autonomia para agir e se sentem donas do processo, são essenciais para identificar e implementar melhorias contínuas que beneficiem o fluxo de valor global.",
      "Empoderar a equipe significa dar a cada membro a liberdade total de escolher suas próprias métricas e ferramentas, o que, pela diversidade, naturalmente leva à otimização do todo."
    ],
    "answer": "Equipes empoderadas, que possuem entendimento do sistema, autonomia para agir e se sentem donas do processo, são essenciais para identificar e implementar melhorias contínuas que beneficiem o fluxo de valor global."
  }
];

export default questions;
//