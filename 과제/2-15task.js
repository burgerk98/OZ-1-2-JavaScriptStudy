// while 문 실습

// 반복문(while) 실습

// 1 * 2 * 3 * 4 * ... * 9 * 10 의 연산 처리 결과를 출력하는 프로그램을 구현한다.

// 실행 예)
// 연산 결과 : ㅇㅇ

let answer = 1;
let i = 1;
while (i <= 10) { 
  answer *= i
  i++
}

console.log(`연산 결과: ${ answer }`)