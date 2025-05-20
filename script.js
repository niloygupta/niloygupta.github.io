document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav a');
    
    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Update copyright year
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('footer .container p');
    if (copyrightElement) {
        copyrightElement.textContent = `© ${currentYear} Niloy Gupta. All Rights Reserved.`;
    }
});