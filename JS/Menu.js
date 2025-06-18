/*Lista*/
document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
    if(!button.classList.contains('delete')) {
        button.classList.add('delete');
        setTimeout(() => button.classList.remove('delete'), 3200);
    }
    e.preventDefault();
}));
/*Aviso*/
document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('');
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