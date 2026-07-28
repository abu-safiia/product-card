//Функция температуры в городе
function displayTemperature(city, temp) {
    console.log(`Сейчас в ${city} температура - ${temp} градусов по цельсию`);
}
displayTemperature('Новосибирске', 25);


//Функция сравнения скоростей
const SPEED_OF_LIGHT = 299792458;  // скорость света в м/с

function comparisonSpeed(speed) {
    if (speed > SPEED_OF_LIGHT) {
        console.log("Сверхсветовая скорость");
    } else if ( speed === SPEED_OF_LIGHT ) {
        console.log("Скорость света");
    } else {
        console.log("Субсветовая скорость");
    }
}
comparisonSpeed(300000000);
comparisonSpeed(200000000);
comparisonSpeed(299792458);


//Функция приобретения продукта
const homeAppliances = "noteBook";
const price = 500;  // цена в долларах

function purchase(budget) {
    if (budget >= price) {
        console.log(`${homeAppliances} приобретён. Спасибо за покупку!`);
    } else {
        const difference = price - budget;
        console.log(`Вам не хватает ${difference}$, пополните баланс`);
    }
}
purchase(1000);  // бюджет превышает
purchase(150);  // не хватает бюджета
