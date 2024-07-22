/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*===== ACTIVE AND REMOVE MENU =====*/
const navLinks = document.querySelectorAll('.nav__link');   

function linkAction() {
    // Remove active class from all links
    navLinks.forEach(n => n.classList.remove('active'));
    // Add active class to the clicked link
    this.classList.add('active');
    
    // Remove mobile menu on link click
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('show');
    }
}

// Add click event to each navigation link
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// Reveal animations for different sections
sr.reveal('.home__title', { delay: 100 }); 
sr.reveal('.button', { delay: 200 }); 
sr.reveal('.home__img', { delay: 300 }); 
sr.reveal('.home__social-icon', { interval: 200 }); 

sr.reveal('.about__img', { delay: 100 }); 
sr.reveal('.about__subtitle', { delay: 200 }); 
sr.reveal('.about__text', { delay: 300 }); 

sr.reveal('.skills__subtitle', { delay: 100 }); 
sr.reveal('.skills__text', { delay: 200 }); 
sr.reveal('.skills__data', { interval: 200 }); 
sr.reveal('.skills__img', { delay: 300 });

sr.reveal('.work__img', { interval: 200 }); 

sr.reveal('.contact__input', { interval: 200 });
