let num = parseInt(prompt("1-9까지의 정수 입력"));

let i = 1;

if (num < 1 || num > 9) {
  console.log("다시 넣으쇼");
} else {
  while (i <= 9) {
    console.log(`${num}*${i}=${num*i}`);
    i++
  }
}

