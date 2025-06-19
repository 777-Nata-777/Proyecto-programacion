/*Aviso*/
document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('/Audio/oiiaoiia-cat.mp3');
    audio.loop = true;
    const modal = document.getElementById('modal');
    const okBtn = document.getElementById('ok-btn');
    okBtn.addEventListener('click', () => {
        audio.play().catch((err) => {
            console.warn("Error al intentar reproducir el audio:", err);
        });
        modal.style.display = 'none';
    });
});