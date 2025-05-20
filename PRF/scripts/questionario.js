const questions = [
    // 1 a 10 (as suas primeiras)
    {
        question: "Qual é o sujeito da frase: 'Fomos ao mercado'?",
        answers: ["Nós", "Mercado", "Fomos", "Ao"],
        correct: "Nós"
    },
    {
        question: "O que é cláusula pétrea na Constituição?",
        answers: ["Lei de trânsito", "Direito fundamental que não pode ser abolido", "Regra tributária", "Norma de trânsito"],
        correct: "Direito fundamental que não pode ser abolido"
    },
    {
        question: "Qual comando apaga arquivos via terminal Linux?",
        answers: ["cd", "mkdir", "rm", "mv"],
        correct: "rm"
    },
    {
        question: "Qual artigo da Constituição trata dos Direitos e Garantias Fundamentais?",
        answers: ["Art. 1º", "Art. 5º", "Art. 37", "Art. 144"],
        correct: "Art. 5º"
    },
    {
        question: "O que é improbidade administrativa?",
        answers: ["Erro técnico", "Atividade ilícita que fere princípios da administração pública", "Concurso interno", "Promoção militar"],
        correct: "Atividade ilícita que fere princípios da administração pública"
    },
    {
        question: "Qual é o tipo penal do crime de corrupção passiva?",
        answers: ["Receber vantagem indevida", "Oferecer vantagem a servidor", "Roubo de veículo", "Desacato"],
        correct: "Receber vantagem indevida"
    },
    {
        question: "Segundo o CTB, dirigir sem CNH é considerado:",
        answers: ["Infração leve", "Infração média", "Infração grave", "Infração gravíssima"],
        correct: "Infração gravíssima"
    },
    {
        question: "Qual a prioridade no atendimento médico, segundo o Estatuto da PRF?",
        answers: ["Idosos", "Motoristas", "Autoridades", "Servidores públicos"],
        correct: "Idosos"
    },
    {
        question: "No Windows, o atalho 'Ctrl + C' serve para:",
        answers: ["Colar", "Copiar", "Apagar", "Criar pasta"],
        correct: "Copiar"
    },
    {
        question: "O órgão responsável pela segurança pública, segundo o Art. 144 da Constituição, é:",
        answers: ["Forças Armadas", "Polícia Federal", "Exército", "Poder Judiciário"],
        correct: "Polícia Federal"
    },
    
    // 11 a 20
    {
        question: "Em qual artigo a Constituição trata dos Princípios da Administração Pública?",
        answers: ["Art. 5º", "Art. 37", "Art. 144", "Art. 1º"],
        correct: "Art. 37"
    },
    {
        question: "O que significa o princípio da legalidade?",
        answers: ["Fazer o que quiser", "Agir conforme a lei", "Inovar normas", "Criar leis"],
        correct: "Agir conforme a lei"
    },
    {
        question: "Qual tecla de atalho fecha uma janela no Windows?",
        answers: ["Ctrl + C", "Alt + F4", "Ctrl + V", "Shift + F1"],
        correct: "Alt + F4"
    },
    {
        question: "Segundo o CTB, avançar o sinal vermelho é:",
        answers: ["Infração leve", "Infração média", "Infração grave", "Infração gravíssima"],
        correct: "Infração gravíssima"
    },
    {
        question: "Quem julga o Presidente da República por crime comum?",
        answers: ["Senado", "Congresso", "STF", "STJ"],
        correct: "STF"
    },
    {
        question: "Qual é o crime de aceitar propina sendo policial?",
        answers: ["Corrupção passiva", "Abuso de autoridade", "Peculato", "Concussão"],
        correct: "Corrupção passiva"
    },
    {
        question: "A quem pertence a competência para legislar sobre trânsito?",
        answers: ["Municípios", "Estados", "União", "DF"],
        correct: "União"
    },
    {
        question: "Direito ao contraditório é garantido em que esfera?",
        answers: ["Administrativa", "Policial", "Judicial", "Todas as anteriores"],
        correct: "Todas as anteriores"
    },
    {
        question: "Qual comando cria uma nova pasta no Linux?",
        answers: ["cd", "mkdir", "rm", "mv"],
        correct: "mkdir"
    },
    {
        question: "O que é habeas corpus?",
        answers: ["Defesa de patrimônio", "Defesa de liberdade", "Defesa política", "Processo civil"],
        correct: "Defesa de liberdade"
    },
    
    // 21 a 30
    {
        question: "Qual órgão exerce o controle externo da Administração Pública?",
        answers: ["STF", "Tribunal de Contas", "Senado", "Polícia Federal"],
        correct: "Tribunal de Contas"
    },
    {
        question: "Segundo o CTB, estacionar em vaga de idoso sem permissão é:",
        answers: ["Infração leve", "Infração grave", "Infração média", "Infração gravíssima"],
        correct: "Infração gravíssima"
    },
    {
        question: "O que é crime hediondo?",
        answers: ["Crime de trânsito", "Crime de extrema gravidade", "Crime civil", "Crime tributário"],
        correct: "Crime de extrema gravidade"
    },
    {
        question: "Qual função do Ministério Público?",
        answers: ["Defender réus", "Proteger interesses públicos", "Julgar processos", "Comandar polícias"],
        correct: "Proteger interesses públicos"
    },
    {
        question: "Qual tecla atualiza a página no navegador?",
        answers: ["Ctrl + C", "Ctrl + V", "F5", "F1"],
        correct: "F5"
    },
    {
        question: "O que é inviolável segundo o Art. 5º da Constituição?",
        answers: ["Imposto", "Imprensa", "Casa", "Polícia"],
        correct: "Casa"
    },
    {
        question: "Desacato é crime contra:",
        answers: ["Patrimônio", "Administração Pública", "Vida", "Honra"],
        correct: "Administração Pública"
    },
    {
        question: "Quem faz parte da segurança pública, segundo a Constituição?",
        answers: ["Polícia Federal", "Polícia Rodoviária Federal", "Guarda Municipal", "Todas as anteriores"],
        correct: "Todas as anteriores"
    },
    {
        question: "Qual dos princípios é aplicado na Administração Pública?",
        answers: ["Moralidade", "Eficiência", "Legalidade", "Todos"],
        correct: "Todos"
    },
    {
        question: "Qual é o tipo de crime: dirigir embriagado?",
        answers: ["Contravenção", "Crime de trânsito", "Crime hediondo", "Crime federal"],
        correct: "Crime de trânsito"
    },

    // 31 a 40
    {
        question: "Qual software é usado para criar apresentações?",
        answers: ["Word", "Excel", "PowerPoint", "Access"],
        correct: "PowerPoint"
    },
    {
        question: "A quem compete fazer leis sobre segurança pública?",
        answers: ["Congresso Nacional", "Polícia Federal", "Exército", "Senado Federal"],
        correct: "Congresso Nacional"
    },
    {
        question: "No Windows, qual extensão é de arquivo executável?",
        answers: [".txt", ".exe", ".docx", ".pdf"],
        correct: ".exe"
    },
    {
        question: "O que garante o princípio da dignidade da pessoa humana?",
        answers: ["Direito civil", "Direito constitucional", "Direito penal", "Direito eleitoral"],
        correct: "Direito constitucional"
    },
    {
        question: "Qual é a competência da PRF?",
        answers: ["Repressão ao tráfico aéreo", "Fiscalizar rodovias federais", "Julgar crimes federais", "Administrar presídios"],
        correct: "Fiscalizar rodovias federais"
    },
    {
        question: "Qual o objetivo principal da segurança pública?",
        answers: ["Proteger o governo", "Proteger a sociedade", "Criar impostos", "Gerar lucros"],
        correct: "Proteger a sociedade"
    },
    {
        question: "Artigo 5º, inciso X, protege o quê?",
        answers: ["Vida", "Intimidade, vida privada, honra e imagem", "Liberdade religiosa", "Educação"],
        correct: "Intimidade, vida privada, honra e imagem"
    },
    {
        question: "Quem é responsável pela investigação criminal, segundo a Constituição?",
        answers: ["Polícia Civil", "Guarda Municipal", "Polícia Federal", "Polícia Rodoviária Federal"],
        correct: "Polícia Civil"
    },
    {
        question: "Segundo o CTB, ultrapassar pelo acostamento é:",
        answers: ["Infração leve", "Infração gravíssima", "Infração média", "Infração grave"],
        correct: "Infração gravíssima"
    },
    {
        question: "Qual crime ocorre ao usar documento falso?",
        answers: ["Estelionato", "Falsidade ideológica", "Falsificação de documento", "Abuso de poder"],
        correct: "Falsificação de documento"
    }
];
