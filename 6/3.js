let count = parseInt(prompt("몇개"));

let numbers = Array.from({ length: count }, () => Number(prompt("수입력.")));

let min = numbers.reduce((acc, crr) => (acc < crr ? acc : crr), numbers[0]);
console.log(min);
