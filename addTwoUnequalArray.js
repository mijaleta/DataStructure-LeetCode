// adding two unequal arrays 
// this one is the additon of the two array 
function addUnequalArrays(arra1, array2) {
  let result = [];
  let maxLength = Math.max(arra1.length, array2.length);

  for (i = 0; i < maxLength; i++) {
    let x = arra1[i] || 0;
    let y = array2[i] || 0;
    result.push(x + y);
  }
// here the result is 
  return result;
}

let finalResult = addUnequalArrays([1, 2, 3], [4, 5]);
console.log("The final result is the followng " + finalResult);
