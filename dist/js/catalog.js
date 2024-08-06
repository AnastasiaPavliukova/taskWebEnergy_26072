const cardTemplate = document.querySelector('.catalog-card').cloneNode(true);
const cardsRoot = document.querySelector('.catalog-cards');

function renderCatalog(cardsData) {
    const newCards = [];
    
    for (const cardData of cardsData ) {

        const newCard = cardTemplate.cloneNode(true);

        fillCard(newCard, cardData);
        newCards.push(newCard);
    }

    cardsRoot.innerHTML = '';
    cardsRoot.append(...newCards);
}

renderCatalog(catalogData);