// js/main.js
document.addEventListener("DOMContentLoaded", function() {
    // Define your navigation HTML structure
    const navbarHTML = `
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Me</a></li>
            <li><a href="research.html">Research</a></li>
            <li><a href="notes.html">Notes</a></li>
            <li><a href="blog.html">Blog</a></li>
            </ul>
    `;

    // Find the placeholder element
    const navbarPlaceholder = document.getElementById('navbar-placeholder');

    // If the placeholder exists, insert the navigation HTML
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navbarHTML;
    } else {
        console.error("Navbar placeholder not found!");
    }

    // Optional: Highlight the current page link
    const currentPage = window.location.pathname.split("/").pop(); // Gets 'index.html', 'about.html', etc.
    if (currentPage) {
        const links = navbarPlaceholder.querySelectorAll('a');
        links.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.style.fontWeight = 'bold'; // Or add a CSS class
                link.style.textDecoration = 'underline';
            }
        });
    } else { // Handle the case for the root index page
         const homeLink = navbarPlaceholder.querySelector('a[href="index.html"]');
         if (homeLink) {
             homeLink.style.fontWeight = 'bold';
             homeLink.style.textDecoration = 'underline';
         }
    }

});