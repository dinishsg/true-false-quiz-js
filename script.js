let questions = [
    {
        text: "The Earth is round.",
        answer: true
    },
    {
        text: "JavaScript was created in 10 days.",
        answer: true
    },
    {
        text: "The sun revolves around the Earth.",
        answer: false
    }
];

let currentIndex = 0;
let score = 0;
let question = document.getElementById("questionText");

function showQuestion() {
    question.textContent = questions[currentIndex].text;
}

function trueButton() {
    if (questions[currentIndex].answer === true) {
        score++;
        document.getElementById("result").textContent = "Correct!";
    } 
    else {
        document.getElementById("result").textContent = "Wrong!";
    }
    nextQuestion();
}

function falseButton() {
    if (questions[currentIndex].answer === false) {
        score++;
        document.getElementById("result").textContent = "Correct!";
    } 
    else {
        document.getElementById("result").textContent = "Wrong!";
    }
    nextQuestion();
}

function nextQuestion() {
    currentIndex++;

    if (currentIndex < questions.length) {
        showQuestion();
    } 
    else {
        question.textContent = "Quiz finished! Your score: " + score + "/" + questions.length;
    }
}

showQuestion();