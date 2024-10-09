window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 150, 0.9)'; // Change color on scroll
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 255, 0.8)';
    }
});
