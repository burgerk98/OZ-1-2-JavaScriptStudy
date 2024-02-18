// let num;

// do {
//   num = parseInt(prompt("100 이상의 정수를 입력하세요"));
// } while (num < 100);

// console.log(num, " -> 100 이상의 정수 입력 완료!!");


// let num;
// let answer = 0;
// do {
//   num = parseInt(prompt("양의 정수를 입력하세요"));
//   console.log(num, "양의 정수  입력 : ${num}");
// } while (num = -1);

// console.log(num, "현재까지 입력된 정수의 합")



let num;
let sum = 0;
let n = 1;

do {
  num = parseInt(prompt(`양의 정수${n}입력 :`));
  sum += num;
} while (num !== -1);

console.log(num, `현재까지 입력된 정수의 합 : ${sum +1}`)