document.addEventListener('DOMContentLoaded', function() {
    const rsvpButton = document.querySelector('.rsvp-btn');
    
    rsvpButton.addEventListener('click', function() {
        alert('Thank you for your interest! RSVP functionality will be available soon.');
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add parallax effect on scroll
    window.addEventListener('scroll', function() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const position = card.getBoundingClientRect();
            if(position.top < window.innerHeight && position.bottom >= 0) {
                card.style.transform = `translateY(${window.scrollY * 0.1}px)`;
            }
        });
    });

    // Add scroll animation for images
    const images = document.querySelectorAll('.image-gallery img');
    window.addEventListener('scroll', function() {
        images.forEach(img => {
            const position = img.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                img.style.transform = `translateY(${window.scrollY * 0.1}px)`;
            }
        });
    });
});
