class Drink {
    name;
    size;
    price;
    #temperature;
    constructor(name, size, price, temperature) {
//чтобы не имел экземпляров
        if(new.target === Drink) {
            throw new Error("Нельзя создать обьект класса Drink")
        }
//если ошибка ниже код не выполнится
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }
//получить информацию про напиток
    getInfo() {
        return `Название: ${this.name}, Размер: ${this.size} мл, Цена: ${this.price} ₽, Температура: ${this.#temperature} °C`;
    }
//получить температуру напитка
    getTemperature() {
        return this.#temperature;
    }
//установить температуру напитка
    setTemperature(temperat) {
        this.#temperature = temperat;
        console.log(`Температура: ${this.name} - ${temperat}°C`);
    }
//приготовить напиток (приватный)
    #prepare() {
        console.log(`${this.name} готовиться...`);
    }
//подать напиток(serveDrink вызывает приватный #prepare)
    serveDrink() {
        this.#prepare();
// побочное действие(остывание) условие для того, чтобы напитки не остывали ниже комнт. темпер
if (this.#temperature > 20) {
    this.#temperature = this.#temperature - 5;
    }
    console.log(`${this.name} подан клиенту, температура: ${this.#temperature}°C`);
    }
}

//Кофе. доп.параметры: вид зерен и молоко
class Coffee extends Drink {
    constructor(name, size, price, temperature, beanVariety, milkVariety) {
        super(name, size, price, temperature);
        this.beanVariety = beanVariety;
        this.milkVariety = milkVariety;
    }

    getInfo() {
        return `${super.getInfo()}, вид зерна: ${this.beanVariety}, молоко: ${this.milkVariety}`;
    }
}


//Чай. доп. параметры: вид чая и сахар
class Tea extends Drink {
    constructor(name, size, price, temperature, teaVariety, sugar) {
        super(name, size, price, temperature);
        this.teaVariety = teaVariety;
        this.sugar = sugar;
    }

    getInfo() {
        return `${super.getInfo()}, вид чая: ${this.teaVariety}, сахар: ${this.sugar ? "Да" : "Нет"}`;
    }
}


//Лимонад. доп. параметры: вкус, газированый или нет
class Limonade extends Drink {
    constructor(name, size, price, temperature, test, carbonated) {
        super(name, size, price, temperature);
        this.test = test;
        this.carbonated = carbonated;
    }

    getInfo() {
        return `${super.getInfo()}, вкус: ${this.test}, газированный: ${this.carbonated ? "Да" : "Нет"}`;
    }
}

// Класс Кафе
class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
//получаем информацию о Кафе
    getInfo() {
        return`Кафе: "${this.name}", адрес: ${this.location}`;
    }
//заказываем напиток
orderDrink(drink) {
    console.log(`Заказ в "${this.name}": ${drink.name}`);
    drink.serveDrink();
    }
}


//значения
const cafe = new Cafe("Восток", "ул. Ленина, 213/2");
console.log(cafe.getInfo());

const coffee = new Coffee("Американо", "350", 120, 75, "Арабика", "Кокосовое");
const tea = new Tea("Зелёный чай", "300", 50, 85, "Зелёный", true);
const lemonade = new Limonade("Лимонад", "500", 45, 10, "Лимон", true);

console.log(coffee.getInfo());

cafe.orderDrink(coffee);
cafe.orderDrink(tea);
cafe.orderDrink(lemonade);

console.log(coffee.getInfo());
console.log("Температура кофе:", coffee.getTemperature());
coffee.setTemperature(80);