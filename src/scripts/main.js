// ===============================================================
import AOS from "aos";
// ===============================================================

const openMenu = document.querySelector('#openMenuButton');
const closeMenu = document.querySelector('#closeMenuButton');
const responsiveNav = document.querySelector('#responsiveNav');
const responsiveNavItems = document.querySelectorAll('.nav-item');
const responsiveNavContactItem = document.querySelector('.responsive-nav-contact-item');


if (openMenu && closeMenu && responsiveNav){
    openMenu.addEventListener('click', () => {
        openMenu.classList.add('hidden')
        closeMenu.classList.remove('flex')
        closeMenu.classList.remove('hidden')
        responsiveNav.classList.add('top-0')
        responsiveNav.classList.remove('-top-full')
    });

    closeMenu.addEventListener('click', () => {
        closeMenu.classList.add('hidden')
        openMenu.classList.add('flex')
        openMenu.classList.remove('hidden')
        responsiveNav.classList.add('-top-full')
        responsiveNav.classList.remove('top-0')
    });
}

if (openMenu && closeMenu && responsiveNav && responsiveNavContactItem){
    responsiveNavContactItem.addEventListener('click', () => {
        closeMenu.classList.add('hidden')
        openMenu.classList.add('flex')
        openMenu.classList.remove('hidden')
        responsiveNav.classList.add('-top-full')
        responsiveNav.classList.remove('top-0')
    });
}

responsiveNavItems.forEach((responsiveNavItem) => {
    responsiveNavItem.addEventListener('click', () => {
        closeMenu.classList.add('hidden')
        openMenu.classList.add('flex')
        openMenu.classList.remove('hidden')
        responsiveNav.classList.add('-top-full')
        responsiveNav.classList.remove('top-0')
    });
})

// ===============================================================

// AOS - Animate On Scroll Library
AOS.init();

// ===============================================================
