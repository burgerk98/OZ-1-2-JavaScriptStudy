let count = parseInt(prompt("몇개"));
// let num = 0;

// for (let i = 0; i < count; i++) {
//   num = parseInt(prompt("정수입력"));
// }

const numbers = Array.from({ length: count }, () => Number(prompt("수입력")));

const max = numbers.reduce((acc, cur) => (acc > cur ? acc : cur), numbers[0]);

console.log(max);
