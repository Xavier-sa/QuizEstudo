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

  // Avaliação da resposta
  if (opcao.correta) {
    button.classList.add("correct");
    feedback.innerText = "✅ Correto!";
    score++;
  } else {
    button.classList.add("incorrect");
    feedback.innerText = `❌ Errado. ${opcao.comentario}`;
  }

  // Exibir comentários de todas as opções
  options.forEach((btn, idx) => {
    const comentario = document.createElement("div");
    comentario.classList.add("comentario");
    comentario.innerText = questions[currentQuestion].opcoes[idx].comentario;
    btn.parentElement.insertBefore(comentario, btn.nextSibling);

    if (questions[currentQuestion].opcoes[idx].correta) {
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
