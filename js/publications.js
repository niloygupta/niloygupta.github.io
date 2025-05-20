// This file is intended to handle the dynamic loading of publication data for the publications section of the website.

document.addEventListener('DOMContentLoaded', function() {
    const publicationsContainer = document.getElementById('publications-container');
    
    // Publication data
    const publications = [
        {
            title: "Transformer-based Models for Cross-lingual Transfer Learning: A Comparative Analysis",
            authors: "Gupta, N., Smith, J., & Johnson, A.",
            year: 2023,
            venue: "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (ACL 2023)",
            pdfLink: "#",
            codeLink: "#",
            doiLink: "#"
        },
        {
            title: "DeepRobust: A Framework for Adversarial Training in Natural Language Understanding Tasks",
            authors: "Gupta, N., Chen, L., & Williams, R.",
            year: 2022,
            venue: "Neural Information Processing Systems (NeurIPS 2022)",
            pdfLink: "#",
            codeLink: "#",
            doiLink: "#"
        },
        {
            title: "Novel Approaches to Transfer Learning in NLP",
            authors: "Gupta, N., Rodriguez, M., & Garcia, T.",
            year: 2022,
            venue: "International Conference on Machine Learning (ICML 2022)",
            award: "Best Paper Award",
            pdfLink: "#",
            codeLink: "#",
            doiLink: "#"
        },
        {
            title: "Attention Mechanisms for Long-Document Summarization",
            authors: "Gupta, N., & Zhang, Y.",
            year: 2021,
            venue: "Empirical Methods in Natural Language Processing (EMNLP 2021)",
            pdfLink: "#",
            codeLink: "#",
            doiLink: "#"
        },
        {
            title: "Efficient Fine-Tuning of Language Models for Resource-Constrained Environments",
            authors: "Gupta, N., Patel, S., & Martinez, C.",
            year: 2020,
            venue: "Conference on Artificial Intelligence (AAAI 2020)",
            pdfLink: "#",
            codeLink: "#",
            doiLink: "#"
        }
    ];

    // Function to render publications
    function renderPublications() {
        publicationsContainer.innerHTML = ''; // Clear any existing content
        
        publications.forEach(pub => {
            const publicationItem = document.createElement('div');
            publicationItem.classList.add('publication-item');
            
            let html = `
                <h3>${pub.title}</h3>
                <p class="publication-authors">${pub.authors} (${pub.year})</p>
                <p class="publication-venue">${pub.venue}</p>
            `;
            
            if (pub.award) {
                html += `<p class="publication-award"><i class="fas fa-award"></i> ${pub.award}</p>`;
            }
            
            html += `
                <div class="publication-links">
                    <a href="${pub.pdfLink}" target="_blank" class="pub-link"><i class="fas fa-file-pdf"></i> PDF</a>
                    <a href="${pub.codeLink}" target="_blank" class="pub-link"><i class="fas fa-code"></i> Code</a>
                    <a href="${pub.doiLink}" target="_blank" class="pub-link"><i class="fas fa-external-link-alt"></i> DOI</a>
                </div>
            `;
            
            publicationItem.innerHTML = html;
            publicationsContainer.appendChild(publicationItem);
        });
    }

    // Load publications
    renderPublications();
});