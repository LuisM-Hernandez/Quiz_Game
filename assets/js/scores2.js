var scoreList = document.getElementById('highscores');

function renderScore() {
    var listTag = document.createElement('li');
    
    listTag.textContent = localStorage.getItem('Highscore')
    scoreList.appendChild(listTag)
}

renderScore()
//Need to render the score
// Create a list tag and append initials value