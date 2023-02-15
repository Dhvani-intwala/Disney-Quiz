 const username = document.querySelector('#username');
 const saveScoreBtn = document.querySelector('#saveScoreBtn');
 const finalScores = document.querySelector('#finalScore');
 const mostRecentScore = localStorage.getItem('mostRecentScore');

 const highScores = JSON.parse(localStorage.getItem('highScores')) || []

 const MAX_HIGH_SCORES = 5;

 finalScores.innerText = mostRecentScore;

 username.addEventListener('keyup', () => {
     saveScoreBtn.disabled = !username.value;
})
/****** Save high score function *******/  

 function saveHighScore (e) {
    e.preventDefault()
     const score ={
         score: mostRecentScore,
         name: username.value
     }

   highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score;
    })

    highScores.splice(10);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('./');
 }

