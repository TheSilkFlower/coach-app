const item0 = document.querySelector('.poster-info__item');
const item1 = document.querySelector('.poster-info__content-item1');
const item2 = document.querySelector('.poster-info__content-item2');
const poster = document.querySelector('.poster__wrapper');
const head = document.querySelector('.header__wrapper');
const button1 = document.querySelector('.poster-info__buttons-white');
const button2 = document.querySelector('.poster-info__buttons-blue');
const main = document.querySelector('.main');
const num = document.querySelector('.header__phone-number');

const mediaQuery = window.matchMedia('(max-width: 768px)');

if(mediaQuery.matches) {
    item0.innerHTML = 'Ваш успех зависит от ваших действий';
    item1.innerHTML = 'техники';
    item2.innerHTML = 'продуктивности';
    num.style.display = 'none';
    poster.style.paddingLeft = '30px';
    poster.style.paddingBottom = '20px';
    main.style.overflow = 'hidden';
    head.style.paddingLeft = '20px';
    head.style.gap = '75px';
    button1.innerHTML = 'Записаться';
    button2.innerHTML = 'Заказать звонок';
}