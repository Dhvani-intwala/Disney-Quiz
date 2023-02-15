
const backgroundMusic = new Audio ("./assets/sounds/background-music.mp3")


let toggleMusicP = document.getElementById('audiop');

function changeIcon(icon){
    icon.classList.toggle('fa-volume-off');
    if(toggleMusicP.innerHTML === '1'){
        backgroundMusic.pause();
        toggleMusicP.innerHTML = '0';
    } else{
        backgroundMusic.play();
        toggleMusicP.innerHTML = '1';
    }
}