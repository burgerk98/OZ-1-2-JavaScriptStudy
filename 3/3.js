let answer1 = 0;
let answer2 = 0;

let i = 1;

while (i <= 100) {
  if (i % 2 === 0) {
    answer1 += i;
  } else {
    answer2 += i;
  }
  i++;
}
console.log(answer1, answer2);