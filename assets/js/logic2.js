//startQuiz variables
var startScreen = document.getElementById('start-screen');
var questionScreen = document.getElementById('questions');
var startBtn = document.getElementById('start');

//quizTimer variables
var timerCount = document.getElementById('time');
var seconds = 60

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

    // innerHTML property sets or returns the HTML content (inner HTML) of an element.
    //It clear out old question choices
    choiceEl.innerHTML = "";

    // This will run a forEach method that will create a button and append to the choices id to display the choices text 
    currentQuestion.choices.forEach(function (choice, i) {
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class', 'choice');
        //This attribute will store the value of the choice it created
        choiceBtn.setAttribute('value', choice);
        // console.log(choiceBtn);

        choiceBtn.textContent = i + 1 + '. ' + choice;
        //This will trigger the nextQuestion function by clicking a choice button
        choiceBtn.onclick = nextQuestion;
        //Append the buttons to the choices id
        choiceEl.appendChild(choiceBtn);
    });

    // if (currentQuestion.answer === choiceBtn.value) {
    //     console.log('Hello');
    // }

}

function nextQuestion() {
    if (this.value != questions[questionIndex].answer) {
        seconds -= 5        
    }else
    questionIndex++
    
    if (questionIndex === questions.length) {
        window.location.href = "highscores.html";

    }else{
        getQuestions();
    }
}

// Everytime a bad answer is chosen substract points


