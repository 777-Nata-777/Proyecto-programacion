document.addEventListener('DOMContentLoaded', function () {
    const productos = document.querySelectorAll('.oferta-item');

    productos.forEach(producto => {
        producto.addEventListener('click', () => {
            const img = producto.querySelector('img').src;
            const titulo = producto.querySelector('h4').textContent;
            const precio = producto.querySelector('p').textContent;

            document.getElementById('modalImg').src = img;
            document.getElementById('modalTitulo').textContent = titulo;
            document.getElementById('modalPrecio').textContent = precio;

            const modal = new bootstrap.Modal(document.getElementById('modalOferta'));
            modal.show();
        });
    });
});