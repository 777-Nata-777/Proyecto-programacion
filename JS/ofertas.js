// Espera que el documento cargue completamente
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los productos con la clase .oferta-item
    const productos = document.querySelectorAll('.oferta-item');

    // Recorre cada producto
    productos.forEach(producto => {
        producto.addEventListener('click', () => {
            // Extrae imagen, título, precio anterior y precio nuevo
            const img = producto.querySelector('img').src;
            const titulo = producto.querySelector('h4').textContent;
            const precioAnt = producto.querySelector('.precioant')?.textContent || '';
            const precioNuevo = producto.querySelector('.precionuevo')?.textContent || '';

            // Asigna los valores al modal
            document.getElementById('modalImg').src = img;
            document.getElementById('modalTitulo').textContent = titulo;
            document.getElementById('modalPrecioAnt').textContent = precioAnt;
            document.getElementById('modalPrecio').textContent = precioNuevo;

            // Abre el modal usando Bootstrap
            const modal = new bootstrap.Modal(document.getElementById('modalOferta'));
            modal.show();
        });
    });
});