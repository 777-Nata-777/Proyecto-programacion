document.addEventListener('DOMContentLoaded', () => {
  const zonas = [
    {
      id: 'quienes-somos',
      textoExtra: 'Somos una empresa con compromiso y trayectoria en la comunidad.',
    },
    {
      id: 'mision',
      textoExtra: 'Nuestra misión es brindar confianza y calidad en cada compra.',
    },
    {
      id: 'valores',
      textoExtra: 'Nos guiamos por la honestidad, atención y precios justos.',
    },
  ];

  zonas.forEach(({ id, textoExtra }) => {
    const section = document.getElementById(id);
    const extraTextDiv = section.querySelector('.extra-text');
    const titulo = section.querySelector('.section-title');

    section.addEventListener('mouseenter', () => {
      // Cambiar fondo
      section.style.backgroundColor = '#fff3e0'; // naranja claro

      // Cambiar estilo título
      titulo.style.color = '#cc5500';
      titulo.style.fontSize = '1.8rem';

      // Mostrar texto extra con animación
      extraTextDiv.textContent = textoExtra;
      extraTextDiv.classList.add('visible');
    });

    section.addEventListener('mouseleave', () => {
      // Restaurar fondo
      section.style.backgroundColor = '';

      // Restaurar estilo título
      titulo.style.color = '#ff6600';
      titulo.style.fontSize = '';

      // Ocultar texto extra
      extraTextDiv.classList.remove('visible');
      setTimeout(() => {
        extraTextDiv.textContent = '';
      }, 500); // coincide con la transición CSS
    });
  });
});