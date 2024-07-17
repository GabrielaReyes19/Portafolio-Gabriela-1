document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideTrack = document.querySelector('.slide-track');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].getBoundingClientRect().width;
    let index = 0;

    // Ajustar el ancho del slide-track a la longitud de los slides
    slideTrack.style.width = `${slideWidth * slides.length}px`;

    function updateSlideTrack() {
        slideTrack.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : slides.length - 3; // Muestra 3 imágenes a la vez
        updateSlideTrack();
    });

    nextBtn.addEventListener('click', () => {
        index = (index < slides.length - 3) ? index + 1 : 0; // Muestra 3 imágenes a la vez
        updateSlideTrack();
    });

    // Agregar funcionalidad para la reproducción automática del slider
    setInterval(() => {
        nextBtn.click();
    }, 3000); // Cambia las imágenes cada 3 segundos
});
