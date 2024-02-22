let count = parseInt(prompt("몇개?"))
let num = []


for (let i = 0; i < count; i++){
  num[i] = parseInt(prompt("데이터"))
}

let min = num[0];

for (let i = 0; i < count; i++){
  if (min > num[i]) {
    min = num[i]
  }
}

console.log(min)