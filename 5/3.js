// const array = new Array(5);
// for (let i = 0; i < array.length; i++) {
//   array[i] = new Array(5);
// }

// let a = 1;

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     array[i][j] = a;
//     a++;
//   }
// }

// for (let i = 0; i < array.length; i++) {
//   let line = "";
//   for (let j = 0; j < array.length; j++) {
//     line += `${array[i][j]}`;
//   }
//   console.log(line);
// }

const array = new Array(5);
for (let i = 0; i < array.length; i++) {
  array[i] = new Array(5);
}

let n;

for (let i = 0; i < array.length; i++) {
  n = i + 1;
  for (let j = 0; j < array[i].length; j++) {
    array[i][j] = n;
    n++;
  }
}

for (let i = 0; i < array.length; i++) {
  let line = "";
  for (let j = 0; j < array.length; j++) {
    line += `${array[i][j]} `;
  }
  console.log(line);
}
