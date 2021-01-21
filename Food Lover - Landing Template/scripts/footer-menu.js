/*
 * Toggle menu для footer
*/

const footerBottomMenu = document.querySelector('.footer-bottom-menu');

function resizeByFooter() {
    const documentWidth = window.innerWidth;
    if (documentWidth <= 900) {
        const isOpen = footerBottomMenu.getAttribute('data-mobile-menu');
        if(isOpen) return;

        addMobileMenu();
    } else {
        const isOpen = footerBottomMenu.getAttribute('data-mobile-menu');
        if(!isOpen) return;

        returnDesktopMenu();
    }
}

function addMobileMenu() {
    const btnOpen = document.createElement('a');
    btnOpen.classList.add('footer-bottom-menu-link', 'menu-link-open');
    btnOpen.textContent = 'Show Menu';
    btnOpen.onclick = function () {
        const menuIsHide = footerBottomMenu.classList.contains('footer-menu-mobile-hidden');
        if(menuIsHide) {
            btnOpen.textContent = 'Hide Menu';
        } else {
            btnOpen.textContent = 'Show Menu';
        }

        footerBottomMenu.classList.toggle('footer-menu-mobile-hidden');
    }

    footerBottomMenu.classList.add('footer-menu-mobile-hidden');
    footerBottomMenu.prepend(btnOpen);
    footerBottomMenu.setAttribute('data-mobile-menu', 'true');
}

function returnDesktopMenu() {
    const btnOpen = document.querySelector('.menu-link-open');
    btnOpen.parentElement.removeChild(btnOpen);
    footerBottomMenu.removeAttribute('data-mobile-menu');
}

window.addEventListener('resize', resizeByFooter);
resizeByFooter();
