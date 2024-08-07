const cardTemplate = document.querySelector('.catalog-card').cloneNode(true);
const cardsRoot = document.querySelector('.catalog-cards');

const catalogSort = document.getElementById('catalog_sort');

const defaultSort = 'price-acsending';
let actualSort = '';

let actualCardsData;

const sortFunctions = {
    'price-acsending' : ((a, b) => {
        return a.price - b.price;
     }),
    'price-descending' : ((a, b) => {
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

function renderCatalog(cardsData) {
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
}

renderCatalog(catalogData);
