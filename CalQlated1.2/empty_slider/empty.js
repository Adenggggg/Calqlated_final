let currentQuestion = 0; // Start with the first question

function prevQuestion() {
  if (currentQuestion > 0) {
    showQuestion(currentQuestion - 1);
  }
}

function nextQuestion() {
  const totalQuestions = document.querySelectorAll('.question-container').length;
  if (currentQuestion < totalQuestions - 1) {
    showQuestion(currentQuestion + 1);
  } else {
    submitQuiz(); // If on the last question, handle submit logic here
  }
}

function submitQuiz() {
  // Handle submit logic here, such as displaying results
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = 'Quiz submitted!'; // Example result message
}

function showQuestion(questionNumber) {
  const questions = document.querySelectorAll('.question-container');
  questions.forEach(question => question.style.display = 'none');
  questions[questionNumber].style.display = 'block';

  const prevButton = document.querySelector('#prevButton');
  const nextButton = document.querySelector('#nextButton');

  if (questionNumber === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'inline-block';
  }

  if (questionNumber === questions.length - 1) {
    nextButton.innerHTML = 'Submit';
  } else {
    nextButton.innerHTML = 'Next';
    nextButton.style.display = 'inline-block'; // Ensure next button is visible for non-last questions
  }

  currentQuestion = questionNumber;

  // Automatically proceed to the next question once an answer is chosen
  const choices = questions[currentQuestion].querySelectorAll('.choices input[type="radio"]');
  choices.forEach(choice => {
    choice.addEventListener('change', () => {
      if (currentQuestion < questions.length - 1) {
        nextQuestion();
      }
    });
  });
}

// Initialize the quiz
showQuestion(currentQuestion);

// Countdown Timer
const quizDurationSeconds = 100; // Example: 100 seconds
const timerDisplay = document.getElementById('timerDisplay');

function updateTimerDisplay(remainingTime) {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

let remainingTime = quizDurationSeconds;

const timerInterval = setInterval(() => {
  remainingTime--;

  updateTimerDisplay(remainingTime);

  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    timerDisplay.textContent = 'Time Up!';
    submitQuiz(); // Trigger quiz submission when time is up
  }
}, 1000); // Update timer every second

// Function to toggle visibility of hint message
function toggleHint(hintId) {
  const hintElement = document.getElementById(hintId);
  if (hintElement.style.display === 'none') {
    hintElement.style.display = 'block';
  } else {
    hintElement.style.display = 'none';
  }
}
