// // Declare var and variables for DOM elements

// var username = document.querySelector('#username');
// var saveScoreBtn = document.querySelector('#saveScoreBtn');
// var finalScores = document.querySelector('#finalScore');
// var mostRecentScore = localStorage.getItem('mostRecentScore');

// var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// var MAX_HIGH_SCORES = 11;

// finalScores.innerText = mostRecentScore;

// username.addEventListener('keyup',function() {
//     saveScoreBtn.disabled = !username.value;
// });

// function saveHighScore (e) {
//     e.preventDefault();
//     var score ={
//         score: mostRecentScore,
//         name: username.value
//     };

//     highScores.push(score);

//     highScores.sort(function (a,b) {
//         return b.score - a.score;
//     });

//     highScores.splice(10);

//     localStorage.setItem('highScores', JSON.stringify(highScores));
//     window.location.assign('/');
// }


 const username = document.querySelector('#username');
 const saveScoreBtn = document.querySelector('#saveScoreBtn');
 const finalScores = document.querySelector('#finalScore');
 const mostRecentScore = localStorage.getItem('mostRecentScore');

 const highScores = JSON.parse(localStorage.getItem('highScores')) || []

 const MAX_HIGH_SCORES = 11;

 finalScores.innerText = mostRecentScore;

 username.addEventListener('keyup', () => {
     saveScoreBtn.disabled = !username.value;
})

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
    window.location.assign('/');
 }

