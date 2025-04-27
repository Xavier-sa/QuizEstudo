const questions = [
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
        question: "Segundo o CTB (Código de Trânsito Brasileiro), dirigir sem CNH é considerado:",
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
    }
];

let currentQuestion = 0;
let score = 0; // variável para armazenar a pontuação

function nextQuestion() {
    const container = document.getElementById('quiz-container');
    const questionText = document.getElementById('question');
    const answersDiv = document.getElementById('answers');

    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        questionText.textContent = q.question;
        answersDiv.innerHTML = '';

        q.answers.forEach(ans => {
            const btn = document.createElement('button');
            btn.textContent = ans;
            btn.onclick = () => checkAnswer(ans);
            answersDiv.appendChild(btn);
        });
    } else {
        questionText.textContent = `Fim do Quiz! Você acertou ${score} de ${questions.length} perguntas!`;
        answersDiv.innerHTML = '';
    }
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) {
        alert("Correto!");
        score++; // incrementa a pontuação se acertar
    } else {
        alert("Errado! Resposta correta: " + questions[currentQuestion].correct);
    }
    currentQuestion++;
    nextQuestion();
}



