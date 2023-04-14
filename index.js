// calculator program with switch-case...
console.log("...........CALCULATOR PROGRAM..........");

const s1 = Number(prompt("Enter 1. number:"));
const operation = prompt("Enter Math Operation (+,-,*,/)");
const s2 = Number(prompt("Enter 2. number:"));
let result = 0;

switch (operation) {
  case "+":
    result = s1 + s2;
    break;

  case "-":
    result = s1 - s2;
    break;

  case "*":
    result = s1 * s2;
    break;

  case "/":
    result = s1 / s2;
    break;

  default:
    alert(" You enter wrong Math Operation");
    break;
}
console.log("Result: " + result);
