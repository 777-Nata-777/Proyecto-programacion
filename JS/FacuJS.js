document.addEventListener('DOMContentLoaded', () => {
  const zonas = [
    { id: 'quienes-somos', texto: 'Somos una empresa con compromiso y trayectoria en la comunidad.', emoji: '🤝' },
    { id: 'mision', texto: 'Nuestra misión es brindar confianza y calidad en cada compra.', emoji: '🎯' },
    { id: 'valores', texto: 'Nos guiamos por la honestidad, atención y precios justos.', emoji: '⭐' },
  ];

  zonas.forEach(({ id, texto, emoji }) => {
    const section = document.getElementById(id);
    const titulo = section.querySelector('.section-title');
    const extra = section.querySelector('.extra-text');

    section.addEventListener('mouseenter', () => {
      section.style.backgroundColor = '#fff3e0';
      titulo.style.color = '#cc5500';
      titulo.style.fontSize = '1.8rem';
      if (!titulo.textContent.includes(emoji)) titulo.textContent += ` ${emoji}`;
      extra.textContent = texto;
      extra.classList.add('visible');
    });

    section.addEventListener('mouseleave', () => {
      section.style.backgroundColor = '';
      titulo.style.color = '#ff6600';
      titulo.style.fontSize = '';
      titulo.textContent = titulo.textContent.replace(` ${emoji}`, '');
      extra.classList.remove('visible');
      setTimeout(() => (extra.textContent = ''), 500);
    });
  });
});