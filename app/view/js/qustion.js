const questions = [
    {
        pergunta: " 1-O que é Gestão Pública?",
        opcoes: [
            {
                texto: "É o processo de gestão de empresas privadas.",
                correta: false,
                comentario: "Errado. Isso se refere à gestão empresarial, não pública."
            },
            {
                texto: "É a administração dos recursos públicos visando o bem coletivo.",
                correta: true,
                comentario: "Correto! Gestão pública lida com o interesse da coletividade."
            },
            {
                texto: "É a gestão focada apenas em lucro e produtividade.",
                correta: false,
                comentario: "Errado. A gestão pública busca o interesse público, não o lucro."
            },
            {
                texto: "É o gerenciamento dos recursos humanos das empresas.",
                correta: false,
                comentario: "Errado. Isso se refere à gestão de RH, não à gestão pública."
            }
        ]
    },

    {
        pergunta: "2-Qual princípio da administração pública está diretamente ligado à prestação de contas?",
        opcoes: [
            {
                texto: "A) Legalidade",
                correta: false,
                comentario: "Errado. A legalidade diz respeito ao cumprimento das leis, não à prestação de contas especificamente."
            },
            {
                texto: "B) Publicidade",
                correta: false,
                comentario: "Errado. Publicidade está relacionada à divulgação dos atos públicos, mas não diretamente à prestação de contas."
            },
            {
                texto: "C) Eficiência",
                correta: false,
                comentario: "Errado. Eficiência está ligada ao bom uso dos recursos, mas não à obrigação de prestar contas."
            },
            {
                texto: "D) Prestação de contas (accountability)",
                correta: true,
                comentario: "Correto! Esse princípio exige que os gestores públicos sejam responsáveis e transparentes na administração."
            }
        ]
    },
    {
        pergunta: "3-(OACP) O princípio da 'publicidade' na Administração Pública exige que:",
        opcoes: [
            {
                texto: "A) Todos os atos administrativos sejam sigilosos para evitar fraudes",
                correta: false,
                comentario: "Errado. Sigilo só é permitido em situações excepcionais (Lei 12.527/2011)."
            },
            {
                texto: "B) Apenas servidores públicos tenham acesso a informações",
                correta: false,
                comentario: "Errado. O acesso é direito de qualquer cidadão (Lei de Acesso à Informação)."
            },
            {
                texto: "C) Os atos administrativos sejam divulgados para conhecimento público",
                correta: true,
                comentario: "Correta. A publicidade garante transparência (art. 37, CF/88), exceto em casos de segurança nacional."
            },
            {
                texto: "D) A imprensa controle diretamente os órgãos públicos",
                correta: false,
                comentario: "Errado. A imprensa não tem poder de controle, apenas de fiscalização."
            }
        ]
    },
    {
        pergunta: "4- (OACP) Qual entidade da administração indireta possui personalidade jurídica de direito privado?",
        opcoes: [
            {
                texto: "A) Autarquia",
                correta: false,
                comentario: "Errado. Autarquias são de direito público."
            },
            {
                texto: "B) Empresa Pública",
                correta: true,
                comentario: "Correta. Empresas públicas têm personalidade de direito privado (art. 5º, Decreto-Lei 200/1967)."
            },
            {
                texto: "C) Fundação Pública",
                correta: false,
                comentario: "Errado. Fundações públicas são de direito público, salvo exceções."
            },
            {
                texto: "D) Secretaria Municipal",
                correta: false,
                comentario: "Errado. Secretarias são órgãos da administração direta."
            }
        ]
    },
    {
        pergunta: "5-(OACP) A Lei de Responsabilidade Fiscal (LC 101/2000) estabelece que o limite máximo para despesas com pessoal no Poder Executivo Municipal é:",
        opcoes: [
            {
                texto: "A) 40% da receita corrente líquida",
                correta: false,
                comentario: "Errado. Valor abaixo do limite constitucional."
            },
            {
                texto: "B) 50% da receita corrente líquida",
                correta: false,
                comentario: "Errado. Ainda abaixo do limite legal."
            },
            {
                texto: "C) 60% da receita corrente líquida",
                correta: true,
                comentario: "Correta. Art. 19 da LRF: 60% para Municípios."
            },
            {
                texto: "D) 70% da receita corrente líquida",
                correta: false,
                comentario: "Errado. Ultrapassaria o teto legal."
            }
        ]
    },
    {
        pergunta: "6-(OACP) Qual é a modalidade de licitação utilizada para compras de bens e serviços comuns, com valor estimado até R$ 200 mil?",
        opcoes: [
            {
                texto: "A) Concorrência",
                correta: false,
                comentario: "Errado. Concorrência é para valores altos ou obras complexas."
            },
            {
                texto: "B) Pregão",
                correta: true,
                comentario: "Correta. Pregão é o padrão até R$ 200 mil (Lei 14.133/2021, art. 22)."
            },
            {
                texto: "C) Tomada de Preços",
                correta: false,
                comentario: "Errado. Modalidade extinta pela Nova Lei de Licitações."
            },
            {
                texto: "D) Convite",
                correta: false,
                comentario: "Errado. Convite só existe em casos muito específicos."
            }
        ]
    },
    {
        pergunta: "7- (OACP) O Plano Plurianual (PPA) deve ser elaborado no primeiro ano de mandato e vigora por:",
        opcoes: [
            {
                texto: "A) 2 anos",
                correta: false,
                comentario: "Errado. Incompatível com a Constituição."
            },
            {
                texto: "B) 3 anos",
                correta: false,
                comentario: "Errado. Prazo incorreto."
            },
            {
                texto: "C) 4 anos",
                correta: true,
                comentario: "Correta. PPA tem vigência de 4 anos (art. 165, §1º, CF/88)."
            },
            {
                texto: "D) 5 anos",
                correta: false,
                comentario: "Errado. Excede o prazo previsto."
            }
        ]
    },
    {
        pergunta: "8- (OACP) Qual órgão é responsável pelo controle externo da administração federal?",
        opcoes: [
            {
                texto: "A) Controladoria-Geral da União (CGU)",
                correta: false,
                comentario: "Errado. CGU faz controle interno."
            },
            {
                texto: "B) Tribunal de Contas da União (TCU)",
                correta: true,
                comentario: "Correta. TCU fiscaliza a execução orçamentária (art. 71, CF/88)."
            },
            {
                texto: "C) Ministério Público Federal (MPF)",
                correta: false,
                comentario: "Errado. MPF atua judicialmente, não faz controle administrativo."
            },
            {
                texto: "D) Advocacia-Geral da União (AGU)",
                correta: false,
                comentario: "Errado. AGU defende juridicamente a União."
            }
        ]
    },
    {
        pergunta: "9- (OACP) A 'descentralização administrativa' ocorre quando:",
        opcoes: [
            {
                texto: "A) O Estado transfere competências para entes privados",
                correta: false,
                comentario: "Errado. Isso é terceirização ou desconcentração, não descentralização."
            },
            {
                texto: "B) Um órgão central acumula todas as decisões",
                correta: false,
                comentario: "Errado. Isso representa centralização."
            },
            {
                texto: "C) Atividades são executadas por entidades com autonomia (ex: autarquias)",
                correta: true,
                comentario: "Correta. Descentralização = execução por entes com autonomia."
            },
            {
                texto: "D) O Legislativo assume funções do Executivo",
                correta: false,
                comentario: "Errado. Isso violaria a separação dos Poderes."
            }
        ]
    },
    {
        pergunta: "10- (OACP) Segundo a Lei de Acesso à Informação (12.527/2011), informações classificadas como 'ultrasssecretas' têm prazo máximo de sigilo de:",
        opcoes: [
            {
                texto: "A) 5 anos",
                correta: false,
                comentario: "Errado. Prazo inferior ao previsto na lei."
            },
            {
                texto: "B) 10 anos",
                correta: false,
                comentario: "Errado. Ainda abaixo do permitido."
            },
            {
                texto: "C) 15 anos",
                correta: false,
                comentario: "Errado. Lei prevê prazo maior."
            },
            {
                texto: "D) 25 anos",
                correta: true,
                comentario: "Correta. Art. 24 da LAI: ultrasssecretas = 25 anos (prorrogáveis uma vez)."
            }
        ]
    },
    {
        pergunta: "11- (OACP) Qual princípio da administração pública foi incluído pela Emenda Constitucional nº 19/1998?",
        opcoes: [
            {
                texto: "A) Legalidade",
                correta: false,
                comentario: "Errado. Já constava na CF/88 original."
            },
            {
                texto: "B) Moralidade",
                correta: false,
                comentario: "Errado. Já fazia parte dos princípios originais."
            },
            {
                texto: "C) Eficiência",
                correta: true,
                comentario: "Correta. EC 19/98 incluiu o princípio da eficiência."
            },
            {
                texto: "D) Publicidade",
                correta: false,
                comentario: "Errado. Já estava previsto no texto original da Constituição."
            }
        ]
    },
    {
        pergunta: "12- (OACP) O controle social na gestão pública é exercido por:",
        opcoes: [
            {
                texto: "A) Tribunais de Contas",
                correta: false,
                comentario: "Errado. São órgãos de controle institucional."
            },
            {
                texto: "B) Sociedade civil (ex: conselhos municipais)",
                correta: true,
                comentario: "Correta. Controle social é feito por meio da participação da sociedade."
            },
            {
                texto: "C) Ministério Público",
                correta: false,
                comentario: "Errado. MP atua no controle jurídico, não no controle social."
            },
            {
                texto: "D) Controladorias internas",
                correta: false,
                comentario: "Errado. Essas fazem controle interno, não social."
            }
        ]
    },
    {
        pergunta: "13- (OACP) O que é 'descentralização' na administração pública?",
        opcoes: [
            {
                texto: "A) Transferência de competências para entidades autônomas",
                correta: true,
                comentario: "Correta. Descentralização envolve autonomia e delegação de funções."
            },
            {
                texto: "B) Concentração de poder em um único órgão",
                correta: false,
                comentario: "Errado. Isso é centralização."
            },
            {
                texto: "C) Criação de novos órgãos públicos",
                correta: false,
                comentario: "Errado. Criação não implica descentralização."
            },
            {
                texto: "D) Aumento da burocracia estatal",
                correta: false,
                comentario: "Errado. Descentralização visa reduzir a burocracia."
            }
        ]
    },
    {
        pergunta: "14- (OACP) O que é 'accountability' na administração pública?",
        opcoes: [
            {
                texto: "A) Responsabilidade e prestação de contas dos gestores públicos",
                correta: true,
                comentario: "Correta. Accountability envolve transparência e responsabilidade."
            },
            {
                texto: "B) Controle interno das contas públicas",
                correta: false,
                comentario: "Errado. Controle interno é parte do processo, mas não define accountability."
            },
            {
                texto: "C) Aumento da burocracia estatal",
                correta: false,
                comentario: "Errado. Accountability busca eficiência, não burocracia."
            },
            {
                texto: "D) Sigilo absoluto das informações públicas",
                correta: false,
                comentario: "Errado. Accountability exige transparência, não sigilo."
            }
        ]

    },
    {
        pergunta: "15- (OACP) A administração pública direta é composta por:",
        opcoes: [
            {
                texto: "A) Empresas públicas e sociedades de economia mista",
                correta: false,
                comentario: "Errado. Empresas públicas e sociedades de economia mista fazem parte da administração indireta."
            },
            {
                texto: "B) Órgãos integrados na estrutura da União, Estados, DF e Municípios",
                correta: true,
                comentario: "Correta. A administração direta é composta pelos órgãos da União, Estados, DF e Municípios, como ministérios, secretarias e departamentos."
            },
            {
                texto: "C) Autarquias e fundações públicas",
                correta: false,
                comentario: "Errado. Autarquias e fundações públicas também pertencem à administração indireta."
            },
            {
                texto: "D) Entidades paraestatais",
                correta: false,
                comentario: "Errado. Entidades paraestatais (como ONGs) não integram a administração direta nem indireta."
            }
        ]
    },

    {
        pergunta: "16- (OACP) A função típica do Poder Legislativo é:",
        opcoes: [
            {
                texto: "A) Executar políticas públicas",
                correta: false,
                comentario: "Errado. Executar políticas públicas é atribuição do Poder Executivo."
            },
            {
                texto: "B) Julgar processos judiciais",
                correta: false,
                comentario: "Errado. Julgar é função típica do Poder Judiciário."
            },
            {
                texto: "C) Legislar e fiscalizar o Executivo",
                correta: true,
                comentario: "Correta. O Legislativo elabora leis e fiscaliza os atos do Poder Executivo."
            },
            {
                texto: "D) Administrar os serviços públicos",
                correta: false,
                comentario: "Errado. Administrar serviços públicos também é função do Executivo."
            }
        ]
    },

    {
        pergunta: "17- (OACP) Segundo a Constituição Federal de 1988, a moralidade administrativa:",
        opcoes: [
            {
                texto: "A) Refere-se apenas à ética pessoal do gestor público",
                correta: false,
                comentario: "Errado. Vai além da ética pessoal, exigindo comportamento compatível com o interesse público."
            },
            {
                texto: "B) É princípio apenas do setor privado",
                correta: false,
                comentario: "Errado. É um princípio constitucional aplicável à administração pública."
            },
            {
                texto: "C) Está entre os princípios que regem a Administração Pública",
                correta: true,
                comentario: "Correta. O princípio da moralidade é um dos previstos no art. 37 da CF/88."
            },
            {
                texto: "D) É um valor subjetivo, não exigido legalmente",
                correta: false,
                comentario: "Errado. Apesar de subjetiva, a moralidade tem previsão legal e obrigatória."
            }
        ]
    },

    {
        pergunta: "18- (OACP) Qual instrumento de planejamento define metas e prioridades da Administração para o período de quatro anos?",
        opcoes: [
            {
                texto: "A) Lei Orçamentária Anual (LOA)",
                correta: false,
                comentario: "Errado. A LOA é anual, não plurianual."
            },
            {
                texto: "B) Plano Plurianual (PPA)",
                correta: true,
                comentario: "Correta. O PPA estabelece objetivos e metas da administração pública a cada quatro anos."
            },
            {
                texto: "C) Lei de Diretrizes Orçamentárias (LDO)",
                correta: false,
                comentario: "Errado. A LDO orienta a elaboração da LOA."
            },
            {
                texto: "D) Plano Diretor",
                correta: false,
                comentario: "Errado. O Plano Diretor é um instrumento de política urbana municipal."
            }
        ]
    },

    {
        pergunta: "19- (OACP) A descentralização na administração pública implica:",
        opcoes: [
            {
                texto: "A) Maior controle do governo federal",
                correta: false,
                comentario: "Errado. Ocorre o contrário: menos centralização."
            },
            {
                texto: "B) Transferência de atribuições para o setor privado",
                correta: false,
                comentario: "Errado. A descentralização pode ser para entes públicos ou privados, mas não se restringe ao setor privado."
            },
            {
                texto: "C) Delegação de atividades a entes distintos com autonomia",
                correta: true,
                comentario: "Correta. A descentralização transfere a execução de atividades a outras entidades com autonomia (como autarquias e fundações)."
            },
            {
                texto: "D) Concentração de decisões em um único ente",
                correta: false,
                comentario: "Errado. Isso caracteriza centralização, não descentralização."
            }
        ]
    },

    {
        pergunta: "20- (OACP) O controle interno da administração pública é exercido:",
        opcoes: [
            {
                texto: "A) Apenas pelo Poder Judiciário",
                correta: false,
                comentario: "Errado. O Judiciário atua em controle externo, não interno."
            },
            {
                texto: "B) Por tribunais de contas",
                correta: false,
                comentario: "Errado. Tribunais de contas fazem controle externo."
            },
            {
                texto: "C) Pelos próprios órgãos da administração",
                correta: true,
                comentario: "Correta. Controle interno é feito dentro do próprio órgão público."
            },
            {
                texto: "D) Exclusivamente por cidadãos e ONGs",
                correta: false,
                comentario: "Errado. Cidadãos e ONGs exercem controle social, não interno."
            }
        ]
    },

    {
        pergunta: "21- (OACP) A Lei da Transparência obriga os entes públicos a:",
        opcoes: [
            {
                texto: "A) Publicarem receitas e despesas apenas no final do exercício",
                correta: false,
                comentario: "Errado. As informações devem ser atualizadas em tempo real, não só ao final do exercício."
            },
            {
                texto: "B) Manterem sigilo sobre contratos administrativos",
                correta: false,
                comentario: "Errado. A lei exige publicidade, não sigilo."
            },
            {
                texto: "C) Divulgarem informações de forma clara e acessível em tempo real",
                correta: true,
                comentario: "Correta. A Lei Complementar nº 131/2009 exige transparência em tempo real de receitas e despesas públicas."
            },
            {
                texto: "D) Compartilharem dados com empresas privadas automaticamente",
                correta: false,
                comentario: "Errado. Não há obrigação de compartilhar com empresas privadas."
            }
        ]
    },

    {
        pergunta: "22- (OACP) As agências reguladoras fazem parte de qual tipo de entidade?",
        opcoes: [
            {
                texto: "A) Administração direta",
                correta: false,
                comentario: "Errado. Não pertencem à estrutura direta do Estado."
            },
            {
                texto: "B) Sociedade de economia mista",
                correta: false,
                comentario: "Errado. Sociedades de economia mista atuam com atividade econômica, não regulação."
            },
            {
                texto: "C) Autarquia especial",
                correta: true,
                comentario: "Correta. Agências reguladoras são autarquias com regime jurídico especial."
            },
            {
                texto: "D) Empresa pública",
                correta: false,
                comentario: "Errado. Empresas públicas prestam serviços ou exploram atividades econômicas."
            }
        ]
    },

    {
        pergunta: "23- (OACP) O princípio da eficiência, introduzido pela Emenda Constitucional nº 19/98, exige:",
        opcoes: [
            {
                texto: "A) Que a administração não precise prestar contas",
                correta: false,
                comentario: "Errado. Prestação de contas é obrigatória."
            },
            {
                texto: "B) Que os servidores públicos sejam concursados",
                correta: false,
                comentario: "Errado. Concursos são exigidos por outro princípio: legalidade."
            },
            {
                texto: "C) Que os atos administrativos sejam mais produtivos e eficazes",
                correta: true,
                comentario: "Correta. O princípio da eficiência busca produtividade e qualidade na prestação do serviço público."
            },
            {
                texto: "D) Que o Estado aumente os impostos",
                correta: false,
                comentario: "Errado. A eficiência não está ligada à carga tributária."
            }
        ]
    },

    {
        pergunta: "24- (OACP) Um exemplo de controle social da gestão pública é:",
        opcoes: [
            {
                texto: "A) Auditoria feita pela CGU",
                correta: false,
                comentario: "Errado. Auditorias são controle interno ou externo, não social."
            },
            {
                texto: "B) Decisão de um Tribunal de Contas",
                correta: false,
                comentario: "Errado. Tribunal de Contas representa controle externo."
            },
            {
                texto: "C) Consulta pública sobre orçamento participativo",
                correta: true,
                comentario: "Correta. Consulta pública é um mecanismo de controle social, feito pela sociedade."
            },
            {
                texto: "D) Investigação do Ministério Público",
                correta: false,
                comentario: "Errado. O MP exerce controle institucional, não social."
            }
        ]
    },

    {
        pergunta: "25- (OACP) O princípio da impessoalidade na Administração Pública está diretamente relacionado a:",
        opcoes: [
            {
                texto: "A) Atendimento preferencial a grupos específicos",
                correta: false,
                comentario: "Errado. Preferências violam o princípio, exceto em ações afirmativas constitucionais."
            },
            {
                texto: "B) Neutralidade e igualdade no tratamento aos administrados",
                correta: true,
                comentario: "Correta. A impessoalidade exige que a administração atue sem favorecimentos ou perseguições (art. 37, CF/88)."
            },
            {
                texto: "C) Discricionariedade absoluta do gestor",
                correta: false,
                comentario: "Errado. A discricionariedade não é absoluta; deve respeitar a lei."
            },
            {
                texto: "D) Flexibilização das licitações",
                correta: false,
                comentario: "Errado. Licitações seguem regras rígidas (Lei 14.133/2021)."
            }
        ]
    },

    {
        pergunta: "26- (OACP) Qual entidade da administração indireta possui autonomia financeira e capital exclusivamente público?",
        opcoes: [
            {
                texto: "A) Empresa Pública",
                correta: false,
                comentario: "Errado. Empresas públicas podem ter capital privado em alguns casos."
            },
            {
                texto: "B) Sociedade de Economia Mista",
                correta: false,
                comentario: "Errado. Sociedades de economia mista têm capital misto (público e privado)."
            },
            {
                texto: "C) Autarquia",
                correta: true,
                comentario: "Correta. Autarquias são pessoas jurídicas de direito público com autonomia (ex: INSS)."
            },
            {
                texto: "D) Fundação Pública",
                correta: false,
                comentario: "Errado. Fundações podem ser públicas ou privadas."
            }
        ]
    },

    {
        pergunta: "27- (OACP) A Lei de Responsabilidade Fiscal (LC 101/2000) estabelece limites para:",
        opcoes: [
            {
                texto: "A) Contratação de servidores sem concurso",
                correta: false,
                comentario: "Errado. Concurso é exigido pela CF/88, não pela LRF."
            },
            {
                texto: "B) Despesas com pessoal e endividamento público",
                correta: true,
                comentario: "Correta. A LRF limita gastos com pessoal (art. 19) e dívida pública (art. 30)."
            },
            {
                texto: "C) Criação de novos municípios",
                correta: false,
                comentario: "Errado. Criação de municípios é regulada por lei específica (EC 15/1996)."
            },
            {
                texto: "D) Privatização de estatais",
                correta: false,
                comentario: "Errado. Privatização segue normas do PND (Lei 9.491/1997)."
            }
        ]
    },

    {
        pergunta: "28- (OACP) O controle externo da administração pública é exercido pelo:",
        opcoes: [
            {
                texto: "A) Ministério Público",
                correta: false,
                comentario: "Errado. MP atua como 'fiscal da lei', mas não é controle externo típico."
            },
            {
                texto: "B) Tribunal de Contas",
                correta: true,
                comentario: "Correta. Tribunais de Contas fiscalizam a execução orçamentária (art. 71, CF/88)."
            },
            {
                texto: "C) Controladoria-Geral da União (CGU)",
                correta: false,
                comentario: "Errado. A CGU faz controle interno."
            },
            {
                texto: "D) Poder Executivo",
                correta: false,
                comentario: "Errado. O Executivo exerce controle interno."
            }
        ]
    },

    {
        pergunta: "29- (OACP) Qual documento orienta a elaboração da Lei Orçamentária Anual (LOA)?",
        opcoes: [
            {
                texto: "A) Plano Plurianual (PPA)",
                correta: false,
                comentario: "Errado. O PPA é de médio prazo (4 anos), não orienta diretamente a LOA."
            },
            {
                texto: "B) Lei de Diretrizes Orçamentárias (LDO)",
                correta: true,
                comentario: "Correta. A LDO (art. 165, §2º, CF/88) define prioridades para a LOA."
            },
            {
                texto: "C) Lei de Responsabilidade Fiscal (LRF)",
                correta: false,
                comentario: "Errado. A LRF estabelece regras fiscais, mas não orienta a LOA."
            },
            {
                texto: "D) Regimento Interno do Legislativo",
                correta: false,
                comentario: "Errado. O regimento interno é norma administrativa do Legislativo."
            }
        ]
    },

    {
        pergunta: "30- (OACP) A licitação dispensável é permitida em casos como:",
        opcoes: [
            {
                texto: "A) Contratação de serviços técnicos de alto valor",
                correta: false,
                comentario: "Errado. Serviços técnicos exigem licitação (pregão ou concurso)."
            },
            {
                texto: "B) Situações de emergência ou calamidade pública",
                correta: true,
                comentario: "Correta. A Lei 14.133/2021 (art. 74) permite dispensa em emergências."
            },
            {
                texto: "C) Compra de bens comuns no mercado",
                correta: false,
                comentario: "Errado. Bens comuns devem ser licitados."
            },
            {
                texto: "D) Obras públicas complexas",
                correta: false,
                comentario: "Errado. Obras exigem licitação (modalidade concorrência)."
            }
        ]
    },

    {
        pergunta: "31- (OACP) O conceito de 'accountability' na gestão pública refere-se a:",
        opcoes: [
            {
                texto: "A) Centralização das decisões no Executivo",
                correta: false,
                comentario: "Errado. Centralização é o oposto do conceito."
            },
            {
                texto: "B) Prestação de contas e responsabilização",
                correta: true,
                comentario: "Correta. Accountability é a obrigação de transparência e responsabilização."
            },
            {
                texto: "C) Sigilo de informações orçamentárias",
                correta: false,
                comentario: "Errado. Sigilo viola a Lei de Acesso à Informação (12.527/2011)."
            },
            {
                texto: "D) Terceirização de serviços públicos",
                correta: false,
                comentario: "Errado. Terceirização é forma de execução indireta."
            }
        ]
    },

    {
        pergunta: "32- (OACP) Qual órgão é responsável por fiscalizar o cumprimento da Lei de Acesso à Informação (LAI)?",
        opcoes: [
            {
                texto: "A) Controladoria-Geral da União (CGU)",
                correta: true,
                comentario: "Correta. A CGU monitora a LAI (Decreto 7.724/2012)."
            },
            {
                texto: "B) Tribunal de Contas da União (TCU)",
                correta: false,
                comentario: "Errado. O TCU fiscaliza contas, não a LAI."
            },
            {
                texto: "C) Conselho Nacional de Justiça (CNJ)",
                correta: false,
                comentario: "Errado. O CNJ atua no Judiciário."
            },
            {
                texto: "D) Advocacia-Geral da União (AGU)",
                correta: false,
                comentario: "Errado. A AGU representa a União judicialmente."
            }
        ]
    },

    {
        pergunta: "33- (OACP) O termo 'governança pública' engloba:",
        opcoes: [
            {
                texto: "A) Apenas a gestão de recursos financeiros",
                correta: false,
                comentario: "Errado. Vai além da gestão financeira."
            },
            {
                texto: "B) Mecanismos de transparência, participação e eficiência",
                correta: true,
                comentario: "Correta. Governança inclui transparência, participação e eficácia (Decreto 9.203/2017)."
            },
            {
                texto: "C) Exclusivamente a atuação do Poder Judiciário",
                correta: false,
                comentario: "Errado. Envolve todos os Poderes e esferas de governo."
            },
            {
                texto: "D) Controle interno das autarquias",
                correta: false,
                comentario: "Errado. É um conceito mais amplo."
            }
        ]
    },

    {
        pergunta: "34- (OACP) A 'desburocratização' na gestão pública visa:",
        opcoes: [
            {
                texto: "A) Aumentar a hierarquização de processos",
                correta: false,
                comentario: "Errado. Hierarquia excessiva é justamente o problema."
            },
            {
                texto: "B) Reduzir trâmites desnecessários para serviços ao cidadão",
                correta: true,
                comentario: "Correta. Desburocratizar é simplificar processos (ex: Lei do Desburocratização – 13.726/2018)."
            },
            {
                texto: "C) Ampliar a discricionariedade dos gestores",
                correta: false,
                comentario: "Errado. Discricionariedade não é o foco."
            },
            {
                texto: "D) Criar novas autarquias",
                correta: false,
                comentario: "Errado. A tendência é reduzir estruturas."
            }
        ]
    },
    {
        pergunta: "35- Qual entidade NÃO faz parte da administração indireta?",
        opcoes: [
            {
                texto: "A) Autarquia",
                correta: false,
                comentario: "Errado. Autarquias são típicas da administração indireta (ex: INSS)."
            },
            {
                texto: "B) Empresa Pública",
                correta: false,
                comentario: "Errado. Empresas públicas integram a administração indireta."
            },
            {
                texto: "C) OSCIP",
                correta: true,
                comentario: "Correta. OSCIPs são paraestatais (Lei 9.790/1999), não fazem parte da administração indireta."
            },
            {
                texto: "D) Sociedade de Economia Mista",
                correta: false,
                comentario: "Errado. SEMs são da administração indireta (ex: Banco do Brasil)."
            }
        ]
    },
    {
        pergunta: "36- Qual instrumento define as metas de longo prazo?",
        opcoes: [
            {
                texto: "A) LOA",
                correta: false,
                comentario: "Errado. LOA (Lei Orçamentária Anual) trata do orçamento anual."
            },
            {
                texto: "B) LDO",
                correta: false,
                comentario: "Errado. LDO (Lei de Diretrizes Orçamentárias) estabelece prioridades para o ano seguinte."
            },
            {
                texto: "C) PPA",
                correta: true,
                comentario: "Correta. PPA (Plano Plurianual) define metas para 4 anos (Art. 165, CF)."
            },
            {
                texto: "D) LRF",
                correta: false,
                comentario: "Errado. LRF (Lei de Responsabilidade Fiscal) regula gastos públicos."
            }
        ]
    },
    {
        pergunta: "37- Em qual caso NÃO é possível dispensar licitação?",
        opcoes: [
            {
                texto: "A) Compra de 10 computadores no valor de R$ 50 mil",
                correta: true,
                comentario: "Correta. Valores acima dos limites da Lei 8.666/1993 exigem licitação (salvo exceções legais)."
            },
            {
                texto: "B) Situação de calamidade pública",
                correta: false,
                comentario: "Errado. Dispensa permitida em emergências (Art. 24, III da Lei 8.666)."
            },
            {
                texto: "C) Contratação de artista exclusivo",
                correta: false,
                comentario: "Errado. Dispensa permitida para serviços artísticos únicos (Art. 13, Lei 8.666)."
            },
            {
                texto: "D) Aquisição de material bélico sigiloso",
                correta: false,
                comentario: "Errado. Dispensa permitida para compras de defesa (Art. 24, II da Lei 8.666)."
            }
        ]
    },
    {
        pergunta: "38- Quem fiscaliza a LAI na esfera federal?",
        opcoes: [
            {
                texto: "A) TCU",
                correta: false,
                comentario: "Errado. TCU fiscaliza contas públicas, mas não a LAI especificamente."
            },
            {
                texto: "B) CGU",
                correta: true,
                comentario: "Correta. Controladoria-Geral da União monitora o cumprimento da Lei 12.527/2011 (LAI)."
            },
            {
                texto: "C) AGU",
                correta: false,
                comentario: "Errado. AGU atua como advogada do governo."
            },
            {
                texto: "D) STF",
                correta: false,
                comentario: "Errado. STF julga questões constitucionais."
            }
        ]
    },
    {
        pergunta: "39- Qual percentual máximo de gastos com pessoal um município pode ter?",
        opcoes: [
            {
                texto: "A) 40%",
                correta: false,
                comentario: "Errado. Este é o limite para estados e DF."
            },
            {
                texto: "B) 54%",
                correta: false,
                comentario: "Errado. Percentual sem base legal."
            },
            {
                texto: "C) 60%",
                correta: true,
                comentario: "Correta. Art. 19 da LRF estabelece 60% para municípios."
            },
            {
                texto: "D) 70%",
                correta: false,
                comentario: "Errado. Valor acima do teto constitucional."
            }
        ]
    }
    ,
    {
        pergunta: "40- (OACP) Segundo a LRF (LC 101/2000), o limite máximo para despesas com pessoal no Poder Judiciário estadual é:",
        opcoes: [
            {
                texto: "A) 6% da receita corrente líquida",
                correta: true,
                comentario: "Correta. Art. 20 da LRF: 6% para Judiciário estadual."
            },
            {
                texto: "B) 3% da receita corrente líquida",
                correta: false,
                comentario: "Errado. 3% é o limite do Ministério Público estadual."
            },
            {
                texto: "C) 60% da receita corrente líquida",
                correta: false,
                comentario: "Errado. 60% é o limite do Executivo municipal."
            },
            {
                texto: "D) 2% da receita corrente líquida",
                correta: false,
                comentario: "Errado. 2% é o limite do Legislativo municipal."
            }
        ]
    },
    {
        pergunta: "41- (OACP) O PPA (Plano Plurianual) deve ser enviado pelo Executivo ao Legislativo até:",
        opcoes: [
            {
                texto: "A) 31 de agosto do primeiro ano de mandato",
                correta: true,
                comentario: "Correta. Art. 165, §1º da CF/88: PPA deve ser enviado até 31/08 do 1º ano de mandato."
            },
            {
                texto: "B) 30 de setembro do primeiro ano de mandato",
                correta: false,
                comentario: "Errado. 30/09 é prazo para envio da LDO."
            },
            {
                texto: "C) 15 de dezembro do ano anterior ao mandato",
                correta: false,
                comentario: "Errado. Prazo não previsto na legislação."
            },
            {
                texto: "D) 31 de março do primeiro ano de mandato",
                correta: false,
                comentario: "Errado. Prazo não previsto na legislação."
            }
        ]
    },
    {
        pergunta: "42- (OACP) Qual despesa NÃO é considerada no cálculo dos limites da LRF para pessoal?",
        opcoes: [
            {
                texto: "A) Salários de servidores ativos",
                correta: false,
                comentario: "Errado. Faz parte da despesa com pessoal (art. 18 da LRF)."
            },
            {
                texto: "B) Verbas de alimentação e transporte",
                correta: false,
                comentario: "Errado. Faz parte da despesa com pessoal (art. 18 da LRF)."
            },
            {
                texto: "C) Aposentadorias e pensões",
                correta: true,
                comentario: "Correta. Não entram no cálculo (art. 18, §1º da LRF)."
            },
            {
                texto: "D) Prêmios por produtividade",
                correta: false,
                comentario: "Errado. Faz parte da despesa com pessoal (art. 18 da LRF)."
            }
        ]
    },
    {
        pergunta: "43- (OACP) Se um Estado ultrapassar o limite de gastos com pessoal, a LRF determina que:",
        opcoes: [
            {
                texto: "A) O governador deve reduzir o excesso em 6 meses",
                correta: false,
                comentario: "Errado. O prazo é de 8 meses (não 6)."
            },
            {
                texto: "B) O Tribunal de Contas deve intervir no Estado",
                correta: false,
                comentario: "Errado. O TC apenas emite alerta, não intervém."
            },
            {
                texto: "C) O Estado fica impedido de criar cargos até ajustar as contas",
                correta: true,
                comentario: "Correta. Art. 22 da LRF: proibição de criar cargos, conceder reajustes ou contratar até regularizar."
            },
            {
                texto: "D) O Legislativo deve aumentar impostos para cobrir o déficit",
                correta: false,
                comentario: "Errado. Aumentar impostos não é solução prevista na LRF."
            }
        ]
    },
    {
        pergunta: "44- (OACP) O PPA deve conter:",
        opcoes: [
            {
                texto: "A) Metas anuais de inflação",
                correta: false,
                comentario: "Errado. Metas de inflação são do Banco Central."
            },
            {
                texto: "B) Diretrizes para o orçamento anual",
                correta: false,
                comentario: "Errado. Diretrizes anuais são da LDO."
            },
            {
                texto: "C) Prioridades para o mandato de 4 anos",
                correta: true,
                comentario: "Correta. O PPA estabelece prioridades e metas para 4 anos (art. 165, CF/88)."
            },
            {
                texto: "D) Limites para endividamento público",
                correta: false,
                comentario: "Errado. Limites de dívida são da LRF."
            }
        ]
    },
    {
        pergunta: "45- (OACP) A LRF exige que a Lei Orçamentária Anual (LOA) seja compatível com:",
        opcoes: [
            {
                texto: "A) Apenas o PPA",
                correta: false,
                comentario: "Errado. A LOA precisa alinhar-se a ambos PPA e LDO."
            },
            {
                texto: "B) Apenas a LDO",
                correta: false,
                comentario: "Errado. A LOA precisa alinhar-se a ambos PPA e LDO."
            },
            {
                texto: "C) PPA e LDO",
                correta: true,
                comentario: "Correta. A LOA deve seguir PPA (médio prazo) e LDO (diretrizes anuais)."
            },
            {
                texto: "D) O regimento interno do Legislativo",
                correta: false,
                comentario: "Errado. Regimento interno não interfere no orçamento."
            }
        ]
    },
    {
        pergunta: "46- (OACP) Qual situação NÃO caracteriza 'renúncia de receita' segundo a LRF?",
        opcoes: [
            {
                texto: "A) Conceder isenção fiscal a empresas",
                correta: false,
                comentario: "Errado. É exemplo de renúncia (art. 14 da LRF)."
            },
            {
                texto: "B) Aumentar alíquotas de impostos",
                correta: true,
                comentario: "Correta. Aumentar alíquotas gera receita, não é renúncia."
            },
            {
                texto: "C) Não cobrar multas previstas em lei",
                correta: false,
                comentario: "Errado. É exemplo de renúncia (art. 14 da LRF)."
            },
            {
                texto: "D) Reduzir taxas de serviços públicos",
                correta: false,
                comentario: "Errado. É exemplo de renúncia (art. 14 da LRF)."
            }
        ]
    },
    {
        pergunta: "47- (OACP) O Relatório Resumido da Execução Orçamentária (RREO) deve ser publicado:",
        opcoes: [
            {
                texto: "A) Trimestralmente",
                correta: true,
                comentario: "Correta. Art. 52 da LRF: RREO é trimestral."
            },
            {
                texto: "B) Anualmente",
                correta: false,
                comentario: "Errado. Anual é o Relatório de Gestão Fiscal."
            },
            {
                texto: "C) Semestralmente",
                correta: false,
                comentario: "Errado. O prazo correto é trimestral."
            },
            {
                texto: "D) Mensalmente",
                correta: false,
                comentario: "Errado. O prazo correto é trimestral."
            }
        ]
    },
    {
        pergunta: "48- (OACP) Se um município descumprir a LRF, o prefeito pode sofrer:",
        opcoes: [
            {
                texto: "A) Apenas advertência",
                correta: false,
                comentario: "Errado. Há sanções mais graves."
            },
            {
                texto: "B) Improbidade administrativa",
                correta: true,
                comentario: "Correta. Descumprir a LRF pode configurar improbidade (art. 73)."
            },
            {
                texto: "C) Intervenção federal",
                correta: false,
                comentario: "Errado. Intervenção só ocorre em casos extremos."
            },
            {
                texto: "D) Perda do cargo automaticamente",
                correta: false,
                comentario: "Errado. Perda de cargo depende de processo."
            }
        ]
    },
    {
        pergunta: "49- (OACP) A LRF proíbe a criação de despesas obrigatórias de caráter continuado sem:",
        opcoes: [
            {
                texto: "A) Autorização do Legislativo",
                correta: false,
                comentario: "Errado. Não é condição prevista na lei."
            },
            {
                texto: "B) Fonte de financiamento comprovada",
                correta: true,
                comentario: "Correta. Art. 16 da LRF: despesas continuadas exigem fonte de custeio."
            },
            {
                texto: "C) Aprovação em referendo popular",
                correta: false,
                comentario: "Errado. Não é condição prevista na lei."
            },
            {
                texto: "D) Anuência do Tribunal de Contas",
                correta: false,
                comentario: "Errado. Não é condição prevista na lei."
            }
        ]
    }

];



