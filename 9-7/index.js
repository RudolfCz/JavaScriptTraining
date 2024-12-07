const question = new Map([
  ["question", "How old am I?"],
  [1, "21"],
  [2, "22"],
  [3, "23"],
  [4, "24"],
  ["correct", 2],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = 2;
console.log(answer);

console.log(question.get(question.get("correct") === answer));
