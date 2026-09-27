//родительский шаблон
class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    getCarInfo() {
        return `Бренд: ${this.brand}, Модель: ${this.model}, Цена: ${this.price}`;
    }
}
//наследуемый шаблон киа рио
class KiaRio extends Car {
    constructor(price) {
        super('Kia', 'Rio', price);
        this.fuelType = 'Бензин';
    }
}

const rio = new KiaRio(500000);
console.log(rio.getCarInfo());

//наследуемый шаблон хендай солярис
class HyundaiSolaris extends Car {
    constructor(price) {
        super('Hyundai', 'Solaris', price,);
        this.fuelType = 'Дизель';
    }
}

const solaris = new HyundaiSolaris(600000);
console.log(solaris.getCarInfo());

//наследуемый шаблон фольксваген поло
class VolkswagenPolo extends Car {
    constructor(price) {
        super('Volkswagen', 'Polo', price);
        this.fuelType = 'Бензин';
    }
}

const polo = new VolkswagenPolo(400000);
console.log(polo.getCarInfo());
