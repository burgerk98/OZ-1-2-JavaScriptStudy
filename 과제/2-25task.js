// for 문 실습

// 실행 예)
/*
 *********
 *******
 *****
 ***
 *
 */

for (let i = 0; i < 5; i++) {
  let stars = "";
  for (let j = 9; j > i * 2; j--) {
    stars += "*";
  }
  console.log(stars);
}
