let result = 0;
function multiplesOf3and5(number) {
  let values = [];
  for(let i=0; i<number; i++){
    if((i%3==0) || (i%5==0)){
      values.push(i)
    }
  }
  values.forEach(addEm)
  console.log(result)
}

function addEm(value, index, arr) {
  result = result + value;
}

multiplesOf3and5(10);
