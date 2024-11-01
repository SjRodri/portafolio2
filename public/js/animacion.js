document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        // Al entrar el mouse en la habilidad
        item.addEventListener('mouseenter', function() {
            const color = this.getAttribute('data-color'); 
            this.style.backgroundColor = color;  
        });

        // Al salir el mouse de la habilidad
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#1d1d1d'; 
        });
    });
});
