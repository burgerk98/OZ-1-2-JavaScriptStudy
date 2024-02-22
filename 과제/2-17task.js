// while 문 실습

// 사용자로부터 임의의 정수를 입력 받아
// 1부터 입력 받은 그 정수까지의
// 전체 합과, 짝수의 합과, 홀수의 합을
// 각각 결과값으로 출력하는 프로그램을 구현한다.

// 실행 예)
// 임의의 정수 입력 : 280
// >> 1~280까지 정수의 합 : ㅇㅇㅇ
// >> 1~280까지 짝수의 합 : ㅇㅇㅇ
// >> 1~280까지 홀수의 합 : ㅇㅇㅇ

let num = parseInt(prompt("정수를 입력하세요"));
let answer = 0;
let even = 0;
let odd = 0;

let i = 1;
while (i <= num) { 
  answer += i;
  if (i % 2 === 0) {
    even += i;
  } else {
    odd += i;
  }
  i++
}

console.log(`정수의 합: ${answer}, 짝수의 합: ${even}, 홀수의 합: ${odd}`)