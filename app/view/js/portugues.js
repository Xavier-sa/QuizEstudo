const questions = [
    
    {
        "pergunta": "(OACP) Assinale a alternativa em que a palavra está corretamente acentuada:",
        "opcoes": [
            {
                "texto": "A) Pára-quedas",
                "correta": true,
                "comentario": "Correto. 'Pára-quedas' tem acento diferencial para distinguir da preposição 'para'."
            },
            {
                "texto": "B) Pará-quedas",
                "correta": false,
                "comentario": "Errado. O acento está na sílaba errada ('pará' em vez de 'pára')."
            },
            {
                "texto": "C) Para-quedas",
                "correta": false,
                "comentario": "Errado. Falta o acento diferencial necessário."
            },
            {
                "texto": "D) Pàra-quedas",
                "correta": false,
                "comentario": "Errado. Uso incorreto do acento grave (`) em vez do agudo (´)."
            }
        ]
    },
    {
        "pergunta": "(OACP) Em qual alternativa há erro de concordância verbal?",
        "opcoes": [
            {
                "texto": "A) Os alunos estudam para a prova.",
                "correta": false,
                "comentario": "Correto. Verbo 'estudam' concorda com o sujeito plural 'os alunos'."
            },
            {
                "texto": "B) Ele viajou para o exterior.",
                "correta": false,
                "comentario": "Correto. Verbo 'viajou' concorda com o sujeito singular 'ele'."
            },
            {
                "texto": "C) Nós vamos ao cinema amanhã.",
                "correta": false,
                "comentario": "Correto. Verbo 'vamos' concorda com o sujeito 'nós'."
            },
            {
                "texto": "D) Eles vai ao teatro hoje.",
                "correta": true,
                "comentario": "Errado. O correto é 'Eles vão' (plural) para concordar com 'eles'."
            }
        ]
    },
    {
        "pergunta": "(OACP) Assinale a alternativa que apresenta um exemplo de crase:",
        "opcoes": [
            {
                "texto": "A) Vou à escola.",
                "correta": true,
                "comentario": "Correto. Crase = preposição 'a' + artigo 'a' (feminino)."
            },
            {
                "texto": "B) Vou a escola.",
                "correta": false,
                "comentario": "Errado. Falta o acento indicativo de crase."
            },
            {
                "texto": "C) Vou a à escola.",
                "correta": false,
                "comentario": "Errado. Duplicação incorreta da preposição."
            },
            {
                "texto": "D) Vou na escola.",
                "correta": false,
                "comentario": "Errado. Uso de 'na' (em + a) não configura crase."
            }
        ]
    },
    {
        "pergunta": "(OACP) Assinale a alternativa que apresenta um erro de regência verbal:",
        "opcoes": [
            {
                "texto": "A) Ele assistiu ao filme.",
                "correta": false,
                "comentario": "Correto. 'Assistir a' segue a regência padrão."
            },
            {
                "texto": "B) Ela gosta de música clássica.",
                "correta": false,
                "comentario": "Correto. 'Gostar de' está gramaticalmente correto."
            },
            {
                "texto": "C) Eles chegaram no horário.",
                "correta": true,
                "comentario": "Errado. O verbo 'chegar' exige a preposição 'a' ('chegaram ao horário')."
            },
            {
                "texto": "D) Nós conversamos sobre o assunto.",
                "correta": false,
                "comentario": "Correto. 'Conversar sobre' é regência adequada."
            }
        ]
    },
    {
        "pergunta": "(OACP) Assinale a alternativa que apresenta um exemplo de pronome relativo:",
        "opcoes": [
            {
                "texto": "A) Eu vi o filme que você recomendou.",
                "correta": true,
                "comentario": "Correto. 'Que' é pronome relativo retomando 'filme'."
            },
            {
                "texto": "B) Eu vi o filme.",
                "correta": false,
                "comentario": "Errado. Não há pronome relativo na frase."
            },
            {
                "texto": "C) Eu vi.",
                "correta": false,
                "comentario": "Errado. Frase sem pronome relativo."
            },
            {
                "texto": "D) Eu.",
                "correta": false,
                "comentario": "Errado. Apenas um pronome pessoal."
            }
        ]
    },
    {
        "pergunta": "(OACP) Assinale a alternativa que apresenta um erro de pontuação:",
        "opcoes": [
            {
                "texto": "A) Ela gosta de ler, estudar e viajar.",
                "correta": false,
                "comentario": "Correto. Vírgulas separam corretamente os itens da lista."
            },
            {
                "texto": "B) Ela gosta de ler estudar e viajar.",
                "correta": true,
                "comentario": "Errado. Falta vírgula para separar os verbos ('ler, estudar')."
            },
            {
                "texto": "C) Ela gosta de ler estudar, e viajar.",
                "correta": false,
                "comentario": "Errado. Vírgula mal posicionada (deveria estar após 'ler')."
            },
            {
                "texto": "D) Ela gosta de ler, estudar, e viajar.",
                "correta": false,
                "comentario": "Correto. Vírgula antes do 'e' é opcional (vírgula de Oxford)."
            }
        ]
    },
    {
        "pergunta": "(OACP) Assinale a alternativa que apresenta um exemplo de voz passiva:",
        "opcoes": [
            {
                "texto": "A) O livro foi lido por ela.",
                "correta": true,
                "comentario": "Correto. Sujeito ('livro') sofre a ação do verbo ('foi lido')."
            },
            {
                "texto": "B) Ela leu o livro.",
                "correta": false,
                "comentario": "Errado. Voz ativa ('ela' pratica a ação)."
            },
            {
                "texto": "C) Ela está lendo o livro.",
                "correta": false,
                "comentario": "Errado. Voz ativa no gerúndio."
            },
            {
                "texto": "D) Ela lerá o livro.",
                "correta": false,
                "comentario": "Errado. Voz ativa no futuro."
            }
        ]
    },
    {
        "pergunta": "(OACP) Assinale a alternativa que apresenta um erro de concordância nominal:",
        "opcoes": [
            {
                "texto": "A) As meninas são inteligentes.",
                "correta": false,
                "comentario": "Correto. Adjetivo plural concorda com 'meninas'."
            },
            {
                "texto": "B) Os meninos são inteligentes.",
                "correta": false,
                "comentario": "Correto. Adjetivo plural concorda com 'meninos'."
            },
            {
                "texto": "C) As meninas são inteligente.",
                "correta": true,
                "comentario": "Errado. Adjetivo no singular ('inteligente') não concorda com o plural 'meninas'."
            },
            {
                "texto": "D) Os meninos são inteligente.",
                "correta": false,
                "comentario": "Errado. Mesmo erro que C, mas já marcado em C."
            }
        ]
    },
    {
        "pergunta": "(OACP) Assinale a alternativa que apresenta um exemplo de oração subordinada adjetiva:",
        "opcoes": [
            {
                "texto": "A) O livro que estou lendo é interessante.",
                "correta": true,
                "comentario": "Correto. 'Que estou lendo' qualifica o substantivo 'livro'."
            },
            {
                "texto": "B) Eu estou lendo um livro interessante.",
                "correta": false,
                "comentario": "Errado. 'Interessante' é adjetivo, não oração."
            },
            {
                "texto": "C) Eu estou lendo.",
                "correta": false,
                "comentario": "Errado. Frase sem oração subordinada."
            },
            {
                "texto": "D) O livro é interessante.",
                "correta": false,
                "comentario": "Errado. Frase simples sem subordinação."
            }
        ]
    },
    {
        "pergunta": "(OACP) Assinale a alternativa que apresenta um erro de uso de crase:",
        "opcoes": [
            {
                "texto": "A) Vou à escola.",
                "correta": false,
                "comentario": "Correto. Crase obrigatória antes de palavra feminina ('escola')."
            },
            {
                "texto": "B) Vou a escola.",
                "correta": true,
                "comentario": "Errado. Falta crase antes de 'escola' (feminino)."
            },
            {
                "texto": "C) Vou à casa dela.",
                "correta": false,
                "comentario": "Correto. Crase opcional com 'casa' no sentido de lar."
            },
            {
                "texto": "D) Vou a Paris.",
                "correta": false,
                "comentario": "Correto. Não há crase antes de nomes próprios de cidades (salvo exceções como 'à Bahia')."
            }
        ]
    }
];