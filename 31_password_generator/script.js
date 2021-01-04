const resultEl = document.getElementById("result"); // Where result will go
const lengthEl = document.getElementById("length"); // length of result
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

generateEl.addEventListener("click", () => {
  // Gets value of the length input and parses it to number
  const length = +lengthEl.value;
  // Gets true or false for which checkboxes are checked
  const result = {
    lower: lowercaseEl.checked,
    upper: uppercaseEl.checked,
    number: numbersEl.checked,
    symbol: symbolsEl.checked
  } 
  // Calls generate parrword function, passes in t/f and sets result to innerText
  resultEl.innerText = generatePassword(results, length) 
});

let func = {
  getLower() {return String.fromCharCode(Math.floor(Math.random() * 26) + 97);}

  
}


function generatePassword(results, length) {
  // check the value
  //if value is true, put in array the 
  let whatWasChecked = []

  for (item in results) {
    if (results[item]) {
      whatWasChecked.push(item)
    }
  }


//   let generatedPassword = "";
//   const typesCount = lower + upper + number + symbol;
//   const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
//     (item) => Object.values(item)[0]
//   );

//   if (typesCount === 0) {
//     return "";
//   }

//   for (let i = 0; i < length; i += typesCount) {
//     typesArr.forEach((type) => {
//       const funcName = Object.keys(type)[0];
//       generatedPassword += randomFunc[funcName]();
//     });
//   }

//   const finalPassword = generatedPassword.slice(0, length);

//   return finalPassword;
// }

// const randomFunc = {
//   lower: getLower,
//   upper: getUpper,
//   number: getNumber,
//   symbol: getSymbol,
// };

// // .fromCharCode - Returns a string created from the specified sequence of UTF-16 code units.
// // Gets a random number between 0-25. Adds it to 97 to get a random number between 97-122 which
// // corresponds to a chracter code for a-z.
// function getLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// // Similar to get lower, gets random num ber between 0 - 25. Adds it to 65 to get codes between A-Z.
// function getUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// // Similar to getLower, it gets a random number between 48 - 57 corresponding to chanacter code.
// function getNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// // Allows certain set of symbols for passwords.
// // Gets a random index for symbol string.
// function getSymbol() {
//   const symbols = "!@#$%^&*(){}[]=<>/,.";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }
