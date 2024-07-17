//navbar togglemenu

let toggleMenuState = false;

function toggleMenu() {
    toggleMenuState = !toggleMenuState;
    const menuContainer = document.querySelector('.npay__navbar-menu_container');
    const menuOpenIcon = document.getElementById('menu-open');
    const menuCloseIcon = document.getElementById('menu-close');

    if (toggleMenuState) {
        menuContainer.style.display = 'block';
        menuOpenIcon.style.display = 'none';
        menuCloseIcon.style.display = 'block';
    } else {
        menuContainer.style.display = 'none';
        menuOpenIcon.style.display = 'block';
        menuCloseIcon.style.display = 'none';
    }
}


// Ensure the menu is hidden by default on small screens
window.addEventListener('resize', () => {
    if (window.innerWidth > 1050) {
        document.querySelector('.npay__navbar-menu_container').style.display = 'none';
        document.getElementById('menu-open').style.display = 'block';
        document.getElementById('menu-close').style.display = 'none';
        toggleMenuState = false;
            }
});

// Initialize the menu state on page load
window.addEventListener('load', () => {
    if (window.innerWidth <= 1050) {
        document.querySelector('.npay__navbar-menu_container').style.display = 'none';
        document.getElementById('menu-open').style.display = 'block';
        document.getElementById('menu-close').style.display = 'none';
        toggleMenuState = false;
    }
})

// reveal transtion
document.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    
    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        
        if (revealTop < windowHeight - 100) { // Adjust the offset as needed
            reveal.classList.add("visible");
        }
    });
}

//light mode

function toggleLightMode() {
    document.body.classList.toggle('light-mode');
}
  