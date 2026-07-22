//Покраска всех карточек

const productCards = document.querySelectorAll('.card');
const changeColorAllCardsButton = document.querySelector('#change-color-for-all-cards-button');
const blueColorHash = '#ADD8E6';
const greenColorHash = '#98FB98';

changeColorAllCardsButton.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = blueColorHash)
});


//Покраска первой карточки

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card-button');

changeColorFirstCardButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = greenColorHash;
})


//Открыть страницу Google

const openGoogleButton = document.querySelector('#open-google-button'); 
openGoogleButton.addEventListener('click', openGoogle)


function openGoogle() {
    const question = confirm('Вы действительно хотите открыть Google?');
    if (question === true) {
        window.open('https://google.com');
    }else {
        return;
    }
}


//Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log-button');
outputLogButton.addEventListener('click', () => outputConsoleLog('Д/з №6'));

function outputConsoleLog(message) {
    alert(message);
    console.log(message);
}


//Вывод в консоль заголовка

const title = document.querySelector('.catalog__title');

title.addEventListener('mouseover', () => {
    console.log(title.textContent);
});


//Кнопка меняющая цвет при нажатии на нее

const btn = document.querySelector('.color-changing-btn');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
});
