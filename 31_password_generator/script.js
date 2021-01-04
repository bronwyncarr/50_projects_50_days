const resultEl = document.getElementById("result"); // Where result will go
const lengthEl = document.getElementById("length"); // length of result
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const length = +lengthEl.value;

const info = [
  {
    ifIsChecked: lowercaseEl.checked,
    functToExeute: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },
  },
  {
    ifIsChecked: uppercaseEl.checked,
    functToExeute: function () {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    },
  },
  {
    ifIsChecked: numbersEl.checked,
    functToExeute: function () {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    },
  },
  {
    ifIsChecked: symbolsEl.checked,
    functToExeute: function () {
      const symbols = "!@#$%^&*(){}[]=<>/,.";
      return symbols[Math.floor(Math.random() * symbols.length)];
    },
  },
];

function generatePassowrd(info) {
  let funcs = [];

  for (const item of info) {
    if (item.ifIsChecked) {
      funcs.push(item.functToExeute);
    }
  }

console.log(funcs)

  let result = "";

  for (let i = 0; i <= length; i++) {
    result = result.concat(funcs[Math.floor(Math.random() * funcs.length)]());
  }

  return result;
}

generateEl.addEventListener("click", () => {
  resultEl.innerText = generatePassowrd(info);
});
