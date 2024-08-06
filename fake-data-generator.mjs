import { error } from 'console';
import fs from 'fs';

function generateFakeData(amount) {
    const cards = [];
        for (let i = 0; i < amount; i++) {
        cards.push(rndCardData());
    }

    try {
        fs.writeFileSync('./dist/js/catalog-data.js', `const catalogData = ${JSON.stringify(cards)}`);
    } catch (err) {
        console.error(err);
    }
}


const imagePool = [
    'images/man-costume-grey.webp'
    , 'images/man-costume-dark.webp'
    , 'images/man-costume-red.webp'
    , 'images/women-costume.webp'
];

function rndCode() {
    return `Арт ${Math.floor(1000000 + Math.random() * 9000000)}`;
}

const descriptionPool = [
    'Костюм \"СИРИУС-Горка\" куртка, брюки (гражданские размеры) КМФ Мультикам'
    , 'Костюм \"СИРИУС-Горка\" полукомбинезон (гражданские размеры) КМФ Мультикам'
    , 'Костюм \"СИРИУС-Горка\" куртка универсальная (гражданские размеры) КМФ Мультикам'
    , 'Костюм \"СИРИУС-Горка\" куртка демисезонная (гражданские размеры) КМФ Мультикам'
];

function rndPrice() {
    return 1000 + Math.floor(Math.random() * 141) * 100 - (Math.random() < 0.4 ? 1 : 0);
};

function formatPriceTrade(price) {
    return `Опт ${Math.floor(price * 0.9)} ₽`;
}

function formatPriceRetail(price) {
    return `Розница ${price} ₽`;
}

function rndRange(max) {
    return Math.floor(Math.random() * max + 1);
}

function rndFromPool(pool) {
    return pool[Math.floor(Math.random() * pool.length)];

}

function rndCardData() {
    const price = rndPrice();
    return {
        image: rndFromPool(imagePool),
        code: rndCode(),
        description: rndFromPool(descriptionPool),
        priceTrade: formatPriceTrade(price),
        priceRetail: formatPriceRetail(price),
        price: price,
        type: rndRange(5),
        season: rndRange(1),
        brand: rndRange(1),
        sex: rndRange(3),
        set: rndRange(6),
        textile: rndRange(5),
        insulation: rndRange(5),
        purpose: rndRange(3),
        color: rndRange(10)
    }
}

generateFakeData(28);