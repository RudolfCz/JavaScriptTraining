// const greet = function (greeting) {
//     return function (name) {
//       console.log(`${greeting} ${name}`);
//     };
//   };

const greet = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};

const greeterHey = greet("Hey");
greeterHey("Rudolf");
greeterHey("Wojtek");

greet("Hello")("Rudolf");
greet("Siema")("Wojtek");
