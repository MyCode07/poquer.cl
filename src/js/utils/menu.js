import { isMobile } from './isMobile.js';

const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const menuLinks = document.querySelectorAll('.menu li a');

if (burger) {
    burger.addEventListener('click', (е) => {
        menu.classList.add('_active');
        document.body.classList.add('_noscroll');
    })
}

if (menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', (е) => {
            burger.classList.remove('_active');
            menu.classList.remove('_active');
            document.body.classList.remove('_noscroll');
        })
    })
}


const arrow = `<button><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.30298 4.404L6.62998 7.835C6.84298 8.055 7.15698 8.055 7.36998 7.835L13.8 1.205C14.201 0.79 13.958 0 13.43 0H7.70698L3.30298 4.404Z" fill=""/>
<path opacity="0.5" d="M6.293 0H0.570004C0.0420045 0 -0.200996 0.79 0.200004 1.205L2.606 3.686L6.293 0Z" fill=""/>
</svg></button>
`;

const submenuList = document.querySelectorAll('nav ul li');
if (submenuList.length) {
    submenuList.forEach(li => {
        const submenu = li.querySelector('ul');

        if (submenu) {
            const link = submenu.previousElementSibling;
            link.insertAdjacentHTML('afterend', arrow);

            const btn = li.querySelector('button');

            if (btn && isMobile.any()) {
                btn.addEventListener('click', function () {
                    toggleMenu(li)
                })
            }
        }
    })


    function toggleMenu(item) {
        const menu = item.closest('ul');
        const menuItems = menu.querySelectorAll('li');

        if (!item.hasAttribute('data-open')) {
            const openitem = menu.querySelector('li[data-open]');
            if (openitem) {
                openitem.removeAttribute('data-open')
            }

            menuItems.forEach(item => {
                item.removeAttribute('data-open')
            })

            item.setAttribute('data-open', 'open')
        }
        else {
            item.removeAttribute('data-open')
        }
    }

}


document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('_side-fixed')) {
        targetEl.classList.remove('_active');
        document.body.classList.remove('_noscroll');
    }

    if (targetEl.classList.contains('_side-fixed__close')) {
        targetEl.closest('._side-fixed').classList.remove('_active');
        document.body.classList.remove('_noscroll');
    }
})


const h2Titles = document.querySelectorAll('h2');
if (h2Titles.length) {
    h2Titles.forEach(h2 => {
        const text = h2.textContent.toLocaleLowerCase();
        h2.id = text.replace(/\n\s+/gi, ' ')
    })
}