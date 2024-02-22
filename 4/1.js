let num = [4, 7, 9, 1, 3, 2, 5, 6, 8]

let tNum = [];
let even = []
let odd = []

for (let i = 0; i < num.length; i++){

  if (num[i] % 2 === 0) {
    even.push(num[i])
  } else {
    odd.push(num[i])
  }
}

for (let i = 0; i < num.length; i++){

  if (num[i] % 3 === 0) {
    tNum.push(num[i])
  }
}


console.log(`${even}, ${odd}, ${tNum}`)