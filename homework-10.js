import {products} from './products.js';

const productTemplate = document.getElementById('product-card-template');
const productsList = document.querySelector('.products-list');

// Функция №1 — возвращает количество карточек, которое нужно ввести
function getCardsCount() {
    const userInput = prompt('Сколько карточек отобразить? От 1 до 5');

    //если нажали отмену
    if (userInput === null) {
        return null;
    }

    const count = Number(userInput);

    // Проверка: диапазон 1–5
    if (!Number.isInteger(count) || count < 1 || count > 5) {
        alert('Некорректное значение. Введите целое число от 1 до 5.');
        return getCardsCount(); // повторно спрашиваем
    }

    return count;
}

// Функция №2 —рендерит эти карточки (принимая массив аргументом)
function renderProducts(productsArray) {
    productsArray.forEach(product => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector('.card__image').src = product.image;
    productClone.querySelector('.card__category').textContent = product.category;
    productClone.querySelector('.card__name').textContent = product.name;
    productClone.querySelector('.card__description p').textContent = product.description;

    const compoundList = productClone.querySelector('.compaund__list');
    product.compound.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        compoundList.appendChild(li);
    });

    productClone.querySelector('.card__price span').textContent = product.price;
    productsList.appendChild(productClone);
});
}


const cardsCount = getCardsCount();

if (cardsCount !== null) {
    renderProducts(products.slice(0, cardsCount));
}

//Используя метод .reduce(), получить массив объектов, 
// где ключем является название продукта, а значением - его описание

    const productDescriptions = products.reduce((acc, product) => {
        acc.push({ [product.name]: product.description });
        return acc;
    }, []);

    console.log(productDescriptions);



