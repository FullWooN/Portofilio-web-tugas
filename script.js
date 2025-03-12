document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#00FFFF';
        });
        link.addEventListener('mouseout', function() {
            if (!this.classList.contains('active')) {
                this.style.color = 'white';
            }
        });
    });
});