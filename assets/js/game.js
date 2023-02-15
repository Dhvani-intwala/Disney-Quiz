/****  Game Questions ****/
let QUESTIONS = [
    {
        question:'What year did Disneyland open?',
        choice1: '1955',
        choice2: '1940',
        choice3: '1952',
        choice4: '1945',
        answer: 2,

    },
    {
        question:'What had Cinderella left behind at the ball?',
        choice1: 'Ring',
        choice2: 'Glass Shoes',
        choice3: 'Scarf',
        choice4: 'Tiara',
        answer: 2,

    },
    {
        question:'What was the name of Maleficient’s pet raven, in Sleeping Beauty?',
        choice1: 'Diablo',
        choice2: 'Diable',
        choice3: 'Mauvais',
        choice4: 'Malcom',
        answer: 2,

    },
    {
        question:'In which country does ‘Finding Nemo’ take place?',
        choice1: 'China',
        choice2: 'Italy',
        choice3: 'Australia',
        choice4: 'France',
        answer: 3,

    },
    {
        question:'Which one of the following Disney characters is blue?',
        choice1: 'Stitch',
        choice2: 'Flit',
        choice3: 'Nemo',
        choice4: 'Pumbaa',
        answer: 1,
    },
    {
        question:'“Silenzio Bruno!” is a famous tagline of which movie?',
        choice1: 'Coco',
        choice2: 'Inside Out',
        choice3: 'Luca',
        choice4: 'Pinocchio',
        answer: 3,
    },
    {
        question: 'What do Aladdin and Abu give the reluctant kids to eat in Aladdin?',
        choice1: 'Dates',
        choice2: 'Cheese',
        choice3: 'Bread',
        choice4: 'Banana',
        answer: 3,
    },
    {
        question: 'Who brings Pinocchio to life?',
        choice1: 'Blue fairy',
        choice2: 'Red fairy',
        choice3: 'Pink fairy',
        choice4: 'White',
        answer: 1,
    },
    {
        question: 'How many fingers does Mickey Mouse have?',
        choice1: '4',
        choice2: '10',
        choice3: '7',
        choice4: '5',
        answer: 1,
    },
    
    {
        question:'How many brothers did the character Hans have in Frozen?',
        choice1: '5',
        choice2: '10',
        choice3: '12',
        choice4: '6',
        answer: 3,

    },
]
// Declare const and variables for DOM elements

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

let currentQuestion ={};
let acceptingAnswers = true;
let score = 0;
let questionIndex = 0;
let availableQuestions = [];

const question =document.querySelector("#question");
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText =document.querySelector("#progresstext");
const scoreText =document.querySelector("#score");
const progresssbarFull =document.querySelector("#progressBarFull");
const questionRightSound = new Audio ("./sounds/interface-124464.mp3");
const questionWrongSound = new Audio ("./sounds/buzzer-or-wrong-answer-20582.mp3");


/*****  Start Game function *****/
function startGame()  {
    questionIndex = 0;
    score = 0;
    availableQuestions = [...QUESTIONS];
    availableQuestions = shuffle(availableQuestions);
    getNewQuestion();
}

/*****  Selects random questions from available list *****/
function shuffle(list) {
   return list.sort(() => Math.random() - 0.5);
  }

  
function updateProgressText() {
    progressText.innerText = `Question ${questionIndex + 1} of ${MAX_QUESTIONS}`;
    progresssbarFull.style.width = `${((questionIndex + 1)/MAX_QUESTIONS) * 100}%`;
}

function getNewQuestion() {
    if(questionIndex >= MAX_QUESTIONS) {
        // Put this as part of game.html
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('./end.html');
    }

    
    updateProgressText();
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    // Display options
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion ['choice' + number];
    });

    acceptingAnswers = true;
    questionIndex++;
}

/*****  Correct sound effect  *****/
function playCorrectSoundMusic() {
    questionRightSound.play();
    const timeoutRef = setTimeout(() => {
        questionRightSound.pause();
        clearTimeout(timeoutRef);
    }, 3000);
}

/*****  Incorrect sound effect  *****/
function playIncorrectSoundMusic(){
    questionWrongSound.play();
    const timeoutRef = setTimeout(() =>{
        questionWrongSound.pause();
        clearTimeout(timeoutRef);
    },1000);
}

/*****  correct answers function  *****/
function highlightCorrectAnswer(currentAnswerIndex){
    choices[currentAnswerIndex - 1].parentElement.classList.add('correct');
    const timeoutRef = setTimeout ( () =>{
        choices[currentAnswerIndex - 1 ].parentElement.classList.remove('correct');
        clearTimeout(timeoutRef);
    }, 2000);
}

/*****  adds event listener for clicking answer option  *****/
function initEventListeners() {
    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if (!acceptingAnswers) return;

            acceptingAnswers = false;

            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset['number'];

            let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
            
            if(classToApply === 'correct') {
                incrementScore();
                playCorrectSoundMusic();
            }else{
                playIncorrectSoundMusic();
                highlightCorrectAnswer(currentQuestion.answer);
            }

            console.log(classToApply);
           
            selectedChoice.parentElement.classList.add(classToApply);

            const timeoutRef = setTimeout( () => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
                clearTimeout(timeoutRef);
            }, 2000);
        })
    })
}
/*****  increments score function  *****/

function incrementScore() {
    score +=SCORE_POINTS;
    scoreText.innerText = score;
}

function main() {
    initEventListeners();
    startGame();
}

main();
