// GUESS 1 ///////////////////
// let guess = {
//   hair_colour: "red",
//   eye_colour: "blue",
//   hat: false,
//   glasses: true,
//   firstName: "Joseph",
// };

// const guessWho = function () {
//   return `Guess who is ${guess.firstName}`;
// };

// const finalAnswer = guessWho();
// console.log(finalAnswer);
// Prediction: "Guess who is Joseph"

// GUESS 2 ///////////////////

// let firstName = "Donna";

// const guessWho = function () {
//   const glasses = false;
//   let firstName = "Liz";
//   return `Guess Who is ${firstName}.`;
// };

// const guess1 = guessWho();
// console.log("guess1: ", guess1);
// Prediction: "Guess who is Liz";

// const guess2 = `Guess Who is ${firstName}`;
// console.log("guess2: ", guess2);
// Prediction: "Guess who is Donna"

// // GUESS 3 ///////////////////

// const guess = {
//   hair_colour: "black",
//   eye_colour: "brown",
//   hat: false,
//   glasses: false,
//   firstName: "Andy",
// };

// const changeHat = function () {
//   guess.hat = !guess.hat;
// };

// const changeGuess = function (newName) {
//   guess.firstName = newName;
// };

// const guessWho = function () {
//   return `Guess Who is ${guess.firstName}`;
// };

// changeHat();

// if (guess.hat) {
//   changeGuess("Chris");
// }

// const finalAnswer = guessWho();
// console.log(finalAnswer);
// Prediction: "Guess Who is Chris"

// // GUESS 4 ///////////////////

let firstName = "Gail";

if (firstName === "Gail") {
  let firstName = "Ashley";
}

const guessWho = function () {
  return `Guess Who is ${firstName}`;
};

const finalAnswer = guessWho();
console.log(finalAnswer);
// Prediction: "Guess who is Ashley"
// Answer: "Guess Who is Gail"

// // GUESS 5 ///////////////////

// const guess = {
//   hair_colour: "blonde",
//   eye_colour: "brown",
//   hat: false,
//   glasses: false,
//   firstName: "Jennifer",
// };

// const changeGuess = function () {
//   guess = {
//     hair_colour: "blonde",
//     eye_colour: "blue",
//     hat: false,
//     glasses: false,
//     firstName: "Kyle",
//   };
// };

// changeGuess();
// console.log(`Guess Who is ${guess.firstName}`);
// Prediction: "Guess who is Jennifer";
// Answer: error because constant variable was reassigned.