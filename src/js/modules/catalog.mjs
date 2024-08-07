import { catalogData } from "./catalog-data.mjs";
import { showModal } from "./modal.mjs";
import { fillCard } from "./template.mjs";

const cardTemplate = document.querySelector('.catalog-card').cloneNode(true);
const cardsRoot = document.querySelector('.catalog-cards');
const catalogSort = document.getElementById('catalog_sort');
const defaultSort = 'price-acsending';

let actualSort = '';
let actualCardsData;

const sortFunctions = {
    'price-acsending': ((a, b) => {
        return a.price - b.price;
    }),
    'price-descending': ((a, b) => {
        return b.price - a.price;
    })
}

catalogSort.onchange = () => {
    actualSort = catalogSort.value;
    renderCatalog(actualCardsData);
}

function sortCardsData(cardsData) {
    const sortFunction = sortFunctions[actualSort] || sortFunctions[defaultSort];
    cardsData.sort(sortFunction);
}

export function renderCatalog(cardsData) {
    actualCardsData = cardsData;

    sortCardsData(cardsData);

    const newCards = [];

    for (const cardData of cardsData) {

        const newCard = cardTemplate.cloneNode(true);
        fillCard(newCard, cardData);
        newCards.push(newCard);
    }

    cardsRoot.innerHTML = '';
    cardsRoot.append(...newCards);

    const modalOpenBtns = cardsRoot.querySelectorAll('[data-modal-onclick]');

    modalOpenBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            showModal(btn.dataset.modalOnclick);
        })
    })
}

renderCatalog(catalogData);
