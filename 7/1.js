let count = parseInt(prompt("학생 수"));

// let a = 0;
// let b = 0;
// let c = 0;

// for (let i = 0; i < count; i++) {
//   let score = parseInt(prompt("점수"));
//   a += score;
// }

// b = a / count;

let emptyArr = Array(count).fill(null);

let i = 0;
const scores = emptyArr.map(() => {
  i += 1;
  return Number(prompt(`${i}번 학생의 점수 입력`));
});

const sum = scores.reduce((acc, score) => {
  let sum = acc + score;
  return sum;
}, 0);

const avg = sum / count;

console.log(sum, avg.toFixed(1));

scores.forEach((score) => {
  console.log(`${score}: ${(avg - score).toFixed(1)}`);
});
