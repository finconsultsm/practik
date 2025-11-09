const burgerBtn = document.querySelector('.js-burger');
const closeBtn = document.querySelector('.js-close');
const mobileMenu = document.querySelector('.js-mob-menu');


function openMenu() {
    mobileMenu.classList.add('is-open');
}
burgerBtn.addEventListener('click', openMenu);

function closeMenu() {
    mobileMenu.classList.remove('is-open');
}
closeBtn.addEventListener('click', closeMenu);

document
    .querySelectorAll('.header-mob-nav-link')
    .forEach(link => link.addEventListener('click', closeMenu));

const openModalBtn = document.querySelector('#hero-btn');
const closeModalBtn = document.querySelector('.modal-close');
const backdrop = document.querySelector('.js-modal');

function openModal() {
    backdrop.classList.add('is-open');
    document.body.classList.add('no-scroll');
}

function closeModal() {
    backdrop.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
})

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeModal();
})


