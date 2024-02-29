const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    document.getElementById('question').innerText = questions[currentQuestion].question;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();

    // Clear the input field
    document.getElementById('answer').value = "";

    if (userAnswer === correctAnswer) {
        alert('You are correct!');
        score++; // Increment the score for correct answers
    } else {
        alert('You are wrong!');
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        const retry = confirm('Quiz finished! Your score is ' + score + '/' + questions.length + '. Do you want to retry?');
        if (retry) {
            location.reload(); // Reload the page
        }
    }
}

displayQuestion();
