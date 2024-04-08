document.addEventListener('DOMContentLoaded', function() {
    const buttonLink = document.querySelector('.button-link');
    const heroSvg = document.getElementById('hero-svg');

    // Set initial styles
    heroSvg.style.stroke = 'blue';
    heroSvg.style.strokeWidth = '3';

    buttonLink.addEventListener('mouseover', () => {
      heroSvg.style.stroke = '#5000FF';
      heroSvg.style.strokeWidth = '5';
    });

    buttonLink.addEventListener('mouseout', () => {
      heroSvg.style.stroke = 'blue';
      heroSvg.style.strokeWidth = '3';
    });
  });