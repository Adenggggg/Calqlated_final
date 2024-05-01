function startQuiz() {
    const quizDate = document.getElementById("quizDate").value;
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;
    const showCorrectAnswer = document.getElementById("showCorrectAnswer").checked;
    const showSolution = document.getElementById("showSolution").checked;
    const questionTimer = document.getElementById("questionTimer").value;

    console.log("Quiz Date:", quizDate);
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
    console.log("Show Correct Answer:", showCorrectAnswer);
    console.log("Show Solution After Quiz:", showSolution);
    console.log("Question Timer:", questionTimer);
}
