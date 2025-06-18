// MiRamita/FacuJS.js
// Este script añade interactividad a las secciones de la página web de Nosotros,
// mostrando información adicional al pasar el ratón sobre cada sección.
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
    }
  ];
  zonas.forEach(({ id, textoExtra }) => {
    const section = document.getElementById(id);
    const extraTextDiv = section.querySelector('.extra-text');
    const titulo = section.querySelector('.section-title');
    section.addEventListener('mouseenter', () => {
      section.style.backgroundColor = '#fff3e0';
      titulo.style.color = '#cc5500';
      titulo.style.fontSize = '1.8rem';
      extraTextDiv.textContent = textoExtra;
      extraTextDiv.classList.add('visible');
    });
    section.addEventListener('mouseleave', () => {
      section.style.backgroundColor = '';
      titulo.style.color = '#ff6600';
      titulo.style.fontSize = '';
      extraTextDiv.classList.remove('visible');
      setTimeout(() => {
        extraTextDiv.textContent = '';
      }, 500);
    });
  });
});