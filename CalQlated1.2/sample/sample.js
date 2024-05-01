document.addEventListener("DOMContentLoaded", function () {
  // Initially hide the quiz container
  document.getElementById('quiz-container').style.opacity = '1';

  // Get all questions
  var questions = document.querySelectorAll('.question-container');

  // Reveal all questions at once
  questions.forEach(function (question) {
    question.style.opacity = '1';
  });

  // Hide hint container initially
  document.getElementById('hintContainer').style.display = 'none';
});

function showHint() {
  var hintContainer = document.getElementById("hintContainer");
  if (hintContainer.style.display === 'none') {
    hintContainer.style.display = 'block';
    hintContainer.style.position = 'absolute'; // Set position to absolute
    hintContainer.style.zIndex = '1000'; // Set higher z-index to overlap questions
  } else {
    hintContainer.style.display = 'none';
  }
}

function calculateScore() {
  // Add your scoring logic here
  // For simplicity, let's assume the user gets 1 point for each correct answer
  var score = 0;

  // Check the answers for each question
  if (document.getElementById('q1b').checked) {
    score++;
  }

  if (document.getElementById('q2b').checked) {
    score++;
  }

  if (document.getElementById('q3a').checked) {
    score++;
  }

  if (document.getElementById('q4c').checked) {
    score++;
  }

  if (document.getElementById('q5b').checked) {
    score++;
  }

  localStorage.setItem('quizScore', score);

  // Redirect to the score page
  window.location.href = 'score.html';
}
