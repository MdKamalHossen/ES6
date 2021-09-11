class Car{
    constructor(cId, cName, cCC, cPrice, cKM){
        this.id = cId;
        this.Name = cName;
        this.CC = cCC;
        this.Price = cPrice;
        this.Kilometer = cKM;
        this.MadeIn = "Bangladesh"
    }
}
const car = new Car("toyata", 1, 1500, 1200000, 10);
// const car2 = new Car(1011, "BMW", 1200, 1200000, 12);
// console.log(car, car2);
console.log(car.id, car.Price, car.CC);