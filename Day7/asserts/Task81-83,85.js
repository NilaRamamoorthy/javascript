function Car(brand, model, year) {
    this.brand = brand || "Toyoto",
        this.model = model ||"Camry",
        this.year = year || 2000
    this.display = function () {
        return `This is ${this.brand} ${this.model} which is launched in ${this.year}`;

    };

    this.age = function () {
        return ` Age of ${this.brand} ${this.model} is ${new Date().getFullYear() - this.year}`

    }
    this.updateyear = function (newyear) {
        this.year = newyear
    }
}
const car1 = new Car("Ford", "Mustang", 2023);
const car2 = new Car("Toyota", "Camry", 2021);
const car3 = new Car("Tesla", "Model 3", 2022);
const car4 = new Car();

console.log((car2.display()));
console.log(car2.age());
car2.updateyear(1998);
console.log((car2.display()));
console.log(car4);


