const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

console.log(highScoresList);
 //highScoresList.innerHTMl = 
highScores.map(score => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(score.name + " " +score.score));
    li.setAttribute('class','high-score');
    highScoresList.appendChild(li);
    console.log(`<li class="high-score"> ${score.name}- ${score.score}</li>`);
    return `<li class="high-score"> ${score.name}- ${score.score}</li>`
}).join('')