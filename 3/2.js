// while문 실습

let result = 0;
let i = 1;

while (i <= 100) {
  if (i % 2 === 0) {
    result += i;
  }
  i++;
}

// let i = 2;
// while (i <= 100) {
//   result += i;
//   i +=2;
// }
console.log(result);