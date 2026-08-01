// Данные пользователя
const userProfile = {
    firstName: "Александр",
    lastName: "Пушкин",
    email: "alex.puskin1799@mail.ru",
    company: "RussianPoetry",
    position: "Poet",
    age: 30,
    country: "Россия",
    city: "Москва",
    relationshipStatus: "женат",
    phone: "+7 909 999 99 99"
};
console.log(userProfile);


// Данные авто
const infoCar = {
    brand: "Toyota",
    model: "Rav4",
    year: 2008,
    color: "Черный",
    transmission: "Автомат"
}

// Дополнительное свойство:владелец-авто
infoCar.owner = userProfile; 

console.log(infoCar);


// Функция проверки максимальной скорости
function checkMaxSpeed(car) {
    if ("maxSpeed" in car) return;
    car.maxSpeed = "180 км/ч";
}

checkMaxSpeed(infoCar);
console.log(infoCar.maxSpeed); // "180 км/ч"


// Функция обьект-свойства обьекта
function showPropertyValue(obj, propertyName) {
    console.log(obj[propertyName]);
}

showPropertyValue(infoCar, "brand"); // Выведет- Toyota


// Массив - название продуктов
const products = ["Колбаса", "Молоко", "Сыр", "Хлеб", "Сгущенка", "Мука"];



// Массив книг: Гарри Поттер и Человек паук
const harryPotterBooks = [
    "Гарри Поттер и философский камень",
    "Гарри Поттер и Тайная комната",
    "Гарри Поттер и узник Азкабана"
];

const spiderManBooks = [
    "Человек-паук: Начало",
    "Человек-паук: Через вселенные",
    "Человек-паук: Возвращение домой"
];

const allBooks = [...harryPotterBooks, ...spiderManBooks];

console.log(allBooks);



// Функция для задания №10
function getBooksWithIsRare(books) {
    return books.map(book => {
        const isRare = book.year > 2000; // редкая
        return { ...book, isRare };
    });
}
const books = [
    { title: "Гарри Поттер и философский камень", year: 1997 },
    { title: "Человек-паук: Начало", year: 2002 },
    { title: "Человек-паук: Возвращение домой", year: 2005 },
];

const updatedBooks = getBooksWithIsRare(books);

console.log(updatedBooks);