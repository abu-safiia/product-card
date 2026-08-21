import {products} from './products.js';

const productTemplate = document.getElementById('product-card-template');
const productsList = document.querySelector('.products-list');

// Функция №1 возвращает количество карточек
function getCardsCount() {
    const userInput = prompt('Сколько карточек отобразить? От 1 до 5');
    if (userInput === null) {
        return null;
    }

    const count = Number(userInput);
    if (!Number.isInteger(count) || count < 1 || count > 5) {
        alert('Некорректное значение. Введите целое число от 1 до 5.');
        return getCardsCount();
    }
    return count;
}
// Функция №2 рендерит карточки
function renderProducts(itemsArray) {
    itemsArray.forEach(product => {
    const clone = productTemplate.content.cloneNode(true);
    clone.querySelector('.card__image').src = `images/${product.image}.png`;
    clone.querySelector('.card__category').textContent = product.category;
    clone.querySelector('.card__name').textContent = product.name;
    clone.querySelector('.card__description p').textContent = product.description;

    const compoundList = clone.querySelector('.compaund__list');
    product.ingredients.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        compoundList.appendChild(li);
    });

    clone.querySelector('.card__price span').textContent = `${product.price.toLocaleString('ru-RU')} ${product.currency}`;
    productsList.appendChild(clone);
});
}

const cardsCount = getCardsCount();

if (cardsCount !== null) {
    renderProducts(products.slice(0, cardsCount));
}

const productDescriptions = products.reduce((acc, product) => {
    acc.push({ [product.name]: product.description });
    return acc;
}, []);

console.log(productDescriptions);



