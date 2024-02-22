let count = parseInt(prompt("몇개?"))
let num = []

for (let i = 0; i < count; i++){
  num[i] = Number(prompt("데이터"))
}

let max = num[0];

for (let i = 0; i < count; i++){
  if (max < num[i]) {
    max = num[i]
  }
}

console.log(max)