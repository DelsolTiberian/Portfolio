/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.addEventListener("DOMContentLoaded", function() {
    var progressBars = [
        {element: document.getElementById('html_bar'), width: 80, text: document.getElementById('html_text')},
        {element: document.getElementById('css_bar'), width: 60, text: document.getElementById('css_text')},
        {element: document.getElementById('js_bar'), width: 20, text: document.getElementById('js_text')},
        {element: document.getElementById('php_bar'), width: 30, text: document.getElementById('php_text')},
        {element: document.getElementById('python_bar'), width: 80, text: document.getElementById('python_text')},
        {element: document.getElementById('c_bar'), width: 30, text: document.getElementById('c_text')}
    ];

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkProgress() {
        progressBars.forEach(function(bar) {
            if (isInViewport(bar.element)) {
                bar.element.style.width = bar.width + '%';
                bar.text.textContent = bar.width + '%';
            }
        });
    }

    window.addEventListener('scroll', checkProgress);
    window.addEventListener('resize', checkProgress);

    // Vérification initiale
    checkProgress();
});
