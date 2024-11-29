document.addEventListener('DOMContentLoaded', function() {
    const monitorizareSection = document.getElementById('monitorizare');
    const images = document.querySelectorAll('.resource-img');
    let currentImageIndex = 0;

    // Funcție pentru a afișa slideshow-ul
    function startSlideshow() {
        images.forEach((img, index) => {
            img.style.display = (index === currentImageIndex) ? 'block' : 'none';
        });

        currentImageIndex = (currentImageIndex + 1) % images.length;
        setTimeout(startSlideshow, 3000);
    }

    // Eveniment pentru dublu-click
    monitorizareSection.addEventListener('dblclick', function() {
        startSlideshow();
    });
});
