// while 문 실습

// 실행 예)
// 1 부터 100까지 정수의 합 : 5050
// 1 부터 100까지 짝수의 합 : 2550
// 1 부터 100까지 홀수의 합 : 2500
let num = 0;
let even = 0;
let odd = 0;

let i = 0;
while (i <= 100) {
  num += i;

  if (i % 2 === 0) {
    even += i
  } else {
    odd += i
  }
  i++
}


console.log(`정수의 합: ${num}, 짝수의 합: ${even}, 홀수의 합: ${odd}`)