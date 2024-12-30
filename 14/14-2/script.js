"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const rudolf = new Person("Rudolf", 2002);
console.log(rudolf);

const maciej = new Person("Maciej", 1999);
console.log(maciej);

const jack = new Person("Jack", 1985);
console.log(jack);

console.log(rudolf, maciej, jack);

Person.prototype.calcAge = function() {
    console.log(2024 - this.birthYear);
}

rudolf.calcAge();
maciej.calcAge();

console.log(rudolf.__proto__);
console.log(rudolf.__proto__ === Person.prototype);