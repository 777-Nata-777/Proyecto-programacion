/*Lista*/
document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => { /*selecciona todos los elementos que tengan la clase button, recorre cada uno de esos elementos. añade un evento al hacer clic en cada botón.*/
    if(!button.classList.contains('delete')) { /*si el botón no tiene la clase delete, se la añade.*/
        button.classList.add('delete');
        setTimeout(() => button.classList.remove('delete'), 3200); /*después de 3.2 segundos, se quita la clase delete.*/
    }
    e.preventDefault(); /*evita el comportamiento por defecto del botón.*/
}));
// Audio global
const audio = new Audio('/Audio/maxwell-nachorapista.mp3'); /*crea un elementoaudio.*/
audio.loop = true; /*hace que el audio se reproduzca en bucle infinito.*/

document.addEventListener('DOMContentLoaded', () => { /*Esta parte se activa cuando todo el HTML está completamente cargado.*/
    // Aviso
    const modal = document.getElementById('modal');
    const okBtn = document.getElementById('ok-btn');

    okBtn.addEventListener('click', () => { /*Cuando se hace clic en ok-btn*/
        audio.play().catch((err) => { /*Se reproduce el audio.*/
            console.warn("Error al intentar reproducir el audio:", err); /*Si hay error, lo muestra por consola.*/
        });
        modal.style.display = 'none'; /*Se oculta el modal (pantalla de aviso).*/
    });

    // Botón flotante de control de audio
    const toggleBtn = document.getElementById('Wazaaa'); /*Si existe el botón con ID Wazaaa.*/
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => { /*Al hacer clic, se activa o pausa el audio.*/
            if (audio.paused) { /*cambia el ícono del botón entre 🔇 y 🔊.*/
                audio.play();
                toggleBtn.textContent = '🔊';
            } else {
                audio.pause();
                toggleBtn.textContent = '🔇';
            }
        });
    }
});

/*GIFT MaxWell*/
document.addEventListener('DOMContentLoaded', () => {
    const imagen = document.getElementById('MaxWell'); /*Busca la imagen con ID MaxWell.*/
    const imagenOriginal = imagen.src; /*Guarda su fuente original (src) para poder restaurarla luego.*/
    const gifHover = '/Img/maxwell-cat.gif'; /*Define una nueva ruta con un GIF.*/

    imagen.addEventListener('mouseenter', () => { /*Al pasar el mouse por encima, cambia la imagen a un GIF.*/
        imagen.src = gifHover;
    });

    imagen.addEventListener('mouseleave', () => { /*Al quitar el mouse, vuelve a la imagen original.*/
        imagen.src = imagenOriginal;
    });
});
/*Añadir boton*/
document.addEventListener('DOMContentLoaded', () => {
    const botonAñadir = document.querySelector('.boton-añadir a'); /*Selecciona el enlace dentro del contenedor con clase .boton-añadir.*/

    botonAñadir.addEventListener('click', () => { /*Cuando se hace clic, se le añade una clase pulse por 400 ms.*/
        botonAñadir.classList.add('pulse');
        setTimeout(() => {
            botonAñadir.classList.remove('pulse');
        }, 400);
    });
});
/*El lado oscuro*/
const toggleBtn = document.getElementById("themeToggleBtn"); /*Selecciona el botón para cambiar de tema (claro/oscuro).*/
toggleBtn.addEventListener("click", () => { /*Al hacer clic:*/
    document.body.classList.toggle("dark-mode"); /*Alterna (toggle) la clase dark-mode en el <body>.*/
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙"; /*Cambia el texto del botón según el modo.*/
});
