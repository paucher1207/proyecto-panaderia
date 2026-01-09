
document.addEventListener('DOMContentLoaded', function() {

    const observerOptions = {
        root: null, 
        rootMargin: '0px 0px -50px 0px', 
        threshold: 0.1 
    };
    

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.classList.add('animated');
                
                observer.unobserve(entry.target);
            } else {
                entry.target.classList.remove('animated');
            }
        });
    }, observerOptions);
    
   
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.setAttribute('data-animation', 'fade-up');
        observer.observe(card);
    });
    
    const valueItems = document.querySelectorAll('.value-item');
    valueItems.forEach(item => {
        item.setAttribute('data-animation', 'scale');
        observer.observe(item);
    });
    
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.setAttribute('data-animation', 'fade-up');
        observer.observe(member);
    });
});