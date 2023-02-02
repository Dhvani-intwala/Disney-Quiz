//var clickAudio = new Audio()
//clickAudio.src ="ButtonSolid.mp3";

//const questionRightSound = new Audio ("sounds/interface-124464.p3");
//const questionWrongSound = new Audio ("sounds/buzze-or-wrong-answer-20582.mp3");
//const buttonClick = new Audio ("sounds/ButtonSolid.mp3");
var toggleMusic = 1;

const backgroundMusic = new Audio ("sounds/background-music.mp3");
backgroundMusic.play();
const audioOnButton = document.getElementsByClassName("audio-on");
//const audioOffButton = document.getElementsByClassName("audio-off");
let audioIconButton = document.getElementsByClassName('audio-icon-button');
let toggleMusicP = document.getElementsByClassName('audiop');

let changeIcon = function(icon){
    icon.classList.toggle('fa-volume-off');
    console.log(icon);
    if(toggleMusicP.innerHTML === 1){
        backgroundMusic.pause();
        toggleMusicP.innerHTML = 0;
    }else{
        backgroundMusic.play();
        toggleMusicP.innerHTML = 1;

    }
}


//changeIcon = (icon) => icon.classList.toggle('fa-volume-off');


