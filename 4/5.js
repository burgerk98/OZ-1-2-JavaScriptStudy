let memberCount;

do {
  memberCount = parseInt(prompt("입력 처리할 학생의 수 입력 (명, 1~10) :"));
} while (memberCount < 1 || memberCount > 10);

let names = [];
let tels = [];

for (let i = 0; i < memberCount; i++) {
  let input = prompt(`이름 전화번호 입력 [${i + 1}](공백 구분) :`);
  [names[i], tels[i]] = input.split(" ");
}

console.log(`학생 수: ${memberCount}`);
for (let i = 0; i < memberCount; i++) {
  console.log(`이름: ${names[i]}, 전화번호: ${tels[i]}`);
}
