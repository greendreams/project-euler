
// Find the sum of all the multiples of 3 or 5 for a given positive number.
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

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
