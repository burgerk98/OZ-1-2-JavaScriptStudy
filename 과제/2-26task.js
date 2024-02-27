// for 문 실습

// 실행 예)
/*
 *
 ***
 *****
 *******
 *********
 *******
 *****
 ***
 *
 */

// for (let i = 1; i <= 5; i++) {
//   let space = "";
//   for (let j = i; j <= 4; j++) {
//     space += " ";
//   }
//   let stars = "";
//   for (let k = 1; k <= i * 2 - 1; k++) {
//     stars += "*";
//   }
//   console.log(space + stars);
// }

// for (let i = 0; i <= 5; i++){
//   let space = "";
//   for (let j = i; j <= ; j++){

//   }

// }

for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 9; j > i * 2; j--) {
    stars += "*";
  }
  console.log(stars);
}
