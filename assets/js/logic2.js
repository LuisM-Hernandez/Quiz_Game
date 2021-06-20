//Start quiz variables
var startScreen = document.getElementById('start-screen');
var questionScreen = document.getElementById('questions');
var startBtn = document.getElementById('start');

//Quiz timer variables
var timerCount = document.getElementById('time');
var seconds = 15

//Function that start quiz
function startQuiz() {
    //Start button will set the attribute hide to start-screen while removing the class from the question screen which will appear after clicked
    startBtn.addEventListener('click', function () {
     startScreen.setAttribute('class', "hide");
     questionScreen.removeAttribute('class');
     quizTimer()
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
            clearInterval(timerInterval)
            
        }
        
    },1000)

    
}

startQuiz()