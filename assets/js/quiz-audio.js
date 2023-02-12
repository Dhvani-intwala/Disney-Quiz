
const backgroundMusic = new Audio ("assets/sounds/background-music.mp3")


let toggleMusicP = document.getElementById('audiop');
//const audioButtons = new Audio();
//audioButtons.src = "sounds/ButtonSolid.mp3";

function changeIcon(icon){
    icon.classList.toggle('fa-volume-off');
    console.log(icon);
    if(toggleMusicP.innerHTML === '1'){
        backgroundMusic.pause();
        toggleMusicP.innerHTML = '0';
    } else{
        backgroundMusic.play();
        toggleMusicP.innerHTML = '1';
    }
}

//changeIcon = (icon) => icon.classList.toggle('fa-volume-off');