// This file is intended to handle the dynamic loading of publication data for the publications section of the website.

document.addEventListener('DOMContentLoaded', function() {
    const publicationsContainer = document.getElementById('publications-container');
    
    // Simulated publication data (this could be replaced with an API call)
    const publications = [
        {
            title: "Understanding Machine Learning Algorithms",
            authors: "Niloy Gupta, John Doe",
            year: 2022,
            link: "https://example.com/publication1"
        },
        {
            title: "Natural Language Processing Techniques",
            authors: "Niloy Gupta, Jane Smith",
            year: 2021,
            link: "https://example.com/publication2"
        },
        {
            title: "Deep Learning for Image Recognition",
            authors: "Niloy Gupta, Alice Johnson",
            year: 2020,
            link: "https://example.com/publication3"
        }
    ];

    // Function to render publications
    function renderPublications() {
        publications.forEach(pub => {
            const publicationItem = document.createElement('div');
            publicationItem.classList.add('publication-item');
            publicationItem.innerHTML = `
                <h4><a href="${pub.link}" target="_blank">${pub.title}</a></h4>
                <p>${pub.authors} (${pub.year})</p>
            `;
            publicationsContainer.appendChild(publicationItem);
        });
    }

    // Load publications
    renderPublications();
});