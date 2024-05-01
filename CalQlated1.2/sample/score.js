document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the score from localStorage and display it
    var score = localStorage.getItem('quizScore');
    document.getElementById('score').innerText = score;
  
    // Show correct answer modal when button is clicked
    document.getElementById('showCorrectAnswerBtn').addEventListener('click', function () {
      document.getElementById('correctAnswerModal').style.display = 'block';
    });
  
    // Show solution modal when button is clicked
    document.getElementById('showSolutionBtn').addEventListener('click', function () {
      document.getElementById('solutionModal').style.display = 'block';
    });
  
    // Close correct answer modal when close button is clicked
    document.getElementById('closeCorrectAnswerModalBtn').addEventListener('click', function () {
      document.getElementById('correctAnswerModal').style.display = 'none';
    });
  
    // Close solution modal when close button is clicked
    document.getElementById('closeSolutionModalBtn').addEventListener('click', function () {
      document.getElementById('solutionModal').style.display = 'none';
    });
  
    // Close modals when clicking outside the modal
    window.addEventListener('click', function (event) {
      var correctAnswerModal = document.getElementById('correctAnswerModal');
      var solutionModal = document.getElementById('solutionModal');
  
      if (event.target === correctAnswerModal) {
        correctAnswerModal.style.display = 'none';
      }
  
      if (event.target === solutionModal) {
        solutionModal.style.display = 'none';
      }
    });
  });
  