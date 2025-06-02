document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.querySelector('.hero h1');
    
    if (titleElement) {
        const originalText = titleElement.textContent;
        titleElement.innerHTML = '';
        
        // Crear spans para cada letra
        originalText.split('').forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter === ' ' ? '\u00A0' : letter; // Conservar espacios
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.transition = `all 0.5s ease ${index * 0.1}s`;
            span.style.display = 'inline-block';
            titleElement.appendChild(span);
        });
        
        // Animar las letras
        setTimeout(() => {
            titleElement.querySelectorAll('span').forEach(span => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            });
        }, 300);
    }
});