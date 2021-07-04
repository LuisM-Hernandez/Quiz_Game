//startQuiz variables
var startScreen = document.getElementById('start-screen');
var questionScreen = document.getElementById('questions');
var startBtn = document.getElementById('start');

//quizTimer variables
var timerCount = document.getElementById('time');
var timerInterval;
var seconds = 150

//getQuestion variables
var title = document.getElementById('question-title');
var choiceEl = document.getElementById('choices');
var questionIndex = 0;

// Submit variables
var endEl = document.getElementById('end-screen');
var initials = document.getElementById('initials');
var submitBtn = document.getElementById('submit');

startQuiz();

//Function that start quiz
function startQuiz() {
    startBtn.addEventListener('click', function () {
        startScreen.setAttribute('class', "hide");
        questionScreen.removeAttribute('class');
        quizTimer();
        getQuestions();
    });
}

//Function that starts the timer
function quizTimer() {
    timerInterval = setInterval(function () {
        timerCount.textContent = seconds
        seconds--

        if (seconds <= 0) {
            //The clearInterval() method clears a timer set with the setInterval() method.
            clearInterval(timerInterval);
        }
        // Sets speed of timer
    }, 1000);
}

function getQuestions() {
    var currentQuestion = questions[questionIndex];
    title.textContent = currentQuestion.title;

    // innerHTML property sets or returns the HTML content (inner HTML) of an element.
    //It clear out old question choices
    choiceEl.innerHTML = "";

    // This will run a forEach method that will create a button and append to the choices id to display the choices text 
    currentQuestion.choices.forEach(function (choice, i) {
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class', 'choice');
        choiceBtn.setAttribute('value', choice);
        choiceBtn.textContent = i + 1 + '. ' + choice;
        choiceBtn.onclick = nextQuestion;
        choiceEl.appendChild(choiceBtn);
    });
}

function nextQuestion() {
    if (this.value != questions[questionIndex].answer) {
        seconds -= 10
    }
    questionIndex++
    if (questionIndex === questions.length) {
        endQuiz();
    } else {
        getQuestions();
    }
}

function endQuiz() {
    clearInterval(timerInterval)
    questionScreen.setAttribute('class', 'hide');
    endEl.removeAttribute('class');
}

function submitScore() {
    var highscores = JSON.parse(window.localStorage.getItem("Highscores")) || [];
    var champion = initials.value
    var users = {
        initials: champion,
        score: seconds
    }

    highscores.push(users);
    localStorage.setItem("Highscore", JSON.stringify(highscores));
    window.location.href = "highscores.html";
}

submitBtn.onclick = submitScore;

