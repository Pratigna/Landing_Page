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


