/*

1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95);

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.make} speed: ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make} speed: ${this.speed} km/h`);
};

Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.brake();

BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.accelerate();

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} speed: ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} speed: ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.accelerate();
ford.accelerate();
ford.speedUS = 50;
console.log(ford);
