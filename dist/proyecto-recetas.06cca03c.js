document.addEventListener('DOMContentLoaded', ()=>{
    const gallery = document.querySelector('.gallery');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const indicatorsContainer = document.getElementById('indicators');
    const slides = document.querySelectorAll('.gallery img');
    let currentIndex = 0;
    // Crear indicadores
    slides.forEach((_, index)=>{
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', ()=>goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    const indicators = document.querySelectorAll('.indicator');
    function updateGallery() {
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
        // Actualizar indicadores
        indicators.forEach((indicator, index)=>{
            if (index === currentIndex) indicator.classList.add('active');
            else indicator.classList.remove('active');
        });
    }
    function goToSlide(index) {
        currentIndex = index;
        updateGallery();
    }
    function goToNext() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateGallery();
    }
    function goToPrev() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateGallery();
    }
    nextBtn.addEventListener('click', goToNext);
    prevBtn.addEventListener('click', goToPrev);
});

//# sourceMappingURL=proyecto-recetas.06cca03c.js.map
