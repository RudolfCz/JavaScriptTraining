const flight = 'LH234';
const rudolf = {
  name: 'Rudolf Czernichowski',
  passport: 2320401073,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2320401073) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, rudolf);
checkIn(flight, rudolf);
checkIn(flight, rudolf);
console.log(flight);
console.log(rudolf);

const flightNum = flight;
const passenger = rudolf;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(rudolf);
checkIn(flight, rudolf);