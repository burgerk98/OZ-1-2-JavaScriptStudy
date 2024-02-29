let num = [4, 7, 9, 1, 3, 2, 5, 6, 8];

console.log(`전체배열: ${num.join(" ")}`);

let even = num.filter((number) => number % 2 === 0);
console.log(`짝수: ${even.join(" ")}`);

let three = num.filter((item) => item % 3 === 0);
console.log(`3의 배수: ${three.join(" ")}`);
