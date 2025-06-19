
document.addEventListener("DOMContentLoaded", () => {
    const productos = document.querySelectorAll('.product-card');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Evita que se dispare múltiples veces
        }
      });
    }, {
      threshold: 0.2 // El 20% del producto debe estar visible para activar la animación
    });
  
    productos.forEach(producto => {
      observer.observe(producto);
    });
  });