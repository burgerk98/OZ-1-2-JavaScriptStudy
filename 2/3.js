let name = prompt("이름을 입력하세요!");
let ko = Number(prompt("국어점수를 입력하세요!"))
let en = Number(prompt("영어점수를 입력하세요!"))
let math = Number(prompt("수학점수를 입력하세요!"))

let score = 0;
let average = 0;

score = ko + en + math;
average = score / 3;

let grade = "A";


switch (grade) {
  case "A":
    console.log("?");
    break;
  case "B":
    console.log("좋은 성적입니다.");
    break;
  case "C":
    console.log("보통입니다.");
    break;
  case "D":
    console.log("노력이 필요합니다.");
    break;
  case "E":
    console.log("좋은 성적입니다.");
    break;
  case "F":
    console.log("좋은 성적입니다.");
    break;
}


console.log(`당신의 이름은 ${name}입니다.`);
  
// if (average >= 90 && average <= 100) {
//   grade = "A";
// } else if (average >= 80 && average <= 89) {
//   grade = "B";
// } else if (average >= 70 && average <= 79) {
//   grade = "C";
// } else if (average >= 60 && average <= 69) {
//   grade = "D";
// } else {
//   grade = "F";
// }
