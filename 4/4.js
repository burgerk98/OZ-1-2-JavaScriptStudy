for (let i = 0; i <= 5; i++){
  let space = "";
  for (let j = i; j <= 4; j++){
    space += " ";
  }
  let stars = "";
  for (let k = 1; k <= i * 2 - 1; k++){
    stars += "*";
  }
  console.log(space + stars)
}
