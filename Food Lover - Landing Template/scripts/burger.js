/*
 * Бургер меню
*/

document.addEventListener('DOMContentLoaded', function() {

    const header = document.querySelector('.header');
    const navigation = document.querySelector('.navigation');
    const navigationLinkItem = document.querySelectorAll('.navigation-link');
    const navigationLogo = document.querySelector('.navigation-logo');
    const navigationLogoImg = document.querySelector('.navigation-logo-img');

    function checkingDocumentSize() {
        function checkSize() {
            const width = window.innerWidth;
            const isMobile = header.getAttribute('data-mobile');
            const isDesktop = header.getAttribute('data-desktop');
            if (width <= 725) {
                header.removeAttribute('data-desktop');
                if (isMobile) return;
                header.setAttribute('data-mobile', 'true');
                appendMobileMenu();
            } else {
                header.removeAttribute('data-mobile');
                if (isDesktop) return;
                header.setAttribute('data-desktop', 'true');
                appendDesktopMenu()
            }
        }

        window.addEventListener('resize', checkSize);
        checkSize();
    }

    function appendDesktopMenu() {
        const burger = document.querySelector('.burger');
        const burgerMenu = document.querySelector('.burger-menu');
        [burger, burgerMenu, navigationLogoImg].forEach(function(element) {
            element !== null ? element.remove() : '';
        });
        navigationLogo.append(navigationLogoImg);
        navigation.append(navigationLogo);
        header.prepend(navigation);
    }

    function appendMobileMenu() {
        const navigation = hiddenMenu();
        const burgerMenu = createBurgerMenu();
        const burger = createDOMElementsForBurger();
        if (navigationLogoImg.classList.contains('navigation-logo-img-is-hide')) {
            navigationLogoImg.classList.remove('navigation-logo-img-is-hide');
        }
        addEventForBurgerMenu(burgerMenu, burger);
        burgerMenu.appendChild(navigation);
        header.prepend(burger, burgerMenu, navigationLogoImg);
    }

    function hiddenMenu() {
        navigation.classList.add('navigation-show');
        const navigationCopy = navigation.cloneNode(true);
        const navigationListItems = Array.from(navigationCopy.children);
        const listItems = navigationListItems.filter(function(item) {
            return !item.classList.contains('navigation-logo');
        });

        navigationCopy.innerHTML = '';
        // проверка для ie 11
        if (listItems[0].children.length === 0) {
            listItems.forEach(function(element, i) {
                element.append(navigationLinkItem[i]);
                navigationCopy.appendChild(element);
            });
        } else {
            listItems.forEach(function(element) {
                navigationCopy.appendChild(element);
            });
        }

        navigation.remove();
        return navigationCopy;
    }

    function createDOMElementsForBurger() {
        const burger = document.createElement('div');
        burger.classList.add('burger');
        const fragmentForBurgerLine = document.createDocumentFragment();
        let i = 3;
        while (i) {
            const bergerLine = document.createElement('span');
            bergerLine.classList.add('burger-line');
            fragmentForBurgerLine.appendChild(bergerLine);
            i = i - 1;
        }
        burger.appendChild(fragmentForBurgerLine);
        return burger;
    }

    function createBurgerMenu() {
        const burgerMenu = document.createElement('div');
        burgerMenu.classList.add('burger-menu');
        return burgerMenu;
    }

    function addEventForBurgerMenu(burgerMenu, burger) {
        const burgerLine = burger.children[1];
        burger.addEventListener('click', function() {
            burgerLine.classList.toggle('burger-line-is-translate');
            document.body.classList.toggle('document-overflow-hidden');
            burgerMenu.classList.toggle('burger-menu-is-show');
            burger.classList.toggle('burger-is-right');
            navigationLogoImg.classList.toggle('navigation-logo-img-is-hide');
        });

        burgerMenu.addEventListener('click', function(e) {
            const target = e.target;
            const isLink = target.classList.contains('navigation-link');
            if (isLink) {
                burger.click();
            }
        });
    }

    checkingDocumentSize();

});
