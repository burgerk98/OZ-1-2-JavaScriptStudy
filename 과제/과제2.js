// switch 문 실습

// 사용자로부터 임의의 두 수와 연산자를 입력 받아
// 해당 연산자의 처리 결과를 출력하는 프로그램을 구현한다.
// 단, switch 문을 활용하여 처리한다.

// 실행 예)
// 첫 번째 수 입력 : 3
// 두 번째 수 입력 : 17
// 연산자 입력[+ - * /] : -

// >> 3 - 17 = 14


let num1 = Number(prompt("첫 번째 수 입력"));
let num2 = Number(prompt("두 번째 수 입력"));
let op = prompt("연산자 입력");

let answer;
switch (op) {
  case "+":
    answer = num1 + num2;
    break;
  case "-":
    answer = num1 - num2;
    break;
  case "*":
    answer = num1 * num2;
    break;
  case "/":
    answer = num1 / num2;
    break;
  default:
    answer = "정확하게 입력!!"
    break;
}
console.log(answer);

