// 사용자로부터 임의의 연도를 입력받아
// 입력받은 연도가... 윤년인지 평년인지 판별하여
// 그 결과를 출력하는 프로그램을 구현한다.
// 단, 삼항 연산자를 활용하여 기능을 구현할 수 있도록 한다.

// 실행 예)
// 임의의 연도 입력 : 2000
// 2000년 -> 윤년

// ※ 2월이 28일까지 있는 해 -> 평년
//			  29일까지 있는 해 -> 윤년

// ※ 윤년의 판별 조건
//	 연도가 4의 배수이면서 100의 배수가 아니거나
//	 400의 배수이면 윤년~!!!
//   그렇지 않으면 평년~!!!




// let year = Number(prompt("연도를 입력하세요!"));

// let answer = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? "윤년" : "평년"

// console.log(`${year}년은 ${answer}입니다!`)




// let answer = ""
// if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//   answer = "윤년"
// } else {
//   answer = "평년"
// }


let year = Number(prompt("연도를 입력하세요!"));
const answer = document.createElement("h1");

let result = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? "윤년" : "평년"

answer.innerHTML = `${year}년은 ${result}입니다!`
document.body.appendChild(answer);
