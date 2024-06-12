document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.toggle');
    const nav = document.querySelector('.nav');

    toggle.addEventListener('click', function() {
        nav.classList.toggle('show');
        toggle.style.display = 'none';
    });

    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !toggle.contains(event.target)) {
            nav.classList.remove('show');
            toggle.style.display = 'block';
        }
    });

        // Get the current page URL
        var currentPage = window.location.pathname.split("/").pop();
    
        // Select all navigation links
        var navLinks = document.querySelectorAll('.nav .naast a');
    
        // Loop through each navigation link
        navLinks.forEach(function(link) {
            // Get the href attribute of the link
            var linkHref = link.getAttribute('href');
            
            // Check if the link href matches the current page URL
            if (linkHref === currentPage) {
                // Add the active-link class to the matching link
                link.classList.add('active-link');
            } else {
                // Remove the active-link class from other links
                link.classList.remove('active-link');
            }
        });
    
        // Check if the current page is within the "Informatie" section
        if (window.location.pathname.includes('informatie')) {
            // Select all links in the "Informatie" section
            var infoLinks = document.querySelectorAll('.informatie a');
    
            // Loop through each link in the "Informatie" section
            infoLinks.forEach(function(link) {
                // Check if the link href matches the current page URL
                if (link.getAttribute('href') === currentPage) {
                    // Add the active-link class to the matching link
                    link.classList.add('active-link');
                }
            });
        }
    
});

