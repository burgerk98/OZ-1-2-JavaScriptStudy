let memeberCount;
do {
  memberCount = parseInt(prompt("학생수"));
} while (memberCount < 1 || memberCount > 10);

const inputs = Array(memberCount)
  .fill(null)
  .map(() => prompt("이름 전화번호 입력 공백구분"));

