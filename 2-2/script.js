'use strict';

function logger(){
    console.log('My name is Rudolf');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

const multiJuice = fruitProcessor(3,3);
console.log(multiJuice);