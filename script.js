let music = document.getElementById("bg-music");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function showMessage() {
    let message = document.getElementById("hiddenMessage");
    message.style.display = "block";
    setTimeout(() => {
        message.style.opacity = 1;
    }, 100);
}

// Fade-in music effect
function fadeInMusic() {
    let volume = 0;
    music.volume = volume;
    music.play();
    let fade = setInterval(() => {
        if (volume < 1) {
            volume += 0.05;
            music.volume = volume;
        } else {
            clearInterval(fade);
        }
    }, 200);
}

window.onload = fadeInMusic;
