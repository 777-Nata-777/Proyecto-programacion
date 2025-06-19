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
    const audio = new Audio('/Audio/maxwell-nachorapista.mp3');
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
/*GIFT MaxWell*/
document.addEventListener('DOMContentLoaded', () => {
    const imagen = document.getElementById('MaxWell');
    const imagenOriginal = imagen.src;
    const gifHover = '/Img/maxwell-cat.gif';

    imagen.addEventListener('mouseenter', () => {
        imagen.src = gifHover;
    });

    imagen.addEventListener('mouseleave', () => {
        imagen.src = imagenOriginal;
    });
});
/*Añadir boton*/
document.addEventListener('DOMContentLoaded', () => {
    const botonAñadir = document.querySelector('.boton-añadir a');

    botonAñadir.addEventListener('click', () => {
        botonAñadir.classList.add('pulse');
        setTimeout(() => {
            botonAñadir.classList.remove('pulse');
        }, 400);
    });
});