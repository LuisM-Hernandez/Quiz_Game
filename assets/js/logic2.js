//startQuiz variables
var startScreen = document.getElementById('start-screen');
var questionScreen = document.getElementById('questions');
var startBtn = document.getElementById('start');

//quizTimer variables
var timerCount = document.getElementById('time');
var timerInterval;
var seconds = 60

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
    
     timerInterval = setInterval(function () {
        timerCount.textContent = seconds        
        seconds--
        
        if (seconds <= 0) {
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

        choiceBtn.textContent = i + 1 + '. ' + choice;
        //This will trigger the nextQuestion function by clicking a choice button
        choiceBtn.onclick = nextQuestion;
        //Append the buttons to the choices id
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
    }else{
        getQuestions();
    }
}

function endQuiz() {
    clearInterval(timerInterval)
    questionScreen.setAttribute('class', 'hide');
    endEl.removeAttribute('class');
}

function submitScore() {
    var highscores = []
    var champion = initials.value
    var users = {
        initials: champion,
        score: seconds
    }
    
    highscores.push(users);
    
    localStorage.setItem("user", JSON.stringify(highscores));
    window.location.href = "highscores.html";
    
}

submitBtn.onclick = submitScore

// When you click on the submit the name will pass to a list in highscores

