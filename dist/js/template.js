
function fillCard(card, item) {

    card.querySelector('.catalog-card__img').src = item.image;
    card.querySelector('.catalog-card__code').innerText = item.code;
    card.querySelector('.catalog-card__name').innerText = item.description;
    card.querySelector('.price-wholesale').innerText = item.priceTrade;
    card.querySelector('.price-retail').innerText = item.priceRetail;
}