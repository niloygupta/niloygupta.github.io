document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example publications data - in a real implementation, you would fetch this from an API
    // This is based on the Google Scholar profile you provided
    const publications = [
        {
            title: "Interactive Teaching Strategies for Agent Training",
            authors: "Ruohan Zhang, Niloy Gupta, Ronghang Hu, Li Fei-Fei, Roger Grosse, Chuang Gan",
            venue: "NeurIPS 2022",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Qfr88CMAAAAJ&citation_for_view=Qfr88CMAAAAJ:u-x6o8ySG0sC"
        },
        {
            title: "GEAR: A General and Efficient Annotation Refinement framework for Label-Efficient Information Extraction",
            authors: "Ruohan Zhang, Niloy Gupta et al.",
            venue: "ArXiv Preprint",
            url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Qfr88CMAAAAJ&citation_for_view=Qfr88CMAAAAJ:d1gkVwhDpl0C"
        },
        {
            title: "Relational Learning for Multi-agent Collaboration in Autonomous Driving",
            authors: "Niloy Gupta et al.",
            venue: "Research Paper",
            url: "#"
        }
    ];

    // Display publications
    const publicationsContainer = document.getElementById('publications-container');
    if (publicationsContainer) {
        // Clear loading message
        publicationsContainer.innerHTML = '';
        
        // Add publication items
        publications.forEach(pub => {
            const pubElement = document.createElement('div');
            pubElement.className = 'publication-item';
            pubElement.innerHTML = `
                <h3><a href="${pub.url}" target="_blank">${pub.title}</a></h3>
                <p class="authors">${pub.authors}</p>
                <p class="venue">${pub.venue}</p>
            `;
            publicationsContainer.appendChild(pubElement);
        });
    }

    // Add active class to navigation links when scrolling
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
