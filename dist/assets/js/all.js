"use strict";

window.addEventListener('DOMContentLoaded', function (event) {
  // Activate Bootstrap scrollspy on the main nav element
  var sideNav = document.body.querySelector('#sideNav');

  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#sideNav',
      rootMargin: '0px 0px'
    });
  }

  ; // Collapse responsive navbar when toggler is visible

  var navbarToggler = document.body.querySelector('.navbar-toggler');
  var responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link'));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', function () {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });
});
//# sourceMappingURL=all.js.map
