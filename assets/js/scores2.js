var scoreList = document.getElementById('highscores');
var storage = JSON.parse(localStorage.getItem('Highscore'));


function renderScore() {
    var listTag = document.createElement('li');
    
    storage.forEach(function(value) {
        console.log(value.initials);
        console.log(value.score);
        listTag.textContent = value.initials +" - "  +  value.score 
        scoreList.appendChild(listTag);
      });


    }
    

renderScore()
//Need to render the score
// Create a list tag and append initials value