const questions = [
  {
    question: "What is the opposite of hot?",
    answers:[
      {text: "Warm", correct: false},
      {text: "Cold", correct: true},
      {text: "Cool", correct: false},
      {text: "Lukewarm", correct: false},
    ]
  },

  {
    question: "How many legs does a spider have?",
    answers:[
      {text: "4", correct: false},
      {text: "6", correct: false},
      {text: "8", correct: true},
      {text: "10", correct: false},
    ]
  },

  {
    question: "How many continents are there on Earth?",
    answers:[
      {text: "5", correct: false},
      {text: "6", correct: false},
      {text: "8", correct: false},
      {text: "7", correct: true},
    ]
  },

  {
    question: "Which shape has three sides?",
    answers:[
      {text: "Triangle", correct: true},
      {text: "Square", correct: false},
      {text: "Circle", correct: false},
      {text: "Rectangle", correct: false},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer); // Add event listener for answer selection
  });
}

function selectAnswer(event) {
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true"; // Check if the selected button is correct

  if (isCorrect) {
    score++;
    selectedButton.classList.add("correct");
  } else {
    selectedButton.classList.add("incorrect");
  }
  nextButton.style.display = "block"; // Show "Next" button after selection
}

function resetState(){
  nextButton.style.display = "none"; // Hide the "Next" button initially
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild); // Remove previous answer buttons
  }
}

startQuiz();
