let num1 = Number( prompt("첫번째 정수를 입력하세요"));
let num2 = Number( prompt("두번째 정수를 입력하세요"));
let num3 = Number(prompt("세번째 정수를 입력하세요"));

// if (num1 > num2) {
//   temp = num1;
//   num1 = num2;
//   num2 = temp;
// } else if(num2 > num3){
//   temp = num2;
//   num2 = num3;
//   num3 = temp;
// } else if (num1 > num3) {
//   temp = num1;
//   num1 = num3;
//   num3 = temp;
// }

// console.log(num1, num2, num3);

if (num1 > num2) {
  [num1, num2] = [num2, num1];
}

if (num2 > num3) {
  [num2, num3] = [num3, num2];
}

if (num1 > num3) {
  [num1, num3] = [num3, num1];
}

console.log(num1, num2, num3);

// 왜 []로 쓰는건 else if로 안되지?

안녕

