import { displayHome } from './home';
import { displayMenu } from './menu';
import { displayContact } from './contact';
import './style/home.css';
import './style/menu.css';
import './style/contact.css';

displayHome();

const changePages = (() => {
    const navbar = document.querySelector('nav');
    
    const navBreak = document.querySelectorAll('.nav-break');
    navBreak.forEach((nav) => {
        nav.style.pointerEvents = 'none';
    });

    let currentPage = 'Home';

    function displayPage(e) {
        if (e.target.textContent === currentPage) return;
        else {
            currentPage = e.target.textContent;

            const content = document.querySelector('#content');
            content.innerHTML = '';

            switch (currentPage) {
                case 'Home':
                    return displayHome();
                case 'Menu':
                    return displayMenu();
                case 'Contact':
                    return displayContact();
            }
        };
    }
    
    navbar.childNodes.forEach((nav) => {
        nav.addEventListener('click', displayPage);
    });
})();