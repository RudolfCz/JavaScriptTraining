"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const rudolf = new Person("Rudolf", 2002);

const maciej = new Person("Maciej", 1999);

const jack = new Person("Jack", 1985);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

console.log(rudolf.__proto__);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 1, 5, 6, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
