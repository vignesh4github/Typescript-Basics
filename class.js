var car = (function () {
    function car(speed) {
        this.speed = speed || 0;
    }
    car.prototype.accelerate = function () {
        this.speed++;
    };
    return car;
}());
//Instantiant an object from a class
var car = new Car(5);
car.accelerate();
