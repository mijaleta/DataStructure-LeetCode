function addTwoArray(arr1, arr2){
let result = [];
for(i=0; i<arr1.length; i++){
    result.push(arr1[i] + arr2[i])
}
return result
}
let  result1 = addTwoArray([1,2], [3,4]);

console.log("  The result of the arrays is " + result1);