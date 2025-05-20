let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");

function showQuestion() {
  const question = questions[currentQuestion];
  questionContainer.innerHTML = `<p>${question.pergunta}</p>`;
  feedback.innerHTML = "";
  
  question.opcoes.forEach((opcao, index) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.innerText = opcao.texto;
    button.addEventListener("click", () => selectAnswer(button, opcao));
    questionContainer.appendChild(button);
  });

  nextButton.style.display = "none";
}

function selectAnswer(button, opcao) {
  const options = document.querySelectorAll(".option");
  options.forEach(btn => btn.disabled = true);

  if (opcao.correta) {
    button.classList.add("correct");
    feedback.innerText = "✅ Correto!";
    score++;
  } else {
    button.classList.add("incorrect");
    feedback.innerText = `❌ Errado. ${opcao.comentario}`;
  }

  // mostrar comentário das opções erradas
  options.forEach((btn, idx) => {
    if (!questions[currentQuestion].opcoes[idx].correta) {
      btn.title = questions[currentQuestion].opcoes[idx].comentario;
    } else {
      btn.classList.add("correct");
    }
  });

  nextButton.style.display = "inline-block";
}

nextButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionContainer.innerHTML = "";
  feedback.innerHTML = "";
  nextButton.style.display = "none";
  scoreDisplay.innerText = `Você acertou ${score} de ${questions.length} questões.`;
}

showQuestion();
