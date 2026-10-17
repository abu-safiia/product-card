class Drink {
    name;
    size;
    price;
    #temperature;

    constructor(name, size, price, temperature) {
        if (new.target === Drink) {
            throw new Error("Нельзя создать обьект класса Drink")
        }

        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }

    getInfo() {
        return `Название: ${this.name}, Размер: ${this.size} мл, Цена: ${this.price} ₽, Температура: ${this.#temperature} °C`;
    }

    getTemperature() {
        return this.#temperature;
    }

    setTemperature(temperat) {
        this.#temperature = temperat;
        console.log(`Температура: ${this.name} - ${temperat}°C`);
    }

    #prepare() {
        console.log(`${this.name} готовиться...`);
    }

    serveDrink() {
        this.#prepare();

        if (this.#temperature > 20) {
    this.#temperature = this.#temperature - 5;
    }
    console.log(`${this.name} подан клиенту, температура: ${this.#temperature}°C`);
    }
}


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


class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getInfo() {
        return`Кафе: "${this.name}", адрес: ${this.location}`;
    }

orderDrink(drink) {
    console.log(`Заказ в "${this.name}": ${drink.name}`);
    drink.serveDrink();
    }
}



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