# Personal Academic Website

This is a personal academic website template for Niloy Gupta, designed to showcase academic background, research interests, and professional experience.

## Features

- Responsive design for all devices
- Sections for bio, research interests, publications, and experience
- Social media and professional profile links
- Clean, professional layout

## Setup Instructions

1. Clone this repository to your local machine
2. Customize the content in `index.html` to reflect your information
3. Replace the placeholder image in the about section with your photo
4. Update the publications in `script.js` with your own publications
5. Modify the CSS in `styles.css` if you want to change the colors or styling
6. Deploy to GitHub Pages by pushing to your repository at `niloygupta.github.io`

## Customization

### Adding Publications

To add or update publications, edit the `publications` array in `script.js`:

```javascript
const publications = [
    {
        title: "Your Publication Title",
        authors: "Authors List",
        venue: "Conference/Journal Name",
        url: "URL to publication"
    },
    // Add more publications here
];
```

### Updating Profile Photo

Replace the placeholder image link in `index.html` with your own image:

```html
<div class="profile-image">
    <img src="path/to/your/photo.jpg" alt="Niloy Gupta">
</div>
```

### Modifying Color Scheme

To change the color scheme, edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #0066cc; /* Change this to your preferred primary color */
    --secondary-color: #f5f5f5;
    --dark-color: #333;
    --light-color: #fff;
    --grey-color: #eee;
}
```

## Deployment

To deploy this website to GitHub Pages:

1. Create a repository named `niloygupta.github.io`
2. Push the content of this project to that repository
3. GitHub will automatically build and deploy your site
4. Your website will be available at `https://niloygupta.github.io/`

## License

This template is open-source and free to use for personal or academic purposes.
