//After the user click start button the start-screen need to hide and the question need to appear

var startScreen = document.getElementById('start-screen');
var questionScreen = document.getElementById('questions');
var startBtn = document.getElementById('start');


function startQuiz() {
    startBtn.addEventListener('click', function () {
     startScreen.setAttribute('class', "hide");
     questionScreen.removeAttribute('class');
    })
    
}

startQuiz()