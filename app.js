/**
 * Impression Design Solution - Core Client Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryToggles();
  initMobileMenu();
  initLuxuryHeader();
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
          targetDrawer.hidden = false;
          button.setAttribute('aria-expanded', 'true');
          button.innerHTML = 'View Less \u25B4';
          button.classList.add('active');
          
          requestAnimationFrame(() => {
            targetDrawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          });
        } else {
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
    
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.setAttribute('aria-expanded', 'false');
        nav.classList.remove('mobile-active');
      });
    });
  }
}

/* 3. Luxury Header Scroll Effect */
function initLuxuryHeader() {
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}
