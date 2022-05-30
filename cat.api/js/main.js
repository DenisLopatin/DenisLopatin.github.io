const API_URL = 'https://api.thecatapi.com/v1/';
const FAVOURITES = new Map(JSON.parse(localStorage.getItem('favorites'))) || new Map;
let observerIsActive = true;
let requestIsExecute = false;
let page = 0;
let firstLoading = true;

const compose = async (...functions) => {
    const queue = [...functions];

    const inner = async (value) => {
        if (queue.length) {
            const fn = queue.pop();
            return inner(await fn(value));
        }
    };

    return inner();
};

const getMaxHeightOfPage = () => Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

const amountPageScrolling = () => (
    getMaxHeightOfPage() - document.documentElement.clientHeight - window.pageYOffset
);

const createCard = ({ url, id }) => (
    `<div class="card" data-id="${id}">
        <img class="image" src="${url}" alt="Cat API">
        <div class="favourite ${FAVOURITES.has(id) ? 'favourite-fill' : 'favourite-empty'}"></div>
    </div>`
);

const insertToContainer = (cardsAsString) => (
    document.querySelector('.container').insertAdjacentHTML('beforeend', cardsAsString)
);

const convertToString = (data) => data.toString().replaceAll(',', '');

const render = (data) => data.map(createCard);

const getUrlsFromData = (data) => data.reduce((acc, { url, id }) => acc.push({ url, id }) && acc, []);

const getPublicImages = async (url) => await (await fetch(url)).json();

const updateUrl = () => `${API_URL}images/search?limit=25&page=${page}&order=desc`;

// Наблюдает за страницей и подгружает данные по мере необходимости

const observer = () => {
    const value = amountPageScrolling();
    const conditions = (value <= 200 && !requestIsExecute && observerIsActive) || firstLoading;

    if (conditions) {
        page += 1;
        firstLoading = false;
        requestIsExecute = true;

        compose(insertToContainer, convertToString, render, getUrlsFromData, getPublicImages, updateUrl)
            .then(() => requestIsExecute = false);
    }
};

document.addEventListener('DOMContentLoaded', observer);
window.addEventListener('scroll', observer);

// Добавить в избранное

const addToFavourites = ({ target }) => {
    const favourite = target.classList.contains('favourite');

    if (favourite) {
        const like = target.classList.contains('favourite-fill');
        const id = target.parentElement.getAttribute('data-id');
        const src = target.previousElementSibling.getAttribute('src');

        if (like) {
            target.classList.remove('favourite-fill');
            target.classList.add('favourite-empty');

            FAVOURITES.delete(id);
        } else {
            target.classList.remove('favourite-empty');
            target.classList.add('favourite-fill');

            FAVOURITES.set(id, src);
        }

        localStorage.setItem('favorites', JSON.stringify([...FAVOURITES]));
    }
}

document.querySelector('.container')
    .addEventListener('click', addToFavourites);

// Дополнительные функции преобразования данных перед помещением в функцию отрисовки render

const convertToArrayWithObjects = (data) => data.reduce((acc, [, [id, url]]) => acc.push({ id, url }) && acc, []);
const parseDataFromLocalStorage = (data) => Object.entries(data);
const getDataFromLocalStorage = () => JSON.parse(localStorage.getItem('favorites')) || [];

// Навигация

const navigation = ({ target }) => {
    const link = target.classList.contains('link-item');

    if (link) {
        const page = target.getAttribute('data-nav');
        document.querySelector('.container').innerHTML = '';

        if (page === 'favourite') {
            observerIsActive = false;
            compose(insertToContainer, convertToString, render, convertToArrayWithObjects, parseDataFromLocalStorage, getDataFromLocalStorage)
                .catch();
        }

        if (page === 'home') {
            observerIsActive = true;
            compose(insertToContainer, convertToString, render, getUrlsFromData, getPublicImages, updateUrl)
                .catch();
        }
    }
}

document.querySelector('.header')
    .addEventListener('click', navigation);
