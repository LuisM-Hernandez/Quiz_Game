//startQuiz variables
var startScreen = document.getElementById('start-screen');
var questionScreen = document.getElementById('questions');
var startBtn = document.getElementById('start');

//quizTimer variables
var timerCount = document.getElementById('time');
var seconds = 15

//getQuestion variables
var title = document.getElementById('question-title');
var choiceEl = document.getElementById('choices');
var questionIndex = 0;

startQuiz();
//Function that start quiz
function startQuiz() {
    //Start button will set the attribute hide to start-screen while removing the class from the question screen which will appear after clicked
    startBtn.addEventListener('click', function () {
     startScreen.setAttribute('class', "hide");
     questionScreen.removeAttribute('class');
     quizTimer();
     getQuestions();
    }); 
}

//Function that starts the timer
function quizTimer() {
    
    var timerInterval = setInterval(function () {
        //Span with the id time will have the text content of the seconds variable
        timerCount.textContent = seconds        
        seconds--

        //If seconds is less than 0 clear the timerInterval
        if (seconds < 0) {
            //The clearInterval() method clears a timer set with the setInterval() method.
            clearInterval(timerInterval);
        }
        // Set the speed in seconds of how the timer is going to work
    },1000);
}


function getQuestions() {
    //This variable holds the first index of the questions array which is 0
    var currentQuestion = questions[questionIndex];

    title.textContent = currentQuestion.title;

    choiceEl.innerHTML = "";

    currentQuestion.choices.forEach(function (choice, i) {
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class', 'choice');
        choiceBtn.setAttribute('value', choice);
        console.log(choiceBtn);

        choiceBtn.textContent = i + 1 + '. ' + choice;
        choiceBtn.onclick = nextQuestion;
        choiceEl.appendChild(choiceBtn);
    })

}

function nextQuestion() {
    questionIndex++

    if (questionIndex === questions.length) {
        console.log("this is the end");
    }

    else{
        getQuestions();
    }
    
}


