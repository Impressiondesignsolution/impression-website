/**
 * Impression Design Solution - Core Client Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryToggles();
  initMobileMenu();
});

/* 1. Interactive "View Collection Gallery" Toggle */
function initGalleryToggles() {
  const toggleButtons = document.querySelectorAll('.toggle-gallery-btn');

  toggleButtons.forEach(button => {
    const targetId = button.getAttribute('data-target');
    const targetDrawer = document.getElementById(targetId);

    if (targetDrawer) {
      button.addEventListener('click', () => {
        const isHidden = targetDrawer.hidden;

        if (isHidden) {
          // Open drawer
          targetDrawer.hidden = false;
          button.setAttribute('aria-expanded', 'true');
          button.innerHTML = 'View Less \u25B4';
          button.classList.add('active');
          
          requestAnimationFrame(() => {
            targetDrawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          });
        } else {
          // Close drawer
          targetDrawer.hidden = true;
          button.setAttribute('aria-expanded', 'false');
          button.innerHTML = 'View More \u25BE';
          button.classList.remove('active');
        }
      });
    }
  });
}

/* 2. Mobile Menu Toggle */
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');
  
  if(menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('mobile-active');
    });
    
    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('mobile-active');
      });
    });
  }
}
