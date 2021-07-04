var highscoreEl = document.getElementById('highscores');
var users = JSON.parse(localStorage.getItem('Highscore'));
var clearBtn = document.getElementById('clear');

function renderScore() {
    var listTag = document.createElement('li');
    users.forEach(function (value) {
        listTag.textContent = value.initials + " - " + value.score
        highscoreEl.appendChild(listTag);
    });
}

function clearHighscores() {
    localStorage.clear('Highscores');
    location.reload()
}

clearBtn.onclick = clearHighscores;

renderScore()

