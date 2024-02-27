let count = parseInt(prompt("몇명?"));

let c = [];
let sum = 0;
let avg = 0;

let scores = new Array[];

for (let i = 0; i < count; i++) {
  let input = parseInt(prompt(`${i+1}번째 점수`));
  c.push(input);
  sum += input;
}

avg = sum / count;

console.log(c);
console.log("평균",)

let d = 0;

for (let i = 0; i < count; i++) {
  d = c[i] - avg;
  console.log(d);
}
