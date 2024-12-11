const lot = {
  airline: "Lot",
  iataCode: "LT",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lot.book(122, "Rudolf Czernichowski");
lot.book(123, "Maciej Rybak");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lot.book;

// Call method
book.call(eurowings, 23, "Slawomir Wiech");
console.log(eurowings);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Lech Wilczynski");

// Apply method
const flightData = [583, "Jedrzej Jarocki"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
