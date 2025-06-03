const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// Faz o Mario pular ao pressionar qualquer tecla
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

// Loop que detecta colisão
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioBottom = parseInt(window.getComputedStyle(mario).bottom);

    // Detecção de colisão
    if (pipePosition <= 120 && pipePosition > 0 && marioBottom < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioBottom}px`;

        mario.src = 'mario-dead.png'; // Use uma imagem de Mario "morto" se quiser
        mario.style.width = '100px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        alert("Game Over! Pressione F5 para reiniciar.");
    }
}, 10);

// Evento de pulo
document.addEventListener('keydown', jump);
