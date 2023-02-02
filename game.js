const question =document.querySelector("#question");
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText =document.querySelector("#progresstext");
const scoreText =document.querySelector("#score");
const progresssbarFull =document.querySelector("#progressBarFull");


let currentQuestion ={};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaliableQuestions = [];

let questions = [
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

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    avaliableQuestions = [...questions];
    getNewQuestion();

}

getNewQuestion = () => {
    if(avaliableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progresssbarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random () * avaliableQuestions.length);
    currentQuestion = avaliableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion ['choice' + number];
    })

    avaliableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

}
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
       const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000)
    
    })
})

    incrementScore = (num) => {
        score +=num;
        scoreText.innerText = score;
    }

    startGame();


