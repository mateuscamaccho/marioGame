const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const scoreNumber = document.querySelector('.scoreNumber')
const gameBoard = document.querySelector('.game-board')

function jump() {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

function score() {
    score = 0;

    setInterval(() => {
        score += 1;
    }, 1000)
}

score()

const loop = setInterval(() => {
    const pipeLeftPosition = pipe.offsetLeft;
    const marioBottomPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudLeftPosition = cloud.offsetLeft;
    // score = score + 0.01;
    document.getElementById("scoreNumber").innerHTML = score.toFixed(0);

    if (pipeLeftPosition <= 75 && pipeLeftPosition > 0 && marioBottomPosition < pipeWidth) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipeLeftPosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioBottomPosition}px`
        mario.src = './images/game-over.png'
        mario.style.maginLeft = '50px'

        cloud.style.animation = 'none'
        cloud.style.left = `${cloudLeftPosition}px`

        gameBoard.style.animation = 'none'

        clearInterval(loop)
        clearInterval(loop2)
    }



}, 10)

time = 5
nivel = 1
document.getElementById("nivel").innerHTML = nivel;
pipeWidth = 50
const loop2 = setInterval(() => {
    nivel += 1
    document.getElementById("nivel").innerHTML = nivel;
    // console.log('alo')
    
    if (pipeWidth < 90){
        pipeWidth += 10
    }
    pipe.style.width = pipeWidth + 'px'
    
    if (time.toFixed(1) > 2) {
        time -= 1;
    } else if (time.toFixed(1) <= 0.6) {
        time = 0.6;
    } else {
        time -= 0.2;
    }
    
    pipe.style.animation = 'none'
    setTimeout(() => {
        pipe.style.animation = 'pipeAnimation ' + time.toFixed(1) + 's infinite linear '
    }, 100)
}, 10000)

// document.addEventListener('keydown', jump); 
document.addEventListener('keydown', function teste(event) {
    clickCode = event.keyCode
    if (clickCode == 32) {
        jump()
    }
});

