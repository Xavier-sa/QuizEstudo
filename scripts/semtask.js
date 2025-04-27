let questions = []; // Inicialmente vazio
let currentQuestion = 0;
let score = 0; // variável para armazenar a pontuação

// Função para carregar as perguntas do arquivo externo
async function loadQuestions() {
    try {
        const response = await fetch('https://xavier-sa.github.io/questionario/perguntas.json');
        questions = await response.json();
        nextQuestion();
    } catch (error) {
        console.error('Erro ao carregar as perguntas:', error);
    }
}

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
        score++;
    } else {
        alert("Errado! Resposta correta: " + questions[currentQuestion].correct);
    }
    currentQuestion++;
    nextQuestion();
}

// Começa carregando as perguntas
loadQuestions();
