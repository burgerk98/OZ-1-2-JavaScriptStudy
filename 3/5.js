let num1 = parseInt(prompt("1"));
let num2 = parseInt(prompt("2"));

let answer = 0;


if (num1 > num2) {
  [num1, num2] = [num2, num1]
}

while (num1 <= num2) { 
  answer += num1;
  num1++;
}

//처음의 수가 커지기때문에
//num1을 직접 넣기보다는 새로 선언해서 사용하는것이 좋다.
console.log(answer);